/** Chunk was on 51725 **/
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
    guildEventId: i,
    onRecurrenceClick: _,
    hideScroller: p = false,
    activeRecurrenceId: b
  } = e, {
    recurrenceStartTimes: h,
    canViewMoreRecurrences: g,
    updateRecurrenceStartTimes: f
  } = (0, c.Z)(i, n, t), m = p ? "div" : l.Ttm;
  return (0, r.jsxs)("div", {
    className: u.recurrences,
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-sm/medium",
      className: u.heading,
      children: d.intl.string(d.t["D/jjoa"])
    }), (0, r.jsxs)(m, {
      className: a()(u.scroller, {
        [u.showScroller]: !p
      }),
      children: [h.map(e => {
        let n = o.default.fromTimestamp(e.getTime());
        return (0, r.jsx)(s.Z, {
          recurrenceId: n,
          originalScheduledStartTime: e,
          guildEventId: i,
          onClick: _,
          isActive: n === b
        }, n)
      }), g && (0, r.jsx)("div", {
        className: u.buttonContainer,
        children: (0, r.jsx)(l.Avr, {
          onClick: e => {
            e.stopPropagation(), f()
          },
          text: d.intl.string(d.t["8O7Hp6"]),
          size: "sm"
        })
      })]
    })]
  })
}