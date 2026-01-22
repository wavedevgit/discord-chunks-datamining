/** Chunk was on web.js **/
/** chunk id: 889979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk554146 = require("./554146.js"),
  Chunk439372 = require("./439372.js"),
  Chunk826673 = require("./826673.js"),
  Chunk217222 = require("./217222.js"),
  Chunk15285 = require("./15285.js"),
  Chunk617617 = require("./617617.js"),
  Chunk71393 = require("./71393.js"),
  Chunk871123 = require("./871123.js"),
  Chunk916023 = require("./916023.js"),
  Chunk533406 = require("./533406.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk355097 = require("./355097.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk439372.A {
  constructor(...e) {
    super(...e), h(this, "_didAttemptToOpenModal", false), h(this, "_didConnectionOpen", false), h(this, "_didUserSettingsProtoLoad", false), h(this, "_didGamesSeenLoad", false), h(this, "actions", {
      POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen()
    }), h(this, "stores", new Map().set(l.A, () => this._handleUserSettingsProtoUpdate()).set(o.Ay, () => this._handleGamesSeenUpdate()).set(s.A, () => this._handleApexExperimentUpdate())), h(this, "_handlePostConnectionOpen", () => {
      this._didConnectionOpen = true, this._handleShowAnnouncementModal()
    }), h(this, "_handleUserSettingsProtoUpdate", () => {
      this._didUserSettingsProtoLoad = l.A.hasLoaded(_.oD.PRELOADED_USER_SETTINGS), this._handleShowAnnouncementModal()
    }), h(this, "_handleGamesSeenUpdate", () => {
      this._didGamesSeenLoad = o.Ay.isGamesSeenLoaded(), this._handleShowAnnouncementModal()
    }), h(this, "_handleApexExperimentUpdate", () => {
      this._handleShowAnnouncementModal()
    }), h(this, "_handleShowAnnouncementModal", () => {
      if (!this._didAttemptToOpenModal && this._didConnectionOpen && this._didUserSettingsProtoLoad && this._didGamesSeenLoad && (0, d.xD)({
          location: "social-layer-storefront-announcement-modal"
        }) && (this._didAttemptToOpenModal = true, !(0, a.k8)(r.M.GAME_SHOP_ANNOUNCEMENT_MODAL))) {
        if (null != c.A.getGuild((0, u.zf)())) return void(0, f.B)();
        for (let e of o.Ay.getGamesSeen(false, false))
          if (null != e.id && p.sQ.has(e.id)) return void(0, f.B)()
      }
    })
  }
}
let g = new m