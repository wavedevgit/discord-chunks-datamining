/** Chunk was on 63962 **/
/** chunk id: 406326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk607802 = require("./607802.js"),
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk465524 = require("./465524.jsx"),
  Chunk770092 = require("./770092.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250990 = require("./250990.js");

function y(e) {
  let {
    searchContext: t,
    searchMode: l,
    onSearchModeChange: s,
    totalResults: c,
    isIndexing: y,
    isSearching: O,
    documentsIndexed: j
  } = e, v = (0, u.UX)({
    location: "SearchHeader"
  }), x = (0, p.nP)({
    location: "SearchHeader"
  }), C = (0, p.KS)({
    location: "SearchHeader"
  }), I = (0, f.I)(t), {
    totalFilters: E
  } = (0, h.p4)(I, t), S = i.useMemo(() => {
    if (t.type === g.aib.DMS && v) {
      var e, n;
      let t = null != (n = null == (e = (0, d.$G)(I).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? m.intl.format(m.t.A2dqWF, {
        filterCount: t
      }) : m.intl.string(m.t.tc619f)
    }
    return null
  }, [v, t.type, I]), Z = i.useMemo(() => [{
    label: m.intl.string(m.t.CbaapK),
    value: g.QIO.NEWEST
  }, {
    label: m.intl.string(m.t.OukXZm),
    value: g.QIO.OLDEST
  }, {
    label: m.intl.string(m.t["q8gB5+"]),
    value: g.QIO.MOST_RELEVANT
  }], []), P = i.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("37979"), n.e("386")]).then(n.bind(n, 238088));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), l = l = {
          searchContext: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, [t]), T = i.useMemo(() => E > 0 ? m.intl.format(m.t.uaR4sL, {
    filterCount: E
  }) : m.intl.string(m.t.UdhTtr), [E]);
  return (0, r.jsxs)("header", {
    className: a()(b.searchHeader, {
      [b.searchHeaderWithSubtitle]: null != S
    }),
    children: [(0, r.jsx)("div", {
      className: b.totalResults,
      role: "status",
      children: (0, r.jsx)(_, {
        totalResults: c,
        subtitle: S,
        isIndexing: y,
        isSearching: O,
        documentsIndexed: j
      })
    }), x || C ? (0, r.jsxs)("div", {
      className: b.searchModeAndFiltersContainer,
      children: [(0, r.jsx)(o.q4e, {
        options: Z,
        value: l,
        onChange: s,
        popoutWidth: 130,
        size: "sm"
      }), (0, r.jsx)(o.zxk, {
        variant: "secondary",
        onClick: P,
        text: T,
        icon: o.gXV,
        size: "sm"
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

function _(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? (0, r.jsx)(j, {
    documentsIndexed: a
  }) : i ? (0, r.jsx)(v, {}) : (0, r.jsx)(x, {
    totalResults: t,
    subtitle: n
  })
}

function O() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk250990.spinnerWrapper,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE,
      className: Chunk250990.spinner,
      itemClassName: Chunk250990.spinnerPath
    })
  })
}

function j(e) {
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
      }), (0, r.jsx)(O, {})]
    })
  })
}

function v() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.uixzLS)
    }), (0, Chunk951288.jsx)(O, {})]
  })
}

function x(e) {
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