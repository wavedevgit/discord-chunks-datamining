/** Chunk was on 98878 **/
/** chunk id: 810561, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk709054 = require("./709054.js"),
  Chunk7697 = require("./7697.js"),
  Chunk421032 = require("./421032.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393181 = require("./393181.js");

function _(e) {
  let {
    guildId: n,
    recurrenceRule: t,
    guildEventId: r,
    onRecurrenceClick: _,
    hideScroller: p = false,
    activeRecurrenceId: f
  } = e, {
    recurrenceStartTimes: m,
    canViewMoreRecurrences: v,
    updateRecurrenceStartTimes: g
  } = (0, c.Z)(r, n, t), h = p ? "div" : l.Ttm;
  return (0, i.jsxs)("div", {
    className: u.recurrences,
    children: [(0, i.jsx)(l.Heading, {
      variant: "heading-sm/medium",
      className: u.heading,
      children: d.intl.string(d.t["D/jjoa"])
    }), (0, i.jsxs)(h, {
      className: a()(u.scroller, {
        [u.showScroller]: !p
      }),
      children: [m.map(e => {
        let n = o.default.fromTimestamp(e.getTime());
        return (0, i.jsx)(s.Z, {
          recurrenceId: n,
          originalScheduledStartTime: e,
          guildEventId: r,
          onClick: _,
          isActive: n === f
        }, n)
      }), v && (0, i.jsx)("div", {
        className: u.buttonContainer,
        children: (0, i.jsx)(l.Avr, {
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