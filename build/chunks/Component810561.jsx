/** Chunk was on 28099 **/
/** chunk id: 810561, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk709054 = require("./709054.js"),
  Chunk7697 = require("./7697.js"),
  Chunk421032 = require("./421032.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk967984 = require("./967984.js");

function _(e) {
  let {
    guildId: n,
    recurrenceRule: t,
    guildEventId: r,
    onRecurrenceClick: _,
    hideScroller: b = false,
    activeRecurrenceId: p
  } = e, {
    recurrenceStartTimes: f,
    canViewMoreRecurrences: h,
    updateRecurrenceStartTimes: g
  } = (0, c.Z)(r, n, t), m = b ? "div" : l.Ttm;
  return (0, i.jsxs)("div", {
    className: u.recurrences,
    children: [(0, i.jsx)(l.X6q, {
      variant: "heading-sm/medium",
      className: u.heading,
      children: d.intl.string(d.t["D/jjoa"])
    }), (0, i.jsxs)(m, {
      className: a()(u.scroller, {
        [u.showScroller]: !b
      }),
      children: [f.map(e => {
        let n = o.default.fromTimestamp(e.getTime());
        return (0, i.jsx)(s.Z, {
          recurrenceId: n,
          originalScheduledStartTime: e,
          guildEventId: r,
          onClick: _,
          isActive: n === p
        }, n)
      }), h && (0, i.jsx)("div", {
        className: u.buttonContainer,
        children: (0, i.jsx)(l.Avr, {
          onClick: e => {
            e.stopPropagation(), g()
          },
          text: d.intl.string(d.t["8O7Hp6"]),
          size: "sm"
        })
      })]
    })]
  })
}