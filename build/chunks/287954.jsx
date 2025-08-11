/** Chunk was on web.js **/
/** chunk id: 287954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk510659 = require("./510659.js"),
  Chunk497805 = require("./497805.js"),
  Chunk511341 = require("./511341.js"),
  Chunk215105 = require("./215105.jsx"),
  Chunk228168 = require("./228168.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
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
  } : r === c.lY.MODAL || r === c.lY.MODAL_V2 || n === c.n_.ACTIVITY ? {
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

function g(e) {
  var {
    user: t,
    guildId: n,
    channelId: u,
    themeType: f,
    onClose: h,
    children: g
  } = e, E = p(e, ["user", "guildId", "channelId", "themeType", "onClose", "children"]);
  let {
    interactionType: b,
    interactionSource: y,
    resetInteraction: O,
    interactionSourceId: v,
    interactionPopoutTargetRef: I
  } = (0, o.Xo)(), T = [c.lY.MODAL, c.lY.MODAL_V2].includes(f) ? (0, a.z)(t.id, n) : true, S = y === E.sourceType && b === c.P.REACT, A = y === E.sourceType && b === c.P.REPLY, N = (S || A) && v === E.sourceId;
  return <i.yRy{..._(d({
    targetElementRef: null != I ? I : true,
    renderPopout: e => {
      let {
        setPopoutRef: i
      } = e, o = S ? s.Z : l.Z;
      return (0, r.jsx)(o, d({
        user: t,
        guildId: n,
        channelId: u,
        themeType: f,
        onClose: h,
        modalKey: T,
        setPopoutRef: i
      }, E))
    },
    onRequestClose: () => {
      O(), null == h || h()
    },
    shouldShow: N
  }, m({
    interactionType: b,
    interactionSource: y,
    themeType: f
  })), {
    children: g
  })} />
}