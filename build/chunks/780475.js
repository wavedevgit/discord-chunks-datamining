/** Chunk was on 45620 **/
/** chunk id: 780475, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  EB: () => m,
  MV: () => p,
  q3: () => g
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
let p = e => {
    let {
      analyticsSource: t,
      analyticsLocations: n
    } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()), r = (e => {
      switch (e) {
        case u.AW.ORBS:
          return i.Z.COLLECTIBLES_SHOP_ORBS_TAB;
        case u.AW.HOME:
          return i.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
        case u.AW.BUNDLES:
          return i.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
        case u.AW.AVATAR_DECORATIONS:
          return i.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
        case u.AW.PROFILE_EFFECTS:
          return i.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
        case u.AW.NAMEPLATES:
          return i.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
        case u.AW.CATALOG:
          return i.Z.COLLECTIBLES_SHOP
      }
    })(e), {
      analyticsLocations: s,
      newestAnalyticsLocation: o
    } = (0, a.ZP)([...n, i.Z.COLLECTIBLES_SHOP, r]);
    return {
      analyticsSource: t,
      analyticsLocations: s,
      newestAnalyticsLocation: o,
      currentTabLocation: r
    }
  },
  g = (e, t, n, l, i) => {
    let {
      analyticsLocations: a,
      analyticsSource: o,
      currentTabLocation: c,
      newestAnalyticsLocation: f
    } = p(t);
    r.useEffect(() => {
      if (l !== u.f7.VISIBLE || f !== c) return;
      let r = t === u.AW.CATALOG ? i : o;
      s.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: a,
        source: r,
        page_session_id: e,
        page_type: t === u.AW.CATALOG ? "full" : t,
        category: t === u.AW.HOME ? true : n
      })
    }, [a, e, t, n, c, l, i, o, f])
  },
  m = (e, t) => {
    let {
      analyticsLocations: n
    } = p(e);
    r.useEffect(() => {
      null == t || o.ZP.canUseCollectibles(t) || s.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
        type: f.cd.COLLECTIBLES_SHOP,
        location_stack: n
      })
    }, [n, t])
  }