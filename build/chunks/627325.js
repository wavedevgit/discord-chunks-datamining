/** Chunk was on 14721 **/
n.d(t, {
  w: () => N
});
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(658722),
  s = n.n(l),
  c = n(468194),
  d = n(442837),
  u = n(692547),
  _ = n(670900),
  m = n(481060),
  f = n(218867),
  p = n(594174),
  g = n(111361),
  v = n(709706),
  h = n(358820),
  b = n(990525),
  y = n(388032),
  C = n(697993);
let x = [51],
  j = [y.t.OpqAoq],
  I = () => (0, r.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    "aria-hidden": "true",
    children: [(0, r.jsx)("path", {
      fill: u.Z.colors.INTERACTIVE_MUTED.css,
      "fill-rule": "evenodd",
      d: "M20 38.333c2.702 0 5.267-.584 7.577-1.634a6.64 6.64 0 0 1-.911-3.366c0-1.043.315-2.127.589-2.913.305-.877.706-1.792 1.126-2.619.414-.816.896-1.645 1.388-2.318.238-.326.552-.718.93-1.064.19-.174.47-.405.833-.608.34-.19.97-.478 1.8-.478s1.462.289 1.8.478c.364.203.644.434.834.608.378.346.693.738.93 1.064q.206.281.406.592A18.3 18.3 0 0 0 38.332 20C38.333 9.875 30.126 1.667 20 1.667S1.666 9.875 1.666 20s8.208 18.333 18.333 18.333m-9.167-16.666a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m18.333 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-16.33 6.385c.764.512 1.8.307 2.311-.458A5.83 5.83 0 0 1 20 25a5.83 5.83 0 0 1 4.852 2.594 1.667 1.667 0 1 0 2.77-1.854A9.16 9.16 0 0 0 20 21.667a9.16 9.16 0 0 0-7.622 4.073c-.512.765-.307 1.8.458 2.312",
      "clip-rule": "evenodd"
    }), (0, r.jsx)("path", {
      fill: u.Z.colors.INTERACTIVE_MUTED.css,
      d: "M35.528 29.75c-.773-1.622-1.737-3.083-2.195-3.083-.834 0-3.334 4.825-3.334 6.666a3.331 3.331 0 0 0 3.333 3.333 3.333 3.333 0 0 0 3.334-3.333c0-.827-.505-2.259-1.138-3.583"
    })]
  });

function N(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: i,
    showSectionHeaders: a = !1,
    query: l
  } = e, s = E(), c = (0, d.e7)([p.default], () => (0, g.I5)(p.default.getCurrentUser())), N = P(l, c), S = Math.ceil(N.length / t), {
    isNativeModuleLoaded: w,
    isNativeModuleLoading: T,
    catalogLastFetchTime: L
  } = (0, d.cj)([v.Z], () => ({
    isNativeModuleLoaded: v.Z.isNativeModuleLoaded(),
    isNativeModuleLoading: v.Z.isNativeModuleLoading(),
    catalogLastFetchTime: v.Z.getCatalogLastFetchTime()
  }));
  return l && 0 === N.length ? (0, r.jsxs)("div", {
    className: C.iconMessage,
    children: [(0, r.jsx)(_._, {
      width: 40,
      height: 40,
      size: "custom",
      color: u.Z.colors.INTERACTIVE_MUTED
    }), (0, r.jsx)(m.X6q, {
      variant: "heading-sm/medium",
      color: "header-muted",
      children: y.NW.string(y.t.ZzukHh)
    })]
  }) : s ? (0, r.jsxs)("div", {
    className: C.iconMessage,
    children: [(0, r.jsx)(I, {}), (0, r.jsx)(m.X6q, {
      variant: "heading-md/normal",
      color: "header-muted",
      children: y.NW.string(y.t.DpZNJy)
    }), (0, r.jsx)(m.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: y.NW.format(y.t["5afO9f"], {
        onClick: w ? h.wV : h.r5
      })
    })]
  }) : T || null == L ? (0, r.jsx)("div", {
    className: C.loading,
    children: (0, r.jsx)(m.$jN, {
      type: m.$jN.Type.CHASING_DOTS,
      animated: !0
    })
  }) : (0, r.jsx)(f.Z, {
    fade: !0,
    className: o()(C.container, {
      [C.hasHeaders]: a
    }),
    renderRow: e => {
      let n = e * t,
        i = N.slice(n, n + t);
      return (0, r.jsx)(O, {
        children: i.map((n, i) => (0, r.jsx)(b.J, {
          voiceFilter: n,
          hasNitro: c,
          analyticsContext: {
            gridRows: S,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: i
          }
        }, null == n ? void 0 : n.id))
      }, e)
    },
    renderSectionHeader: !1 === a ? void 0 : e => (0, r.jsx)(m.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      className: C.header,
      children: y.NW.string(j[e])
    }),
    sectionHeaderHeight: !1 === a ? void 0 : e => x[e],
    rowCount: S,
    rowHeight: 130,
    onScroll: n,
    ref: i,
    sectionFooterHeight: 40 * !c
  })
}

function O(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: C.row,
    children: (0, r.jsx)(m.JcV, {
      containerRef: n,
      children: t
    })
  })
}
let E = () => (0, d.e7)([v.Z], () => {
    var e;
    return !Object.keys(null !== (e = v.Z.getVoiceFilterModels()) && void 0 !== e ? e : {}).length && (v.Z.getCatalogFetchFailed() || v.Z.hasNativeModuleFailed())
  }),
  S = (e, t) => {
    let n = (0, c._I)(t.toLowerCase());
    return "" === n ? e : e.filter(e => {
      let {
        name: t
      } = e, r = (0, c._I)(y.NW.string(t)).toLowerCase();
      return s()(n, r)
    })
  },
  P = (e, t) => (0, d.Wu)([v.Z], () => {
    let n = v.Z.getVoiceFilters(),
      r = v.Z.getSortedVoiceFilters();
    return S(t ? Object.values(n) : r, e)
  }, [e, t])