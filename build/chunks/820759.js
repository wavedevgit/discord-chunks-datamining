/** Chunk was on 13323 **/
n.d(t, {
  $0: () => d,
  E_: () => c
});
var r = n(200651),
  i = n(120356),
  s = n.n(i),
  a = n(481060),
  o = n(655464);
let l = () => (0, r.jsx)("hr", {
    className: o.sectionDivider
  }),
  c = e => {
    let {
      label: t,
      children: n,
      direction: i = "horizontal",
      className: c
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l, {}), (0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        className: o.labelSpacing,
        children: t
      }), (0, r.jsx)("div", {
        className: s()(o.container, c, {
          [o.verticalContainer]: "vertical" === i
        }),
        children: n
      })]
    })
  },
  d = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: o.section,
      children: t
    })
  }