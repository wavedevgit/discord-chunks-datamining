/** Chunk was on 51354 **/
/** chunk id: 888637, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk661191 = require("./661191.js"),
  Chunk555407 = require("./555407.js"),
  Chunk349112 = require("./349112.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk150837 = require("./150837.js");

function h(t) {
  let {
    guildId: e,
    recurrenceRule: n,
    guildEventId: i,
    onRecurrenceClick: h,
    hideScroller: v = false,
    activeRecurrenceId: m
  } = t, {
    recurrenceStartTimes: g,
    canViewMoreRecurrences: f,
    updateRecurrenceStartTimes: x
  } = (0, u.A)(i, e, n), p = v ? "div" : s.HOs;
  return (0, l.jsxs)("div", {
    className: d.w5,
    children: [(0, l.jsx)(s.Heading, {
      variant: "heading-sm/medium",
      className: d.R_,
      children: o.intl.string(o.t["D/jjoa"])
    }), (0, l.jsxs)(p, {
      className: r()(d.XG, {
        [d.cq]: !v
      }),
      children: [g.map(t => {
        let e = a.default.fromTimestamp(t.getTime());
        return (0, l.jsx)(c.A, {
          recurrenceId: e,
          originalScheduledStartTime: t,
          guildEventId: i,
          onClick: h,
          isActive: e === m
        }, e)
      }), f && (0, l.jsx)("div", {
        className: d.UD,
        children: (0, l.jsx)(s.QWc, {
          onClick: t => {
            t.stopPropagation(), x()
          },
          text: o.intl.string(o.t["8O7Hpy"]),
          size: "sm"
        })
      })]
    })]
  })
}