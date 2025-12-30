/** Chunk was on web.js **/
/** chunk id: 686834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk554916 = require("./554916.js");
require("./442837.js"), require("./616022.js");
var Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk883333 = require("./883333.jsx"),
  Chunk150588 = require("./150588.jsx"),
  Chunk21730 = require("./21730.js"),
  Chunk231919 = require("./231919.js"),
  Chunk89480 = require("./89480.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: _,
    contentPosition: m,
    sourceQuestContent: h
  } = e, g = (0, s.tP)(t), {
    containerRef: E,
    size: b,
    height: y
  } = (0, d.h)(), {
    expansionSpring: O,
    isAnimating: v,
    isExpanded: S,
    toggleExpanded: I
  } = (0, d.O)({
    initiallyExpanded: _ || (0, f.iM)({
      location: n,
      quest: t
    })
  }), [T, C] = i.useState(false), A = () => C(true), N = () => C(false), P = null != y ? y : f.U0;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: m,
    trackGuildAndChannelMetadata: n === o.jn.QUESTS_EMBED,
    sourceQuestContent: h,
    children: e => (0, r.jsx)(a.animated.div, {
      style: {
        maxHeight: n === o.jn.QUESTS_EMBED ? true : O.to({
          range: [0, 1],
          output: [f.DJ, P]
        })
      },
      className: p.questsCard,
      onMouseEnter: A,
      onMouseLeave: N,
      onFocus: A,
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
          isInteracting: T,
          isAnimating: v,
          isExpanded: S,
          contentPosition: m,
          toggleExpanded: I,
          sourceQuestContent: h
        }), (0, r.jsx)(c.Z, {
          quest: t,
          isQuestExpired: g,
          location: n,
          size: b,
          isFocused: T,
          isExpanded: S,
          isAnimating: v,
          contentPosition: m,
          sourceQuestContent: h
        })]
      })
    })
  })
}