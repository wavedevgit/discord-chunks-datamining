/** Chunk was on 59275 **/
/** chunk id: 790297, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  N0: () => p,
  lC: () => b,
  uS: () => g
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
let b = e => {
    let {
      analyticsSource: t,
      analyticsLocations: l
    } = (0, r.cf)([c.A], () => c.A.getAnalytics()), n = (e => {
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
    } = (0, a.Ay)([...l, s.A.COLLECTIBLES_SHOP, n]);
    return {
      analyticsSource: t,
      analyticsLocations: i,
      newestAnalyticsLocation: o,
      currentTabLocation: n
    }
  },
  g = (e, t, l, r, s) => {
    let {
      analyticsLocations: a,
      analyticsSource: o,
      currentTabLocation: c,
      newestAnalyticsLocation: f
    } = b(t);
    n.useEffect(() => {
      if (r !== u.Pf.VISIBLE || f !== c) return;
      let n = t === u.G2.CATALOG ? s : o;
      i.default.track(d.HAw.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: a,
        source: n,
        page_session_id: e,
        page_type: t === u.G2.CATALOG ? "full" : t,
        category: t === u.G2.HOME ? true : l
      })
    }, [a, e, t, l, c, r, s, o, f])
  },
  p = (e, t) => {
    let {
      analyticsLocations: l
    } = b(e);
    n.useEffect(() => {
      null == t || o.Ay.canUseCollectibles(t) || i.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, {
        type: f.e.COLLECTIBLES_SHOP,
        location_stack: l
      })
    }, [l, t])
  }