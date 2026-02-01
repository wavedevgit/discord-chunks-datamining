/** Chunk was on 42402 **/
/** chunk id: 524738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  _: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk252452 = require("./252452.js"),
  Chunk55029 = require("./55029.js"),
  Chunk847568 = require("./847568.js");
let d = e => {
    let {
      tabs: t,
      panelClassName: n,
      tabsClassName: i,
      defaultTab: o,
      onTabChange: c,
      orientation: d = "horizontal"
    } = e, p = null != o ? o : t[0], [h, g] = l.useState(null != p ? p : t[0]);
    l.useEffect(() => {
      g(p)
    }, [p]);
    let f = l.useMemo(() => {
      let e = h.component;
      return (0, r.jsx)(e, {})
    }, [h]);
    return (0, r.jsxs)("div", {
      className: s()(u.P5, {
        [u.Vd]: "vertical" === d
      }),
      children: [(0, r.jsx)(a.VQ0, {
        className: s()(u.$H, {
          [u.Vd]: "vertical" === d
        }, i),
        selectedItem: h.setting,
        onItemSelect: e => {
          var n;
          g(null != (n = t.find(t => t.setting === e)) ? n : t[0]), null == c || c(e)
        },
        orientation: d,
        type: "vertical" === d ? "side" : "top",
        look: "brand",
        children: t.map(e => (0, r.jsx)(a.VQ0.Item, {
          className: s()(u.Mf, {
            [u.Vd]: "vertical" === d,
            [u.wH]: e.setting === h.setting
          }),
          id: e.setting,
          "aria-label": e.title,
          children: e.title
        }, e.setting))
      }), (0, r.jsx)(a.VQ0.Panel, {
        id: h.setting,
        "aria-labelledby": h.title,
        className: s()(u.NM, n, {
          [u.Vd]: "vertical" === d
        }),
        children: f
      })]
    })
  },
  p = e => {
    var t;
    let {
      tabs: n,
      settingsSection: l,
      parentSetting: i,
      panelClassName: s,
      defaultTabIndex: a,
      onTabChange: u,
      orientation: p = "horizontal"
    } = e, {
      viewableTabs: h,
      filteredTab: g
    } = (0, c.A)(n, i), f = null != a ? n[a] : null, m = null != (t = null != f ? f : g) ? t : h[0];
    return (0, r.jsx)(d, {
      tabs: h,
      orientation: p,
      defaultTab: m,
      onTabChange: e => {
        o.A.setSection(l, e), null == u || u(e)
      },
      panelClassName: s
    })
  }