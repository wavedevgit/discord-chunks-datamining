/** Chunk was on 93239 **/
r.d(t, {
  Z: () => E
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
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function E(e) {
  let {
    searchContext: t,
    searchMode: s,
    onSearchModeChange: o,
    totalResults: E,
    isIndexing: O,
    isSearching: m,
    documentsIndexed: P
  } = e, j = (0, _.U)({
    location: "SearchHeader"
  }), R = (0, p.xd)({
    isXDMSearch: t.type === h.aib.DMS,
    location: "SearchHeader"
  }), x = (0, d.WJ)(t), v = (0, c.e7)([u.Z], () => u.Z.getSearchResultsQueryString(x)), C = i.useMemo(() => {
    if (t.type === h.aib.DMS && j) {
      var e, r;
      let t = (0, d.kG)(null != v ? v : ""),
        n = null != (r = null == (e = (0, d.$G)(t).channel_id) ? void 0 : e.length) ? r : 0;
      return n > 0 ? y.intl.format(y.t.A2dqWF, {
        filterCount: n
      }) : y.intl.string(y.t.tc619f)
    }
    return null
  }, [j, t.type, v]), I = i.useMemo(() => [{
    label: y.intl.string(y.t.CbaapK),
    value: h.QIO.NEWEST
  }, {
    label: y.intl.string(y.t.OukXZm),
    value: h.QIO.OLDEST
  }, {
    label: y.intl.string(y.t["q8gB5+"]),
    value: h.QIO.MOST_RELEVANT
  }], []), Z = i.useCallback(() => {
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await r.e("37979").then(r.bind(r, 238088));
      return r => (0, n.jsx)(e, b(S({}, r), {
        searchContext: t
      }))
    })
  }, [t]);
  return (0, n.jsxs)("header", {
    className: a()(f.searchHeader, {
      [f.searchHeaderWithSubtitle]: null != C
    }),
    children: [(0, n.jsx)("div", {
      className: f.totalResults,
      role: "status",
      children: (0, n.jsx)(g, {
        totalResults: E,
        subtitle: C,
        isIndexing: O,
        isSearching: m,
        documentsIndexed: P
      })
    }), R ? (0, n.jsxs)("div", {
      className: f.searchModeAndFiltersContainer,
      children: [(0, n.jsx)(l.q4e, {
        options: I,
        value: s,
        onChange: o,
        look: l.qQH.CUSTOM,
        className: f.searchModeSelect,
        popoutWidth: 130
      }), (0, n.jsx)(l.zxk, {
        variant: "secondary",
        onClick: Z,
        text: y.intl.string(y.t.UdhTtr),
        icon: l.gXV,
        size: "sm"
      })]
    }) : (0, n.jsxs)(l.njP, {
      orientation: "horizontal",
      className: f.searchHeaderTabList,
      selectedItem: s,
      onItemSelect: o,
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

function g(e) {
  let {
    totalResults: t,
    subtitle: r,
    isSearching: i,
    isIndexing: s,
    documentsIndexed: a
  } = e;
  return s ? (0, n.jsx)(m, {
    documentsIndexed: a
  }) : i ? (0, n.jsx)(P, {}) : (0, n.jsx)(j, {
    totalResults: t,
    subtitle: r
  })
}

function O() {
  return (0, n.jsx)("div", {
    className: f.spinnerWrapper,
    children: (0, n.jsx)(l.$jN, {
      type: l.$jN.Type.SPINNING_CIRCLE,
      className: f.spinner,
      itemClassName: f.spinnerPath
    })
  })
}

function m(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, n.jsx)(l.ua7, {
    text: y.intl.formatToPlainString(y.t["4Y3O+P"], {
      count: t
    }),
    children: e => (0, n.jsxs)("div", b(S({
      className: f.totalResultsWrapper
    }, e), {
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, n.jsx)(l.eee, {
          className: f.helpdeskLink,
          href: o.Z.getArticleURL(h.BhN.SEARCH_INDEXING),
          children: y.intl.string(y.t["G3EA+/"])
        })
      }), (0, n.jsx)(O, {})]
    }))
  })
}

function P() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: y.intl.string(y.t.uixzLS)
    }), (0, n.jsx)(O, {})]
  })
}

function j(e) {
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