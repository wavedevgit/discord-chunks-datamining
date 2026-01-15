/** Chunk was on web.js **/
/** chunk id: 526156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f,
  z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk528084 = require("./528084.js"),
  Chunk964694 = require("./964694.js");
let d = e => {
    let {
      tabs: t,
      panelClassName: n,
      tabsClassName: a,
      defaultTab: l,
      onTabChange: c,
      orientation: d = "horizontal"
    } = e, f = null != l ? l : t[0], [p, _] = i.useState(null != f ? f : t[0]);
    i.useEffect(() => {
      _(f)
    }, [f]);
    let h = i.useMemo(() => {
        let e = p.component;
        return (0, r.jsx)(e, {})
      }, [p]),
      m = e => {
        var n;
        _(null != (n = t.find(t => t.setting === e)) ? n : t[0]), null == c || c(e)
      };
    return (0, r.jsxs)("div", {
      className: o()(u.tabbedSettingsContainer, {
        [u.vertical]: "vertical" === d
      }),
      children: [(0, r.jsx)(s.njP, {
        className: o()(u.tabBar, {
          [u.vertical]: "vertical" === d
        }, a),
        selectedItem: p.setting,
        onItemSelect: m,
        orientation: d,
        type: "vertical" === d ? "side" : "top",
        look: "brand",
        children: t.map(e => (0, r.jsx)(s.njP.Item, {
          className: o()(u.tab, {
            [u.vertical]: "vertical" === d,
            [u.selected]: e.setting === p.setting
          }),
          id: e.setting,
          "aria-label": e.title,
          children: e.title
        }, e.setting))
      }), (0, r.jsx)(s.njP.Panel, {
        id: p.setting,
        "aria-labelledby": p.title,
        className: o()(u.tabBarPanel, n, {
          [u.vertical]: "vertical" === d
        }),
        children: h
      })]
    })
  },
  f = e => {
    var t;
    let {
      tabs: n,
      settingsSection: i,
      parentSetting: a,
      panelClassName: o,
      defaultTabIndex: s,
      onTabChange: u,
      orientation: f = "horizontal"
    } = e, {
      viewableTabs: p,
      filteredTab: _
    } = (0, c.a)(n, a), h = null != s ? n[s] : null, m = null != (t = null != h ? h : _) ? t : p[0], g = e => {
      l.Z.setSection(i, e), null == u || u(e)
    };
    return (0, r.jsx)(d, {
      tabs: p,
      orientation: f,
      defaultTab: m,
      onTabChange: g,
      panelClassName: o
    })
  }