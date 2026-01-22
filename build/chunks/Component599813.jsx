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
let _ = [51],
  E = [Chunk985018.t.OpqAok];

function v(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: r,
    showSectionHeaders: i = false,
    query: a
  } = e, s = x(), v = (0, o.bG)([f.default], () => (0, p.ki)(f.default.getCurrentUser())), N = S(a, v), C = Math.ceil(N.length / t), {
    isNativeModuleLoaded: j,
    isNativeModuleLoading: T,
    catalogLastFetchTime: I
  } = (0, o.cf)([g.A], () => ({
    isNativeModuleLoaded: g.A.isNativeModuleLoaded(),
    isNativeModuleLoading: g.A.isNativeModuleLoading(),
    catalogLastFetchTime: g.A.getCatalogLastFetchTime()
  }));
  return a && 0 === N.length ? (0, l.jsxs)("div", {
    className: y.nm,
    children: [(0, l.jsx)(u.$p$, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.A.colors.ICON_MUTED
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-sm/medium",
      color: "text-muted",
      children: A.intl.string(A.t.ZzukHk)
    })]
  }) : s ? (0, l.jsxs)("div", {
    className: y.nm,
    children: [(0, l.jsx)(u.id, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.A.colors.ICON_MUTED
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/normal",
      color: "text-muted",
      children: A.intl.string(A.t.DpZNJw)
    }), (0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: A.intl.format(A.t["5afO9U"], {
        onClick: j ? m.st : m.md
      })
    })]
  }) : T || null == I ? (0, l.jsx)("div", {
    className: y.Lq,
    children: (0, l.jsx)(u.y$y, {
      type: u.y$y.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, l.jsx)(d.A, {
    fade: true,
    className: y.kL,
    renderRow: e => {
      let n = e * t,
        r = N.slice(n, n + t);
      return (0, l.jsx)(O, {
        children: r.map((n, r) => (0, l.jsx)(h.I, {
          voiceFilter: n,
          hasNitro: v,
          analyticsContext: {
            reason: b.O.USER_SELECTION,
            gridRows: C,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: r
          }
        }, null == n ? true : n.id))
      }, e)
    },
    renderSectionHeader: false === i ? true : e => (0, l.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: y.wx,
      children: A.intl.string(E[e])
    }),
    sectionHeaderHeight: false === i ? true : e => _[e],
    rowCount: C,
    rowHeight: 130,
    onScroll: n,
    ref: r,
    sectionFooterHeight: 40 * !v
  })
}

function O(e) {
  let {
    children: t
  } = e, n = r.useRef(null);
  return (0, l.jsx)("div", {
    ref: n,
    className: y.nM,
    children: (0, l.jsx)(u.xpW, {
      containerRef: n,
      children: t
    })
  })
}
let x = () => (0, o.bG)([g.A], () => {
    var e;
    return !Object.keys(null != (e = g.A.getVoiceFilterModels()) ? e : {}).length && (g.A.getCatalogFetchFailed() || g.A.hasNativeModuleFailed())
  }),
  S = (e, t) => (0, o.yK)([g.A], () => {
    var n;
    let l, r = g.A.getVoiceFilters(),
      i = g.A.getSortedVoiceFilters();
    return n = t ? Object.values(r) : i, "" === (l = (0, s.sS)(e.toLowerCase())) ? n : n.filter(e => {
      let {
        name: t
      } = e, n = (0, s.sS)(A.intl.string(t)).toLowerCase();
      return a()(l, n)
    })
  }, [e, t])