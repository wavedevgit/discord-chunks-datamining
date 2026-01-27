/** Chunk was on 39048 **/
/** chunk id: 695800, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Nn: () => u,
  fI: () => m,
  p_: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk503566 = require("./503566.jsx"),
  Chunk631305 = require("./631305.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    uploadType: t,
    maxFileSizeBytes: l,
    onComplete: s,
    showUpsellHeader: a = true,
    analyticsLocation: o,
    analyticsLocations: c
  } = e;
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("79149"), n.e("53653"), n.e("62966")]).then(n.bind(n, 551028));
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
  (0, l.zV)(d.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
    location: {
      section: r,
      object: d.ZSU.LEARN_MORE,
      objectType: c ? (0, o.k1)(c) : true
    },
    guild_id: t.id,
    location_stack: n
  }), (0, a.A)({
    analyticsLocations: n,
    analyticsSourceLocation: {
      section: r,
      object: i,
      page: d.liQ.GUILD_SETTINGS
    },
    guild: t,
    perks: s
  })
}

function m(e, t, n, r) {
  let i = null == r ? true : r.type,
    l = {
      page: d.liQ.GUILD_SETTINGS,
      section: d.JJy.ANIMATED_GUILD_BANNER_UPSELL,
      object: "temp"
    };
  if (null != i && null != n)
    if ("image/gif" !== i || e.features.has(d.GuildFeatures.ANIMATED_BANNER)) {
      if (!e.features.has(d.GuildFeatures.BANNER)) {
        l.object = d.ZSU.IMAGE_CROPPING_MODAL, (0, s._)({
          guild: e,
          analyticsLocations: t,
          analyticsLocation: l,
          banner: n,
          isGIF: false
        });
        return
      }
    } else {
      l.object = d.ZSU.GIF_CROPPING_MODAL, (0, s._)({
        guild: e,
        analyticsLocations: t,
        analyticsLocation: l,
        banner: n,
        isGIF: true
      });
      return
    } c.A.updateGuild({
    banner: n
  })
}