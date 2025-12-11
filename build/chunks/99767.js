/** Chunk was on 45620 **/
/** chunk id: 99767, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk335818 = require("./335818.js"),
  Chunk825102 = require("./825102.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let d = {
    [Chunk215023.AW.AVATAR_DECORATIONS]: Chunk335818.G.AVATAR_DECORATION,
    [Chunk215023.AW.PROFILE_EFFECTS]: Chunk335818.G.PROFILE_EFFECT,
    [Chunk215023.AW.NAMEPLATES]: Chunk335818.G.NAMEPLATE,
    [Chunk215023.AW.BUNDLES]: Chunk335818.G.BUNDLE
  },
  f = e => {
    let {
      enabled: t
    } = (0, i.W)({
      location: "useShopViewTransition"
    }), {
      setItemTypeFilter: n,
      reset: a,
      setCurrentTab: f
    } = (0, o.S)(), g = r.useMemo(() => e !== c.AW.ORBS || t ? (0, c.RE)(e) ? c.AW.CATALOG : e : c.AW.HOME, [e, t]), [p, b] = r.useState(g), [m, h] = r.useState(c.f7.VISIBLE);
    r.useEffect(() => {
      f(p)
    }, [p, f]), r.useEffect(() => {
      if (b(g), e === c.AW.CATALOG) a();
      else if ((0, c.RE)(e)) {
        let t = d[e];
        null != t ? n(t) : a()
      }
    }, [g, e, n, a]);
    let {
      clearError: C
    } = (0, s.a)(), v = (0, l.k6)(), E = r.useCallback(async (e, t) => {
      if (C(), e === c.AW.CATALOG) a();
      else if ((0, c.RE)(e) && e !== p) {
        let t = d[e];
        null != t ? n(t) : a()
      }
      if (p !== e) {
        if (t) {
          let e;
          h(c.f7.OUT), await (e = 1.1 * c.lb, new Promise(t => setTimeout(t, e)))
        }
        b([c.AW.HOME, c.AW.ORBS].includes(e) ? e : c.AW.CATALOG), t && h(c.f7.IN), v.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), {
          shallow: true
        }), h(c.f7.VISIBLE)
      }
    }, [v, n, a, p, C]);
    return {
      selectedTab: p,
      transitionState: m,
      transitionToTab: E
    }
  }