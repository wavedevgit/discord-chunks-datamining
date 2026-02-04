/** Chunk was on 59275 **/
/** chunk id: 790297, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  N0: () => f,
  lC: () => p,
  uS: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk870216 = require("./870216.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
let p = e => {
    let {
      analyticsSource: t,
      analyticsLocations: n
    } = (0, l.cf)([c.A], () => c.A.getAnalytics()), r = (e => {
      switch (e) {
        case u.G2.ORBS:
          return s.A.COLLECTIBLES_SHOP_ORBS_TAB;
        case u.G2.HOME:
          return s.A.COLLECTIBLES_SHOP_HOME_SCREEN;
        case u.G2.BUNDLES:
          return s.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
        case u.G2.AVATAR_DECORATIONS:
          return s.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
        case u.G2.PROFILE_EFFECTS:
          return s.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
        case u.G2.NAMEPLATES:
          return s.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
        case u.G2.CATALOG:
          return s.A.COLLECTIBLES_SHOP
      }
    })(e), {
      analyticsLocations: i,
      newestAnalyticsLocation: o
    } = (0, a.Ay)([...n, s.A.COLLECTIBLES_SHOP, r]);
    return {
      analyticsSource: t,
      analyticsLocations: i,
      newestAnalyticsLocation: o,
      currentTabLocation: r
    }
  },
  m = (e, t, n, l, s) => {
    let {
      analyticsLocations: a,
      analyticsSource: o,
      currentTabLocation: c,
      newestAnalyticsLocation: g
    } = p(t);
    r.useEffect(() => {
      if (l !== u.Pf.VISIBLE || g !== c) return;
      let r = t === u.G2.CATALOG ? s : o;
      i.default.track(d.HAw.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: a,
        source: r,
        page_session_id: e,
        page_type: t === u.G2.CATALOG ? "full" : t,
        category: t === u.G2.HOME ? true : n
      })
    }, [a, e, t, n, c, l, s, o, g])
  },
  f = (e, t) => {
    let {
      analyticsLocations: n
    } = p(e);
    r.useEffect(() => {
      null == t || o.Ay.canUseCollectibles(t) || i.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, {
        type: g.e.COLLECTIBLES_SHOP,
        location_stack: n
      })
    }, [n, t])
  }