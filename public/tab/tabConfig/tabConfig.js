var microsoftTeams;

// Set up the tab and stuff.
$(document).ready(function () {
  microsoftTeams.initialize();
  setValidity();
  
  microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
    if(document.getElementById('auth-selector').value == "user-info") {
      microsoftTeams.settings.setSettings({
        suggestedDisplayName: "Axyn User Info",
        contentUrl: createTabUrl("user-info"),
        entityId: "AxynUbboUser",
        websiteUrl: createTabUrl("user-info"),
      });
      saveEvent.notifySuccess();
    } else if(document.getElementById('auth-selector').value == "silent-auth") {
      microsoftTeams.settings.setSettings({
        suggestedDisplayName: "Axyn Silent Auth",
        contentUrl: createTabUrl("silent-auth"),
        entityId: "AxynUbboUser",
        websiteUrl: createTabUrl("silent-auth"),
      });
      saveEvent.notifySuccess();
    } else {
      microsoftTeams.settings.setSettings({
        suggestedDisplayName: "Axyn Button Auth (Access Token)",
        contentUrl: createTabUrl("access-token"),
        entityId: "AxynUbboUser",
        websiteUrl: createTabUrl("access-token"),
      });
      saveEvent.notifySuccess();
    }
  });
});

function setValidity() {
  microsoftTeams.settings.setValidityState(true);
}

function createTabUrl(context) {
  if(context == "user-info") {
    return window.location.protocol + "//" + window.location.host + "/default-user-info";
  } else if (context == "access-token") {
    return window.location.protocol + "//" + window.location.host + "/tab-auth/simple";
  } else if (context == "silent-auth") {
    return window.location.protocol + "//" + window.location.host + "/tab-auth/silent";
  } else {
    return window.location.protocol + "//" + window.location.host + "/default";
  }
}
