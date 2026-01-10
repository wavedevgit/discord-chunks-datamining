/** Chunk was on 76246 **/
/** chunk id: 810561, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk709054 = require("./709054.js"),
  Chunk7697 = require("./7697.js"),
  Chunk421032 = require("./421032.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk437989 = require("./437989.js");

function b(e) {
  let {
    guildId: n,
    recurrenceRule: t,
    guildEventId: i,
    onRecurrenceClick: b,
    hideScroller: f = false,
    activeRecurrenceId: p
  } = e, {
    recurrenceStartTimes: h,
    canViewMoreRecurrences: m,
    updateRecurrenceStartTimes: g
  } = (0, c.Z)(i, n, t), v = f ? "div" : l.Ttm;
  return (0, a.jsxs)("div", {
    className: u.recurrences,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-sm/medium",
      className: u.heading,
      children: d.intl.string(d.t["D/jjoa"])
    }), (0, a.jsxs)(v, {
      className: r()(u.scroller, {
        [u.showScroller]: !f
      }),
      children: [h.map(e => {
        let n = o.default.fromTimestamp(e.getTime());
        return (0, a.jsx)(s.Z, {
          recurrenceId: n,
          originalScheduledStartTime: e,
          guildEventId: i,
          onClick: b,
          isActive: n === p
        }, n)
      }), m && (0, a.jsx)("div", {
        className: u.buttonContainer,
        children: (0, a.jsx)(l.Avr, {
          onClick: e => {
            e.stopPropagation(), g()
          },
          text: d.intl.string(d.t["8O7Hpy"]),
          size: "sm"
        })
      })]
    })]
  })
}