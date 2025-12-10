/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
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

function S(e) {
  let {
    category: t
  } = e, n = (0, o.e7)([a.default], () => a.default.getCurrentUser()), l = (0, d.l)(t.products), i = (0, u.a)()(l), s = (0, b.St)(i), g = (0, c.sp)();
  return null == n || 0 === s.length ? null : (0, r.jsx)("div", {
    className: E.cardsContainer,
    children: s.map((e, t) => (0, r.jsx)(c.k0, {
      newValue: {
        tilePosition: t
      },
      children: (0, r.jsx)(m.Z, {
        skuId: e.skuId,
        skipLimitedTimeCheck: true,
        onClickAnalytics: (0, h.wO)(e, v.AW.CATALOG, g)
      }, e.skuId)
    }, e.skuId))
  })
}

function O(e) {
  let {
    category: t
  } = e, [n, o] = l.useState(false), s = (0, i.O)(e => {
    o(e)
  }, .15);
  return (0, r.jsxs)("div", {
    className: E.categoryWrapper,
    ref: s,
    children: [(0, r.jsx)(f.Z, {
      category: t
    }), (0, r.jsx)(S, {
      category: t
    })]
  })
}

function x(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: i,
    currentPage: o,
    handlePageChange: a,
    initialCategoryId: u
  } = e, d = (0, c.sp)(), f = (0, C.R)(), m = null != (t = null == d ? true : d.sessionId) ? t : "", {
    noCache: h,
    includeUnpublished: b
  } = (0, _.Z)(), S = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), x = l.useRef(true);
  l.useEffect(() => {
    if (null == u || 0 === S.length) {
      x.current = true;
      return
    }
    if (u === x.current) return;
    let e = S.findIndex(e => e.skuId === u);
    if (false === e) return;
    let t = Math.floor(e / v.kN) + 1;
    t !== o && a(t), x.current = u
  }, [u, S, a, o]);
  let y = l.useMemo(() => {
    let e = (o - 1) * v.kN;
    return S.slice(e, e + v.kN)
  }, [S, o]);
  return (l.useEffect(() => {
    (0, g.n)({
      sessionId: m,
      checkpoint: g.a.SHOP_MOUNTED,
      tab: v.AW.CATALOG,
      unpublishedCategoriesShown: b,
      cacheDisabled: h
    })
  }, []), l.useEffect(() => {
    f || 0 === y.length || (0, g.n)({
      sessionId: m,
      checkpoint: g.a.SHOP_RENDERED,
      tab: v.AW.CATALOG,
      unpublishedCategoriesShown: b,
      cacheDisabled: h
    })
  }, [m, b, h, f, y.length]), f) ? (0, r.jsx)(p.Z, {}) : (0, r.jsxs)("div", {
    className: E.categories,
    children: [y.map((e, t) => (0, r.jsx)("div", {
      ref: t => i(e.skuId, t),
      children: (0, r.jsx)(c.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(O, {
          category: e
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: E.paginationContainer,
      children: (0, r.jsx)(s.DsT, {
        currentPage: o,
        totalCount: S.length,
        pageSize: v.kN,
        onPageChange: a,
        disablePaginationGap: true
      })
    })]
  })
}