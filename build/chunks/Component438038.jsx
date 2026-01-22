/** Chunk was on web.js **/
/** chunk id: 438038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js");
require("./311907.js"), require("./859703.js");
var Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk73473 = require("./73473.js"),
  Chunk288531 = require("./288531.jsx"),
  Chunk285433 = require("./285433.jsx"),
  Chunk394900 = require("./394900.js"),
  Chunk433745 = require("./433745.js"),
  Chunk868684 = require("./868684.js");

function _(e, t, n) {
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
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: _,
    contentPosition: h,
    sourceQuestContent: m
  } = e, g = (0, o.LS)(t), {
    containerRef: E,
    size: b,
    height: y
  } = (0, d.L)(), {
    expansionSpring: O,
    isAnimating: A,
    isExpanded: v,
    toggleExpanded: S
  } = (0, d.s)({
    initiallyExpanded: _ || (0, f.RA)({
      location: n,
      quest: t
    })
  }), [I, T] = i.useState(false), C = () => T(true), N = () => T(false), R = null != y ? y : f._B;
  return (0, r.jsx)(l.R, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: h,
    trackGuildAndChannelMetadata: n === s.uF.QUESTS_EMBED,
    sourceQuestContent: m,
    children: e => (0, r.jsx)(a.animated.div, {
      style: {
        maxHeight: n === s.uF.QUESTS_EMBED ? true : O.to({
          range: [0, 1],
          output: [f.es, R]
        })
      },
      className: p.i,
      onMouseEnter: C,
      onMouseLeave: N,
      onFocus: C,
      onBlur: N,
      children: (0, r.jsxs)("div", {
        ref: t => {
          e.current = t, E.current = t
        },
        children: [(0, r.jsx)(u.A, {
          isQuestExpired: g,
          location: n,
          quest: t,
          size: b,
          expansionSpring: O,
          isInteracting: I,
          isAnimating: A,
          isExpanded: v,
          contentPosition: h,
          toggleExpanded: S,
          sourceQuestContent: m
        }), (0, r.jsx)(c.A, {
          quest: t,
          isQuestExpired: g,
          location: n,
          size: b,
          isFocused: I,
          isExpanded: v,
          isAnimating: A,
          contentPosition: h,
          sourceQuestContent: m
        })]
      })
    })
  })
}