/** Chunk was on web.js **/
/** chunk id: 877519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk15624 = require("./15624.js"),
  Chunk70956 = require("./70956.js"),
  Chunk455971 = require("./455971.js"),
  Chunk22095 = require("./22095.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk573196 = require("./573196.js"),
  Chunk704161 = require("./704161.js"),
  Chunk787695 = require("./787695.js"),
  Chunk324805 = require("./324805.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = Chunk70956.Z.Millis.DAY,
  g = 30 * Chunk70956.Z.Millis.MINUTE,
  E = 5 * Chunk70956.Z.Millis.SECOND,
  b = 5 * Chunk70956.Z.Millis.MINUTE,
  y = 12 * Chunk70956.Z.Millis.HOUR;
class O extends Chunk147913.Z {
  _fetch(e) {
    if (!(0, p.c)({
        location: _.dr.QUESTS_MANAGER
      }) || l.Z.isFetchingCurrentQuests || (0, o.C)() || ((0, s.xw)(), u.DL.getConfig({
        location: _.dr.QUESTS_MANAGER
      }).enabled && "focused" !== i.Z.getState())) return;
    let {
      enableNewRequestBehavior: t
    } = f.Z.getConfig({
      location: "QuestFetchManager"
    });
    t || (0, s.w)(c.Ok.DESKTOP_ACCOUNT_PANEL_AREA, e)
  }
  constructor(...e) {
    super(...e), h(this, "instantiatedAt", Date.now()), h(this, "initialFetchTimerId", null), h(this, "recurringFetchTimerId", null), h(this, "lastFetchAttemptedAt", 0), h(this, "lastFetchedQuestForLocaleChangeAt", 0), h(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.lastFetchAttemptedAt = Date.now()
    }), h(this, "handlePostConnectionOpen", () => {
      let e = (0, d.G)({
        location: _.dr.QUESTS_MANAGER
      });
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.lastFetchAttemptedAt > m && this._fetch("post_connect_recurring")
      }, g);
      let t = Math.floor(Math.random() * E);
      this.initialFetchTimerId = window.setTimeout(() => {
        !(Date.now() - t < l.Z.lastFetchedCurrentQuests) && (e || 0 === l.Z.lastFetchedCurrentQuests) && this._fetch("post_connect_initial")
      }, t)
    }), h(this, "handleRunningGamesChange", () => {
      this.instantiatedAt + y > Date.now() || l.Z.lastFetchedCurrentQuests + y > Date.now() || this._fetch("running_games")
    }), h(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: r
      } = e;
      !("localization" in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= b || (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch("user_settings"))
    }), h(this, "handleLogout", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.lastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), h(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
let v = new O