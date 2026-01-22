/** Chunk was on 59275 **/
/** chunk id: 976742, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O
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

function S(e) {
  let {
    category: t
  } = e, l = (0, a.bG)([o.default], () => o.default.getCurrentUser()), r = (0, d.X)(t.products), s = (0, u.p)()(r), i = (0, v.od)(s), f = (0, c.uM)();
  return null == l || 0 === i.length ? null : (0, n.jsx)("div", {
    className: x.vY,
    children: i.map((e, t) => (0, n.jsx)(c.R9, {
      newValue: {
        tilePosition: t
      },
      children: (0, n.jsx)(p.A, {
        skuId: e.skuId,
        skipLimitedTimeCheck: true,
        onClickAnalytics: (0, m.UU)(e, A.G2.CATALOG, f)
      }, e.skuId)
    }, e.skuId))
  })
}

function C(e) {
  let {
    category: t
  } = e, [l, a] = r.useState(false), i = (0, s.K)(e => {
    a(e)
  }, .15);
  return (0, n.jsxs)("div", {
    className: x.EF,
    ref: i,
    children: [(0, n.jsx)(b.A, {
      category: t
    }), (0, n.jsx)(S, {
      category: t
    })]
  })
}

function O(e) {
  var t;
  let {
    sortedCategories: l,
    setCategoryRef: s,
    currentPage: a,
    handlePageChange: o,
    initialCategoryId: u
  } = e, d = (0, c.uM)(), b = (0, h.U)(), p = null != (t = null == d ? true : d.sessionId) ? t : "", {
    noCache: m,
    includeUnpublished: v
  } = (0, E.A)(), S = r.useMemo(() => l.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [l]), O = r.useRef(true);
  r.useEffect(() => {
    if (null == u || 0 === S.length) {
      O.current = true;
      return
    }
    if (u === O.current) return;
    let e = S.findIndex(e => e.skuId === u);
    if (false === e) return;
    let t = Math.floor(e / A.l5) + 1;
    t !== a && o(t), O.current = u
  }, [u, S, o, a]);
  let _ = r.useMemo(() => {
    let e = (a - 1) * A.l5;
    return S.slice(e, e + A.l5)
  }, [S, a]);
  return (r.useEffect(() => {
    (0, f.z)({
      sessionId: p,
      checkpoint: f.t.SHOP_MOUNTED,
      tab: A.G2.CATALOG,
      unpublishedCategoriesShown: v,
      cacheDisabled: m
    })
  }, []), r.useEffect(() => {
    b || 0 === _.length || (0, f.z)({
      sessionId: p,
      checkpoint: f.t.SHOP_RENDERED,
      tab: A.G2.CATALOG,
      unpublishedCategoriesShown: v,
      cacheDisabled: m
    })
  }, [p, v, m, b, _.length]), b) ? (0, n.jsx)(g.A, {}) : (0, n.jsxs)("div", {
    className: x.LZ,
    children: [_.map((e, t) => (0, n.jsx)("div", {
      ref: t => s(e.skuId, t),
      children: (0, n.jsx)(c.R9, {
        newValue: {
          categoryPosition: t
        },
        children: (0, n.jsx)(C, {
          category: e
        })
      })
    }, e.skuId)), (0, n.jsx)("div", {
      className: x.Ej,
      children: (0, n.jsx)(i.mgR, {
        currentPage: a,
        totalCount: S.length,
        pageSize: A.l5,
        onPageChange: o,
        disablePaginationGap: true
      })
    })]
  })
}