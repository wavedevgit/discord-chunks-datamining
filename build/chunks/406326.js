/** Chunk was on 50874 **/
r.d(t, {
  Z: () => y
});
var n = r(255367),
  i = r(73800),
  a = r(120356),
  s = r.n(a),
  l = r(442837),
  c = r(481060),
  o = r(63063),
  u = r(518944),
  d = r(607802),
  _ = r(945577),
  h = r(28964),
  f = r(981631),
  p = r(388032),
  b = r(107242);

function y(e) {
  let {
    searchId: t,
    searchMode: r,
    onSearchModeChange: a,
    totalResults: o,
    isIndexing: y,
    isSearching: O,
    documentsIndexed: E
  } = e, S = (0, _.U)({
    location: "SearchHeader"
  }), m = (0, h.xd)({
    isXDMSearch: t === f.aib.DMS,
    location: "SearchHeader"
  }), j = (0, l.e7)([u.Z], () => u.Z.getSearchResultsQueryString(t)), P = i.useMemo(() => {
    if (t === f.aib.DMS && S) {
      var e, r;
      let t = (0, d.kG)(null != j ? j : ""),
        n = null != (r = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? r : 0;
      return n > 0 ? p.intl.format(p.t.A2dqWF, {
        filterCount: n
      }) : p.intl.string(p.t.tc619f)
    }
    return null
  }, [t, S, j]), x = i.useMemo(() => [{
    label: p.intl.string(p.t.CbaapK),
    value: f.QIO.NEWEST
  }, {
    label: p.intl.string(p.t.OukXZm),
    value: f.QIO.OLDEST
  }, {
    label: p.intl.string(p.t["q8gB5+"]),
    value: f.QIO.MOST_RELEVANT
  }], []);
  return (0, n.jsxs)("header", {
    className: s()(b.searchHeader, {
      [b.searchHeaderWithSubtitle]: null != P
    }),
    children: [(0, n.jsx)("div", {
      className: b.totalResults,
      role: "status",
      children: (0, n.jsx)(g, {
        totalResults: o,
        subtitle: P,
        isIndexing: y,
        isSearching: O,
        documentsIndexed: E
      })
    }), m && t !== f.aib.DMS ? (0, n.jsxs)("div", {
      className: b.searchModeAndFiltersContainer,
      children: [(0, n.jsx)(c.q4e, {
        options: x,
        value: r,
        onChange: a,
        look: c.qQH.CUSTOM,
        className: b.searchModeSelect,
        popoutWidth: 130
      }), (0, n.jsx)(c.zxk, {
        variant: "secondary",
        text: p.intl.string(p.t.UdhTtr),
        icon: c.gXV,
        size: "sm"
      })]
    }) : (0, n.jsxs)(c.njP, {
      orientation: "horizontal",
      className: b.searchHeaderTabList,
      selectedItem: r,
      onItemSelect: a,
      children: [(0, n.jsx)(c.njP.Item, {
        className: b.searchHeaderTab,
        id: f.QIO.NEWEST,
        children: p.intl.string(p.t.rLjqbW)
      }), (0, n.jsx)(c.njP.Item, {
        className: b.searchHeaderTab,
        id: f.QIO.OLDEST,
        children: p.intl.string(p.t.a1BaUl)
      }), (0, n.jsx)(c.njP.Item, {
        className: b.searchHeaderTab,
        id: f.QIO.MOST_RELEVANT,
        children: p.intl.string(p.t.FtR97u)
      })]
    })]
  })
}

function g(e) {
  let {
    totalResults: t,
    subtitle: r,
    isSearching: i,
    isIndexing: a,
    documentsIndexed: s
  } = e;
  return a ? (0, n.jsx)(E, {
    documentsIndexed: s
  }) : i ? (0, n.jsx)(S, {}) : (0, n.jsx)(m, {
    totalResults: t,
    subtitle: r
  })
}

function O() {
  return (0, n.jsx)("div", {
    className: b.spinnerWrapper,
    children: (0, n.jsx)(c.$jN, {
      type: c.$jN.Type.SPINNING_CIRCLE,
      className: b.spinner,
      itemClassName: b.spinnerPath
    })
  })
}

function E(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, n.jsx)(c.ua7, {
    text: p.intl.formatToPlainString(p.t["4Y3O+P"], {
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
        className: b.totalResultsWrapper
      }, e), r = r = {
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: (0, n.jsx)(c.eee, {
            className: b.helpdeskLink,
            href: o.Z.getArticleURL(f.BhN.SEARCH_INDEXING),
            children: p.intl.string(p.t["G3EA+/"])
          })
        }), (0, n.jsx)(O, {})]
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

function S() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: p.intl.string(p.t.uixzLS)
    }), (0, n.jsx)(O, {})]
  })
}

function m(e) {
  let {
    totalResults: t,
    subtitle: r
  } = e, a = i.useMemo(() => t.toLocaleString(), [t]), s = (0, n.jsx)(c.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    children: p.intl.format(p.t.ZGVL3t, {
      count: a
    })
  });
  return null != r ? (0, n.jsxs)("div", {
    className: b.totalResultsWithSubtitle,
    children: [s, (0, n.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: r
    })]
  }) : s
}