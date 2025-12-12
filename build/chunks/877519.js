/** Chunk was on web.js **/
/** chunk id: 877519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk15624 = require("./15624.js"),
  Chunk70956 = require("./70956.js"),
  Chunk22095 = require("./22095.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk573196 = require("./573196.js"),
  Chunk704161 = require("./704161.js"),
  Chunk787695 = require("./787695.js"),
  Chunk324805 = require("./324805.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = Chunk70956.Z.Millis.DAY,
  h = 30 * Chunk70956.Z.Millis.MINUTE,
  g = 5 * Chunk70956.Z.Millis.SECOND,
  E = 5 * Chunk70956.Z.Millis.MINUTE,
  b = 12 * Chunk70956.Z.Millis.HOUR;
class y extends Chunk147913.Z {
  _fetch(e) {
    if (!(0, f.c)({
        location: p.dr.QUESTS_MANAGER
      }) || s.Z.isFetchingCurrentQuests || ((0, a.xw)(), c.DL.getConfig({
        location: p.dr.QUESTS_MANAGER
      }).enabled && "focused" !== i.Z.getState())) return;
    let {
      enableNewRequestBehavior: t
    } = d.Z.getConfig({
      location: "QuestFetchManager"
    });
    t || (0, a.w)(l.Ok.DESKTOP_ACCOUNT_PANEL_AREA, e)
  }
  constructor(...e) {
    super(...e), _(this, "instantiatedAt", Date.now()), _(this, "initialFetchTimerId", null), _(this, "recurringFetchTimerId", null), _(this, "lastFetchAttemptedAt", 0), _(this, "lastFetchedQuestForLocaleChangeAt", 0), _(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.lastFetchAttemptedAt = Date.now()
    }), _(this, "handlePostConnectionOpen", () => {
      let e = (0, u.G)({
        location: p.dr.QUESTS_MANAGER
      });
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.lastFetchAttemptedAt > m && this._fetch("post_connect_recurring")
      }, h);
      let t = Math.floor(Math.random() * g);
      this.initialFetchTimerId = window.setTimeout(() => {
        !(Date.now() - t < s.Z.lastFetchedCurrentQuests) && (e || 0 === s.Z.lastFetchedCurrentQuests) && this._fetch("post_connect_initial")
      }, t)
    }), _(this, "handleRunningGamesChange", () => {
      this.instantiatedAt + b > Date.now() || s.Z.lastFetchedCurrentQuests + b > Date.now() || this._fetch("running_games")
    }), _(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: r
      } = e;
      !("localization" in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E || (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch("user_settings"))
    }), _(this, "handleLogout", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.lastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), _(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
let O = new y