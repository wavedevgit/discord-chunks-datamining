/** Chunk was on 92917 **/
/** chunk id: 438038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk970984 = require("./970984.js");
require("./311907.js"), require("./859703.js");
var Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk73473 = require("./73473.js"),
  Chunk288531 = require("./288531.jsx"),
  Chunk285433 = require("./285433.jsx"),
  Chunk394900 = require("./394900.js"),
  Chunk433745 = require("./433745.js"),
  Chunk868684 = require("./868684.js");

function f(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: f,
    contentPosition: g,
    sourceQuestContent: h
  } = e, _ = (0, s.LS)(t), {
    containerRef: b,
    size: A,
    height: y
  } = (0, d.L)(), {
    expansionSpring: v,
    isAnimating: x,
    isExpanded: O,
    toggleExpanded: E
  } = (0, d.s)({
    initiallyExpanded: f || (0, p.RA)({
      location: n,
      quest: t
    })
  }), [j, C] = i.useState(false), I = () => C(true), S = () => C(false), T = null != y ? y : p._B;
  return (0, r.jsx)(o.R, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: g,
    trackGuildAndChannelMetadata: n === a.uF.QUESTS_EMBED,
    sourceQuestContent: h,
    children: e => (0, r.jsx)(l.animated.div, {
      style: {
        maxHeight: n === a.uF.QUESTS_EMBED ? true : v.to({
          range: [0, 1],
          output: [p.es, T]
        })
      },
      className: m.i,
      onMouseEnter: I,
      onMouseLeave: S,
      onFocus: I,
      onBlur: S,
      children: (0, r.jsxs)("div", {
        ref: t => {
          e.current = t, b.current = t
        },
        children: [(0, r.jsx)(u.A, {
          isQuestExpired: _,
          location: n,
          quest: t,
          size: A,
          expansionSpring: v,
          isInteracting: j,
          isAnimating: x,
          isExpanded: O,
          contentPosition: g,
          toggleExpanded: E,
          sourceQuestContent: h
        }), (0, r.jsx)(c.A, {
          quest: t,
          isQuestExpired: _,
          location: n,
          size: A,
          isFocused: j,
          isExpanded: O,
          isAnimating: x,
          contentPosition: g,
          sourceQuestContent: h
        })]
      })
    })
  })
}