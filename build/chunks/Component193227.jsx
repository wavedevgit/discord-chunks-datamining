/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  } = e, s = (0, o.e7)([u.default], () => u.default.getCurrentUser()), i = (0, x.St)(t), a = g.Z.useConfig({
    location: "Products"
  }).showCardsV2;
  return null == s || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != n ? (0, r.jsx)(c.Text, {
      className: y.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: n
    }) : (0, r.jsx)(c.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: y.cardsContainer,
      children: i.map((e, t) => (0, r.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: a ? (0, r.jsx)(E.Z, {
          skuId: e.skuId
        }, e.skuId) : (0, r.jsx)(b.Z, {
          category: l,
          product: e,
          user: s,
          tab: O.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function j(e) {
  let {
    category: t
  } = e, n = (0, C.l)(t.products), l = (0, p.a)()(n);
  return (0, r.jsx)(T, {
    products: l,
    category: t
  })
}

function k(e) {
  let {
    category: t,
    isFullScreen: n
  } = e, [s, i] = l.useState(false), o = (0, a.O)(e => {
    i(e)
  }, n ? .13 : .15);
  return (0, r.jsxs)("div", {
    className: y.categoryWrapper,
    ref: o,
    children: [(0, r.jsx)(_.Z, {
      category: t
    }), (0, r.jsx)(j, {
      category: t
    })]
  })
}

function L(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: s,
    isFullScreen: a,
    currentPage: o,
    handlePageChange: u
  } = e, g = (0, d.sp)(), p = (0, S.R)(), C = null != (t = null == g ? true : g.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: b
  } = (0, v.Z)(), E = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), x = l.useMemo(() => {
    let e = (o - 1) * O.kN;
    return E.slice(e, e + O.kN)
  }, [E, o]);
  l.useEffect(() => {
    (0, h.n)({
      sessionId: C,
      checkpoint: h.a.SHOP_MOUNTED,
      tab: O.AW.CATALOG,
      isFullScreen: a,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    p || 0 === x.length || (0, h.n)({
      sessionId: C,
      checkpoint: h.a.SHOP_RENDERED,
      tab: O.AW.CATALOG,
      isFullScreen: a,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, [C, a, b, _, p, x.length]);
  let T = (0, f.FF)("CollectiblesBrowse");
  return p ? (0, r.jsx)(m.Z, {}) : (0, r.jsxs)("div", {
    className: i()(y.categories, {
      [y.categoriesNoFilter]: !T
    }),
    children: [x.map((e, t) => (0, r.jsx)("div", {
      ref: t => s(e.skuId, t),
      children: (0, r.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(k, {
          category: e,
          isFullScreen: a
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: y.paginationContainer,
      children: (0, r.jsx)(c.DsT, {
        currentPage: o,
        totalCount: E.length,
        pageSize: O.kN,
        onPageChange: u,
        disablePaginationGap: true
      })
    })]
  })
}