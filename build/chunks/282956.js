/** Chunk was on web.js **/
/** chunk id: 282956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk997509 = require("./997509.js"),
  Chunk542580 = require("./542580.js"),
  Chunk824953 = require("./824953.js");
let o = {
  init() {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_INIT"
    })
  },
  setSection(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_SET_SECTION",
      section: e,
      sectionId: t
    })
  },
  startEditingCommandPermissions(e) {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
      commandId: e
    })
  },
  stopEditingCommandPermissions(e) {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
      commandId: e
    })
  },
  startEditingIntegration(e) {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
      integrationId: e
    })
  },
  stopEditingIntegration() {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
    })
  },
  updateIntegration(e) {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
      settings: e
    })
  },
  startEditingWebhook(e) {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
      webhookId: e
    })
  },
  stopEditingWebhook() {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
    })
  },
  updateWebhook(e) {
    r.h.dispatch({
      type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
      settings: e
    })
  },
  async saveApplicationPermissions(e, t, n) {
    try {
      r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await a.Ni({
        applicationId: e,
        commandId: e,
        defaultEveryoneValue: true,
        defaultEverywhereValue: true,
        guildId: t,
        permissions: n
      }), r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (e) {
      r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: e.body
      })
    }
  },
  async saveIntegration(e, t) {
    try {
      r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await i.A.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (e) {
      r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: e.body
      })
    }
  },
  async saveWebhook(e, t) {
    try {
      r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await s.A.update(e, t.id, t), r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (e) {
      r.h.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: e.body
      })
    }
  }
}