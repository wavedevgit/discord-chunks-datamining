/** Chunk was on 1815 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(230711),
  o = n(528084),
  c = n(171790);
let d = e => {
  var t;
  let {
    tabs: n,
    settingsSection: i,
    parentSetting: d,
    panelClassName: u,
    defaultTabIndex: m,
    onTabChange: p
  } = e, {
    viewableTabs: g,
    filteredTab: h
  } = (0, o.a)(n, d), f = null != m ? n[m] : null, b = null !== (t = null != f ? f : h) && void 0 !== t ? t : g[0];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.njP, {
      className: c.tabBar,
      selectedItem: b.setting,
      onItemSelect: e => {
        l.Z.setSection(i, e), null == p || p(e)
      },
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: g.map(e => (0, r.jsx)(a.njP.Item, {
        className: c.tab,
        id: e.setting,
        "aria-label": e.title,
        children: e.title
      }, e.setting))
    }), (0, r.jsx)(a.njP.Panel, {
      id: b.setting,
      "aria-labelledby": b.title,
      className: s()(c.tabBarPanel, u),
      children: (e => {
        let t = e.component;
        return "function" == typeof t ? (0, r.jsx)(t, {}) : t
      })(b)
    })]
  })
}