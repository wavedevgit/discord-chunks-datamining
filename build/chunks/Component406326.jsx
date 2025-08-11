/** Chunk was on 49152 **/
/** chunk id: 406326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk833103 = require("./833103.jsx"),
  Chunk607802 = require("./607802.js"),
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk770092 = require("./770092.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107242 = require("./107242.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    searchContext: t,
    searchMode: l,
    onSearchModeChange: o,
    totalResults: x,
    isIndexing: j,
    isSearching: O,
    documentsIndexed: v
  } = e, C = (0, d.UX)({
    location: "SearchHeader"
  }), E = (0, h.xd)({
    isXDMSearch: t.type === f.aib.DMS,
    location: "SearchHeader"
  }), S = (0, p.I)(t), {
    totalFilters: I
  } = (0, c.hE)(S), Z = i.useMemo(() => {
    if (t.type === f.aib.DMS && C) {
      var e, n;
      let t = null != (n = null == (e = (0, u.$G)(S).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? g.intl.format(g.t.A2dqWF, {
        filterCount: t
      }) : g.intl.string(g.t.tc619f)
    }
    return null
  }, [C, t.type, S]), P = i.useMemo(() => [{
    label: g.intl.string(g.t.CbaapK),
    value: f.QIO.NEWEST
  }, {
    label: g.intl.string(g.t.OukXZm),
    value: f.QIO.OLDEST
  }, {
    label: g.intl.string(g.t["q8gB5+"]),
    value: f.QIO.MOST_RELEVANT
  }], []), T = i.useCallback(() => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37979").then(n.bind(n, 238088));
      return n => (0, r.jsx)(e, y(b({}, n), {
        searchContext: t
      }))
    })
  }, [t]), N = i.useMemo(() => I > 0 ? g.intl.format(g.t.uaR4sL, {
    filterCount: I
  }) : g.intl.string(g.t.UdhTtr), [I]);
  return (0, r.jsxs)("header", {
    className: a()(m.searchHeader, {
      [m.searchHeaderWithSubtitle]: null != Z
    }),
    children: [(0, r.jsx)("div", {
      className: m.totalResults,
      role: "status",
      children: (0, r.jsx)(_, {
        totalResults: x,
        subtitle: Z,
        isIndexing: j,
        isSearching: O,
        documentsIndexed: v
      })
    }), E ? (0, r.jsxs)("div", {
      className: m.searchModeAndFiltersContainer,
      children: [(0, r.jsx)(s.q4e, {
        options: P,
        value: l,
        onChange: o,
        look: s.qQH.CUSTOM,
        className: m.searchModeSelect,
        popoutWidth: 130
      }), (0, r.jsx)(s.zxk, {
        variant: "secondary",
        onClick: T,
        text: N,
        icon: s.gXV,
        size: "sm"
      })]
    }) : (0, r.jsxs)(s.njP, {
      orientation: "horizontal",
      className: m.searchHeaderTabList,
      selectedItem: l,
      onItemSelect: o,
      children: [(0, r.jsx)(s.njP.Item, {
        className: m.searchHeaderTab,
        id: f.QIO.NEWEST,
        children: g.intl.string(g.t.rLjqbW)
      }), (0, r.jsx)(s.njP.Item, {
        className: m.searchHeaderTab,
        id: f.QIO.OLDEST,
        children: g.intl.string(g.t.a1BaUl)
      }), (0, r.jsx)(s.njP.Item, {
        className: m.searchHeaderTab,
        id: f.QIO.MOST_RELEVANT,
        children: g.intl.string(g.t.FtR97u)
      })]
    })]
  })
}

function _(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? (0, r.jsx)(O, {
    documentsIndexed: a
  }) : i ? (0, r.jsx)(v, {}) : (0, r.jsx)(C, {
    totalResults: t,
    subtitle: n
  })
}

function j() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk107242.spinnerWrapper,
    children: (0, Chunk255367.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE,
      className: Chunk107242.spinner,
      itemClassName: Chunk107242.spinnerPath
    })
  })
}

function O(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, r.jsx)(s.ua7, {
    text: g.intl.formatToPlainString(g.t["4Y3O+P"], {
      count: t
    }),
    children: e => (0, r.jsxs)("div", y(b({
      className: m.totalResultsWrapper
    }, e), {
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, r.jsx)(s.eee, {
          className: m.helpdeskLink,
          href: o.Z.getArticleURL(f.BhN.SEARCH_INDEXING),
          children: g.intl.string(g.t["G3EA+/"])
        })
      }), (0, r.jsx)(j, {})]
    }))
  })
}

function v() {
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.uixzLS)
    }), (0, Chunk255367.jsx)(j, {})]
  })
}

function C(e) {
  let {
    totalResults: t,
    subtitle: n
  } = e, l = i.useMemo(() => t.toLocaleString(), [t]), a = (0, r.jsx)(s.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    children: g.intl.format(g.t.ZGVL3t, {
      count: l
    })
  });
  return null != n ? (0, r.jsxs)("div", {
    className: m.totalResultsWithSubtitle,
    children: [a, (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: n
    })]
  }) : a
}