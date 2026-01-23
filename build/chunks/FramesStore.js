/** Chunk was on web.js **/
/** chunk id: 91242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk956518 = require("./956518.js"),
  Chunk165610 = require("./165610.js"),
  Chunk5867 = require("./5867.js");

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
  m = new Map,
  g = new Map;

function E(e) {
  let {
    applicationId: t
  } = e;
  _.set(t, true)
}

function y(e) {
  let {
    applicationId: t,
    proxyTicket: n
  } = e, r = (0, s.Ay)(t);
  null == r ? _.delete(t) : (_.delete(t), p = {
    applicationId: t,
    url: r,
    connectedSince: Date.now(),
    layoutMode: o.y.FOCUSED,
    activityPanelMode: l.Gd.PANEL,
    proxyTicket: n
  })
}

function b(e) {
  let {
    applicationId: t
  } = e;
  _.delete(t)
}

function O(e) {
  let {
    applicationId: t
  } = e;
  (null == p ? true : p.applicationId) === t && (p = null)
}

function v(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  (null == p ? true : p.applicationId) === t && (p = f(u({}, p), {
    layoutMode: n
  }))
}

function A(e) {
  let {
    activityPanelMode: t
  } = e;
  null != p && (p = f(u({}, p), {
    activityPanelMode: t
  }))
}

function I(e) {
  let {
    applicationId: t,
    lockState: n,
    pictureInPictureLockState: r
  } = e;
  null == n ? m.delete(t) : m.set(t, n), null === r ? g.delete(t) : true !== r && g.set(t, r)
}

function S(e) {
  let {
    applicationId: t,
    refreshing: n
  } = e;
  n ? h.set(t, true) : h.delete(t)
}

function T(e) {
  let {
    applicationId: t,
    proxyTicket: n
  } = e;
  (null == p ? true : p.applicationId) === t && (p = f(u({}, p), {
    proxyTicket: n
  }))
}
class C extends(r = Chunk311907.Ay.Store) {
  getConnectedFrame() {
    return p
  }
  getFrameLayoutMode() {
    return null == p ? true : p.layoutMode
  }
  getActivityPanelMode() {
    var e;
    return null != (e = null == p ? true : p.activityPanelMode) ? e : l.Gd.DISCONNECTED
  }
  isFrameActive() {
    return null != p
  }
  isLaunchingFrame(e) {
    var t;
    return null != e ? null != (t = _.get(e)) && t : _.size > 0
  }
  isProxyTicketRefreshing(e) {
    return h.has(e)
  }
  getOrientationLockStateForApp(e) {
    return m.get(e)
  }
  getPipOrientationLockStateForApp(e) {
    var t;
    return null != (t = g.get(e)) ? t : this.getOrientationLockStateForApp(e)
  }
}
c(C, "displayName", "FramesStore");
let N = new C(Chunk73153.h, {
  FRAME_LAUNCH_START: E,
  FRAME_LAUNCH: y,
  FRAME_LAUNCH_FAIL: b,
  FRAME_STOP: O,
  FRAME_UPDATE_LAYOUT_MODE: v,
  FRAME_SET_PANEL_MODE: A,
  FRAME_SET_ORIENTATION_LOCK_STATE: I,
  FRAME_SET_PROXY_TICKET_REFRESHING: S,
  FRAME_UPDATE_PROXY_TICKET: T
})