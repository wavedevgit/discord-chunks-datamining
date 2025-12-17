/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
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
  Chunk213875 = require("./213875.js");

function _(e) {
  let {
    category: t
  } = e, n = (0, s.e7)([i.default], () => i.default.getCurrentUser()), l = (0, d.l)(t.products), a = (0, u.a)()(l), o = (0, E.St)(a), f = (0, c.sp)();
  return null == n || 0 === o.length ? null : (0, r.jsx)("div", {
    className: S.cardsContainer,
    children: o.map((e, t) => (0, r.jsx)(c.k0, {
      newValue: {
        tilePosition: t
      },
      children: (0, r.jsx)(p.Z, {
        skuId: e.skuId,
        skipLimitedTimeCheck: true,
        onClickAnalytics: (0, m.wO)(e, v.AW.CATALOG, f)
      }, e.skuId)
    }, e.skuId))
  })
}

function x(e) {
  let {
    category: t
  } = e, [n, s] = l.useState(false), o = (0, a.O)(e => {
    s(e)
  }, .15);
  return (0, r.jsxs)("div", {
    className: S.categoryWrapper,
    ref: o,
    children: [(0, r.jsx)(g.Z, {
      category: t
    }), (0, r.jsx)(_, {
      category: t
    })]
  })
}

function O(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: a,
    currentPage: s,
    handlePageChange: i,
    initialCategoryId: u
  } = e, d = (0, c.sp)(), g = (0, h.R)(), p = null != (t = null == d ? true : d.sessionId) ? t : "", {
    noCache: m,
    includeUnpublished: E
  } = (0, C.Z)(), _ = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), O = l.useRef(true);
  l.useEffect(() => {
    if (null == u || 0 === _.length) {
      O.current = true;
      return
    }
    if (u === O.current) return;
    let e = _.findIndex(e => e.skuId === u);
    if (false === e) return;
    let t = Math.floor(e / v.kN) + 1;
    t !== s && i(t), O.current = u
  }, [u, _, i, s]);
  let y = l.useMemo(() => {
    let e = (s - 1) * v.kN;
    return _.slice(e, e + v.kN)
  }, [_, s]);
  return (l.useEffect(() => {
    (0, f.n)({
      sessionId: p,
      checkpoint: f.a.SHOP_MOUNTED,
      tab: v.AW.CATALOG,
      unpublishedCategoriesShown: E,
      cacheDisabled: m
    })
  }, []), l.useEffect(() => {
    g || 0 === y.length || (0, f.n)({
      sessionId: p,
      checkpoint: f.a.SHOP_RENDERED,
      tab: v.AW.CATALOG,
      unpublishedCategoriesShown: E,
      cacheDisabled: m
    })
  }, [p, E, m, g, y.length]), g) ? (0, r.jsx)(b.Z, {}) : (0, r.jsxs)("div", {
    className: S.categories,
    children: [y.map((e, t) => (0, r.jsx)("div", {
      ref: t => a(e.skuId, t),
      children: (0, r.jsx)(c.k0, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(x, {
          category: e
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: S.paginationContainer,
      children: (0, r.jsx)(o.DsT, {
        currentPage: s,
        totalCount: _.length,
        pageSize: v.kN,
        onPageChange: i,
        disablePaginationGap: true
      })
    })]
  })
}