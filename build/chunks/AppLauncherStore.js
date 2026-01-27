/** Chunk was on web.js **/
/** chunk id: 989837, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk500049 = require("./500049.js");

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
  entrypoint: Chunk500049.s4.NONE,
  lastShownEntrypoint: Chunk500049.s4.NONE,
  activeViewType: null,
  activeChannelId: null,
  closeReason: Chunk500049.Se.DISMISSED,
  initialState: true
};

function c(e) {
  let {
    entrypoint: t,
    activeViewType: n,
    initialState: r,
    activeChannelId: i
  } = e;
  return l.show = true, l.entrypoint = t, l.lastShownEntrypoint = t, l.closeReason = o.Se.DISMISSED, l.activeViewType = n, l.activeChannelId = i, l.initialState = r, true
}

function u(e) {
  let {
    closeReason: t = o.Se.DISMISSED
  } = e;
  return l.show = false, l.entrypoint = o.s4.NONE, l.closeReason = t, l.initialState = true, l.activeChannelId = null, true
}
class d extends(r = Chunk311907.Ay.Store) {
  initialize() {}
  shouldShowPopup() {
    return l.show && l.entrypoint === o.s4.TEXT
  }
  shouldShowModal() {
    return l.show && l.entrypoint === o.s4.VOICE
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
    closeReason: o.Se.DISMISSED
  })
}

function p() {
  u({
    closeReason: o.Se.COMMAND
  })
}
s(d, "displayName", "AppLauncherStore");
let _ = new d(Chunk73153.h, {
  APP_LAUNCHER_SHOW: c,
  APP_LAUNCHER_DISMISS: u,
  CONNECTION_OPEN: f,
  LOGOUT: f,
  CHANNEL_SELECT: f,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: p
})