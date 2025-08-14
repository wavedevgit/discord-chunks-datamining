/** Chunk was on web.js **/
/** chunk id: 37303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js");
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
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: p,
    contentPosition: h,
    sourceQuestContent: m
  } = e, [g, E] = i.useState(false), b = i.useCallback(() => E(true), []), y = i.useCallback(() => E(false), []), O = (0, a.tP)(t), {
    containerRef: v,
    size: I,
    height: T
  } = (0, f.h)(), {
    expansionSpring: S,
    isAnimating: A,
    isExpanded: N,
    toggleExpanded: C
  } = (0, f.O)({
    initiallyExpanded: p || (0, c.iM)({
      location: n,
      quest: t
    })
  }), R = null != T ? T : c.U0;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: h,
    trackGuildAndChannelMetadata: n === s.jn.QUESTS_EMBED,
    sourceQuestContent: m,
    children: e => (0, r.jsx)(o.animated.div, {
      style: {
        maxHeight: n === s.jn.QUESTS_EMBED ? true : S.to({
          range: [0, 1],
          output: [c.DJ, R]
        })
      },
      className: _.questsCard,
      onFocus: b,
      onMouseEnter: b,
      onBlur: y,
      onMouseLeave: y,
      children: (0, r.jsxs)("div", {
        ref: t => {
          e.current = t, v.current = t
        },
        children: [(0, r.jsx)(d.Z, {
          isQuestExpired: O,
          location: n,
          quest: t,
          size: I,
          expansionSpring: S,
          isAnimating: A,
          isExpanded: N,
          contentPosition: h,
          toggleExpanded: C,
          sourceQuestContent: m
        }), (0, r.jsx)(u.Z, {
          quest: t,
          isQuestExpired: O,
          location: n,
          size: I,
          isFocused: g,
          isExpanded: N,
          isAnimating: A,
          contentPosition: h,
          sourceQuestContent: m
        })]
      })
    })
  })
}