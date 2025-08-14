/** Chunk was on 7384 **/
/** chunk id: 526156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk528084 = require("./528084.js"),
  Chunk9352 = require("./9352.js");
let d = e => {
  var t;
  let {
    tabs: n,
    settingsSection: r,
    parentSetting: d,
    panelClassName: u,
    defaultTabIndex: m,
    onTabChange: p,
    orientation: g = "horizontal"
  } = e, {
    viewableTabs: h,
    filteredTab: f
  } = (0, o.a)(n, d), b = null != m ? n[m] : null, x = null != (t = null != b ? b : f) ? t : h[0];
  return (0, i.jsxs)("div", {
    className: s()(c.tabbedSettingsContainer, {
      [c.vertical]: "vertical" === g
    }),
    children: [(0, i.jsx)(a.njP, {
      className: s()(c.tabBar, {
        [c.vertical]: "vertical" === g
      }),
      selectedItem: x.setting,
      onItemSelect: e => {
        l.Z.setSection(r, e), null == p || p(e)
      },
      orientation: g,
      type: "vertical" === g ? "side" : "top",
      look: "brand",
      children: h.map(e => (0, i.jsx)(a.njP.Item, {
        className: s()(c.tab, {
          [c.vertical]: "vertical" === g,
          [c.selected]: e.setting === x.setting
        }),
        id: e.setting,
        "aria-label": e.title,
        children: e.title
      }, e.setting))
    }), (0, i.jsx)(a.njP.Panel, {
      id: x.setting,
      "aria-labelledby": x.title,
      className: s()(c.tabBarPanel, u, {
        [c.vertical]: "vertical" === g
      }),
      children: (e => {
        let t = e.component;
        return "function" == typeof t ? (0, i.jsx)(t, {}) : t
      })(x)
    })]
  })
}