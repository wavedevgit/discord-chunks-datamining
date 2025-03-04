/** Chunk was on 12416 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  o = n(481060),
  a = n(618158),
  s = n(110514);

function c(e) {
  let {
    errorMessage: t,
    className: n,
    errorDetailMessage: l
  } = e, c = "";
  return null != t && null != l ? c = "".concat(t, " ").concat(l) : null != t && (c = t), (0, r.jsx)(o.DY3, {
    className: i()(n, s.root),
    text: (0, r.jsxs)("div", {
      children: [t, null != l && (0, r.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "text-muted",
        style: {
          marginTop: "10px"
        },
        children: l
      })]
    }),
    position: "bottom",
    color: o.FGA.GREY,
    "aria-label": c,
    children: (0, r.jsx)(a.Z, {
      children: (0, r.jsx)(o.P4T, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        "aria-label": c,
        className: s.warningIcon
      })
    })
  })
}