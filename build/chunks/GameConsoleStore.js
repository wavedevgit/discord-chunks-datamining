/** Chunk was on web.js **/
/** chunk id: 258609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => T
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk797258 = require("./797258.js"),
  Chunk979651 = require("./979651.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = null,
  u = null,
  d = new Set,
  f = {},
  _ = {},
  p = new Set;

function h(e) {
  let {
    sessionId: t
  } = e;
  c = t, u = null
}

function m() {
  c = null, u = null
}

function g(e) {
  let {
    sessionType: t,
    nonce: n,
    channelId: r,
    deviceId: i,
    commandId: a
  } = e;
  u = {
    type: t,
    nonce: n,
    channelId: r,
    startedAt: Date.now(),
    deviceId: i,
    commandId: a
  }
}

function E(e) {
  let {
    platform: t
  } = e;
  p.add(t)
}

function b(e) {
  let {
    platform: t,
    devices: n
  } = e;
  p.delete(t);
  let r = f[t] = {},
    i = {};
  for (let e of n) r[e.id] = e, _[t] === e.id && (i[t] = e.id);
  _ = i
}

function y(e) {
  let {
    platform: t
  } = e;
  p.delete(t)
}

function O(e) {
  let {
    platform: t,
    deviceId: n
  } = e;
  _[t] = n
}
let v = Object.freeze({});
class I extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (_ = e.lastSelectedDeviceByPlatform), this.waitFor(o.Z, s.Z)
  }
  getUserAgnosticState() {
    return {
      lastSelectedDeviceByPlatform: _
    }
  }
  getDevicesForPlatform(e) {
    var t;
    return null != (t = f[e]) ? t : v
  }
  getLastSelectedDeviceByPlatform(e) {
    return _[e]
  }
  getDevice(e, t) {
    var n;
    return null == (n = f[e]) ? true : n[t]
  }
  getFetchingDevices(e) {
    return p.has(e)
  }
  getPendingDeviceCommands() {
    return d
  }
  getRemoteSessionId() {
    return c
  }
  getAwaitingRemoteSessionInfo() {
    return u
  }
}
l(I, "displayName", "GameConsoleStore"), l(I, "persistKey", "GameConsoleStore");
let T = new I(Chunk570140.Z, {
  REMOTE_SESSION_CONNECT: h,
  REMOTE_SESSION_DISCONNECT: m,
  WAIT_FOR_REMOTE_SESSION: g,
  GAME_CONSOLE_FETCH_DEVICES_START: E,
  GAME_CONSOLE_FETCH_DEVICES_SUCCESS: b,
  GAME_CONSOLE_FETCH_DEVICES_FAIL: y,
  GAME_CONSOLE_SELECT_DEVICE: O
})