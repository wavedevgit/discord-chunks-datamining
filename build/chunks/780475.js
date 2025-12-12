/** Chunk was on 45620 **/
/** chunk id: 780475, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  EB: () => m,
  MV: () => f,
  q3: () => p
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
let f = e => {
    let {
      analyticsSource: t,
      analyticsLocations: n
    } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()), r = (e => {
      switch (e) {
        case u.AW.ORBS:
          return o.Z.COLLECTIBLES_SHOP_ORBS_TAB;
        case u.AW.HOME:
          return o.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
        case u.AW.BUNDLES:
          return o.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
        case u.AW.AVATAR_DECORATIONS:
          return o.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
        case u.AW.PROFILE_EFFECTS:
          return o.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
        case u.AW.NAMEPLATES:
          return o.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
        case u.AW.CATALOG:
          return o.Z.COLLECTIBLES_SHOP
      }
    })(e), {
      analyticsLocations: s,
      newestAnalyticsLocation: a
    } = (0, i.ZP)([...n, o.Z.COLLECTIBLES_SHOP, r]);
    return {
      analyticsSource: t,
      analyticsLocations: s,
      newestAnalyticsLocation: a,
      currentTabLocation: r
    }
  },
  p = (e, t, n, l, o) => {
    let {
      analyticsLocations: i,
      analyticsSource: a,
      currentTabLocation: c,
      newestAnalyticsLocation: g
    } = f(t);
    r.useEffect(() => {
      if (l !== u.f7.VISIBLE || g !== c) return;
      let r = t === u.AW.CATALOG ? o : a;
      s.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: i,
        source: r,
        page_session_id: e,
        page_type: t === u.AW.CATALOG ? "full" : t,
        category: t === u.AW.HOME ? true : n
      })
    }, [i, e, t, n, c, l, o, a, g])
  },
  m = (e, t) => {
    let {
      analyticsLocations: n
    } = f(e);
    r.useEffect(() => {
      null == t || a.ZP.canUseCollectibles(t) || s.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
        type: g.cd.COLLECTIBLES_SHOP,
        location_stack: n
      })
    }, [n, t])
  }