/** Chunk was on 73628 **/
n.d(t, {
  Z: () => i
});
var r = n(255367);
n(73800);
var A = n(866442),
  a = n(481060),
  l = n(388032),
  o = n(838997);

function i(e) {
  let {
    locked: t,
    role: n,
    textVariant: i = "text-xs/medium"
  } = e, s = (0, a.dQu)(a.TVs.colors.INTERACTIVE_NORMAL).hex();
  return (0, r.jsx)("div", {
    className: o.roleTagContainer,
    children: (0, r.jsxs)("div", {
      className: o.roleTag,
      children: [(0, r.jsx)("div", {
        className: o.roleColor,
        style: {
          backgroundColor: (0, A.Rf)(n.color)
        }
      }), (0, r.jsx)(a.LZC, {
        size: 8,
        horizontal: !0
      }), (0, r.jsxs)(a.Text, {
        variant: i,
        color: "text-normal",
        children: [(0, r.jsx)(a.nn4, {
          children: l.intl.string(l.t.RnyseH)
        }), n.name]
      }), !0 === t && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.LZC, {
          size: 8,
          horizontal: !0
        }), (0, r.jsx)(a.mBM, {
          size: "md",
          color: s
        })]
      })]
    })
  })
}