/** Chunk was on 37447 **/
/** chunk id: 37303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    quest: t,
    location: n,
    initiallyExpanded: g,
    contentPosition: h,
    sourceQuestContent: x
  } = e, [j, C] = s.useState(false), f = s.useCallback(() => C(true), []), b = s.useCallback(() => C(false), []), v = (0, i.tP)(t), {
    containerRef: y,
    size: O,
    height: N
  } = (0, m.h)(), {
    expansionSpring: E,
    isAnimating: T,
    isExpanded: q,
    toggleExpanded: S
  } = (0, m.O)({
    initiallyExpanded: g || (0, c.iM)({
      location: n,
      quest: t
    })
  }), P = null != N ? N : c.U0;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: h,
    trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
    sourceQuestContent: x,
    children: e => (0, r.jsx)(o.animated.div, {
      style: {
        maxHeight: n === a.jn.QUESTS_EMBED ? true : E.to({
          range: [0, 1],
          output: [c.DJ, P]
        })
      },
      className: p.questsCard,
      onFocus: f,
      onMouseEnter: f,
      onBlur: b,
      onMouseLeave: b,
      children: (0, r.jsxs)("div", {
        ref: t => {
          e.current = t, y.current = t
        },
        children: [(0, r.jsx)(d.Z, {
          isQuestExpired: v,
          location: n,
          quest: t,
          size: O,
          expansionSpring: E,
          isAnimating: T,
          isExpanded: q,
          contentPosition: h,
          toggleExpanded: S,
          sourceQuestContent: x
        }), (0, r.jsx)(u.Z, {
          quest: t,
          isQuestExpired: v,
          location: n,
          size: O,
          isFocused: j,
          isExpanded: q,
          isAnimating: T,
          contentPosition: h,
          sourceQuestContent: x
        })]
      })
    })
  })
}