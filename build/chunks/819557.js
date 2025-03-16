/** Chunk was on 89540 **/
o.d(n, {
  q: () => s,
  z: () => c
}), o(266796);
var r = o(200651);
o(192379);
var t = o(120356),
  i = o.n(t),
  l = o(481060),
  a = o(639001);

function c(e) {
  let {
    children: n
  } = e;
  return (0, r.jsx)("div", {
    className: a.cellGroup,
    children: (0, r.jsx)("div", {
      className: a.content,
      children: n
    })
  })
}

function s(e) {
  let {
    icon: n,
    title: o,
    description: t,
    iconClassName: c,
    color: s,
    listType: d = "icon",
    index: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a.cell,
    children: ["numbered" === d && null != u ? (0, r.jsx)(l.X6q, {
      variant: "heading-md/semibold",
      color: "text-brand",
      className: a.number,
      children: u + 1
    }) : null != n && (0, r.jsx)("div", {
      className: a.iconContainer,
      children: (0, r.jsx)(n, {
        color: null != s ? s : "currentColor",
        className: i()(a.icon, c)
      })
    }), (0, r.jsxs)("div", {
      className: a.textContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: o
      }), null != t && (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: t
      })]
    })]
  })
}