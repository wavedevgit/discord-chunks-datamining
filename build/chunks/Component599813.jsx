/** Chunk was on 31748 **/
/** chunk id: 599813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  a = require.n(Chunk91871),
  Chunk23339 = require("./23339.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk962125 = require("./962125.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk474090 = require("./474090.js"),
  Chunk656088 = require("./656088.js"),
  Chunk971778 = require("./971778.js"),
  Chunk342887 = require("./342887.js"),
  Chunk973947 = require("./973947.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk32425 = require("./32425.js");
let b = [51],
  E = [Chunk985018.t.OpqAok];

function v(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: l,
    showSectionHeaders: i = false,
    query: a
  } = e, o = x(), v = (0, s.bG)([f.default], () => (0, p.ki)(f.default.getCurrentUser())), C = S(a, v), N = Math.ceil(C.length / t), {
    isNativeModuleLoaded: I,
    isNativeModuleLoading: j,
    catalogLastFetchTime: T
  } = (0, s.cf)([m.A], () => ({
    isNativeModuleLoaded: m.A.isNativeModuleLoaded(),
    isNativeModuleLoading: m.A.isNativeModuleLoading(),
    catalogLastFetchTime: m.A.getCatalogLastFetchTime()
  }));
  return a && 0 === C.length ? (0, r.jsxs)("div", {
    className: A.nm,
    children: [(0, r.jsx)(u.$p$, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.A.colors.ICON_MUTED
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-sm/medium",
      color: "text-muted",
      children: y.intl.string(y.t.ZzukHk)
    })]
  }) : o ? (0, r.jsxs)("div", {
    className: A.nm,
    children: [(0, r.jsx)(u.id, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.A.colors.ICON_MUTED
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-md/normal",
      color: "text-muted",
      children: y.intl.string(y.t.DpZNJw)
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: y.intl.format(y.t["5afO9U"], {
        onClick: I ? _.st : _.md
      })
    })]
  }) : j || null == T ? (0, r.jsx)("div", {
    className: A.Lq,
    children: (0, r.jsx)(u.y$y, {
      type: u.y$y.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, r.jsx)(d.A, {
    fade: true,
    className: A.kL,
    renderRow: e => {
      let n = e * t,
        l = C.slice(n, n + t);
      return (0, r.jsx)(O, {
        children: l.map((n, l) => (0, r.jsx)(h.I, {
          voiceFilter: n,
          hasNitro: v,
          analyticsContext: {
            reason: g.O.USER_SELECTION,
            gridRows: N,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: l
          }
        }, null == n ? true : n.id))
      }, e)
    },
    renderSectionHeader: false === i ? true : e => (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: A.wx,
      children: y.intl.string(E[e])
    }),
    sectionHeaderHeight: false === i ? true : e => b[e],
    rowCount: N,
    rowHeight: 130,
    onScroll: n,
    ref: l,
    sectionFooterHeight: 40 * !v
  })
}

function O(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: A.nM,
    children: (0, r.jsx)(u.xpW, {
      containerRef: n,
      children: t
    })
  })
}
let x = () => (0, s.bG)([m.A], () => {
    var e;
    return !Object.keys(null != (e = m.A.getVoiceFilterModels()) ? e : {}).length && (m.A.getCatalogFetchFailed() || m.A.hasNativeModuleFailed())
  }),
  S = (e, t) => (0, s.yK)([m.A], () => {
    var n;
    let r, l = m.A.getVoiceFilters(),
      i = m.A.getSortedVoiceFilters();
    return n = t ? Object.values(l) : i, "" === (r = (0, o.sS)(e.toLowerCase())) ? n : n.filter(e => {
      let {
        name: t
      } = e, n = (0, o.sS)(y.intl.string(t)).toLowerCase();
      return a()(r, n)
    })
  }, [e, t])