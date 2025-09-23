/** Chunk was on web.js **/
/** chunk id: 526156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk528084 = require("./528084.js"),
  Chunk90673 = require("./90673.js");
let u = e => {
  var t;
  let {
    tabs: n,
    settingsSection: i,
    parentSetting: u,
    panelClassName: d,
    defaultTabIndex: f,
    onTabChange: _,
    orientation: p = "horizontal"
  } = e, {
    viewableTabs: h,
    filteredTab: m
  } = (0, l.a)(n, u), g = null != f ? n[f] : null, E = null != (t = null != g ? g : m) ? t : h[0], b = e => {
    let t = e.component;
    return "function" == typeof t ? (0, r.jsx)(t, {}) : t
  }, y = e => {
    s.Z.setSection(i, e), null == _ || _(e)
  };
  return (0, r.jsxs)("div", {
    className: a()(c.tabbedSettingsContainer, {
      [c.vertical]: "vertical" === p
    }),
    children: [(0, r.jsx)(o.njP, {
      className: a()(c.tabBar, {
        [c.vertical]: "vertical" === p
      }),
      selectedItem: E.setting,
      onItemSelect: y,
      orientation: p,
      type: "vertical" === p ? "side" : "top",
      look: "brand",
      children: h.map(e => (0, r.jsx)(o.njP.Item, {
        className: a()(c.tab, {
          [c.vertical]: "vertical" === p,
          [c.selected]: e.setting === E.setting
        }),
        id: e.setting,
        "aria-label": e.title,
        children: e.title
      }, e.setting))
    }), (0, r.jsx)(o.njP.Panel, {
      id: E.setting,
      "aria-labelledby": E.title,
      className: a()(c.tabBarPanel, d, {
        [c.vertical]: "vertical" === p
      }),
      children: b(E)
    })]
  })
}