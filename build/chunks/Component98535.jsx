/** Chunk was on 45620 **/
/** chunk id: 98535, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
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
let O = [Chunk215023.AW.HOME, Chunk215023.AW.ORBS];

function C(e) {
  let {
    tab: t,
    isFullScreen: r,
    sortedCategories: s,
    transitionToTab: c,
    transitionState: u,
    updateAnalyticsState: d,
    refreshCategories: b
  } = e, C = E();
  y(C);
  let S = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
    [x, j] = l.useState(true),
    P = l.useCallback(async (e, t, n) => {
      d(e, t);
      let l = n && !r && !S,
        i = t === a.T.ORB ? v.AW.ORBS : v.AW.CATALOG;
      j(t), await c(i, l)
    }, [r, S, c, d]),
    T = (0, p.FF)("CollectiblesContent"),
    {
      searchError: L
    } = (0, g.a)();
  return T && null != L ? (0, n.jsx)(_.Z, {}) : null != C ? (0, n.jsx)(m.Z, {
    onRetry: b,
    errorMessage: C,
    errorOrigin: m.i.SHOP_PAGE
  }) : O.includes(t) ? (0, n.jsx)(h.Z, {
    isFullScreen: r,
    handleTransition: P,
    tab: t,
    transitionState: u
  }) : (0, n.jsx)(f.Z, {
    isFullScreen: r,
    tab: t,
    sortedCategories: s,
    initialCategoryId: x,
    onUnmount: () => j(true)
  })
}
let E = () => (0, Chunk442837.e7)([Chunk597688.Z, Chunk1870.Z], () => null != Chunk597688.Z.error ? "shop load fetch categories error: ".concat(Chunk597688.Z.error.message) : null != Chunk1870.Z.claimError ? "shop load claim error: ".concat(Chunk1870.Z.claimError.message) : null != Chunk1870.Z.fetchError ? "shop load fetch purchase error: ".concat(Chunk1870.Z.fetchError.message) : true),
  y = e => {
    let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
      {
        noCache: r,
        includeUnpublished: n
      } = (0, b.Z)();
    l.useEffect(() => {
      var l, a;
      null != e && c.Z.captureMessage(e, {
        tags: {
          isStaff: null != (a = null == t || null == (l = t.isStaff()) ? true : l.toString()) ? a : "unknown",
          disableCache: r.toString(),
          includeUnpublished: n.toString()
        }
      })
    }, [e, t, r, n])
  }