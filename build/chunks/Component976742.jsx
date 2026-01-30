/** Chunk was on 59275 **/
/** chunk id: 976742, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk511265 = require("./511265.js"),
  Chunk206077 = require("./206077.js"),
  Chunk100057 = require("./100057.js"),
  Chunk903403 = require("./903403.jsx"),
  Chunk392183 = require("./392183.jsx"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk159439 = require("./159439.js"),
  Chunk998694 = require("./998694.js"),
  Chunk940622 = require("./940622.js"),
  Chunk758836 = require("./758836.js"),
  Chunk157884 = require("./157884.js");

function A(e) {
  let {
    category: t
  } = e, n = (0, a.bG)([o.default], () => o.default.getCurrentUser()), l = (0, d.X)(t.products), s = (0, u.p)()(l), i = (0, E.od)(s), g = (0, c.uM)();
  return null == n || 0 === i.length ? null : (0, r.jsx)("div", {
    className: C.vY,
    children: i.map((e, t) => (0, r.jsx)(c.R9, {
      newValue: {
        tilePosition: t
      },
      children: (0, r.jsx)(p.A, {
        skuId: e.skuId,
        skipLimitedTimeCheck: true,
        onClickAnalytics: (0, _.UU)(e, v.G2.CATALOG, g)
      }, e.skuId)
    }, e.skuId))
  })
}

function S(e) {
  let {
    category: t
  } = e, [n, a] = l.useState(false), i = (0, s.K)(e => {
    a(e)
  }, .15);
  return (0, r.jsxs)("div", {
    className: C.EF,
    ref: i,
    children: [(0, r.jsx)(f.A, {
      category: t
    }), (0, r.jsx)(A, {
      category: t
    })]
  })
}

function x(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: s,
    currentPage: a,
    handlePageChange: o,
    initialCategoryId: u
  } = e, d = (0, c.uM)(), f = (0, b.U)(), p = null != (t = null == d ? true : d.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: E
  } = (0, h.A)(), A = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), x = l.useRef(true);
  l.useEffect(() => {
    if (null == u || 0 === A.length) {
      x.current = true;
      return
    }
    if (u === x.current) return;
    let e = A.findIndex(e => e.skuId === u);
    if (false === e) return;
    let t = Math.floor(e / v.l5) + 1;
    t !== a && o(t), x.current = u
  }, [u, A, o, a]);
  let O = l.useMemo(() => {
    let e = (a - 1) * v.l5;
    return A.slice(e, e + v.l5)
  }, [A, a]);
  return (l.useEffect(() => {
    (0, g.z)({
      sessionId: p,
      checkpoint: g.t.SHOP_MOUNTED,
      tab: v.G2.CATALOG,
      unpublishedCategoriesShown: E,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    f || 0 === O.length || (0, g.z)({
      sessionId: p,
      checkpoint: g.t.SHOP_RENDERED,
      tab: v.G2.CATALOG,
      unpublishedCategoriesShown: E,
      cacheDisabled: _
    })
  }, [p, E, _, f, O.length]), f) ? (0, r.jsx)(m.A, {}) : (0, r.jsxs)("div", {
    className: C.LZ,
    children: [O.map((e, t) => (0, r.jsx)("div", {
      ref: t => s(e.skuId, t),
      children: (0, r.jsx)(c.R9, {
        newValue: {
          categoryPosition: t
        },
        children: (0, r.jsx)(S, {
          category: e
        })
      })
    }, e.skuId)), (0, r.jsx)("div", {
      className: C.Ej,
      children: (0, r.jsx)(i.mgR, {
        currentPage: a,
        totalCount: A.length,
        pageSize: v.l5,
        onPageChange: o,
        disablePaginationGap: true
      })
    })]
  })
}