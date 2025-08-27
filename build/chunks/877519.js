/** Chunk was on web.js **/
/** chunk id: 877519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk15624 = require("./15624.js"),
  Chunk70956 = require("./70956.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk573196 = require("./573196.js"),
  Chunk977156 = require("./977156.js"),
  Chunk46140 = require("./46140.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = Chunk70956.Z.Millis.DAY,
  h = 30 * Chunk70956.Z.Millis.MINUTE,
  m = 5 * Chunk70956.Z.Millis.SECOND,
  g = 5 * Chunk70956.Z.Millis.MINUTE,
  E = 12 * Chunk70956.Z.Millis.HOUR;
class b extends Chunk147913.Z {
  _fetch(e) {
    if ((0, d.c)({
        location: f.dr.QUESTS_MANAGER
      }) && !s.Z.isFetchingCurrentQuests)(0, o.xw)(), c.DL.getConfig({
      location: f.dr.QUESTS_MANAGER
    }).enabled && "focused" !== i.Z.getState() || (0, o.w)(l.Ok.DESKTOP_ACCOUNT_PANEL_AREA, e)
  }
  constructor(...e) {
    super(...e), _(this, "instantiatedAt", Date.now()), _(this, "initialFetchTimerId", null), _(this, "recurringFetchTimerId", null), _(this, "lastFetchAttemptedAt", 0), _(this, "lastFetchedQuestForLocaleChangeAt", 0), _(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.lastFetchAttemptedAt = Date.now()
    }), _(this, "handlePostConnectionOpen", () => {
      let e = (0, u.G)({
        location: f.dr.QUESTS_MANAGER
      });
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.lastFetchAttemptedAt > p && this._fetch("post_connect_recurring")
      }, h);
      let t = Math.floor(Math.random() * m);
      this.initialFetchTimerId = window.setTimeout(() => {
        !(Date.now() - t < s.Z.lastFetchedCurrentQuests) && (e || 0 === s.Z.lastFetchedCurrentQuests) && this._fetch("post_connect_initial")
      }, t)
    }), _(this, "handleRunningGamesChange", () => {
      this.instantiatedAt + E > Date.now() || s.Z.lastFetchedCurrentQuests + E > Date.now() || this._fetch("running_games")
    }), _(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: r
      } = e;
      !("localization" in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= g || (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch("user_settings"))
    }), _(this, "handleLogout", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.lastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), _(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
let y = new b