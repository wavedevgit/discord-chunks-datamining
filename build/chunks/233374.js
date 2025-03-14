/** Chunk was on 37697 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  l = n(481060),
  o = n(432804);
let s = function(e) {
  let {
    tabs: t,
    onTabSelect: n,
    selectedTab: i,
    className: s
  } = e;
  return (0, r.jsx)(l.njP, {
    type: "top-pill",
    selectedItem: i,
    onItemSelect: n,
    className: s,
    children: t.map((e, t) => {
      let {
        id: n,
        label: i,
        count: s
      } = e;
      return (0, r.jsx)(l.njP.Item, {
        id: n,
        className: a()(o.tabItem, {
          [o.firstChildSpacingFix]: 0 === t
        }),
        "aria-label": i,
        children: null != s && s > 0 ? "".concat(i, " (").concat(s, ")") : i
      }, n)
    })
  })
}