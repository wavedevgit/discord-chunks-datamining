/** Chunk was on 22347 **/
n.d(e, {
  Z: () => g
});
var r = n(255367);
n(73800);
var l = n(120356),
  i = n.n(l),
  s = n(755721),
  o = n(481060),
  c = n(709054),
  a = n(7697),
  u = n(421032),
  d = n(388032),
  p = n(862173);

function g(t) {
  let {
    guildId: e,
    recurrenceRule: n,
    guildEventId: l,
    onRecurrenceClick: g,
    hideScroller: b = !1,
    activeRecurrenceId: f
  } = t, {
    recurrenceStartTimes: m,
    canViewMoreRecurrences: j,
    updateRecurrenceStartTimes: v
  } = (0, a.Z)(l, e, n), O = b ? "div" : o.Ttm;
  return (0, r.jsxs)("div", {
    className: p.recurrences,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-sm/medium",
      className: p.heading,
      children: d.intl.string(d.t["D/jjoa"])
    }), (0, r.jsxs)(O, {
      className: i()(p.scroller, {
        [p.showScroller]: !b
      }),
      children: [m.map(t => {
        let e = c.default.fromTimestamp(t.getTime());
        return (0, r.jsx)(u.Z, {
          recurrenceId: e,
          originalScheduledStartTime: t,
          guildEventId: l,
          onClick: g,
          isActive: e === f
        }, e)
      }), j && (0, r.jsx)(s.zx, {
        grow: !1,
        onClick: t => {
          t.stopPropagation(), v()
        },
        look: s.zx.Looks.LINK,
        size: s.zx.Sizes.MIN,
        color: s.zx.Colors.LINK,
        className: p.button,
        children: d.intl.string(d.t["8O7Hp6"])
      })]
    })]
  })
}