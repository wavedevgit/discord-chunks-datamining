/** Chunk was on web.js **/
/** chunk id: 85448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk659974 = require("./659974.js"),
  Chunk503434 = require("./503434.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
var _ = function(e) {
  return e[e.OUTGOING = 0] = "OUTGOING", e[e.INCOMING = 1] = "INCOMING", e
}(_ || {});

function h(e) {
  let {
    userId: t,
    size: n,
    speaking: i = false,
    latched: f = false,
    voiceDb: _ = false / 0,
    muted: h = false,
    deafen: m = false,
    src: g,
    disabled: E = false,
    ringing: b,
    ringingType: y = 0,
    avatarClassName: O,
    renderIcon: A,
    style: v,
    onClick: S,
    onContextMenu: I,
    className: T
  } = e, C = (0, s.bG)([c.A], () => null != t && c.A.isLocalMute(t)), N = (0, u.v)({
    isSpeaking: i,
    isLatched: f,
    voiceDb: _
  }), R = () => {
    let e = C ? o.O1p : m ? o.cQT : o.z0P;
    return h || m || C ? (0, r.jsx)("div", {
      className: d.II,
      children: (0, r.jsx)(e, {
        className: d.h5,
        color: o.LU0.colors.WHITE.css
      }, "status")
    }) : null
  }, w = () => (0, r.jsx)("div", {
    className: d.PQ,
    style: N
  }, "border"), P = () => h && i ? (0, r.jsxs)(r.Fragment, {
    children: [w(), R()]
  }) : h || m || C ? (0, r.jsx)(r.Fragment, {
    children: R()
  }) : (0, r.jsx)(r.Fragment, {
    children: w()
  }), D = () => {
    let e = (0, o.FT9)(n),
      t = (0, r.jsx)("img", {
        src: g,
        alt: " ",
        className: a()(d.sb, O, {
          [d.tb]: b && 0 === y
        })
      });
    if (E) return t;
    let i = l.hW.AVATAR_DEFAULT;
    return null != A ? i = n === o._3J.SIZE_32 ? l.hW.AVATAR_CALL_ICON_32 : l.hW.AVATAR_CALL_ICON : (h || m || C) && (i = l.hW.AVATAR_VOICE_CALL_80), (0, r.jsxs)("div", {
      className: d.lN,
      children: [(0, r.jsxs)(l.Ay, {
        className: d.KQ,
        width: e,
        height: e,
        mask: i,
        children: [null == A ? true : A(), t]
      }), P()]
    })
  }, x = a()(d.iE, {
    [d.vk]: null != S,
    [d.tb]: b && 0 === y,
    [d.hs]: b && 1 === y
  }, T), L = (0, o.FT9)(n), j = p({
    height: L,
    width: L
  }, v);
  return (0, r.jsx)("div", {
    style: j,
    onContextMenu: I,
    className: x,
    children: D()
  })
}
h.RingingType = _;
let m = h