/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
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

function T(e) {
  let {
    products: t,
    header: n,
    category: l
  } = e, a = (0, o.e7)([u.default], () => u.default.getCurrentUser()), s = (0, v.St)(t);
  return null == a || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != n ? (0, r.jsx)(i.Text, {
      className: y.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: n
    }) : (0, r.jsx)(i.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: y.cardsContainer,
      children: s.map((e, t) => (0, r.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(E.Z, {
          category: l,
          product: e,
          user: a,
          tab: x.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function L(e) {
  let {
    category: t
  } = e, n = (0, m.l)(t.products), l = (0, p.a)()(n);
  return (0, r.jsx)(T, {
    products: l,
    category: t
  })
}

function j(e) {
  let {
    category: t,
    isFullScreen: n
  } = e, [a, s] = l.useState(false), o = (0, c.O)(e => {
    s(e)
  }, n ? .13 : .15), i = (0, f.B)("CollectiblesCatalogContent");
  return (0, r.jsxs)("div", {
    className: y.categoryWrapper,
    ref: o,
    children: [i && null != t.catalogBannerAsset ? (0, r.jsx)(_.Z, {
      category: t
    }) : (0, r.jsx)(C.Z, {
      category: t,
      hideLimitedTimeBadge: false
    }), (0, r.jsx)(L, {
      category: t
    })]
  })
}

function k(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: a,
    isFullScreen: o,
    currentPage: c,
    handlePageChange: u
  } = e, f = (0, d.sp)(), p = (0, S.R)(), m = null != (t = null == f ? true : f.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: C
  } = (0, O.Z)(), E = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), v = l.useMemo(() => {
    let e = (c - 1) * x.kN;
    return E.slice(e, e + x.kN)
  }, [E, c]);
  l.useEffect(() => {
    (0, h.n)({
      sessionId: m,
      checkpoint: h.a.SHOP_MOUNTED,
      tab: x.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: C,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    p || 0 === v.length || (0, h.n)({
      sessionId: m,
      checkpoint: h.a.SHOP_RENDERED,
      tab: x.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: C,
      cacheDisabled: _
    })
  }, [m, o, C, _, p, v.length]);
  let T = (0, g.FF)("CollectiblesBrowse");
  return p ? (0, r.jsx)(b.Z, {}) : (0, r.jsxs)("div", {
    className: s()(y.categories, {
      [y.categoriesNoFilter]: !T
    }),
    children: [v.map((e, t) => (0, r.jsx)("div", {
      ref: t => a(e.skuId, t),
      children: (0, r.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(j, {
          category: e,
          isFullScreen: o
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: y.paginationContainer,
      children: (0, r.jsx)(i.DsT, {
        currentPage: c,
        totalCount: E.length,
        pageSize: x.kN,
        onPageChange: u,
        disablePaginationGap: true
      })
    })]
  })
}