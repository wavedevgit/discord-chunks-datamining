/** Chunk was on web.js **/
/** chunk id: 78878, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js"), require("./321073.js"), require("./264879.js");
var Chunk439372 = require("./439372.js"),
  Chunk635731 = require("./635731.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = 1e3;
class s extends Chunk439372.A {
  constructor(...e) {
    super(...e), a(this, "_recentActions", new i.A(o)), a(this, "trackAction", e => {
      let {
        type: t
      } = e;
      this._recentActions.push(t)
    }), a(this, "getRecentActions", e => this._recentActions.slice(-e).reverse()), a(this, "handlePostConnectionOpen", () => {
      this._recentActions = new i.A(o)
    }), a(this, "handleTrackAction", e => {
      this.trackAction(e)
    }), a(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleTrackAction,
      LAYOUT_SET_PINNED: this.handleTrackAction,
      OVERLAY_UPDATE_OVERLAY_STATE: this.handleTrackAction,
      OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: this.handleTrackAction,
      OVERLAY_CRASHED: this.handleTrackAction,
      OVERLAY_RELOAD: this.handleTrackAction,
      OVERLAY_FOCUSED: this.handleTrackAction,
      OVERLAY_SUCCESSFULLY_SHOWN: this.handleTrackAction,
      OVERLAY_SET_ENABLED: this.handleTrackAction,
      OVERLAY_RENDER_DEBUG_MODE: this.handleTrackAction,
      OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: this.handleTrackAction,
      OVERLAY_UPDATE_OVERLAY_METHOD: this.handleTrackAction,
      OVERLAY_OOP_UI_INITIALIZED: this.handleTrackAction,
      OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: this.handleTrackAction,
      OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: this.handleTrackAction,
      OVERLAY_UI_FOCUSED_PID: this.handleTrackAction,
      OVERLAY_V3_PRE_CREATE_POPOUT: this.handleTrackAction,
      OVERLAY_V3_POST_CREATE_POPOUT: this.handleTrackAction,
      OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: this.handleTrackAction,
      OVERLAY_V3_WINDOW_CREATION_FAILURE: this.handleTrackAction,
      OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: this.handleTrackAction,
      OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: this.handleTrackAction,
      OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: this.handleTrackAction,
      OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: this.handleTrackAction,
      OVERLAY_SET_CLICK_ZONES: this.handleTrackAction,
      OVERLAY_SET_INPUT_LOCKED: this.handleTrackAction
    })
  }
}
let l = new s