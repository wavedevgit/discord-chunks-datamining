/** Chunk was on web.js **/
/** chunk id: 287954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk497805 = require("./497805.jsx"),
  Chunk511341 = require("./511341.jsx"),
  Chunk215105 = require("./215105.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    interactionType: t,
    interactionSource: n,
    themeType: r
  } = e;
  return t === c.P.REACT ? {
    position: "left",
    align: "top",
    animationPosition: "right",
    spacing: 8
  } : r === u.l.MODAL || r === u.l.MODAL_V2 || n === c.n_.ACTIVITY ? {
    position: "bottom",
    align: "center",
    animationPosition: "top",
    spacing: 6
  } : {
    position: "bottom",
    align: "left",
    animationPosition: "top",
    spacing: 6
  }
}

function E(e) {
  var {
    user: t,
    guildId: n,
    channelId: d,
    themeType: p,
    onClose: m,
    children: E
  } = e, b = h(e, ["user", "guildId", "channelId", "themeType", "onClose", "children"]);
  let {
    interactionType: y,
    interactionSource: O,
    resetInteraction: v,
    interactionSourceId: S,
    interactionPopoutTargetRef: I
  } = (0, a.Xo)(), T = [u.l.MODAL, u.l.MODAL_V2].includes(p) ? (0, o.z)(t.id, n) : true, C = O === b.sourceType && y === c.P.REACT, A = O === b.sourceType && y === c.P.REPLY, N = (C || A) && S === b.sourceId;
  return (0, r.jsx)(i.yRy, _(f({
    targetElementRef: null != I ? I : true,
    renderPopout: e => {
      let {
        setPopoutRef: i
      } = e, a = C ? s.Z : l.Z;
      return (0, r.jsx)(a, f({
        user: t,
        guildId: n,
        channelId: d,
        themeType: p,
        onClose: m,
        modalKey: T,
        setPopoutRef: i
      }, b))
    },
    onRequestClose: () => {
      v(), null == m || m()
    },
    shouldShow: N
  }, g({
    interactionType: y,
    interactionSource: O,
    themeType: p
  })), {
    children: E
  }))
}