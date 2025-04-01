/** Chunk was on 13323 **/
n.d(t, {
  Z: () => o
}), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(921801),
  a = n(968427);

function o(e) {
  let {
    children: t,
    title: n,
    description: o,
    webSetting: l
  } = e;
  return (0, r.jsx)(s.F, {
    setting: l,
    children: (0, r.jsxs)("div", {
      className: a.category,
      children: [(0, r.jsxs)("div", {
        className: a.categoryHeader,
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: n
        }), null != o ? (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: o
        }) : null]
      }), (0, r.jsx)("div", {
        className: a.categoryContent,
        children: t
      }), (0, r.jsx)(i.$i$, {
        className: a.categoryDivider
      })]
    })
  })
}