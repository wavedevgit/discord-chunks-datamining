/** Chunk was on web.js **/
/** chunk id: 2835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js"),
  Chunk12532 = require("./12532.js"),
  Chunk564756 = require("./564756.js"),
  Chunk612776 = require("./612776.js"),
  Chunk591666 = require("./591666.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let E = {
    tension: 1200,
    friction: 70
  },
  b = {
    [Chunk612776.yD.WELCOME]: Chunk481060.tvw,
    [Chunk612776.yD.MESSAGES]: Chunk481060.kBi,
    [Chunk612776.yD.EMOJIS]: Chunk481060.EO4,
    [Chunk612776.yD.VOICE]: Chunk481060.S6n,
    [Chunk612776.yD.GUILDS]: Chunk481060.QTo,
    [Chunk612776.yD.FRIENDS]: Chunk481060.iFz,
    [Chunk612776.yD.GAMING]: Chunk481060.iWm,
    [Chunk612776.yD.QUESTS]: Chunk481060.qDn,
    [Chunk612776.yD.END]: Chunk481060.d5i
  };

function y(e) {
  let {
    isSelected: t,
    icon: n,
    color: a,
    onClick: o
  } = e, [l, u] = i.useState(false), d = (0, c.q_F)({
    from: {
      scale: 0
    },
    to: {
      scale: 1
    },
    config: E
  }), f = n;
  return (0, r.jsx)(s.animated.div, {
    style: g({}, d),
    children: (0, r.jsx)(c.P3F, {
      onClick: o,
      className: m.clickable,
      onMouseEnter: () => u(true),
      onMouseLeave: () => u(false),
      children: (0, r.jsx)(f, {
        colorClass: m.stepColor,
        color: a,
        style: {
          opacity: t || l ? 1 : .5
        }
      })
    })
  })
}

function O() {
  let e = (0, Chunk564756.Z)();
  return (0, Chunk12532.Z)(module).map(e => ({
    slide: e,
    icon: b[e]
  }))
}

function v(e) {
  let {
    activeSlide: t,
    setActiveSlide: n,
    color: a,
    className: s
  } = e, c = Number.parseInt(t.toString(), 10), f = (0, l.e7)([d.Z], () => Number.parseInt(d.Z.highestSlideSeen)), p = O();
  return i.useEffect(() => {
    c > f && (0, u.f7)("".concat(c))
  }, [c, f]), (0, r.jsx)("div", {
    className: o()(m.container, s),
    children: p.map((e, t) => {
      let {
        icon: i,
        slide: o
      } = e, s = Number.parseInt(o, 10);
      return f >= s ? (0, r.jsx)(y, {
        isSelected: c === s,
        icon: i,
        onClick: () => n(o),
        color: a
      }, "step-indicator-".concat(t)) : (0, r.jsx)("div", {
        className: m.unknownIcon,
        style: {
          borderColor: a,
          opacity: .5
        }
      }, "step-indicator-".concat(t))
    })
  })
}