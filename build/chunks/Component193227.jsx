/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk870289 = require("./870289.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk253355 = require("./253355.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk258939 = require("./258939.js"),
  Chunk81136 = require("./81136.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk887353 = require("./887353.js");

function x(e) {
  let {
    products: t,
    header: n,
    category: l
  } = e, a = (0, i.e7)([u.default], () => u.default.getCurrentUser()), s = (0, S.St)(t);
  return null == a || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != n ? (0, r.jsx)(o.Text, {
      className: v.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: n
    }) : (0, r.jsx)(o.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: v.cardsContainer,
      children: s.map((e, t) => (0, r.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(m.Z, {
          category: l,
          product: e,
          user: a,
          tab: O.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function T(e) {
  let {
    category: t
  } = e, n = (0, f.l)(t.products), l = (0, p.a)()(n);
  return (0, r.jsx)(x, {
    products: l,
    category: t
  })
}

function y(e) {
  let {
    category: t,
    isFullScreen: n
  } = e, [a, s] = l.useState(false), i = (0, c.O)(e => {
    s(e)
  }, n ? .13 : .15);
  return (0, r.jsxs)("div", {
    className: v.categoryWrapper,
    ref: i,
    children: [(0, r.jsx)(h.Z, {
      category: t
    }), (0, r.jsx)(T, {
      category: t
    })]
  })
}

function L(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: a,
    isFullScreen: i,
    currentPage: c,
    handlePageChange: u
  } = e, p = (0, d.sp)(), f = (0, b.R)(), h = null != (t = null == p ? true : p.sessionId) ? t : "", {
    noCache: m,
    includeUnpublished: S
  } = (0, E.Z)(), x = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), T = l.useMemo(() => {
    let e = (c - 1) * O.kN;
    return x.slice(e, e + O.kN)
  }, [x, c]);
  l.useEffect(() => {
    (0, _.n)({
      sessionId: h,
      checkpoint: _.a.SHOP_MOUNTED,
      tab: O.AW.CATALOG,
      isFullScreen: i,
      unpublishedCategoriesShown: S,
      cacheDisabled: m
    })
  }, []), l.useEffect(() => {
    f || 0 === T.length || (0, _.n)({
      sessionId: h,
      checkpoint: _.a.SHOP_RENDERED,
      tab: O.AW.CATALOG,
      isFullScreen: i,
      unpublishedCategoriesShown: S,
      cacheDisabled: m
    })
  }, [h, i, S, m, f, T.length]);
  let L = (0, g.FF)("CollectiblesBrowse");
  return f ? (0, r.jsx)(C.Z, {}) : (0, r.jsxs)("div", {
    className: s()(v.categories, {
      [v.categoriesNoFilter]: !L
    }),
    children: [T.map((e, t) => (0, r.jsx)("div", {
      ref: t => a(e.skuId, t),
      children: (0, r.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(y, {
          category: e,
          isFullScreen: i
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: v.paginationContainer,
      children: (0, r.jsx)(o.DsT, {
        currentPage: c,
        totalCount: x.length,
        pageSize: O.kN,
        onPageChange: u,
        disablePaginationGap: true
      })
    })]
  })
}