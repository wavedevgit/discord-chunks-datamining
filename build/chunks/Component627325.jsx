/** Chunk was on 96750 **/
/** chunk id: 627325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
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
  Chunk335189 = require("./335189.js");
let y = [51],
  O = [Chunk388032.t.OpqAoq];

function j(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: i,
    showSectionHeaders: l = false,
    query: a
  } = e, o = x(), j = (0, s.e7)([p.default], () => (0, f.I5)(p.default.getCurrentUser())), P = I(a, j), C = Math.ceil(P.length / t), {
    isNativeModuleLoaded: E,
    isNativeModuleLoading: w,
    catalogLastFetchTime: T
  } = (0, s.cj)([g.Z], () => ({
    isNativeModuleLoaded: g.Z.isNativeModuleLoaded(),
    isNativeModuleLoading: g.Z.isNativeModuleLoading(),
    catalogLastFetchTime: g.Z.getCatalogLastFetchTime()
  }));
  return a && 0 === P.length ? (0, r.jsxs)("div", {
    className: h.iconMessage,
    children: [(0, r.jsx)(u._Ve, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.X6q, {
      variant: "heading-sm/medium",
      color: "header-muted",
      children: b.intl.string(b.t.ZzukHh)
    })]
  }) : o ? (0, r.jsxs)("div", {
    className: h.iconMessage,
    children: [(0, r.jsx)(u.aNP, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.X6q, {
      variant: "heading-md/normal",
      color: "header-muted",
      children: b.intl.string(b.t.DpZNJy)
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: b.intl.format(b.t["5afO9f"], {
        onClick: E ? v.wV : v.r5
      })
    })]
  }) : w || null == T ? (0, r.jsx)("div", {
    className: h.loading,
    children: (0, r.jsx)(u.$jN, {
      type: u.$jN.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, r.jsx)(d.Z, {
    fade: true,
    className: h.container,
    renderRow: e => {
      let n = e * t,
        i = P.slice(n, n + t);
      return (0, r.jsx)(S, {
        children: i.map((n, i) => (0, r.jsx)(_.J, {
          voiceFilter: n,
          hasNitro: j,
          analyticsContext: {
            reason: m.W.USER_SELECTION,
            gridRows: C,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: i
          }
        }, null == n ? true : n.id))
      }, e)
    },
    renderSectionHeader: false === l ? true : e => (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      className: h.header,
      children: b.intl.string(O[e])
    }),
    sectionHeaderHeight: false === l ? true : e => y[e],
    rowCount: C,
    rowHeight: 130,
    onScroll: n,
    ref: i,
    sectionFooterHeight: 40 * !j
  })
}

function S(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: h.row,
    children: (0, r.jsx)(u.JcV, {
      containerRef: n,
      children: t
    })
  })
}
let x = () => (0, Chunk442837.e7)([Chunk709706.Z], () => {
    var e;
    return !Object.keys(null != (e = Chunk709706.Z.getVoiceFilterModels()) ? module : {}).length && (Chunk709706.Z.getCatalogFetchFailed() || Chunk709706.Z.hasNativeModuleFailed())
  }),
  I = (e, t) => (0, s.Wu)([g.Z], () => {
    let n = g.Z.getVoiceFilters(),
      r = g.Z.getSortedVoiceFilters();
    var i = t ? Object.values(n) : r;
    let l = (0, o._I)(e.toLowerCase());
    return "" === l ? i : i.filter(e => {
      let {
        name: t
      } = e, n = (0, o._I)(b.intl.string(t)).toLowerCase();
      return a()(l, n)
    })
  }, [e, t])