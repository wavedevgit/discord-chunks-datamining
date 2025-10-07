/** Chunk was on 91053 **/
/** chunk id: 406326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk607802 = require("./607802.js"),
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk465524 = require("./465524.jsx"),
  Chunk770092 = require("./770092.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865239 = require("./865239.js");

function y(e) {
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

function _(e, t) {
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

function j(e) {
  let {
    searchContext: t,
    searchMode: l,
    onSearchModeChange: s,
    totalResults: c,
    isIndexing: j,
    isSearching: x,
    documentsIndexed: v
  } = e, C = (0, u.UX)({
    location: "SearchHeader"
  }), I = (0, p.nP)({
    location: "SearchHeader"
  }), S = (0, p.KS)({
    location: "SearchHeader"
  }), Z = (0, f.I)(t), {
    totalFilters: T
  } = (0, h.p4)(Z, t), P = i.useMemo(() => {
    if (t.type === g.aib.DMS && C) {
      var e, n;
      let t = null != (n = null == (e = (0, d.$G)(Z).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? m.intl.format(m.t.A2dqWF, {
        filterCount: t
      }) : m.intl.string(m.t.tc619f)
    }
    return null
  }, [C, t.type, Z]), N = i.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("37979"), n.e("57390")]).then(n.bind(n, 238088));
      return n => (0, r.jsx)(e, _(y({}, n), {
        searchContext: t
      }))
    })
  }, [t]), R = i.useMemo(() => T > 0 ? m.intl.format(m.t.uaR4sL, {
    filterCount: T
  }) : m.intl.string(m.t.UdhTtr), [T]);
  return (0, r.jsxs)("header", {
    className: a()(b.searchHeader, {
      [b.searchHeaderWithSubtitle]: null != P
    }),
    children: [(0, r.jsx)("div", {
      className: b.totalResults,
      role: "status",
      children: (0, r.jsx)(O, {
        totalResults: c,
        subtitle: P,
        isIndexing: j,
        isSearching: x,
        documentsIndexed: v
      })
    }), I || S ? (0, r.jsxs)("div", {
      className: b.searchModeAndFiltersContainer,
      children: [(0, r.jsx)(o.zxk, {
        variant: "secondary",
        onClick: N,
        text: R,
        icon: o.gXV,
        size: "sm"
      }), (0, r.jsx)(E, {
        searchMode: l,
        onSearchModeChange: s
      })]
    }) : (0, r.jsxs)(o.njP, {
      orientation: "horizontal",
      className: b.searchHeaderTabList,
      selectedItem: l,
      onItemSelect: s,
      children: [(0, r.jsx)(o.njP.Item, {
        className: b.searchHeaderTab,
        id: g.QIO.NEWEST,
        children: m.intl.string(m.t.rLjqbW)
      }), (0, r.jsx)(o.njP.Item, {
        className: b.searchHeaderTab,
        id: g.QIO.OLDEST,
        children: m.intl.string(m.t.a1BaUl)
      }), (0, r.jsx)(o.njP.Item, {
        className: b.searchHeaderTab,
        id: g.QIO.MOST_RELEVANT,
        children: m.intl.string(m.t.FtR97u)
      })]
    })]
  })
}

function O(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? (0, r.jsx)(v, {
    documentsIndexed: a
  }) : i ? (0, r.jsx)(C, {}) : (0, r.jsx)(I, {
    totalResults: t,
    subtitle: n
  })
}

function x() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk865239.spinnerWrapper,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
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
  return (0, r.jsx)(s.u, {
    asContainer: true,
    text: m.intl.formatToPlainString(m.t["4Y3O+P"], {
      count: t
    }),
    children: (0, r.jsxs)("div", {
      className: b.totalResultsWrapper,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, r.jsx)(o.eee, {
          className: b.helpdeskLink,
          href: c.Z.getArticleURL(g.BhN.SEARCH_INDEXING),
          children: m.intl.string(m.t["G3EA+/"])
        })
      }), (0, r.jsx)(x, {})]
    })
  })
}

function C() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.uixzLS)
    }), (0, Chunk951288.jsx)(x, {})]
  })
}

function I(e) {
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
    className: b.totalResultsWithSubtitle,
    children: [a, (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: n
    })]
  }) : a
}

function E(e) {
  let {
    searchMode: t,
    onSearchModeChange: n
  } = e, l = i.useRef(null), [a, s] = i.useState(false), c = i.useMemo(() => [{
    label: m.intl.string(m.t.CbaapK),
    value: g.QIO.NEWEST
  }, {
    label: m.intl.string(m.t.OukXZm),
    value: g.QIO.OLDEST
  }, {
    label: m.intl.string(m.t["q8gB5+"]),
    value: g.QIO.MOST_RELEVANT
  }], []);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: l,
    shouldShow: a,
    animation: o.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    onRequestClose: () => s(false),
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "search-result-sort-menu",
        onClose: i,
        "aria-label": m.intl.string(m.t.utp2hY),
        onSelect: () => s(false),
        children: (0, r.jsx)(o.kSQ, {
          children: c.map(e => {
            let {
              label: i,
              value: l
            } = e;
            return (0, r.jsx)(o.k5B, {
              group: "sort-by",
              id: "sort-by-option-".concat(l),
              label: i,
              action: () => n(l),
              checked: t === l
            }, l)
          })
        })
      })
    },
    children: e => (0, r.jsx)(o.hU, _(y({}, e), {
      buttonRef: l,
      variant: "secondary",
      icon: o.uVW,
      onClick: () => {
        s(e => !e)
      },
      "aria-label": m.intl.string(m.t.XvNMNj),
      size: "sm"
    }))
  })
}