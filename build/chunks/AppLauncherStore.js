/** Chunk was on web.js **/
/** chunk id: 541099, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk827498 = require("./827498.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
  show: false,
  entrypoint: Chunk827498._b.NONE,
  lastShownEntrypoint: Chunk827498._b.NONE,
  activeViewType: null,
  activeChannelId: null,
  closeReason: Chunk827498.ti.DISMISSED,
  initialState: true
};

function c(e) {
  let {
    entrypoint: t,
    activeViewType: n,
    initialState: r,
    activeChannelId: i
  } = e;
  return l.show = true, l.entrypoint = t, l.lastShownEntrypoint = t, l.closeReason = o.ti.DISMISSED, l.activeViewType = n, l.activeChannelId = i, l.initialState = r, true
}

function u(e) {
  let {
    closeReason: t = o.ti.DISMISSED
  } = e;
  return l.show = false, l.entrypoint = o._b.NONE, l.closeReason = t, l.initialState = true, l.activeChannelId = null, true
}
class d extends(r = Chunk442837.ZP.Store) {
  initialize() {}
  shouldShowPopup() {
    return l.show && l.entrypoint === o._b.TEXT
  }
  shouldShowModal() {
    return l.show && l.entrypoint === o._b.VOICE
  }
  entrypoint() {
    return l.entrypoint
  }
  lastShownEntrypoint() {
    return l.lastShownEntrypoint
  }
  activeViewType() {
    return l.activeViewType
  }
  activeChannelId() {
    var e;
    return null != (e = l.activeChannelId) ? e : null
  }
  closeReason() {
    return l.closeReason
  }
  initialState() {
    return l.initialState
  }
}

function f() {
  u({
    closeReason: o.ti.DISMISSED
  })
}

function p() {
  u({
    closeReason: o.ti.COMMAND
  })
}
s(d, "displayName", "AppLauncherStore");
let _ = new d(Chunk570140.Z, {
  APP_LAUNCHER_SHOW: c,
  APP_LAUNCHER_DISMISS: u,
  CONNECTION_OPEN: f,
  LOGOUT: f,
  CHANNEL_SELECT: f,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: p
})