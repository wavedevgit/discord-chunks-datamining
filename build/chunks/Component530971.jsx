/** Chunk was on 59275 **/
/** chunk id: 530971, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
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
let E = [Chunk758836.G2.HOME, Chunk758836.G2.ORBS];

function v(e) {
  let {
    tab: t,
    sortedCategories: l,
    transitionToTab: i,
    transitionState: o,
    updateAnalyticsState: c,
    refreshCategories: u
  } = e, g = A();
  x(g);
  let v = (0, s.bG)([a.A], () => a.A.useReducedMotion),
    [S, C] = r.useState(true),
    [O, _] = r.useState(true),
    y = r.useMemo(() => l.filter(e => !h.MS.some(t => {
      let {
        categorySkuId: l
      } = t;
      return l === e.skuId
    })), [l]),
    j = r.useCallback(e => {
      let {
        sourceButton: t,
        categorySkuId: l,
        shouldAnimate: n,
        isInternalShopDeeplink: r,
        isOrbsExclusive: s
      } = e;
      c(t, l);
      let a = n && !v,
        o = s ? h.G2.ORBS : h.G2.CATALOG;
      C(l), _(!r), i(o, a)
    }, [v, i, c]),
    {
      searchError: L
    } = (0, d.S)();
  return null != L ? (0, n.jsx)(m.A, {}) : null != g ? (0, n.jsx)(b.h, {
    onRetry: u,
    errorMessage: g,
    errorOrigin: b.A.SHOP_PAGE
  }) : E.includes(t) ? (0, n.jsx)(p.A, {
    handleTransition: j,
    tab: t,
    transitionState: o
  }) : (0, n.jsx)(f.A, {
    tab: t,
    sortedCategories: y,
    initialCategoryId: S,
    showFilterInitially: O,
    onUnmount: () => {
      C(true), _(true)
    }
  })
}
let A = () => (0, s.bG)([c.A, u.A], () => null != c.A.error ? "shop load fetch categories error: ".concat(c.A.error.message) : null != u.A.claimError ? "shop load claim error: ".concat(u.A.claimError.message) : null != u.A.fetchError ? "shop load fetch purchase error: ".concat(u.A.fetchError.message) : true),
  x = e => {
    let t = (0, s.bG)([i.default], () => i.default.getCurrentUser()),
      {
        noCache: l,
        includeUnpublished: n
      } = (0, g.A)();
    r.useEffect(() => {
      var r, s;
      null != e && o.A.captureMessage(e, {
        tags: {
          isStaff: null != (r = null == t || null == (s = t.isStaff()) ? true : s.toString()) ? r : "unknown",
          disableCache: l.toString(),
          includeUnpublished: n.toString()
        }
      })
    }, [e, t, l, n])
  }