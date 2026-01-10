/** Chunk was on 45620 **/
/** chunk id: 98535, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
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
let C = [Chunk215023.AW.HOME, Chunk215023.AW.ORBS];

function E(e) {
  let {
    tab: t,
    sortedCategories: n,
    transitionToTab: i,
    transitionState: o,
    updateAnalyticsState: c,
    refreshCategories: u
  } = e, b = v();
  S(b);
  let E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
    [x, O] = l.useState(true),
    [_, y] = l.useState(true),
    j = l.useMemo(() => n.filter(e => !h.y8.some(t => {
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
      let s = r && !E,
        o = a ? h.AW.ORBS : h.AW.CATALOG;
      O(n), y(!l), i(o, s)
    }, [E, i, c]),
    {
      searchError: T
    } = (0, d.a)();
  return null != T ? (0, r.jsx)(m.Z, {}) : null != b ? (0, r.jsx)(g.Z, {
    onRetry: u,
    errorMessage: b,
    errorOrigin: g.i.SHOP_PAGE
  }) : C.includes(t) ? (0, r.jsx)(p.Z, {
    handleTransition: k,
    tab: t,
    transitionState: o
  }) : (0, r.jsx)(f.Z, {
    tab: t,
    sortedCategories: j,
    initialCategoryId: x,
    showFilterInitially: _,
    onUnmount: () => {
      O(true), y(true)
    }
  })
}
let v = () => (0, a.e7)([c.Z, u.Z], () => null != c.Z.error ? "shop load fetch categories error: ".concat(c.Z.error.message) : null != u.Z.claimError ? "shop load claim error: ".concat(u.Z.claimError.message) : null != u.Z.fetchError ? "shop load fetch purchase error: ".concat(u.Z.fetchError.message) : true),
  S = e => {
    let t = (0, a.e7)([i.default], () => i.default.getCurrentUser()),
      {
        noCache: n,
        includeUnpublished: r
      } = (0, b.Z)();
    l.useEffect(() => {
      var l, a;
      null != e && o.Z.captureMessage(e, {
        tags: {
          isStaff: null != (a = null == t || null == (l = t.isStaff()) ? true : l.toString()) ? a : "unknown",
          disableCache: n.toString(),
          includeUnpublished: r.toString()
        }
      })
    }, [e, t, n, r])
  }