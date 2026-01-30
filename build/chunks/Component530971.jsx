/** Chunk was on 59275 **/
/** chunk id: 530971, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk728458 = require("./728458.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk856686 = require("./856686.js"),
  Chunk429876 = require("./429876.jsx"),
  Chunk599062 = require("./599062.jsx"),
  Chunk998694 = require("./998694.js"),
  Chunk231209 = require("./231209.jsx"),
  Chunk781724 = require("./781724.jsx"),
  Chunk758836 = require("./758836.js");
let h = [Chunk758836.G2.HOME, Chunk758836.G2.ORBS];

function E(e) {
  let {
    tab: t,
    sortedCategories: n,
    transitionToTab: i,
    transitionState: o,
    updateAnalyticsState: c,
    refreshCategories: u
  } = e, m = v();
  C(m);
  let E = (0, s.bG)([a.A], () => a.A.useReducedMotion),
    [A, S] = l.useState(true),
    [x, O] = l.useState(true),
    y = l.useMemo(() => n.filter(e => !b.MS.some(t => {
      let {
        categorySkuId: n
      } = t;
      return n === e.skuId
    })), [n]),
    j = l.useCallback(e => {
      let {
        sourceButton: t,
        categorySkuId: n,
        shouldAnimate: r,
        isInternalShopDeeplink: l,
        isOrbsExclusive: s
      } = e;
      c(t, n);
      let a = r && !E,
        o = s ? b.G2.ORBS : b.G2.CATALOG;
      S(n), O(!l), i(o, a)
    }, [E, i, c]),
    {
      searchError: T
    } = (0, d.S)();
  return null != T ? (0, r.jsx)(_.A, {}) : null != m ? (0, r.jsx)(f.h, {
    onRetry: u,
    errorMessage: m,
    errorOrigin: f.A.SHOP_PAGE
  }) : h.includes(t) ? (0, r.jsx)(p.A, {
    handleTransition: j,
    tab: t,
    transitionState: o
  }) : (0, r.jsx)(g.A, {
    tab: t,
    sortedCategories: y,
    initialCategoryId: A,
    showFilterInitially: x,
    onUnmount: () => {
      S(true), O(true)
    }
  })
}
let v = () => (0, s.bG)([c.A, u.A], () => null != c.A.error ? "shop load fetch categories error: ".concat(c.A.error.message) : null != u.A.claimError ? "shop load claim error: ".concat(u.A.claimError.message) : null != u.A.fetchError ? "shop load fetch purchase error: ".concat(u.A.fetchError.message) : true),
  C = e => {
    let t = (0, s.bG)([i.default], () => i.default.getCurrentUser()),
      {
        noCache: n,
        includeUnpublished: r
      } = (0, m.A)();
    l.useEffect(() => {
      var l, s;
      null != e && o.A.captureMessage(e, {
        tags: {
          isStaff: null != (l = null == t || null == (s = t.isStaff()) ? true : s.toString()) ? l : "unknown",
          disableCache: n.toString(),
          includeUnpublished: r.toString()
        }
      })
    }, [e, t, n, r])
  }