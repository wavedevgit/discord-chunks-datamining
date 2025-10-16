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
  f = e => {
    let {
      enabled: t
    } = (0, o.WX)({
      location: "useShopViewTransition"
    }), n = (0, s.FF)("CollectiblesBrowse"), {
      setItemTypeFilter: i,
      reset: f,
      setCurrentTab: p
    } = (0, a.S)(), C = r.useMemo(() => e !== u.AW.ORBS || t ? (0, u.RE)(e) && n ? u.AW.CATALOG : e : u.AW.HOME, [e, t, n]), [h, _] = r.useState(C), [m, b] = r.useState(u.f7.VISIBLE);
    r.useEffect(() => {
      p(h)
    }, [h, p]), r.useEffect(() => {
      if (_(C), e === u.AW.CATALOG) f();
      else if ((0, u.RE)(e)) {
        let t = g[e];
        null != t ? i(t) : f()
      }
    }, [C, e, i, f]);
    let {
      clearError: E
    } = (0, c.a)(), v = (0, l.k6)(), O = r.useCallback(async (e, t) => {
      if (E(), e === u.AW.CATALOG) f();
      else if ((0, u.RE)(e) && e !== h) {
        let t = g[e];
        null != t ? i(t) : f()
      }
      if (h !== e) {
        if (t) {
          let e;
          b(u.f7.OUT), await (e = 1.1 * u.lb, new Promise(t => setTimeout(t, e)))
        }
        _(n && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e), t && b(u.f7.IN), v.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), {
          shallow: true
        }), b(u.f7.VISIBLE)
      }
    }, [v, i, n, f, h, E]);
    return {
      selectedTab: h,
      transitionState: m,
      transitionToTab: O
    }
  }