/** Chunk was on web.js **/
/** chunk id: 584511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk538870 = require("./538870.js"),
  Chunk993103 = require("./993103.js");

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

function m(e) {
  let {
    userId: t,
    size: n,
    speaking: i = false,
    latched: f = false,
    voiceDb: _ = false / 0,
    muted: m = false,
    deafen: h = false,
    src: g,
    disabled: E = false,
    ringing: b,
    ringingType: y = 0,
    avatarClassName: O,
    renderIcon: v,
    style: S,
    onClick: I,
    onContextMenu: T,
    className: C
  } = e, A = (0, a.e7)([c.Z], () => null != t && c.Z.isLocalMute(t)), N = (0, u._)({
    isSpeaking: i,
    isLatched: f,
    voiceDb: _
  }), P = () => {
    let e = A ? s.v0G : h ? s.wE8 : s.nRN;
    return m || h || A ? (0, r.jsx)("div", {
      className: d.statusContainer,
      children: (0, r.jsx)(e, {
        className: d.status,
        color: s.TVs.colors.WHITE.css
      }, "status")
    }) : null
  }, R = () => (0, r.jsx)("div", {
    className: d.border,
    style: N
  }, "border"), w = () => m && i ? (0, r.jsxs)(r.Fragment, {
    children: [R(), P()]
  }) : m || h || A ? (0, r.jsx)(r.Fragment, {
    children: P()
  }) : (0, r.jsx)(r.Fragment, {
    children: R()
  }), D = () => {
    let e = (0, s.dcp)(n),
      t = (0, r.jsx)("img", {
        src: g,
        alt: " ",
        className: o()(d.voiceAvatar, O, {
          [d.ringingOutgoing]: b && 0 === y
        })
      });
    if (E) return t;
    let i = l.QS.AVATAR_DEFAULT;
    return null != v ? i = n === s.EFr.SIZE_32 ? l.QS.AVATAR_CALL_ICON_32 : l.QS.AVATAR_CALL_ICON : (m || h || A) && (i = l.QS.AVATAR_VOICE_CALL_80), (0, r.jsxs)("div", {
      className: d.callAvatarMaskContainer,
      children: [(0, r.jsxs)(l.ZP, {
        className: d.callAvatarMask,
        width: e,
        height: e,
        mask: i,
        children: [null == v ? true : v(), t]
      }), w()]
    })
  }, x = o()(d.wrapper, {
    [d.clickable]: null != I,
    [d.ringingOutgoing]: b && 0 === y,
    [d.ringingIncoming]: b && 1 === y
  }, C), L = (0, s.dcp)(n), j = p({
    height: L,
    width: L
  }, S);
  return (0, r.jsx)("div", {
    style: j,
    onContextMenu: T,
    className: x,
    children: D()
  })
}
m.RingingType = _;
let h = m