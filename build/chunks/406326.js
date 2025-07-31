/** Chunk was on 93239 **/
r.d(t, {
  Z: () => S
});
var n = r(255367),
  i = r(73800),
  s = r(120356),
  a = r.n(s),
  c = r(442837),
  l = r(481060),
  o = r(63063),
  u = r(518944),
  d = r(607802),
  _ = r(945577),
  p = r(28964),
  h = r(981631),
  y = r(388032),
  f = r(107242);

function S(e) {
  let {
    searchContext: t,
    searchMode: r,
    onSearchModeChange: s,
    totalResults: o,
    isIndexing: S,
    isSearching: b,
    documentsIndexed: g
  } = e, O = (0, _.U)({
    location: "SearchHeader"
  }), m = (0, p.xd)({
    isXDMSearch: t.type === h.aib.DMS,
    location: "SearchHeader"
  }), j = (0, d.WJ)(t), R = (0, c.e7)([u.Z], () => u.Z.getSearchResultsQueryString(j)), P = i.useMemo(() => {
    if (t.type === h.aib.DMS && O) {
      var e, r;
      let t = (0, d.kG)(null != R ? R : ""),
        n = null != (r = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? r : 0;
      return n > 0 ? y.intl.format(y.t.A2dqWF, {
        filterCount: n
      }) : y.intl.string(y.t.tc619f)
    }
    return null
  }, [O, t.type, R]), v = i.useMemo(() => [{
    label: y.intl.string(y.t.CbaapK),
    value: h.QIO.NEWEST
  }, {
    label: y.intl.string(y.t.OukXZm),
    value: h.QIO.OLDEST
  }, {
    label: y.intl.string(y.t["q8gB5+"]),
    value: h.QIO.MOST_RELEVANT
  }], []);
  return (0, n.jsxs)("header", {
    className: a()(f.searchHeader, {
      [f.searchHeaderWithSubtitle]: null != P
    }),
    children: [(0, n.jsx)("div", {
      className: f.totalResults,
      role: "status",
      children: (0, n.jsx)(E, {
        totalResults: o,
        subtitle: P,
        isIndexing: S,
        isSearching: b,
        documentsIndexed: g
      })
    }), m && t.type !== h.aib.DMS ? (0, n.jsxs)("div", {
      className: f.searchModeAndFiltersContainer,
      children: [(0, n.jsx)(l.q4e, {
        options: v,
        value: r,
        onChange: s,
        look: l.qQH.CUSTOM,
        className: f.searchModeSelect,
        popoutWidth: 130
      }), (0, n.jsx)(l.zxk, {
        variant: "secondary",
        text: y.intl.string(y.t.UdhTtr),
        icon: l.gXV,
        size: "sm"
      })]
    }) : (0, n.jsxs)(l.njP, {
      orientation: "horizontal",
      className: f.searchHeaderTabList,
      selectedItem: r,
      onItemSelect: s,
      children: [(0, n.jsx)(l.njP.Item, {
        className: f.searchHeaderTab,
        id: h.QIO.NEWEST,
        children: y.intl.string(y.t.rLjqbW)
      }), (0, n.jsx)(l.njP.Item, {
        className: f.searchHeaderTab,
        id: h.QIO.OLDEST,
        children: y.intl.string(y.t.a1BaUl)
      }), (0, n.jsx)(l.njP.Item, {
        className: f.searchHeaderTab,
        id: h.QIO.MOST_RELEVANT,
        children: y.intl.string(y.t.FtR97u)
      })]
    })]
  })
}

function E(e) {
  let {
    totalResults: t,
    subtitle: r,
    isSearching: i,
    isIndexing: s,
    documentsIndexed: a
  } = e;
  return s ? (0, n.jsx)(g, {
    documentsIndexed: a
  }) : i ? (0, n.jsx)(O, {}) : (0, n.jsx)(m, {
    totalResults: t,
    subtitle: r
  })
}

function b() {
  return (0, n.jsx)("div", {
    className: f.spinnerWrapper,
    children: (0, n.jsx)(l.$jN, {
      type: l.$jN.Type.SPINNING_CIRCLE,
      className: f.spinner,
      itemClassName: f.spinnerPath
    })
  })
}

function g(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, n.jsx)(l.ua7, {
    text: y.intl.formatToPlainString(y.t["4Y3O+P"], {
      count: t
    }),
    children: e => {
      var t, r;
      return (0, n.jsxs)("div", (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({
        className: f.totalResultsWrapper
      }, e), r = r = {
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: (0, n.jsx)(l.eee, {
            className: f.helpdeskLink,
            href: o.Z.getArticleURL(h.BhN.SEARCH_INDEXING),
            children: y.intl.string(y.t["G3EA+/"])
          })
        }), (0, n.jsx)(b, {})]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  })
}

function O() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: y.intl.string(y.t.uixzLS)
    }), (0, n.jsx)(b, {})]
  })
}

function m(e) {
  let {
    totalResults: t,
    subtitle: r
  } = e, s = i.useMemo(() => t.toLocaleString(), [t]), a = (0, n.jsx)(l.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    children: y.intl.format(y.t.ZGVL3t, {
      count: s
    })
  });
  return null != r ? (0, n.jsxs)("div", {
    className: f.totalResultsWithSubtitle,
    children: [a, (0, n.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: r
    })]
  }) : a
}