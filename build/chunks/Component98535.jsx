/** Chunk was on 45620 **/
/** chunk id: 98535, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk180650 = require("./180650.js"),
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
let E = [Chunk215023.AW.HOME, Chunk215023.AW.ORBS];

function S(e) {
  let {
    tab: t,
    isFullScreen: n,
    sortedCategories: i,
    transitionToTab: c,
    transitionState: u,
    updateAnalyticsState: d,
    refreshCategories: h
  } = e, S = O();
  x(S);
  let v = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
    [y, T] = l.useState(true),
    L = l.useCallback(async (e, t, r) => {
      d(e, t);
      let l = r && !n && !v,
        s = t === a.T.ORB ? b.AW.ORBS : b.AW.CATALOG;
      T(t), await c(s, l)
    }, [n, v, c, d]),
    j = (0, g.FF)("CollectiblesContent"),
    {
      searchError: k
    } = (0, p.a)();
  return j && null != k ? (0, r.jsx)(C.Z, {}) : null != S ? (0, r.jsx)(m.Z, {
    onRetry: h,
    errorMessage: S,
    errorOrigin: m.i.SHOP_PAGE
  }) : E.includes(t) ? (0, r.jsx)(_.Z, {
    isFullScreen: n,
    handleTransition: L,
    tab: t,
    transitionState: u
  }) : (0, r.jsx)(f.Z, {
    isFullScreen: n,
    tab: t,
    sortedCategories: i,
    initialCategoryId: y,
    onUnmount: () => T(true)
  })
}
let O = () => (0, Chunk442837.e7)([Chunk597688.Z, Chunk1870.Z], () => null != Chunk597688.Z.error ? "shop load fetch categories error: ".concat(Chunk597688.Z.error.message) : null != Chunk1870.Z.claimError ? "shop load claim error: ".concat(Chunk1870.Z.claimError.message) : null != Chunk1870.Z.fetchError ? "shop load fetch purchase error: ".concat(Chunk1870.Z.fetchError.message) : true),
  x = e => {
    let t = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
      {
        noCache: n,
        includeUnpublished: r
      } = (0, h.Z)();
    l.useEffect(() => {
      var l, a;
      null != e && c.Z.captureMessage(e, {
        tags: {
          isStaff: null != (a = null == t || null == (l = t.isStaff()) ? true : l.toString()) ? a : "unknown",
          disableCache: n.toString(),
          includeUnpublished: r.toString()
        }
      })
    }, [e, t, n, r])
  }