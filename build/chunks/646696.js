/** Chunk was on web.js **/
/** chunk id: 646696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk183636 = require("./183636.js"),
  Chunk927813 = require("./927813.js"),
  Chunk67486 = require("./67486.js"),
  Chunk723702 = require("./723702.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk405670 = require("./405670.js"),
  Chunk51935 = require("./51935.js"),
  Chunk302654 = require("./302654.js"),
  Chunk677402 = require("./677402.js"),
  Chunk654487 = require("./654487.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = Chunk927813.A.Millis.DAY,
  E = 30 * Chunk927813.A.Millis.MINUTE,
  y = 5 * Chunk927813.A.Millis.SECOND,
  b = 5 * Chunk927813.A.Millis.MINUTE,
  O = 12 * Chunk927813.A.Millis.HOUR;
class v extends Chunk439372.A {
  _fetch(e) {
    if (!(0, _.s)({
        location: h.rE.QUESTS_MANAGER
      }) || c.A.isFetchingCurrentQuests || (0, o.I)() || ((0, l.N1)(), (0, s.isMac)() && "focused" !== i.A.getState())) return;
    let {
      enableNewRequestBehavior: t
    } = p.A.getConfig({
      location: "QuestFetchManager"
    });
    t || (0, l.r8)(u.yW.DESKTOP_ACCOUNT_PANEL_AREA, e)
  }
  constructor(...e) {
    super(...e), m(this, "instantiatedAt", Date.now()), m(this, "initialFetchTimerId", null), m(this, "recurringFetchTimerId", null), m(this, "lastFetchAttemptedAt", 0), m(this, "lastFetchedQuestForLocaleChangeAt", 0), m(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.lastFetchAttemptedAt = Date.now()
    }), m(this, "handlePostConnectionOpen", () => {
      let e = (0, f.u)({
        location: h.rE.QUESTS_MANAGER
      });
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.lastFetchAttemptedAt > g && this._fetch("post_connect_recurring")
      }, E);
      let t = Math.floor(Math.random() * y);
      this.initialFetchTimerId = window.setTimeout(() => {
        !(Date.now() - t < c.A.lastFetchedCurrentQuests) && (e || 0 === c.A.lastFetchedCurrentQuests) && this._fetch("post_connect_initial")
      }, t)
    }), m(this, "handleRunningGamesChange", () => {
      this.instantiatedAt + O > Date.now() || c.A.lastFetchedCurrentQuests + O > Date.now() || this._fetch("running_games")
    }), m(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: r
      } = e;
      !("localization" in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= b || (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch("user_settings"))
    }), m(this, "handleLogout", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.lastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0, d.Kr.getState().clearAllVideoProgress()
    }), m(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
let A = new v