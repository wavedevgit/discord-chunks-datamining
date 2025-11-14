/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk128922 = require("./128922.js"),
  Chunk870289 = require("./870289.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk253355 = require("./253355.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk258939 = require("./258939.js"),
  Chunk81136 = require("./81136.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk887353 = require("./887353.js");

function k(e) {
  let {
    products: t,
    header: n,
    category: l
  } = e, i = (0, s.e7)([u.default], () => u.default.getCurrentUser()), a = (0, O.St)(t), o = g.Z.useConfig({
    location: "Products"
  }).showCardsV2, p = (0, d.sp)();
  return null == i || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != n ? (0, r.jsx)(c.Text, {
      className: j.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: n
    }) : (0, r.jsx)(c.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: j.cardsContainer,
      children: a.map((e, t) => (0, r.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: o ? (0, r.jsx)(v.Z, {
          skuId: e.skuId,
          skipLimitedTimeCheck: true,
          onClickAnalytics: (0, x.wO)(e, y.AW.CATALOG, p)
        }, e.skuId) : (0, r.jsx)(b.Z, {
          category: l,
          product: e,
          user: i,
          tab: y.AW.CATALOG,
          skipLimitedTimeCheck: true
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function I(e) {
  let {
    category: t
  } = e, n = (0, h.l)(t.products), l = (0, f.a)()(n);
  return (0, r.jsx)(k, {
    products: l,
    category: t
  })
}

function T(e) {
  let {
    category: t
  } = e, [n, i] = l.useState(false), a = (0, o.O)(e => {
    i(e)
  }, .15);
  return (0, r.jsxs)("div", {
    className: j.categoryWrapper,
    ref: a,
    children: [(0, r.jsx)(m.Z, {
      category: t
    }), (0, r.jsx)(I, {
      category: t
    })]
  })
}

function L(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: i,
    currentPage: o,
    handlePageChange: s
  } = e, u = (0, d.sp)(), g = (0, E.R)(), f = null != (t = null == u ? true : u.sessionId) ? t : "", {
    noCache: h,
    includeUnpublished: m
  } = (0, S.Z)(), b = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), v = l.useMemo(() => {
    let e = (o - 1) * y.kN;
    return b.slice(e, e + y.kN)
  }, [b, o]);
  l.useEffect(() => {
    (0, C.n)({
      sessionId: f,
      checkpoint: C.a.SHOP_MOUNTED,
      tab: y.AW.CATALOG,
      unpublishedCategoriesShown: m,
      cacheDisabled: h
    })
  }, []), l.useEffect(() => {
    g || 0 === v.length || (0, C.n)({
      sessionId: f,
      checkpoint: C.a.SHOP_RENDERED,
      tab: y.AW.CATALOG,
      unpublishedCategoriesShown: m,
      cacheDisabled: h
    })
  }, [f, m, h, g, v.length]);
  let x = (0, p.FF)("CollectiblesBrowse");
  return g ? (0, r.jsx)(_.Z, {}) : (0, r.jsxs)("div", {
    className: a()(j.categories, {
      [j.categoriesNoFilter]: !x
    }),
    children: [v.map((e, t) => (0, r.jsx)("div", {
      ref: t => i(e.skuId, t),
      children: (0, r.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(T, {
          category: e
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: j.paginationContainer,
      children: (0, r.jsx)(c.DsT, {
        currentPage: o,
        totalCount: b.length,
        pageSize: y.kN,
        onPageChange: s,
        disablePaginationGap: true
      })
    })]
  })
}