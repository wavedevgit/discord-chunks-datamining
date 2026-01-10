/** Chunk was on 45620 **/
/** chunk id: 780475, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  EB: () => p,
  MV: () => g,
  q3: () => b
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk328347 = require("./328347.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let g = e => {
    let {
      analyticsSource: t,
      analyticsLocations: n
    } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()), r = (e => {
      switch (e) {
        case u.AW.ORBS:
          return a.Z.COLLECTIBLES_SHOP_ORBS_TAB;
        case u.AW.HOME:
          return a.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
        case u.AW.BUNDLES:
          return a.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
        case u.AW.AVATAR_DECORATIONS:
          return a.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
        case u.AW.PROFILE_EFFECTS:
          return a.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
        case u.AW.NAMEPLATES:
          return a.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
        case u.AW.CATALOG:
          return a.Z.COLLECTIBLES_SHOP
      }
    })(e), {
      analyticsLocations: i,
      newestAnalyticsLocation: o
    } = (0, s.ZP)([...n, a.Z.COLLECTIBLES_SHOP, r]);
    return {
      analyticsSource: t,
      analyticsLocations: i,
      newestAnalyticsLocation: o,
      currentTabLocation: r
    }
  },
  b = (e, t, n, l, a) => {
    let {
      analyticsLocations: s,
      analyticsSource: o,
      currentTabLocation: c,
      newestAnalyticsLocation: f
    } = g(t);
    r.useEffect(() => {
      if (l !== u.f7.VISIBLE || f !== c) return;
      let r = t === u.AW.CATALOG ? a : o;
      i.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: s,
        source: r,
        page_session_id: e,
        page_type: t === u.AW.CATALOG ? "full" : t,
        category: t === u.AW.HOME ? true : n
      })
    }, [s, e, t, n, c, l, a, o, f])
  },
  p = (e, t) => {
    let {
      analyticsLocations: n
    } = g(e);
    r.useEffect(() => {
      null == t || o.ZP.canUseCollectibles(t) || i.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
        type: f.cd.COLLECTIBLES_SHOP,
        location_stack: n
      })
    }, [n, t])
  }