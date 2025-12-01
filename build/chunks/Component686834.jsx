/** Chunk was on web.js **/
/** chunk id: 686834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk666917 = require("./666917.js");
require("./442837.js");
var Chunk313481 = require("./313481.js");
require("./616022.js");
var Chunk49436 = require("./49436.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk883333 = require("./883333.jsx"),
  Chunk150588 = require("./150588.jsx"),
  Chunk21730 = require("./21730.js"),
  Chunk231919 = require("./231919.js"),
  Chunk523137 = require("./523137.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: p,
    contentPosition: h,
    sourceQuestContent: m
  } = e, g = (0, o.tP)(t), {
    containerRef: E,
    size: b,
    height: y
  } = (0, d.h)(), {
    expansionSpring: O,
    isAnimating: v,
    isExpanded: I,
    toggleExpanded: T
  } = (0, d.O)({
    initiallyExpanded: p || (0, f.iM)({
      location: n,
      quest: t
    })
  }), [S, A] = i.useState(false), C = () => A(true), N = () => A(false), R = null != y ? y : f.U0;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: h,
    trackGuildAndChannelMetadata: n === s.jn.QUESTS_EMBED,
    sourceQuestContent: m,
    children: e => (0, r.jsx)(a.animated.div, {
      style: {
        maxHeight: n === s.jn.QUESTS_EMBED ? true : O.to({
          range: [0, 1],
          output: [f.DJ, R]
        })
      },
      className: _.questsCard,
      onMouseEnter: C,
      onMouseLeave: N,
      onFocus: C,
      onBlur: N,
      children: (0, r.jsxs)("div", {
        ref: t => {
          e.current = t, E.current = t
        },
        children: [(0, r.jsx)(u.Z, {
          isQuestExpired: g,
          location: n,
          quest: t,
          size: b,
          expansionSpring: O,
          isInteracting: S,
          isAnimating: v,
          isExpanded: I,
          contentPosition: h,
          toggleExpanded: T,
          sourceQuestContent: m
        }), (0, r.jsx)(c.Z, {
          quest: t,
          isQuestExpired: g,
          location: n,
          size: b,
          isFocused: S,
          isExpanded: I,
          isAnimating: v,
          contentPosition: h,
          sourceQuestContent: m
        })]
      })
    })
  })
}