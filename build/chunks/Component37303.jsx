/** Chunk was on 37447 **/
/** chunk id: 37303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk803948 = require("./803948.js");
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

function h(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: h,
    contentPosition: g,
    sourceQuestContent: x
  } = e, [C, j] = o.useState(false), f = o.useCallback(() => j(true), []), b = o.useCallback(() => j(false), []), y = (0, i.tP)(t), {
    containerRef: v,
    size: O,
    height: E
  } = (0, m.h)(), {
    expansionSpring: N,
    isAnimating: q,
    isExpanded: S,
    toggleExpanded: T
  } = (0, m.O)({
    initiallyExpanded: h || (0, u.iM)({
      location: n,
      quest: t
    })
  }), P = null != E ? E : u.U0;
  return (0, s.jsx)(l.A, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: g,
    trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
    sourceQuestContent: x,
    children: e => (0, s.jsx)(r.animated.div, {
      style: {
        maxHeight: n === a.jn.QUESTS_EMBED ? true : N.to({
          range: [0, 1],
          output: [u.DJ, P]
        })
      },
      className: p.questsCard,
      onFocus: f,
      onMouseEnter: f,
      onBlur: b,
      onMouseLeave: b,
      children: (0, s.jsxs)("div", {
        ref: t => {
          e.current = t, v.current = t
        },
        children: [(0, s.jsx)(d.Z, {
          isQuestExpired: y,
          location: n,
          quest: t,
          size: O,
          expansionSpring: N,
          isAnimating: q,
          isExpanded: S,
          contentPosition: g,
          toggleExpanded: T,
          sourceQuestContent: x
        }), (0, s.jsx)(c.Z, {
          quest: t,
          isQuestExpired: y,
          location: n,
          size: O,
          isFocused: C,
          isExpanded: S,
          isAnimating: q,
          contentPosition: g,
          sourceQuestContent: x
        })]
      })
    })
  })
}