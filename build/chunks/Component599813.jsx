/** Chunk was on 17869 **/
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
let y = [51],
  E = [Chunk985018.t.OpqAok];

function v(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: r,
    showSectionHeaders: i = false,
    query: a
  } = e, s = C(), v = (0, o.bG)([h.default], () => (0, p.ki)(h.default.getCurrentUser())), x = S(a, v), j = Math.ceil(x.length / t), {
    isNativeModuleLoaded: I,
    isNativeModuleLoading: T,
    catalogLastFetchTime: N
  } = (0, o.cf)([m.A], () => ({
    isNativeModuleLoaded: m.A.isNativeModuleLoaded(),
    isNativeModuleLoading: m.A.isNativeModuleLoading(),
    catalogLastFetchTime: m.A.getCatalogLastFetchTime()
  }));
  return a && 0 === x.length ? (0, l.jsxs)("div", {
    className: _.nm,
    children: [(0, l.jsx)(u.$p$, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.A.colors.ICON_MUTED
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-sm/medium",
      color: "text-muted",
      children: b.intl.string(b.t.ZzukHk)
    })]
  }) : s ? (0, l.jsxs)("div", {
    className: _.nm,
    children: [(0, l.jsx)(u.id, {
      width: 40,
      height: 40,
      size: "custom",
      color: c.A.colors.ICON_MUTED
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/normal",
      color: "text-muted",
      children: b.intl.string(b.t.DpZNJw)
    }), (0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: b.intl.format(b.t["5afO9U"], {
        onClick: I ? g.st : g.md
      })
    })]
  }) : T || null == N ? (0, l.jsx)("div", {
    className: _.Lq,
    children: (0, l.jsx)(u.y$y, {
      type: u.y$y.Type.CHASING_DOTS,
      animated: true
    })
  }) : (0, l.jsx)(d.A, {
    fade: true,
    className: _.kL,
    renderRow: e => {
      let n = e * t,
        r = x.slice(n, n + t);
      return (0, l.jsx)(O, {
        children: r.map((n, r) => (0, l.jsx)(A.I, {
          voiceFilter: n,
          hasNitro: v,
          analyticsContext: {
            reason: f.O.USER_SELECTION,
            gridRows: j,
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
      className: _.wx,
      children: b.intl.string(E[e])
    }),
    sectionHeaderHeight: false === i ? true : e => y[e],
    rowCount: j,
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
    className: _.nM,
    children: (0, l.jsx)(u.xpW, {
      containerRef: n,
      children: t
    })
  })
}
let C = () => (0, o.bG)([m.A], () => {
    var e;
    return !Object.keys(null != (e = m.A.getVoiceFilterModels()) ? e : {}).length && (m.A.getCatalogFetchFailed() || m.A.hasNativeModuleFailed())
  }),
  S = (e, t) => (0, o.yK)([m.A], () => {
    var n;
    let l, r = m.A.getVoiceFilters(),
      i = m.A.getSortedVoiceFilters();
    return n = t ? Object.values(r) : i, "" === (l = (0, s.sS)(e.toLowerCase())) ? n : n.filter(e => {
      let {
        name: t
      } = e, n = (0, s.sS)(b.intl.string(t)).toLowerCase();
      return a()(l, n)
    })
  }, [e, t])