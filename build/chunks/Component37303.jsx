/** Chunk was on web.js **/
/** chunk id: 37303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk508312 = require("./508312.js");
require("./442837.js");
var Chunk113434 = require("./113434.js");
require("./569984.js");
var Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk87894 = require("./87894.js"),
  Chunk372113 = require("./372113.jsx"),
  Chunk206044 = require("./206044.jsx"),
  Chunk266843 = require("./266843.js"),
  Chunk556260 = require("./556260.js");

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
  } = (0, f.h)(), {
    expansionSpring: O,
    isAnimating: v,
    isExpanded: I,
    toggleExpanded: T
  } = (0, f.O)({
    initiallyExpanded: p || (0, c.iM)({
      location: n,
      quest: t
    })
  }), [S, A] = i.useState(false), C = () => A(true), N = () => A(false), R = null != y ? y : c.U0;
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
          output: [c.DJ, R]
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
        children: [(0, r.jsx)(d.Z, {
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
        }), (0, r.jsx)(u.Z, {
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