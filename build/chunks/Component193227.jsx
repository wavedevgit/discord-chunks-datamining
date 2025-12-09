/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  } = e, n = (0, a.e7)([u.default], () => u.default.getCurrentUser()), l = (0, p.l)(t.products), i = (0, f.a)()(l), s = (0, S.St)(i), o = (0, d.sp)();
  return null == n || 0 === s.length ? null : (0, r.jsx)("div", {
    className: x.cardsContainer,
    children: s.map((e, t) => (0, r.jsx)(d.k0, {
      newValue: {
        tilePosition: t
      },
      children: (0, r.jsx)(_.Z, {
        skuId: e.skuId,
        skipLimitedTimeCheck: true,
        onClickAnalytics: (0, b.wO)(e, O.AW.CATALOG, o)
      }, e.skuId)
    }, e.skuId))
  })
}

function j(e) {
  let {
    category: t
  } = e, [n, i] = l.useState(false), s = (0, o.O)(e => {
    i(e)
  }, .15);
  return (0, r.jsxs)("div", {
    className: x.categoryWrapper,
    ref: s,
    children: [(0, r.jsx)(C.Z, {
      category: t
    }), (0, r.jsx)(y, {
      category: t
    })]
  })
}

function k(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: i,
    currentPage: o,
    handlePageChange: a,
    initialCategoryId: u
  } = e, f = (0, d.sp)(), p = (0, v.R)(), C = null != (t = null == f ? true : f.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: b
  } = (0, E.Z)(), S = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), y = l.useRef(true);
  l.useEffect(() => {
    if (null == u || 0 === S.length) {
      y.current = true;
      return
    }
    if (u === y.current) return;
    let e = S.findIndex(e => e.skuId === u);
    if (false === e) return;
    let t = Math.floor(e / O.kN) + 1;
    t !== o && a(t), y.current = u
  }, [u, S, a, o]);
  let k = l.useMemo(() => {
    let e = (o - 1) * O.kN;
    return S.slice(e, e + O.kN)
  }, [S, o]);
  l.useEffect(() => {
    (0, m.n)({
      sessionId: C,
      checkpoint: m.a.SHOP_MOUNTED,
      tab: O.AW.CATALOG,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    p || 0 === k.length || (0, m.n)({
      sessionId: C,
      checkpoint: m.a.SHOP_RENDERED,
      tab: O.AW.CATALOG,
      unpublishedCategoriesShown: b,
      cacheDisabled: _
    })
  }, [C, b, _, p, k.length]);
  let T = (0, g.FF)("CollectiblesBrowse");
  return p ? (0, r.jsx)(h.Z, {}) : (0, r.jsxs)("div", {
    className: s()(x.categories, {
      [x.categoriesNoFilter]: !T
    }),
    children: [k.map((e, t) => (0, r.jsx)("div", {
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
      className: x.paginationContainer,
      children: (0, r.jsx)(c.DsT, {
        currentPage: o,
        totalCount: S.length,
        pageSize: O.kN,
        onPageChange: a,
        disablePaginationGap: true
      })
    })]
  })
}