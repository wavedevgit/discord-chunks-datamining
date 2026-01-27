/** Chunk was on 82575 **/
/** chunk id: 524738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g,
  _: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk252452 = require("./252452.js"),
  Chunk55029 = require("./55029.js"),
  Chunk847568 = require("./847568.js");
let u = e => {
    let {
      tabs: t,
      panelClassName: n,
      tabsClassName: l,
      defaultTab: o,
      onTabChange: c,
      orientation: u = "horizontal"
    } = e, g = null != o ? o : t[0], [h, x] = s.useState(null != g ? g : t[0]);
    s.useEffect(() => {
      x(g)
    }, [g]);
    let p = s.useMemo(() => {
      let e = h.component;
      return (0, i.jsx)(e, {})
    }, [h]);
    return (0, i.jsxs)("div", {
      className: r()(d.P5, {
        [d.Vd]: "vertical" === u
      }),
      children: [(0, i.jsx)(a.VQ0, {
        className: r()(d.$H, {
          [d.Vd]: "vertical" === u
        }, l),
        selectedItem: h.setting,
        onItemSelect: e => {
          var n;
          x(null != (n = t.find(t => t.setting === e)) ? n : t[0]), null == c || c(e)
        },
        orientation: u,
        type: "vertical" === u ? "side" : "top",
        look: "brand",
        children: t.map(e => (0, i.jsx)(a.VQ0.Item, {
          className: r()(d.Mf, {
            [d.Vd]: "vertical" === u,
            [d.wH]: e.setting === h.setting
          }),
          id: e.setting,
          "aria-label": e.title,
          children: e.title
        }, e.setting))
      }), (0, i.jsx)(a.VQ0.Panel, {
        id: h.setting,
        "aria-labelledby": h.title,
        className: r()(d.NM, n, {
          [d.Vd]: "vertical" === u
        }),
        children: p
      })]
    })
  },
  g = e => {
    var t;
    let {
      tabs: n,
      settingsSection: s,
      parentSetting: l,
      panelClassName: r,
      defaultTabIndex: a,
      onTabChange: d,
      orientation: g = "horizontal"
    } = e, {
      viewableTabs: h,
      filteredTab: x
    } = (0, c.A)(n, l), p = null != a ? n[a] : null, A = null != (t = null != p ? p : x) ? t : h[0];
    return (0, i.jsx)(u, {
      tabs: h,
      orientation: g,
      defaultTab: A,
      onTabChange: e => {
        o.A.setSection(s, e), null == d || d(e)
      },
      panelClassName: r
    })
  }