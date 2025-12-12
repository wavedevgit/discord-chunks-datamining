/** Chunk was on 384 **/
/** chunk id: 821458, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E6: () => g,
  f4: () => m,
  mw: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk48217 = require("./48217.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    uploadType: t,
    maxFileSizeBytes: l,
    onComplete: s,
    showUpsellHeader: a = true,
    analyticsLocation: o,
    analyticsLocations: c
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("91689"), n.e("89289"), n.e("91304")]).then(n.bind(n, 28130));
    return n => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      maxFileSizeBytes: l,
      onComplete: s,
      uploadType: t,
      showUpsellHeader: a,
      analyticsLocation: o,
      analyticsLocations: c
    }, n))
  })
}

function g(e) {
  let {
    guild: t,
    analyticsLocations: n,
    analyticsSection: r,
    analyticsObject: i,
    perks: s,
    targetPremiumGuildTier: c
  } = e;
  (0, l.yw)(u.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
    location: {
      section: r,
      object: u.qAy.LEARN_MORE,
      objectType: c ? (0, o.ge)(c) : true
    },
    guild_id: t.id,
    location_stack: n
  }), (0, a.Z)({
    analyticsLocations: n,
    analyticsSourceLocation: {
      section: r,
      object: i,
      page: u.ZY5.GUILD_SETTINGS
    },
    guild: t,
    perks: s
  })
}

function m(e, t, n, r) {
  let i = null == r ? true : r.type,
    l = {
      page: u.ZY5.GUILD_SETTINGS,
      section: u.jXE.ANIMATED_GUILD_BANNER_UPSELL,
      object: "temp"
    };
  if (null != i && null != n)
    if ("image/gif" !== i || e.features.has(u.GuildFeatures.ANIMATED_BANNER)) {
      if (!e.features.has(u.GuildFeatures.BANNER)) {
        l.object = u.qAy.IMAGE_CROPPING_MODAL, (0, s.c)({
          guild: e,
          analyticsLocations: t,
          analyticsLocation: l,
          banner: n,
          isGIF: false
        });
        return
      }
    } else {
      l.object = u.qAy.GIF_CROPPING_MODAL, (0, s.c)({
        guild: e,
        analyticsLocations: t,
        analyticsLocation: l,
        banner: n,
        isGIF: true
      });
      return
    } c.Z.updateGuild({
    banner: n
  })
}