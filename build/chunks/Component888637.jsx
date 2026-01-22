/** Chunk was on 81899 **/
/** chunk id: 888637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk661191 = require("./661191.js"),
  Chunk555407 = require("./555407.js"),
  Chunk349112 = require("./349112.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk150837 = require("./150837.js");

function f(e) {
  let {
    guildId: t,
    recurrenceRule: n,
    guildEventId: a,
    onRecurrenceClick: f,
    hideScroller: b = false,
    activeRecurrenceId: _
  } = e, {
    recurrenceStartTimes: m,
    canViewMoreRecurrences: h,
    updateRecurrenceStartTimes: x
  } = (0, s.A)(a, t, n), v = b ? "div" : i.HOs;
  return (0, l.jsxs)("div", {
    className: u.w5,
    children: [(0, l.jsx)(i.Heading, {
      variant: "heading-sm/medium",
      className: u.R_,
      children: o.intl.string(o.t["D/jjoa"])
    }), (0, l.jsxs)(v, {
      className: c()(u.XG, {
        [u.cq]: !b
      }),
      children: [m.map(e => {
        let t = r.default.fromTimestamp(e.getTime());
        return (0, l.jsx)(d.A, {
          recurrenceId: t,
          originalScheduledStartTime: e,
          guildEventId: a,
          onClick: f,
          isActive: t === _
        }, t)
      }), h && (0, l.jsx)("div", {
        className: u.UD,
        children: (0, l.jsx)(i.QWc, {
          onClick: e => {
            e.stopPropagation(), x()
          },
          text: o.intl.string(o.t["8O7Hpy"]),
          size: "sm"
        })
      })]
    })]
  })
}