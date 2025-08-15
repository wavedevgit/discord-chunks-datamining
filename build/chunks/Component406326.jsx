/** Chunk was on 73551 **/
/** chunk id: 406326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk865239 = require("./865239.js");

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

function _(e) {
  let {
    searchContext: t,
    searchMode: l,
    onSearchModeChange: s,
    totalResults: _,
    isIndexing: x,
    isSearching: v,
    documentsIndexed: j
  } = e, O = (0, d.UX)({
    location: "SearchHeader"
  }), E = (0, p.xd)({
    isXDMSearch: t.type === f.aib.DMS,
    location: "SearchHeader"
  }), S = (0, h.I)(t), {
    totalFilters: P
  } = (0, c.hE)(S), I = i.useMemo(() => {
    if (t.type === f.aib.DMS && O) {
      var e, n;
      let t = null != (n = null == (e = (0, u.$G)(S).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? m.intl.format(m.t.A2dqWF, {
        filterCount: t
      }) : m.intl.string(m.t.tc619f)
    }
    return null
  }, [O, t.type, S]), Z = i.useMemo(() => [{
    label: m.intl.string(m.t.CbaapK),
    value: f.QIO.NEWEST
  }, {
    label: m.intl.string(m.t.OukXZm),
    value: f.QIO.OLDEST
  }, {
    label: m.intl.string(m.t["q8gB5+"]),
    value: f.QIO.MOST_RELEVANT
  }], []), T = i.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("37979").then(n.bind(n, 238088));
      return n => (0, r.jsx)(e, y(b({}, n), {
        searchContext: t
      }))
    })
  }, [t]), N = i.useMemo(() => P > 0 ? m.intl.format(m.t.uaR4sL, {
    filterCount: P
  }) : m.intl.string(m.t.UdhTtr), [P]);
  return (0, r.jsxs)("header", {
    className: a()(g.searchHeader, {
      [g.searchHeaderWithSubtitle]: null != I
    }),
    children: [(0, r.jsx)("div", {
      className: g.totalResults,
      role: "status",
      children: (0, r.jsx)(C, {
        totalResults: _,
        subtitle: I,
        isIndexing: x,
        isSearching: v,
        documentsIndexed: j
      })
    }), E ? (0, r.jsxs)("div", {
      className: g.searchModeAndFiltersContainer,
      children: [(0, r.jsx)(o.q4e, {
        options: Z,
        value: l,
        onChange: s,
        look: o.qQH.CUSTOM,
        className: g.searchModeSelect,
        popoutWidth: 130
      }), (0, r.jsx)(o.zxk, {
        variant: "secondary",
        onClick: T,
        text: N,
        icon: o.gXV,
        size: "sm"
      })]
    }) : (0, r.jsxs)(o.njP, {
      orientation: "horizontal",
      className: g.searchHeaderTabList,
      selectedItem: l,
      onItemSelect: s,
      children: [(0, r.jsx)(o.njP.Item, {
        className: g.searchHeaderTab,
        id: f.QIO.NEWEST,
        children: m.intl.string(m.t.rLjqbW)
      }), (0, r.jsx)(o.njP.Item, {
        className: g.searchHeaderTab,
        id: f.QIO.OLDEST,
        children: m.intl.string(m.t.a1BaUl)
      }), (0, r.jsx)(o.njP.Item, {
        className: g.searchHeaderTab,
        id: f.QIO.MOST_RELEVANT,
        children: m.intl.string(m.t.FtR97u)
      })]
    })]
  })
}

function C(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? (0, r.jsx)(v, {
    documentsIndexed: a
  }) : i ? (0, r.jsx)(j, {}) : (0, r.jsx)(O, {
    totalResults: t,
    subtitle: n
  })
}

function x() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk865239.spinnerWrapper,
    children: (0, Chunk255367.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE,
      className: Chunk865239.spinner,
      itemClassName: Chunk865239.spinnerPath
    })
  })
}

function v(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, r.jsx)(o.ua7, {
    text: m.intl.formatToPlainString(m.t["4Y3O+P"], {
      count: t
    }),
    children: e => (0, r.jsxs)("div", y(b({
      className: g.totalResultsWrapper
    }, e), {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, r.jsx)(o.eee, {
          className: g.helpdeskLink,
          href: s.Z.getArticleURL(f.BhN.SEARCH_INDEXING),
          children: m.intl.string(m.t["G3EA+/"])
        })
      }), (0, r.jsx)(x, {})]
    }))
  })
}

function j() {
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.uixzLS)
    }), (0, Chunk255367.jsx)(x, {})]
  })
}

function O(e) {
  let {
    totalResults: t,
    subtitle: n
  } = e, l = i.useMemo(() => t.toLocaleString(), [t]), a = (0, r.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    children: m.intl.format(m.t.ZGVL3t, {
      count: l
    })
  });
  return null != n ? (0, r.jsxs)("div", {
    className: g.totalResultsWithSubtitle,
    children: [a, (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: n
    })]
  }) : a
}