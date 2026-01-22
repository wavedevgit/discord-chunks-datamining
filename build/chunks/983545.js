/** Chunk was on 59275 **/
/** chunk id: 983545, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  o: () => f
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
  f = e => {
    let {
      enabled: t
    } = (0, a.Z)({
      location: "useShopViewTransition"
    }), {
      setItemTypeFilter: l,
      reset: s,
      setCurrentTab: f
    } = (0, i.v)(), b = n.useMemo(() => e !== c.G2.ORBS || t ? (0, c.dF)(e) ? c.G2.CATALOG : e : c.G2.HOME, [e, t]), [g, m] = n.useState(b), [p, h] = n.useState(c.Pf.VISIBLE);
    n.useEffect(() => {
      f(g)
    }, [g, f]), n.useEffect(() => {
      if (m(b), e === c.G2.CATALOG) s();
      else if ((0, c.dF)(e)) {
        let t = d[e];
        null != t ? l(t) : s()
      }
    }, [b, e, l, s]);
    let {
      clearError: E
    } = (0, o.S)(), v = (0, r.W6)(), A = n.useCallback(async (e, t) => {
      if (E(), e === c.G2.CATALOG) s();
      else if ((0, c.dF)(e) && e !== g) {
        let t = d[e];
        null != t ? l(t) : s()
      }
      if (g !== e) {
        if (t) {
          let e;
          h(c.Pf.OUT), await (e = 1.1 * c.H1, new Promise(t => setTimeout(t, e)))
        }
        m([c.G2.HOME, c.G2.ORBS].includes(e) ? e : c.G2.CATALOG), t && h(c.Pf.IN), v.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), {
          shallow: true
        }), h(c.Pf.VISIBLE)
      }
    }, [v, l, s, g, E]);
    return {
      selectedTab: g,
      transitionState: p,
      transitionToTab: A
    }
  }