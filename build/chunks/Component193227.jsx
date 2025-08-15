/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk870289 = require("./870289.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk823941 = require("./823941.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk258939 = require("./258939.js"),
  Chunk81136 = require("./81136.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk887353 = require("./887353.js");

function S(e) {
  let {
    products: t,
    header: r,
    category: l
  } = e, a = (0, o.e7)([u.default], () => u.default.getCurrentUser()), i = (0, C.St)(t);
  return null == a || 0 === t.length ? null : (0, n.jsxs)("div", {
    children: [null != r ? (0, n.jsx)(s.Text, {
      className: y.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: r
    }) : (0, n.jsx)(s.LZC, {
      size: 24
    }), (0, n.jsx)("div", {
      className: y.cardsContainer,
      children: i.map((e, t) => (0, n.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, n.jsx)(_.Z, {
          category: l,
          product: e,
          user: a,
          tab: E.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function x(e) {
  let {
    category: t
  } = e, r = (0, f.l)(t.products), l = (0, g.a)()(r);
  return (0, n.jsx)(S, {
    products: l,
    category: t
  })
}

function j(e) {
  let {
    category: t,
    isFullScreen: r
  } = e, [a, i] = l.useState(false), o = (0, c.O)(e => {
    i(e)
  }, r ? .13 : .15);
  return (0, n.jsxs)("div", {
    className: y.categoryWrapper,
    ref: o,
    children: [(0, n.jsx)(m.Z, {
      category: t,
      hideLimitedTimeBadge: false
    }), (0, n.jsx)(x, {
      category: t
    })]
  })
}

function P(e) {
  var t;
  let {
    sortedCategories: r,
    setCategoryRef: a,
    isFullScreen: o,
    currentPage: c,
    handlePageChange: u
  } = e, g = (0, d.sp)(), f = (0, v.R)(), m = null != (t = null == g ? true : g.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: C
  } = (0, O.Z)(), S = l.useMemo(() => r.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [r]), x = l.useMemo(() => {
    let e = (c - 1) * E.kN;
    return S.slice(e, e + E.kN)
  }, [S, c]);
  l.useEffect(() => {
    (0, b.n)({
      sessionId: m,
      checkpoint: b.a.SHOP_MOUNTED,
      tab: E.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: C,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    f || 0 === x.length || (0, b.n)({
      sessionId: m,
      checkpoint: b.a.SHOP_RENDERED,
      tab: E.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: C,
      cacheDisabled: _
    })
  }, [m, o, C, _, f, x.length]);
  let P = (0, p.FF)("CollectiblesBrowse");
  return f ? (0, n.jsx)(h.Z, {}) : (0, n.jsxs)("div", {
    className: i()(y.categories, {
      [y.categoriesNoFilter]: !P
    }),
    children: [x.map((e, t) => (0, n.jsx)("div", {
      ref: t => a(e.skuId, t),
      children: (0, n.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, n.jsx)(j, {
          category: e,
          isFullScreen: o
        })
      })
    }, e.skuId)), (0, n.jsx)("div", {
      className: y.paginationContainer,
      children: (0, n.jsx)(s.DsT, {
        currentPage: c,
        totalCount: S.length,
        pageSize: E.kN,
        onPageChange: u,
        disablePaginationGap: true
      })
    })]
  })
}