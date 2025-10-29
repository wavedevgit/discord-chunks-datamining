/** Chunk was on 45620 **/
/** chunk id: 98535, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk870289 = require("./870289.js"),
  Chunk149705 = require("./149705.js"),
  Chunk929255 = require("./929255.jsx"),
  Chunk752053 = require("./752053.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk566564 = require("./566564.jsx"),
  Chunk795477 = require("./795477.jsx"),
  Chunk215023 = require("./215023.js");
let b = [Chunk215023.AW.HOME, Chunk215023.AW.ORBS];

function v(e) {
  let {
    tab: t,
    sortedCategories: n,
    transitionToTab: a,
    transitionState: o,
    updateAnalyticsState: c,
    refreshCategories: u
  } = e, h = E();
  x(h);
  let v = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    [O, S] = l.useState(true),
    [y, j] = l.useState(true),
    k = l.useCallback(e => {
      let {
        sourceButton: t,
        categorySkuId: n,
        shouldAnimate: r,
        isInternalShopDeeplink: l,
        isOrbsExclusive: i
      } = e;
      c(t, n);
      let s = r && !v,
        o = i ? m.AW.ORBS : m.AW.CATALOG;
      S(n), j(!l), a(o, s)
    }, [v, a, c]),
    T = (0, d.FF)("CollectiblesContent"),
    {
      searchError: I
    } = (0, g.a)();
  return T && null != I ? (0, r.jsx)(_.Z, {}) : null != h ? (0, r.jsx)(f.Z, {
    onRetry: u,
    errorMessage: h,
    errorOrigin: f.i.SHOP_PAGE
  }) : b.includes(t) ? (0, r.jsx)(C.Z, {
    handleTransition: k,
    tab: t,
    transitionState: o
  }) : (0, r.jsx)(p.Z, {
    tab: t,
    sortedCategories: n,
    initialCategoryId: O,
    showFilterInitially: y,
    onUnmount: () => {
      S(true), j(true)
    }
  })
}
let E = () => (0, Chunk442837.e7)([Chunk597688.Z, Chunk1870.Z], () => null != Chunk597688.Z.error ? "shop load fetch categories error: ".concat(Chunk597688.Z.error.message) : null != Chunk1870.Z.claimError ? "shop load claim error: ".concat(Chunk1870.Z.claimError.message) : null != Chunk1870.Z.fetchError ? "shop load fetch purchase error: ".concat(Chunk1870.Z.fetchError.message) : true),
  x = e => {
    let t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
      {
        noCache: n,
        includeUnpublished: r
      } = (0, h.Z)();
    l.useEffect(() => {
      var l, i;
      null != e && o.Z.captureMessage(e, {
        tags: {
          isStaff: null != (i = null == t || null == (l = t.isStaff()) ? true : l.toString()) ? i : "unknown",
          disableCache: n.toString(),
          includeUnpublished: r.toString()
        }
      })
    }, [e, t, n, r])
  }