/** Chunk was on web.js **/
/** chunk id: 591472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk155268 = require("./155268.js"),
  Chunk408491 = require("./408491.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = null;

function _(e) {
  let {
    applicationId: t
  } = e, n = (0, a.ZP)(t);
  null != n && (null != f && (f = null), f = {
    applicationId: t,
    url: n,
    connectedSince: Date.now(),
    layoutMode: s.U.FOCUSED
  })
}

function p(e) {
  let {
    applicationId: t
  } = e;
  (null == f ? true : f.applicationId) === t && (f = null)
}

function h(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  (null == f ? true : f.applicationId) === t && (f = d(c({}, f), {
    layoutMode: n
  }))
}
class m extends(r = Chunk442837.ZP.Store) {
  getConnectedFrame() {
    return f
  }
  getFrameLayoutMode() {
    return null == f ? true : f.layoutMode
  }
  isFrameActive() {
    return null != f
  }
}
l(m, "displayName", "FramesStore");
let g = new m(Chunk570140.Z, {
  FRAME_LAUNCH: _,
  FRAME_STOP: p,
  FRAME_UPDATE_LAYOUT_MODE: h
})