/** Chunk was on web.js **/
/** chunk id: 879815, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk796104 = require("./796104.js"),
  Chunk719718 = require("./719718.js"),
  Chunk113493 = require("./113493.js"),
  Chunk101492 = require("./101492.js"),
  Chunk532294 = require("./532294.js"),
  Chunk420627 = require("./420627.js");

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}
let E = {
    tension: 1200,
    friction: 70
  },
  b = {
    [Chunk532294.P7.WELCOME]: Chunk397927.fAJ,
    [Chunk532294.P7.MESSAGES]: Chunk397927.oyn,
    [Chunk532294.P7.EMOJIS]: Chunk397927.nm2,
    [Chunk532294.P7.VOICE]: Chunk397927.cNw,
    [Chunk532294.P7.GUILDS]: Chunk397927.RR9,
    [Chunk532294.P7.FRIENDS]: Chunk397927.$yI,
    [Chunk532294.P7.GAMING]: Chunk397927._xR,
    [Chunk532294.P7.QUESTS]: Chunk397927.r2v,
    [Chunk532294.P7.END]: Chunk397927.MZT
  };

function y(e) {
  let {
    isSelected: t,
    icon: n,
    color: a,
    onClick: s
  } = e, [l, u] = i.useState(false), d = (0, c.zhh)({
    from: {
      scale: 0
    },
    to: {
      scale: 1
    },
    config: E
  }), f = n;
  return (0, r.jsx)(o.animated.div, {
    style: g({}, d),
    children: (0, r.jsx)(c.DUT, {
      onClick: s,
      className: h.vk,
      onMouseEnter: () => u(true),
      onMouseLeave: () => u(false),
      children: (0, r.jsx)(f, {
        colorClass: h.gM,
        color: a,
        style: {
          opacity: t || l ? 1 : .5
        }
      })
    })
  })
}

function O() {
  let e = (0, p.A)();
  return (0, f.A)(e).map(e => ({
    slide: e,
    icon: b[e]
  }))
}

function A(e) {
  let {
    activeSlide: t,
    setActiveSlide: n,
    color: a,
    className: o
  } = e, c = Number.parseInt(t.toString(), 10), f = (0, l.bG)([d.A], () => Number.parseInt(d.A.highestSlideSeen)), p = O();
  return i.useEffect(() => {
    c > f && (0, u.Rq)("".concat(c))
  }, [c, f]), (0, r.jsx)("div", {
    className: s()(h.kL, o),
    children: p.map((e, t) => {
      let {
        icon: i,
        slide: s
      } = e, o = Number.parseInt(s, 10);
      return f >= o ? (0, r.jsx)(y, {
        isSelected: c === o,
        icon: i,
        onClick: () => n(s),
        color: a
      }, "step-indicator-".concat(t)) : (0, r.jsx)("div", {
        className: h.Gc,
        style: {
          borderColor: a,
          opacity: .5
        }
      }, "step-indicator-".concat(t))
    })
  })
}