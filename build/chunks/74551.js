/** Chunk was on 52272 **/
n.d(t, {
  Z: () => l
});
var r = n(200651),
  i = n(481060),
  o = n(575016),
  a = n(209098);

function l(e) {
  let {
    reminder: t,
    throttledNow: n
  } = e, {
    dueInText: l,
    isOverdue: s
  } = (0, o.AT)({
    dueAt: null == t ? void 0 : t.saveData.dueAt,
    now: n,
    type: o.hQ.SHORT
  });
  if (null == t.saveData.dueAt) return null;
  let c = s ? "text-danger" : "text-normal";
  return (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsx)("div", {
      className: a.icon,
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