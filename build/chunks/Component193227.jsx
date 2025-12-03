/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk870289 = require("./870289.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk253355 = require("./253355.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk258939 = require("./258939.js"),
  Chunk81136 = require("./81136.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk887353 = require("./887353.js");

function y(e) {
  let {
    category: t
  } = e, n = (0, s.e7)([u.default], () => u.default.getCurrentUser()), l = (0, p.l)(t.products), i = (0, g.a)()(l), o = (0, E.St)(i), a = (0, d.sp)();
  return null == n || 0 === o.length ? null : (0, r.jsx)("div", {
    className: S.cardsContainer,
    children: o.map((e, t) => (0, r.jsx)(d.k0, {
      newValue: {
        tilePosition: t
      },
      children: (0, r.jsx)(_.Z, {
        skuId: e.skuId,
        skipLimitedTimeCheck: true,
        onClickAnalytics: (0, b.wO)(e, O.AW.CATALOG, a)
      }, e.skuId)
    }, e.skuId))
  })
}

function j(e) {
  let {
    category: t
  } = e, [n, i] = l.useState(false), o = (0, a.O)(e => {
    i(e)
  }, .15);
  return (0, r.jsxs)("div", {
    className: S.categoryWrapper,
    ref: o,
    children: [(0, r.jsx)(h.Z, {
      category: t
    }), (0, r.jsx)(y, {
      category: t
    })]
  })
}

function I(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: i,
    currentPage: a,
    handlePageChange: s,
    initialCategoryId: u
  } = e, g = (0, d.sp)(), p = (0, v.R)(), h = null != (t = null == g ? true : g.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: b
  } = (0, x.Z)(), E = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), y = l.useRef(true);
  l.useEffect(() => {
    if (null == u || 0 === E.length) {
      y.current = true;
      return
    }
    if (u === y.current) return;
    let e = E.findIndex(e => e.skuId === u);
    if (false === e) return;
    let t = Math.floor(e / O.kN) + 1;
    t !== a && s(t), y.current = u
  }, [u, E, s, a]);
  let I = l.useMemo(() => {
    let e = (a - 1) * O.kN;
    return E.slice(e, e + O.kN)
  }, [E, a]);
  l.useEffect(() => {
    (0, m.n)({
      sessionId: h,
      checkpoint: m.a.SHOP_MOUNTED,
      tab: O.AW.CATALOG,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    p || 0 === I.length || (0, m.n)({
      sessionId: h,
      checkpoint: m.a.SHOP_RENDERED,
      tab: O.AW.CATALOG,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, [h, b, _, p, I.length]);
  let k = (0, f.FF)("CollectiblesBrowse");
  return p ? (0, r.jsx)(C.Z, {}) : (0, r.jsxs)("div", {
    className: o()(S.categories, {
      [S.categoriesNoFilter]: !k
    }),
    children: [I.map((e, t) => (0, r.jsx)("div", {
      ref: t => i(e.skuId, t),
      children: (0, r.jsx)(d.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(j, {
          category: e
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: S.paginationContainer,
      children: (0, r.jsx)(c.DsT, {
        currentPage: a,
        totalCount: E.length,
        pageSize: O.kN,
        onPageChange: s,
        disablePaginationGap: true
      })
    })]
  })
}