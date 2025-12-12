/** Chunk was on 43342 **/
/** chunk id: 627325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk890373 = require("./890373.js");
let O = [51],
  h = [Chunk388032.t.OpqAok];

function x(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: i,
    showSectionHeaders: o = false,
    query: l
  } = e, a = P(), x = (0, s.e7)([p.default], () => (0, m.I5)(p.default.getCurrentUser())), E = C(l, x), w = Math.ceil(E.length / t), {
    isNativeModuleLoaded: I,
    isNativeModuleLoading: T,
    catalogLastFetchTime: S
  } = (0, s.cj)([b.Z], () => ({
    isNativeModuleLoaded: b.Z.isNativeModuleLoaded(),
    isNativeModuleLoading: b.Z.isNativeModuleLoading(),
    catalogLastFetchTime: b.Z.getCatalogLastFetchTime()
  }));
  return l && 0 === E.length ? (0, r.jsxs)("div", {
    className: j.iconMessage,
    children: [(0, r.jsx)(u._Ve, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-sm/medium",
      color: "text-muted",
      children: y.intl.string(y.t.ZzukHk)
    })]
  }) : a ? (0, r.jsxs)("div", {
    className: j.iconMessage,
    children: [(0, r.jsx)(u.aNP, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-md/normal",
      color: "text-muted",
      children: y.intl.string(y.t.DpZNJw)
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: y.intl.format(y.t["5afO9U"], {
        onClick: I ? g.wV : g.r5
      })
    })]
  }) : T || null == S ? (0, r.jsx)("div", {
    className: j.loading,
    children: (0, r.jsx)(u.$jN, {
      type: u.$jN.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, r.jsx)(d.Z, {
    fade: true,
    className: j.container,
    renderRow: e => {
      let n = e * t,
        i = E.slice(n, n + t);
      return (0, r.jsx)(_, {
        children: i.map((n, i) => (0, r.jsx)(v.J, {
          voiceFilter: n,
          hasNitro: x,
          analyticsContext: {
            reason: f.W.USER_SELECTION,
            gridRows: w,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: i
          }
        }, null == n ? true : n.id))
      }, e)
    },
    renderSectionHeader: false === o ? true : e => (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: j.header,
      children: y.intl.string(h[e])
    }),
    sectionHeaderHeight: false === o ? true : e => O[e],
    rowCount: w,
    rowHeight: 130,
    onScroll: n,
    ref: i,
    sectionFooterHeight: 40 * !x
  })
}

function _(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: j.row,
    children: (0, r.jsx)(u.JcV, {
      containerRef: n,
      children: t
    })
  })
}
let P = () => (0, Chunk442837.e7)([Chunk709706.Z], () => {
    var e;
    return !Object.keys(null != (e = Chunk709706.Z.getVoiceFilterModels()) ? module : {}).length && (Chunk709706.Z.getCatalogFetchFailed() || Chunk709706.Z.hasNativeModuleFailed())
  }),
  C = (e, t) => (0, s.Wu)([b.Z], () => {
    let n = b.Z.getVoiceFilters(),
      r = b.Z.getSortedVoiceFilters();
    var i = t ? Object.values(n) : r;
    let o = (0, a._I)(e.toLowerCase());
    return "" === o ? i : i.filter(e => {
      let {
        name: t
      } = e, n = (0, a._I)(y.intl.string(t)).toLowerCase();
      return l()(o, n)
    })
  }, [e, t])