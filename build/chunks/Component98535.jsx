/** Chunk was on 45620 **/
/** chunk id: 98535, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk149705 = require("./149705.js"),
  Chunk929255 = require("./929255.jsx"),
  Chunk752053 = require("./752053.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk566564 = require("./566564.jsx"),
  Chunk795477 = require("./795477.jsx"),
  Chunk215023 = require("./215023.js");
let h = [Chunk215023.AW.HOME, Chunk215023.AW.ORBS];

function v(e) {
  let {
    tab: t,
    sortedCategories: n,
    transitionToTab: s,
    transitionState: i,
    updateAnalyticsState: c,
    refreshCategories: u
  } = e, p = E();
  S(p);
  let v = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
    [_, O] = l.useState(true),
    [x, y] = l.useState(true),
    j = l.useMemo(() => n.filter(e => !C.y8.some(t => {
      let {
        categorySkuId: n
      } = t;
      return n === e.skuId
    })), [n]),
    k = l.useCallback(e => {
      let {
        sourceButton: t,
        categorySkuId: n,
        shouldAnimate: r,
        isInternalShopDeeplink: l,
        isOrbsExclusive: a
      } = e;
      c(t, n);
      let o = r && !v,
        i = a ? C.AW.ORBS : C.AW.CATALOG;
      O(n), y(!l), s(i, o)
    }, [v, s, c]),
    {
      searchError: T
    } = (0, d.a)();
  return null != T ? (0, r.jsx)(m.Z, {}) : null != p ? (0, r.jsx)(g.Z, {
    onRetry: u,
    errorMessage: p,
    errorOrigin: g.i.SHOP_PAGE
  }) : h.includes(t) ? (0, r.jsx)(b.Z, {
    handleTransition: k,
    tab: t,
    transitionState: i
  }) : (0, r.jsx)(f.Z, {
    tab: t,
    sortedCategories: j,
    initialCategoryId: _,
    showFilterInitially: x,
    onUnmount: () => {
      O(true), y(true)
    }
  })
}
let E = () => (0, Chunk442837.e7)([Chunk597688.Z, Chunk1870.Z], () => null != Chunk597688.Z.error ? "shop load fetch categories error: ".concat(Chunk597688.Z.error.message) : null != Chunk1870.Z.claimError ? "shop load claim error: ".concat(Chunk1870.Z.claimError.message) : null != Chunk1870.Z.fetchError ? "shop load fetch purchase error: ".concat(Chunk1870.Z.fetchError.message) : true),
  S = e => {
    let t = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
      {
        noCache: n,
        includeUnpublished: r
      } = (0, p.Z)();
    l.useEffect(() => {
      var l, a;
      null != e && i.Z.captureMessage(e, {
        tags: {
          isStaff: null != (a = null == t || null == (l = t.isStaff()) ? true : l.toString()) ? a : "unknown",
          disableCache: n.toString(),
          includeUnpublished: r.toString()
        }
      })
    }, [e, t, n, r])
  }