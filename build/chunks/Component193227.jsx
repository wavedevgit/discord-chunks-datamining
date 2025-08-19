/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
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
  Chunk456080 = require("./456080.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk253355 = require("./253355.jsx"),
  Chunk823941 = require("./823941.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk258939 = require("./258939.js"),
  Chunk81136 = require("./81136.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk887353 = require("./887353.js");

function j(e) {
  let {
    products: t,
    header: r,
    category: l
  } = e, a = (0, o.e7)([u.default], () => u.default.getCurrentUser()), i = (0, y.St)(t);
  return null == a || 0 === t.length ? null : (0, n.jsxs)("div", {
    children: [null != r ? (0, n.jsx)(s.Text, {
      className: x.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: r
    }) : (0, n.jsx)(s.LZC, {
      size: 24
    }), (0, n.jsx)("div", {
      className: x.cardsContainer,
      children: i.map((e, t) => (0, n.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, n.jsx)(O.Z, {
          category: l,
          product: e,
          user: a,
          tab: S.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function P(e) {
  let {
    category: t
  } = e, r = (0, m.l)(t.products), l = (0, f.a)()(r);
  return (0, n.jsx)(j, {
    products: l,
    category: t
  })
}

function T(e) {
  let {
    category: t,
    isFullScreen: r
  } = e, [a, i] = l.useState(false), o = (0, c.O)(e => {
    i(e)
  }, r ? .13 : .15), s = (0, g.B)("CollectiblesCatalogContent");
  return (0, n.jsxs)("div", {
    className: x.categoryWrapper,
    ref: o,
    children: [s && null != t.catalogBannerAsset ? (0, n.jsx)(h.Z, {
      category: t
    }) : (0, n.jsx)(_.Z, {
      category: t,
      hideLimitedTimeBadge: false
    }), (0, n.jsx)(P, {
      category: t
    })]
  })
}

function L(e) {
  var t;
  let {
    sortedCategories: r,
    setCategoryRef: a,
    isFullScreen: o,
    currentPage: c,
    handlePageChange: u
  } = e, g = (0, d.sp)(), f = (0, C.R)(), m = null != (t = null == g ? true : g.sessionId) ? t : "", {
    noCache: h,
    includeUnpublished: _
  } = (0, E.Z)(), O = l.useMemo(() => r.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [r]), y = l.useMemo(() => {
    let e = (c - 1) * S.kN;
    return O.slice(e, e + S.kN)
  }, [O, c]);
  l.useEffect(() => {
    (0, b.n)({
      sessionId: m,
      checkpoint: b.a.SHOP_MOUNTED,
      tab: S.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: _,
      cacheDisabled: h
    })
  }, []), l.useEffect(() => {
    f || 0 === y.length || (0, b.n)({
      sessionId: m,
      checkpoint: b.a.SHOP_RENDERED,
      tab: S.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: _,
      cacheDisabled: h
    })
  }, [m, o, _, h, f, y.length]);
  let j = (0, p.FF)("CollectiblesBrowse");
  return f ? (0, n.jsx)(v.Z, {}) : (0, n.jsxs)("div", {
    className: i()(x.categories, {
      [x.categoriesNoFilter]: !j
    }),
    children: [y.map((e, t) => (0, n.jsx)("div", {
      ref: t => a(e.skuId, t),
      children: (0, n.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, n.jsx)(T, {
          category: e,
          isFullScreen: o
        })
      })
    }, e.skuId)), (0, n.jsx)("div", {
      className: x.paginationContainer,
      children: (0, n.jsx)(s.DsT, {
        currentPage: c,
        totalCount: O.length,
        pageSize: S.kN,
        onPageChange: u,
        disablePaginationGap: true
      })
    })]
  })
}