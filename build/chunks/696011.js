/** Chunk was on web.js **/
/** chunk id: 696011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk704215 = require("./704215.js"),
  Chunk147913 = require("./147913.js"),
  Chunk266454 = require("./266454.js"),
  Chunk633289 = require("./633289.js"),
  Chunk594190 = require("./594190.js"),
  Chunk581883 = require("./581883.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js"),
  Chunk699955 = require("./699955.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk526761 = require("./526761.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Set([Chunk582113.t9, Chunk582113.h4]);
class g extends Chunk147913.Z {
  constructor(...e) {
    super(...e), h(this, "_didAttemptToOpenModal", false), h(this, "_didConnectionOpen", false), h(this, "_didUserSettingsProtoLoad", false), h(this, "_didGamesSeenLoad", false), h(this, "actions", {
      POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen()
    }), h(this, "stores", new Map().set(l.Z, () => this._handleUserSettingsProtoUpdate()).set(s.ZP, () => this._handleGamesSeenUpdate()).set(o.Z, () => this._handleApexExperimentUpdate())), h(this, "_handlePostConnectionOpen", () => {
      this._didConnectionOpen = true, this._handleShowAnnouncementModal()
    }), h(this, "_handleUserSettingsProtoUpdate", () => {
      this._didUserSettingsProtoLoad = l.Z.hasLoaded(p.yP.PRELOADED_USER_SETTINGS), this._handleShowAnnouncementModal()
    }), h(this, "_handleGamesSeenUpdate", () => {
      this._didGamesSeenLoad = s.ZP.isGamesSeenLoaded(), this._handleShowAnnouncementModal()
    }), h(this, "_handleApexExperimentUpdate", () => {
      this._handleShowAnnouncementModal()
    }), h(this, "_handleShowAnnouncementModal", () => {
      if (!this._didAttemptToOpenModal && this._didConnectionOpen && this._didUserSettingsProtoLoad && this._didGamesSeenLoad && (0, d.n)({
          location: "social-layer-storefront-announcement-modal"
        }) && (this._didAttemptToOpenModal = true, !(0, a.zu)(r.z.GAME_SHOP_ANNOUNCEMENT_MODAL))) {
        if (null != c.Z.getGuild((0, u.ac)())) return void(0, f.b)();
        for (let e of s.ZP.getGamesSeen(false, false))
          if (null != e.id && m.has(e.id)) return void(0, f.b)()
      }
    })
  }
}
let E = new g