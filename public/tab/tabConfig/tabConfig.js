var microsoftTeams;

// Set up the tab and stuff.
$(document).ready(function () {
  microsoftTeams.initialize();
  setValidity();
  
  microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
    if(document.getElementById('auth-selector').value == "user-info") {
      microsoftTeams.settings.setSettings({
        suggestedDisplayName: "Axyn Silent Auth (User Info)",
        contentUrl: createTabUrl("user-info"),
        entityId: "AxynUbboUser",
        websiteUrl: createTabUrl("user-info"),
      });
      saveEvent.notifySuccess();
    } else {
      microsoftTeams.settings.setSettings({
        suggestedDisplayName: "Axyn Silent Auth (Access Token)",
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
    return window.location.protocol + "//" + window.location.host + "/tab-auth/simple-start-v2";
  } else {
    return window.location.protocol + "//" + window.location.host + "/default";
  }
}