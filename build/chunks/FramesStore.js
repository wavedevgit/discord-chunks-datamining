/** Chunk was on web.js **/
/** chunk id: 591472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk155268 = require("./155268.js"),
  Chunk408491 = require("./408491.js"),
  Chunk918559 = require("./918559.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = null,
  _ = new Map,
  h = new Map,
  m = new Map;

function g(e) {
  let {
    applicationId: t
  } = e;
  _.set(t, true)
}

function E(e) {
  let {
    applicationId: t,
    proxyTicket: n
  } = e, r = (0, o.ZP)(t);
  if (null == r) return void _.delete(t);
  _.delete(t), p = {
    applicationId: t,
    url: r,
    connectedSince: Date.now(),
    layoutMode: s.U.FOCUSED,
    activityPanelMode: l.Ez.PANEL,
    proxyTicket: n
  }
}

function b(e) {
  let {
    applicationId: t
  } = e;
  _.delete(t)
}

function y(e) {
  let {
    applicationId: t
  } = e;
  (null == p ? true : p.applicationId) === t && (p = null)
}

function O(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  (null == p ? true : p.applicationId) === t && (p = f(u({}, p), {
    layoutMode: n
  }))
}

function v(e) {
  let {
    activityPanelMode: t
  } = e;
  null != p && (p = f(u({}, p), {
    activityPanelMode: t
  }))
}

function S(e) {
  let {
    applicationId: t,
    lockState: n,
    pictureInPictureLockState: r
  } = e;
  null == n ? h.delete(t) : h.set(t, n), null === r ? m.delete(t) : true !== r && m.set(t, r)
}
class I extends(r = Chunk442837.ZP.Store) {
  getConnectedFrame() {
    return p
  }
  getFrameLayoutMode() {
    return null == p ? true : p.layoutMode
  }
  getActivityPanelMode() {
    var e;
    return null != (e = null == p ? true : p.activityPanelMode) ? e : l.Ez.DISCONNECTED
  }
  isFrameActive() {
    return null != p
  }
  isLaunchingFrame(e) {
    var t;
    return null != e ? null != (t = _.get(e)) && t : _.size > 0
  }
  getOrientationLockStateForApp(e) {
    return h.get(e)
  }
  getPipOrientationLockStateForApp(e) {
    var t;
    return null != (t = m.get(e)) ? t : this.getOrientationLockStateForApp(e)
  }
}
c(I, "displayName", "FramesStore");
let T = new I(Chunk570140.Z, {
  FRAME_LAUNCH_START: g,
  FRAME_LAUNCH: E,
  FRAME_LAUNCH_FAIL: b,
  FRAME_STOP: y,
  FRAME_UPDATE_LAYOUT_MODE: O,
  FRAME_SET_PANEL_MODE: v,
  FRAME_SET_ORIENTATION_LOCK_STATE: S
})