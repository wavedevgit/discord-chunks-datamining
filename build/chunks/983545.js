/** Chunk was on 59275 **/
/** chunk id: 983545, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  o: () => g
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk641150 = require("./641150.js"),
  Chunk151252 = require("./151252.js"),
  Chunk365491 = require("./365491.js"),
  Chunk856686 = require("./856686.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js");
let d = {
    [Chunk758836.G2.AVATAR_DECORATIONS]: Chunk641150.q.AVATAR_DECORATION,
    [Chunk758836.G2.PROFILE_EFFECTS]: Chunk641150.q.PROFILE_EFFECT,
    [Chunk758836.G2.NAMEPLATES]: Chunk641150.q.NAMEPLATE,
    [Chunk758836.G2.BUNDLES]: Chunk641150.q.BUNDLE
  },
  g = e => {
    let {
      enabled: t
    } = (0, a.Z)({
      location: "useShopViewTransition"
    }), {
      setItemTypeFilter: n,
      reset: s,
      setCurrentTab: g
    } = (0, i.v)(), f = r.useMemo(() => e !== c.G2.ORBS || t ? (0, c.dF)(e) ? c.G2.CATALOG : e : c.G2.HOME, [e, t]), [m, p] = r.useState(f), [_, b] = r.useState(c.Pf.VISIBLE);
    r.useEffect(() => {
      g(m)
    }, [m, g]), r.useEffect(() => {
      if (p(f), e === c.G2.CATALOG) s();
      else if ((0, c.dF)(e)) {
        let t = d[e];
        null != t ? n(t) : s()
      }
    }, [f, e, n, s]);
    let {
      clearError: h
    } = (0, o.S)(), E = (0, l.W6)(), v = r.useCallback(async (e, t) => {
      if (h(), e === c.G2.CATALOG) s();
      else if ((0, c.dF)(e) && e !== m) {
        let t = d[e];
        null != t ? n(t) : s()
      }
      if (m !== e) {
        if (t) {
          let e;
          b(c.Pf.OUT), await (e = 1.1 * c.H1, new Promise(t => setTimeout(t, e)))
        }
        p([c.G2.HOME, c.G2.ORBS].includes(e) ? e : c.G2.CATALOG), t && b(c.Pf.IN), E.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), {
          shallow: true
        }), b(c.Pf.VISIBLE)
      }
    }, [E, n, s, m, h]);
    return {
      selectedTab: m,
      transitionState: _,
      transitionToTab: v
    }
  }