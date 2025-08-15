/** Chunk was on 22347 **/
/** chunk id: 810561, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk709054 = require("./709054.js"),
  Chunk7697 = require("./7697.js"),
  Chunk421032 = require("./421032.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393181 = require("./393181.js");

function h(t) {
  let {
    guildId: e,
    recurrenceRule: n,
    guildEventId: i,
    onRecurrenceClick: h,
    hideScroller: g = false,
    activeRecurrenceId: m
  } = t, {
    recurrenceStartTimes: p,
    canViewMoreRecurrences: v,
    updateRecurrenceStartTimes: f
  } = (0, u.Z)(i, e, n), b = g ? "div" : s.Ttm;
  return (0, l.jsxs)("div", {
    className: d.recurrences,
    children: [(0, l.jsx)(s.X6q, {
      variant: "heading-sm/medium",
      className: d.heading,
      children: o.intl.string(o.t["D/jjoa"])
    }), (0, l.jsxs)(b, {
      className: r()(d.scroller, {
        [d.showScroller]: !g
      }),
      children: [p.map(t => {
        let e = a.default.fromTimestamp(t.getTime());
        return (0, l.jsx)(c.Z, {
          recurrenceId: e,
          originalScheduledStartTime: t,
          guildEventId: i,
          onClick: h,
          isActive: e === m
        }, e)
      }), v && (0, l.jsx)("div", {
        className: d.buttonContainer,
        children: (0, l.jsx)(s.Avr, {
          onClick: t => {
            t.stopPropagation(), f()
          },
          text: o.intl.string(o.t["8O7Hp6"]),
          size: "sm"
        })
      })]
    })]
  })
}