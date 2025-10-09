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
  } = e, i = (0, a.e7)([u.default], () => u.default.getCurrentUser()), s = (0, O.St)(t), o = g.Z.useConfig({
    location: "Products"
  }).showCardsV2;
  return null == i || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != n ? (0, r.jsx)(c.Text, {
      className: y.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: n
    }) : (0, r.jsx)(c.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: y.cardsContainer,
      children: s.map((e, t) => (0, r.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: o ? (0, r.jsx)(E.Z, {
          skuId: e.skuId
        }, e.skuId) : (0, r.jsx)(b.Z, {
          category: l,
          product: e,
          user: i,
          tab: x.AW.CATALOG
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

function L(e) {
  let {
    category: t,
    isFullScreen: n
  } = e, [i, s] = l.useState(false), a = (0, o.O)(e => {
    s(e)
  }, n ? .13 : .15);
  return (0, r.jsxs)("div", {
    className: y.categoryWrapper,
    ref: a,
    children: [(0, r.jsx)(_.Z, {
      category: t
    }), (0, r.jsx)(j, {
      category: t
    })]
  })
}

function k(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: i,
    isFullScreen: o,
    currentPage: a,
    handlePageChange: u
  } = e, g = (0, d.sp)(), p = (0, v.R)(), C = null != (t = null == g ? true : g.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: b
  } = (0, S.Z)(), E = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), O = l.useMemo(() => {
    let e = (a - 1) * x.kN;
    return E.slice(e, e + x.kN)
  }, [E, a]);
  l.useEffect(() => {
    (0, h.n)({
      sessionId: C,
      checkpoint: h.a.SHOP_MOUNTED,
      tab: x.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    p || 0 === O.length || (0, h.n)({
      sessionId: C,
      checkpoint: h.a.SHOP_RENDERED,
      tab: x.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, [C, o, b, _, p, O.length]);
  let T = (0, f.FF)("CollectiblesBrowse");
  return p ? (0, r.jsx)(m.Z, {}) : (0, r.jsxs)("div", {
    className: s()(y.categories, {
      [y.categoriesNoFilter]: !T
    }),
    children: [O.map((e, t) => (0, r.jsx)("div", {
      ref: t => i(e.skuId, t),
      children: (0, r.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(L, {
          category: e,
          isFullScreen: o
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: y.paginationContainer,
      children: (0, r.jsx)(c.DsT, {
        currentPage: a,
        totalCount: E.length,
        pageSize: x.kN,
        onPageChange: u,
        disablePaginationGap: true
      })
    })]
  })
}