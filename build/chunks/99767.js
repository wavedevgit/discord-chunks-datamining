/** Chunk was on 45620 **/
/** chunk id: 99767, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk335818 = require("./335818.js"),
  Chunk825102 = require("./825102.js"),
  Chunk870289 = require("./870289.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let f = {
    [Chunk215023.AW.AVATAR_DECORATIONS]: Chunk335818.G.AVATAR_DECORATION,
    [Chunk215023.AW.PROFILE_EFFECTS]: Chunk335818.G.PROFILE_EFFECT,
    [Chunk215023.AW.NAMEPLATES]: Chunk335818.G.NAMEPLATE,
    [Chunk215023.AW.BUNDLES]: Chunk335818.G.BUNDLE
  },
  p = e => {
    let {
      enabled: t
    } = (0, a.WX)({
      location: "useShopViewTransition"
    }), n = (0, s.FF)("CollectiblesBrowse"), {
      setItemTypeFilter: i,
      reset: p,
      setCurrentTab: g
    } = (0, o.S)(), m = r.useMemo(() => e !== u.AW.ORBS || t ? (0, u.RE)(e) && n ? u.AW.CATALOG : e : u.AW.HOME, [e, t, n]), [h, C] = r.useState(m), [_, b] = r.useState(u.f7.VISIBLE);
    r.useEffect(() => {
      g(h)
    }, [h, g]), r.useEffect(() => {
      if (C(m), e === u.AW.CATALOG) p();
      else if ((0, u.RE)(e)) {
        let t = f[e];
        null != t ? i(t) : p()
      }
    }, [m, e, i, p]);
    let {
      clearError: v
    } = (0, c.a)(), x = (0, l.k6)(), E = r.useCallback(async (e, t) => {
      if (v(), e === u.AW.CATALOG) p();
      else if ((0, u.RE)(e) && e !== h) {
        let t = f[e];
        null != t ? i(t) : p()
      }
      if (h !== e) {
        if (t) {
          let e;
          b(u.f7.OUT), await (e = 1.1 * u.lb, new Promise(t => setTimeout(t, e)))
        }
        C(n && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e), t && b(u.f7.IN), x.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), {
          shallow: true
        }), b(u.f7.VISIBLE)
      }
    }, [x, i, n, p, h, v]);
    return {
      selectedTab: h,
      transitionState: _,
      transitionToTab: E
    }
  }