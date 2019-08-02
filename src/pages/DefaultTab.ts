import * as express from "express";
// let fs = require("fs");
// let path = require("path");
import * as config from "config";

export class DefaultTab {

    public static getRequestHandler(): express.RequestHandler {
        return async function (req: any, res: any, next: any): Promise<void> {
            try {
                let htmlPage = `<!DOCTYPE html>
                    <html>
                    <head>
                        <title> Axyn Ubbo Dashboard </title>
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <script src='https://statics.teams.microsoft.com/sdk/v1.0/js/MicrosoftTeams.min.js'></script>
                        <script src='https://code.jquery.com/jquery-1.11.3.min.js'></script>
                    </head>

                    <body>
                    <p id="currentTheme"></p>
                    <h2> Welcome to Axyn! </h2>
                    <h4> Your Ubbo User Info is: </h4>
                    <div id="contextOutput"></div>
                    <script>
                        var microsoftTeams;

                        $(document).ready(function () {
                            microsoftTeams.initialize();
                            microsoftTeams.registerOnThemeChangeHandler(function(theme) {
                                document.getElementById('currentTheme').innerHTML = theme;
                            });
                            showContext()
                        });

                        function showAllCommands() {
                            window.location = "${config.get("app.baseUri") + "/allCommands"}";
                        }

                        function getDeeplink() {
                            microsoftTeams.shareDeepLink({subEntityId: 'stuff', subEntityLabel: 'stuff2'});
                        }

                        function showContext() {
                            microsoftTeams.getContext((context) => {

                              var html = "<table>
                                <tr>
                                  <th> Parameter </th>
                                  <th> Value </th>
                                </tr>";

                                for(attr in context) {
                                  html = html + "<tr>
                                  <td>" + attr + "</td>
                                  <td> " + context[attr] + " </td>
                                  </tr>";
                                }

                                html = html + "</table>"

                                document.getElementById('contextOutput').innerHTML = html;
                            });
                        }
                    </script>
                    </body>
                    </html>`;

                res.send(htmlPage);
            } catch (e) {
                // Don't log expected errors - error is probably from there not being example dialogs
                res.send(`<html>
                    <body>
                    <p>
                        Sorry. There are no example dialogs to display.
                    </p>
                    <br>
                    <img src="/tab/error_generic.png" alt="default image" />
                    </body>
                    </html>`);
            }
        };
    }
}
