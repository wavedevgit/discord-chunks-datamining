/** Chunk was on 43342 **/
/** chunk id: 627325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk778033 = require("./778033.js"),
  Chunk709706 = require("./709706.js"),
  Chunk358820 = require("./358820.js"),
  Chunk990525 = require("./990525.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734327 = require("./734327.js");
let j = [51],
  h = [Chunk388032.t.OpqAoq];

function x(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: i,
    showSectionHeaders: o = false,
    query: l
  } = e, a = _(), x = (0, s.e7)([p.default], () => (0, m.I5)(p.default.getCurrentUser())), C = w(l, x), E = Math.ceil(C.length / t), {
    isNativeModuleLoaded: I,
    isNativeModuleLoading: S,
    catalogLastFetchTime: T
  } = (0, s.cj)([b.Z], () => ({
    isNativeModuleLoaded: b.Z.isNativeModuleLoaded(),
    isNativeModuleLoading: b.Z.isNativeModuleLoading(),
    catalogLastFetchTime: b.Z.getCatalogLastFetchTime()
  }));
  return l && 0 === C.length ? (0, r.jsxs)("div", {
    className: O.iconMessage,
    children: [(0, r.jsx)(u._Ve, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.X6q, {
      variant: "heading-sm/medium",
      color: "header-muted",
      children: v.intl.string(v.t.ZzukHh)
    })]
  }) : a ? (0, r.jsxs)("div", {
    className: O.iconMessage,
    children: [(0, r.jsx)(u.aNP, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.X6q, {
      variant: "heading-md/normal",
      color: "header-muted",
      children: v.intl.string(v.t.DpZNJy)
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: v.intl.format(v.t["5afO9f"], {
        onClick: I ? y.wV : y.r5
      })
    })]
  }) : S || null == T ? (0, r.jsx)("div", {
    className: O.loading,
    children: (0, r.jsx)(u.$jN, {
      type: u.$jN.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, r.jsx)(d.Z, {
    fade: true,
    className: O.container,
    renderRow: e => {
      let n = e * t,
        i = C.slice(n, n + t);
      return (0, r.jsx)(P, {
        children: i.map((n, i) => (0, r.jsx)(g.J, {
          voiceFilter: n,
          hasNitro: x,
          analyticsContext: {
            reason: f.W.USER_SELECTION,
            gridRows: E,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: i
          }
        }, null == n ? true : n.id))
      }, e)
    },
    renderSectionHeader: false === o ? true : e => (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      className: O.header,
      children: v.intl.string(h[e])
    }),
    sectionHeaderHeight: false === o ? true : e => j[e],
    rowCount: E,
    rowHeight: 130,
    onScroll: n,
    ref: i,
    sectionFooterHeight: 40 * !x
  })
}

function P(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: O.row,
    children: (0, r.jsx)(u.JcV, {
      containerRef: n,
      children: t
    })
  })
}
let _ = () => (0, Chunk442837.e7)([Chunk709706.Z], () => {
    var e;
    return !Object.keys(null != (e = Chunk709706.Z.getVoiceFilterModels()) ? module : {}).length && (Chunk709706.Z.getCatalogFetchFailed() || Chunk709706.Z.hasNativeModuleFailed())
  }),
  w = (e, t) => (0, s.Wu)([b.Z], () => {
    let n = b.Z.getVoiceFilters(),
      r = b.Z.getSortedVoiceFilters();
    var i = t ? Object.values(n) : r;
    let o = (0, a._I)(e.toLowerCase());
    return "" === o ? i : i.filter(e => {
      let {
        name: t
      } = e, n = (0, a._I)(v.intl.string(t)).toLowerCase();
      return l()(o, n)
    })
  }, [e, t])