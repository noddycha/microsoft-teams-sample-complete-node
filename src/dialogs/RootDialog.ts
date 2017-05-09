import * as builder from "botbuilder";
import { Strings } from "../locale/locale";
import { DialogIds } from "../utils/DialogUtils";
// let config = require("config");

// *************************** BEGINNING OF EXAMPLES ***************************
import { AuthorizeAppTrigDialog } from "./examples/AuthorizeAppTrigDialog";
import { BeginDialogExampleTrigDialog } from "./examples/BeginDialogExampleTrigDialog";
import { GetLastDialogUsedTrigDialog } from "./examples/GetLastDialogUsedTrigDialog";
import { NatLangMultiTrigDialog } from "./examples/NatLangMultiTrigDialog";
import { OAuthTestTrigDialog } from "./examples/OAuthTestTrigDialog";
import { PromptFlowGameTrigDialog } from "./examples/PromptFlowGameTrigDialog";
import { QuizQ1TrigDialog } from "./examples/QuizQ1TrigDialog";
import { QuizQ2TrigDialog } from "./examples/QuizQ2TrigDialog";
import { QuizQ3TrigDialog } from "./examples/QuizQ3TrigDialog";
import { QuizTrigDialog } from "./examples/QuizTrigDialog";
import { Start1on1TrigDialog } from "./examples/Start1on1TrigDialog";
import { TestMultiTrigDialog } from "./examples/TestMultiTrigDialog";
import { TestTrigDialog } from "./examples/TestTrigDialog";
import { ConstructorArgsTrigDialog } from "./examples/ConstructorArgsTrigDialog";
import { UpdateMsgTextSetupTrigDialog } from "./examples/UpdateMsgTextSetupTrigDialog";
import { UpdateMsgTextUpdateTrigDialog } from "./examples/UpdateMsgTextUpdateTrigDialog";
import { UpdateMsgCardSetupTrigDialog } from "./examples/UpdateMsgCardSetupTrigDialog";
import { UpdateMsgCardUpdateTrigDialog } from "./examples/UpdateMsgCardUpdateTrigDialog";
import { FetchRosterTrigDialog } from "./examples/FetchRosterTrigDialog";
import { ResetBotStateTrigDialog } from "./examples/ResetBotStateTrigDialog";
// *************************** END OF EXAMPLES *********************************

// Add imports for dialogs

// Main dialog that handles commands
export class RootDialog extends builder.IntentDialog {

    constructor(
        private bot: builder.UniversalBot,
    ) {
        super();
        this.onDefault((session) => { this._onDefault(session); });

        bot.dialog(DialogIds.RootDialogId, this);

        // Add LUIS recognizer for natural language processing
        // let luisEndpoint = config.get("luis.endpointUri");
        // if (luisEndpoint) {
        //     bot.recognizer(new builder.LuisRecognizer(luisEndpoint));
        // }
    }

    // Create the child dialogs and attach them to the bot
    public createChildDialogs(): void {
        let bot = this.bot;

        // *************************** BEGINNING OF EXAMPLES ***************************
        new AuthorizeAppTrigDialog(bot);
        new BeginDialogExampleTrigDialog(bot);
        new GetLastDialogUsedTrigDialog(bot);
        new NatLangMultiTrigDialog(bot);
        new OAuthTestTrigDialog(bot);
        new PromptFlowGameTrigDialog(bot);
        new QuizQ1TrigDialog(bot);
        new QuizQ2TrigDialog(bot);
        new QuizQ3TrigDialog(bot);
        new QuizTrigDialog(bot);
        new Start1on1TrigDialog(bot);
        new TestMultiTrigDialog(bot);
        new TestTrigDialog(bot);
        new ConstructorArgsTrigDialog(bot, "12345");
        new UpdateMsgTextSetupTrigDialog(bot);
        new UpdateMsgTextUpdateTrigDialog(bot);
        new UpdateMsgCardSetupTrigDialog(bot);
        new UpdateMsgCardUpdateTrigDialog(bot);
        new FetchRosterTrigDialog(bot);
        new ResetBotStateTrigDialog(bot);
        // *************************** END OF EXAMPLES *********************************

        // Add child dialogs

    }

    // Handle unrecognized input
    private _onDefault(session: builder.Session): void {
        session.conversationData.currentDialogName = DialogIds.RootDialogId;
        session.send(Strings.root_dialog_on_default);
    }
}