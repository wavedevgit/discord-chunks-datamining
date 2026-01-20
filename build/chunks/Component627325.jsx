/** Chunk was on 11010 **/
/** chunk id: 627325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk890373 = require("./890373.js");
let y = [51],
  _ = [Chunk388032.t.OpqAok];

function O(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: i,
    showSectionHeaders: l = false,
    query: a
  } = e, o = S(), O = (0, c.e7)([f.default], () => (0, p.I5)(f.default.getCurrentUser())), I = x(a, O), N = Math.ceil(I.length / t), {
    isNativeModuleLoaded: T,
    isNativeModuleLoading: j,
    catalogLastFetchTime: P
  } = (0, c.cj)([m.Z], () => ({
    isNativeModuleLoaded: m.Z.isNativeModuleLoaded(),
    isNativeModuleLoading: m.Z.isNativeModuleLoading(),
    catalogLastFetchTime: m.Z.getCatalogLastFetchTime()
  }));
  return a && 0 === I.length ? (0, r.jsxs)("div", {
    className: E.iconMessage,
    children: [(0, r.jsx)(u._Ve, {
      width: 40,
      height: 40,
      size: "custom",
      color: s.Z.colors.ICON_MUTED
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-sm/medium",
      color: "text-muted",
      children: v.intl.string(v.t.ZzukHk)
    })]
  }) : o ? (0, r.jsxs)("div", {
    className: E.iconMessage,
    children: [(0, r.jsx)(u.aNP, {
      width: 40,
      height: 40,
      size: "custom",
      color: s.Z.colors.ICON_MUTED
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-md/normal",
      color: "text-muted",
      children: v.intl.string(v.t.DpZNJw)
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: v.intl.format(v.t["5afO9U"], {
        onClick: T ? b.wV : b.r5
      })
    })]
  }) : j || null == P ? (0, r.jsx)("div", {
    className: E.loading,
    children: (0, r.jsx)(u.$jN, {
      type: u.$jN.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, r.jsx)(d.Z, {
    fade: true,
    className: E.container,
    renderRow: e => {
      let n = e * t,
        i = I.slice(n, n + t);
      return (0, r.jsx)(C, {
        children: i.map((n, i) => (0, r.jsx)(h.J, {
          voiceFilter: n,
          hasNitro: O,
          analyticsContext: {
            reason: g.W.USER_SELECTION,
            gridRows: N,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: i
          }
        }, null == n ? true : n.id))
      }, e)
    },
    renderSectionHeader: false === l ? true : e => (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: E.header,
      children: v.intl.string(_[e])
    }),
    sectionHeaderHeight: false === l ? true : e => y[e],
    rowCount: N,
    rowHeight: 130,
    onScroll: n,
    ref: i,
    sectionFooterHeight: 40 * !O
  })
}

function C(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: E.row,
    children: (0, r.jsx)(u.JcV, {
      containerRef: n,
      children: t
    })
  })
}
let S = () => (0, c.e7)([m.Z], () => {
    var e;
    return !Object.keys(null != (e = m.Z.getVoiceFilterModels()) ? e : {}).length && (m.Z.getCatalogFetchFailed() || m.Z.hasNativeModuleFailed())
  }),
  x = (e, t) => (0, c.Wu)([m.Z], () => {
    let n = m.Z.getVoiceFilters(),
      r = m.Z.getSortedVoiceFilters();
    var i = t ? Object.values(n) : r;
    let l = (0, o._I)(e.toLowerCase());
    return "" === l ? i : i.filter(e => {
      let {
        name: t
      } = e, n = (0, o._I)(v.intl.string(t)).toLowerCase();
      return a()(l, n)
    })
  }, [e, t])