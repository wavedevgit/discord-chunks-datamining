/** Chunk was on 45620 **/
/** chunk id: 98535, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk870289 = require("./870289.js"),
  Chunk149705 = require("./149705.js"),
  Chunk929255 = require("./929255.jsx"),
  Chunk752053 = require("./752053.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk566564 = require("./566564.jsx"),
  Chunk795477 = require("./795477.jsx"),
  Chunk215023 = require("./215023.js");
let v = [Chunk215023.AW.HOME, Chunk215023.AW.ORBS];

function E(e) {
  let {
    tab: t,
    sortedCategories: n,
    transitionToTab: s,
    transitionState: o,
    updateAnalyticsState: c,
    refreshCategories: u
  } = e, C = x();
  O(C);
  let E = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
    [S, y] = l.useState(true),
    [j, k] = l.useState(true),
    T = l.useCallback(async (e, t, n, r) => {
      c(e, t);
      let l = n && !E,
        i = (0, d.$2)(t) ? b.AW.ORBS : b.AW.CATALOG;
      y(t), k(!r), await s(i, l)
    }, [E, s, c]),
    I = (0, g.FF)("CollectiblesContent"),
    {
      searchError: L
    } = (0, p.a)();
  return I && null != L ? (0, r.jsx)(m.Z, {}) : null != C ? (0, r.jsx)(h.Z, {
    onRetry: u,
    errorMessage: C,
    errorOrigin: h.i.SHOP_PAGE
  }) : v.includes(t) ? (0, r.jsx)(_.Z, {
    handleTransition: T,
    tab: t,
    transitionState: o
  }) : (0, r.jsx)(f.Z, {
    tab: t,
    sortedCategories: n,
    initialCategoryId: S,
    showFilterInitially: j,
    onUnmount: () => {
      y(true), k(true)
    }
  })
}
let x = () => (0, Chunk442837.e7)([Chunk597688.Z, Chunk1870.Z], () => null != Chunk597688.Z.error ? "shop load fetch categories error: ".concat(Chunk597688.Z.error.message) : null != Chunk1870.Z.claimError ? "shop load claim error: ".concat(Chunk1870.Z.claimError.message) : null != Chunk1870.Z.fetchError ? "shop load fetch purchase error: ".concat(Chunk1870.Z.fetchError.message) : true),
  O = e => {
    let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
      {
        noCache: n,
        includeUnpublished: r
      } = (0, C.Z)();
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