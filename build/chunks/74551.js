/** Chunk was on 68051 **/
n.d(t, {
  Z: () => l
});
var r = n(200651),
  i = n(481060),
  a = n(575016),
  o = n(695072);

function l(e) {
  let {
    reminder: t,
    throttledNow: n
  } = e, {
    dueInText: l,
    isOverdue: s
  } = (0, a.AT)({
    dueAt: null == t ? void 0 : t.saveData.dueAt,
    now: n,
    type: a.hQ.SHORT
  });
  if (null == t.saveData.dueAt) return null;
  let c = s ? "text-danger" : "text-normal";
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)("div", {
      className: o.icon,
      children: (0, r.jsx)(i.T39, {
        size: "xxs",
        color: "text-danger" === c ? i.TVs.colors.TEXT_DANGER : i.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsx)(i.X6q, {
      variant: "text-md/semibold",
      color: c,
      children: l
    })]
  })
}