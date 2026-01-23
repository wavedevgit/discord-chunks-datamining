/** Chunk was on web.js **/
/** chunk id: 646696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk183636 = require("./183636.js"),
  Chunk927813 = require("./927813.js"),
  Chunk67486 = require("./67486.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk51935 = require("./51935.js"),
  Chunk302654 = require("./302654.js"),
  Chunk677402 = require("./677402.js"),
  Chunk654487 = require("./654487.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = Chunk927813.A.Millis.DAY,
  g = 30 * Chunk927813.A.Millis.MINUTE,
  E = 5 * Chunk927813.A.Millis.SECOND,
  y = 5 * Chunk927813.A.Millis.MINUTE,
  b = 12 * Chunk927813.A.Millis.HOUR;
class O extends Chunk439372.A {
  _fetch(e) {
    if (!(0, p.s)({
        location: _.rE.QUESTS_MANAGER
      }) || l.A.isFetchingCurrentQuests || (0, s.I)() || ((0, o.N1)(), u.Bw.getConfig({
        location: _.rE.QUESTS_MANAGER
      }).enabled && "focused" !== i.A.getState())) return;
    let {
      enableNewRequestBehavior: t
    } = f.A.getConfig({
      location: "QuestFetchManager"
    });
    t || (0, o.r8)(c.yW.DESKTOP_ACCOUNT_PANEL_AREA, e)
  }
  constructor(...e) {
    super(...e), h(this, "instantiatedAt", Date.now()), h(this, "initialFetchTimerId", null), h(this, "recurringFetchTimerId", null), h(this, "lastFetchAttemptedAt", 0), h(this, "lastFetchedQuestForLocaleChangeAt", 0), h(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.lastFetchAttemptedAt = Date.now()
    }), h(this, "handlePostConnectionOpen", () => {
      let e = (0, d.u)({
        location: _.rE.QUESTS_MANAGER
      });
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.lastFetchAttemptedAt > m && this._fetch("post_connect_recurring")
      }, g);
      let t = Math.floor(Math.random() * E);
      this.initialFetchTimerId = window.setTimeout(() => {
        !(Date.now() - t < l.A.lastFetchedCurrentQuests) && (e || 0 === l.A.lastFetchedCurrentQuests) && this._fetch("post_connect_initial")
      }, t)
    }), h(this, "handleRunningGamesChange", () => {
      this.instantiatedAt + b > Date.now() || l.A.lastFetchedCurrentQuests + b > Date.now() || this._fetch("running_games")
    }), h(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: r
      } = e;
      !("localization" in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= y || (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch("user_settings"))
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