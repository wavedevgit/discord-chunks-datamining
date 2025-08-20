/** Chunk was on web.js **/
/** chunk id: 627325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
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
let y = 130,
  O = [51],
  v = [Chunk388032.t.OpqAoq];

function I(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: i,
    showSectionHeaders: a = false,
    query: o
  } = e, s = S(), I = (0, l.e7)([f.default], () => (0, _.I5)(f.default.getCurrentUser())), A = C(o, I), N = Math.ceil(A.length / t), {
    isNativeModuleLoaded: R,
    isNativeModuleLoading: P,
    catalogLastFetchTime: w
  } = (0, l.cj)([h.Z], () => ({
    isNativeModuleLoaded: h.Z.isNativeModuleLoaded(),
    isNativeModuleLoading: h.Z.isNativeModuleLoading(),
    catalogLastFetchTime: h.Z.getCatalogLastFetchTime()
  }));
  return o && 0 === A.length ? (0, r.jsxs)("div", {
    className: b.iconMessage,
    children: [(0, r.jsx)(u._Ve, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.X6q, {
      variant: "heading-sm/medium",
      color: "header-muted",
      children: E.intl.string(E.t.ZzukHh)
    })]
  }) : s ? (0, r.jsxs)("div", {
    className: b.iconMessage,
    children: [(0, r.jsx)(u.aNP, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(u.X6q, {
      variant: "heading-md/normal",
      color: "header-muted",
      children: E.intl.string(E.t.DpZNJy)
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: E.intl.format(E.t["5afO9f"], {
        onClick: R ? m.wV : m.r5
      })
    })]
  }) : P || null == w ? (0, r.jsx)("div", {
    className: b.loading,
    children: (0, r.jsx)(u.$jN, {
      type: u.$jN.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, r.jsx)(d.Z, {
    fade: true,
    className: b.container,
    renderRow: e => {
      let n = e * t,
        i = A.slice(n, n + t);
      return (0, r.jsx)(T, {
        children: i.map((n, i) => (0, r.jsx)(g.J, {
          voiceFilter: n,
          hasNitro: I,
          analyticsContext: {
            reason: p.W.USER_SELECTION,
            gridRows: N,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: i
          }
        }, null == n ? true : n.id))
      }, e)
    },
    renderSectionHeader: false === a ? true : e => (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      className: b.header,
      children: E.intl.string(v[e])
    }),
    sectionHeaderHeight: false === a ? true : e => O[e],
    rowCount: N,
    rowHeight: y,
    onScroll: n,
    ref: i,
    sectionFooterHeight: 40 * !I
  })
}

function T(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: b.row,
    children: (0, r.jsx)(u.JcV, {
      containerRef: n,
      children: t
    })
  })
}
let S = () => (0, Chunk442837.e7)([Chunk709706.Z], () => {
    var e;
    return !Object.keys(null != (e = Chunk709706.Z.getVoiceFilterModels()) ? module : {}).length && (Chunk709706.Z.getCatalogFetchFailed() || Chunk709706.Z.hasNativeModuleFailed())
  }),
  A = (e, t) => {
    let n = (0, s._I)(t.toLowerCase());
    return "" === n ? e : e.filter(e => {
      let {
        name: t
      } = e, r = (0, s._I)(E.intl.string(t)).toLowerCase();
      return o()(n, r)
    })
  },
  C = (e, t) => (0, l.Wu)([h.Z], () => {
    let n = h.Z.getVoiceFilters(),
      r = h.Z.getSortedVoiceFilters();
    return A(t ? Object.values(n) : r, e)
  }, [e, t])