/** Chunk was on 45620 **/
/** chunk id: 309956, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk114858 = require("./114858.js"),
  Chunk335818 = require("./335818.js"),
  Chunk822857 = require("./822857.js"),
  Chunk870289 = require("./870289.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let p = {
    [Chunk215023.AW.AVATAR_DECORATIONS]: Chunk335818.G.AVATAR_DECORATION,
    [Chunk215023.AW.PROFILE_EFFECTS]: Chunk335818.G.PROFILE_EFFECT,
    [Chunk215023.AW.NAMEPLATES]: Chunk335818.G.NAMEPLATE,
    [Chunk215023.AW.BUNDLES]: Chunk335818.G.BUNDLE
  },
  g = (e, t) => {
    let {
      enabled: r
    } = (0, i.WX)({
      location: "useShopViewTransition"
    }), a = (0, o.FF)("CollectiblesBrowse"), {
      setItemTypeFilter: g,
      reset: f,
      setCurrentTab: b
    } = (0, s.S)(), h = n.useMemo(() => e !== u.AW.ORBS || r ? (0, u.RE)(e) && a ? u.AW.CATALOG : e : u.AW.HOME, [e, r, a]), [m, _] = n.useState(h), [v, O] = n.useState(u.f7.VISIBLE);
    n.useEffect(() => {
      b(m)
    }, [m, b]), n.useEffect(() => {
      _(h)
    }, [h]);
    let {
      clearError: C
    } = (0, c.a)(), E = (0, l.k6)(), S = n.useCallback(async (e, r) => {
      if (C(), e === u.AW.CATALOG) f();
      else if ((0, u.RE)(e) && e !== m) {
        let t = p[e];
        null != t ? g(t) : f()
      }
      if (m === e) return;
      if (r) {
        let e;
        O(u.f7.OUT), await (e = 1.1 * u.lb, new Promise(t => setTimeout(t, e)))
      }
      let n = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
      _(n), r && O(u.f7.IN), t || E.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n), {
        shallow: true
      }), O(u.f7.VISIBLE)
    }, [E, t, a, g, f, m, C]);
    return {
      selectedTab: m,
      transitionState: v,
      transitionToTab: S
    }
  }