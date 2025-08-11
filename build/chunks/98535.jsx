/** Chunk was on 45620 **/
/** chunk id: 98535, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk180650 = require("./180650.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk870289 = require("./870289.js"),
  Chunk149705 = require("./149705.js"),
  Chunk929255 = require("./929255.js"),
  Chunk752053 = require("./752053.js"),
  Chunk81136 = require("./81136.js"),
  Chunk566564 = require("./566564.js"),
  Chunk795477 = require("./795477.js"),
  Chunk215023 = require("./215023.js");
let O = [Chunk215023.AW.HOME, Chunk215023.AW.ORBS];

function C(e) {
  let {
    tab: t,
    isFullScreen: n,
    sortedCategories: s,
    transitionToTab: c,
    transitionState: u,
    updateAnalyticsState: d,
    refreshCategories: h
  } = e, C = E();
  S(C);
  let y = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
    [x, j] = l.useState(true),
    T = l.useCallback(async (e, t, r) => {
      d(e, t);
      let l = r && !n && !y,
        i = t === a.T.ORB ? v.AW.ORBS : v.AW.CATALOG;
      j(t), await c(i, l)
    }, [n, y, c, d]),
    P = (0, p.FF)("CollectiblesContent"),
    {
      searchError: L
    } = (0, g.a)();
  return P && null != L ? <_.Z /> : null != C ? <b.Z onRetry={h} errorMessage={C} errorOrigin={b.i.SHOP_PAGE} /> : O.includes(t) ? <m.Z isFullScreen={n} handleTransition={T} tab={t} transitionState={u} /> : <f.Z isFullScreen={n} tab={t} sortedCategories={s} initialCategoryId={x} onUnmount={() => j(true)} />
}
let E = () => (0, Chunk442837.e7)([Chunk597688.Z, Chunk1870.Z], () => null != Chunk597688.Z.error ? "shop load fetch categories error: ".concat(Chunk597688.Z.error.message) : null != Chunk1870.Z.claimError ? "shop load claim error: ".concat(Chunk1870.Z.claimError.message) : null != Chunk1870.Z.fetchError ? "shop load fetch purchase error: ".concat(Chunk1870.Z.fetchError.message) : true),
  S = e => {
    let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
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