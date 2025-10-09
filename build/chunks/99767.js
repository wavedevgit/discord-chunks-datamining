/** Chunk was on 45620 **/
/** chunk id: 99767, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk335818 = require("./335818.js"),
  Chunk825102 = require("./825102.js"),
  Chunk870289 = require("./870289.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let g = {
    [Chunk215023.AW.AVATAR_DECORATIONS]: Chunk335818.G.AVATAR_DECORATION,
    [Chunk215023.AW.PROFILE_EFFECTS]: Chunk335818.G.PROFILE_EFFECT,
    [Chunk215023.AW.NAMEPLATES]: Chunk335818.G.NAMEPLATE,
    [Chunk215023.AW.BUNDLES]: Chunk335818.G.BUNDLE
  },
  f = (e, t) => {
    let {
      enabled: n
    } = (0, s.WX)({
      location: "useShopViewTransition"
    }), i = (0, o.FF)("CollectiblesBrowse"), {
      setItemTypeFilter: f,
      reset: p,
      setCurrentTab: C
    } = (0, a.S)(), h = r.useMemo(() => e !== u.AW.ORBS || n ? (0, u.RE)(e) && i ? u.AW.CATALOG : e : u.AW.HOME, [e, n, i]), [_, m] = r.useState(h), [b, E] = r.useState(u.f7.VISIBLE);
    r.useEffect(() => {
      C(_)
    }, [_, C]), r.useEffect(() => {
      m(h)
    }, [h]);
    let {
      clearError: v
    } = (0, c.a)(), S = (0, l.k6)(), O = r.useCallback(async (e, n) => {
      if (v(), e === u.AW.CATALOG) p();
      else if ((0, u.RE)(e) && e !== _) {
        let t = g[e];
        null != t ? f(t) : p()
      }
      if (_ === e) return;
      if (n) {
        let e;
        E(u.f7.OUT), await (e = 1.1 * u.lb, new Promise(t => setTimeout(t, e)))
      }
      let r = i && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
      m(r), n && E(u.f7.IN), t || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r), {
        shallow: true
      }), E(u.f7.VISIBLE)
    }, [S, t, i, f, p, _, v]);
    return {
      selectedTab: _,
      transitionState: b,
      transitionToTab: O
    }
  }