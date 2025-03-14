/** Chunk was on 76030 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(866442),
  a = n(481060),
  o = n(388032),
  l = n(506727);

function s(e) {
  let {
    locked: t,
    role: n,
    textVariant: s = "text-xs/medium"
  } = e, c = (0, a.dQu)(a.TVs.colors.INTERACTIVE_NORMAL).hex();
  return (0, r.jsx)("div", {
    className: l.roleTagContainer,
    children: (0, r.jsxs)("div", {
      className: l.roleTag,
      children: [(0, r.jsx)("div", {
        className: l.roleColor,
        style: {
          backgroundColor: (0, i.Rf)(n.color)
        }
      }), (0, r.jsx)(a.LZC, {
        size: 8,
        horizontal: !0
      }), (0, r.jsxs)(a.Text, {
        variant: s,
        color: "text-normal",
        children: [(0, r.jsx)(a.nn4, {
          children: o.NW.string(o.t.RnyseH)
        }), n.name]
      }), !0 === t && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.LZC, {
          size: 8,
          horizontal: !0
        }), (0, r.jsx)(a.mBM, {
          size: "md",
          color: c
        })]
      })]
    })
  })
}