/** Chunk was on web.js **/
/** chunk id: 355045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk317169 = require("./317169.js"),
  Chunk594174 = require("./594174.js"),
  Chunk314884 = require("./314884.js"),
  Chunk74538 = require("./74538.js"),
  Chunk678558 = require("./678558.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk15470 = require("./15470.js");
let I = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: a
  } = e, I = i.useRef(null), T = (0, s.e7)([h.default], () => h.default.getCurrentUser()), S = (0, s.e7)([m.Z], () => m.Z.boostSlots), {
    analyticsLocations: A
  } = (0, d.ZP)(), C = i.useMemo(() => Object.keys(S).filter(e => {
    let t = S[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }).length, [S, n.id]), N = (0, p.Z)(e.guild.id).total;

  function R() {
    (0, _.Z)({
      initialPlanId: null,
      subscriptionTier: y.Si.TIER_2,
      analyticsLocations: A,
      analyticsObject: {
        page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: b.qAy.BUTTON_ICON,
        objectType: b.AnalyticsObjectTypes.BUY
      },
      onClose: e => e && t()
    })
  }

  function P() {
    (0, _.Z)({
      initialPlanId: null,
      subscriptionTier: y.Si.TIER_2,
      isGift: true,
      analyticsLocations: A,
      analyticsObject: {
        page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: b.qAy.BUTTON_ICON,
        objectType: b.AnalyticsObjectTypes.GIFT
      },
      onClose: e => e && t()
    })
  }
  return (0, r.jsxs)("div", {
    className: v.guildStatus,
    children: [(0, r.jsx)(f.Z, {
      className: v.guildIcon,
      guild: n,
      size: f.Z.Sizes.LARGER
    }), (0, r.jsx)(u.Heading, {
      className: v.guildName,
      color: "always-white",
      variant: "text-lg/bold",
      children: n.name
    }), (0, r.jsxs)("div", {
      className: v.guildBoostCountWrapper,
      children: [(0, r.jsxs)("div", {
        className: v.guildBoostCount,
        children: [(0, r.jsx)(u.Ucv, {
          color: N > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
          className: o()(v.guildBoostBadge, {
            [v.guildBoostBadgeWithBoosts]: N > 0
          })
        }), (0, r.jsx)(u.Text, {
          className: v.guildStatusCopy,
          variant: "text-md/bold",
          children: O.intl.format(O.t["pob/cL"], {
            subscriptions: N
          })
        })]
      }), C > 0 ? (0, r.jsx)(u.Text, {
        className: v.guildBoostCountCurrentUser,
        variant: "text-sm/normal",
        children: O.intl.format(O.t.Jeto2u, {
          numSubscriptions: C
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: v.guildBoostCtas,
      children: [(0, r.jsx)(l.$, {
        innerRef: I,
        onChange: a,
        threshold: .9,
        children: (0, r.jsx)("div", {
          ref: I,
          className: o()(v.guildBoostCta, v.guildBoostCtaBoostWrapper),
          children: (0, r.jsx)(E.Z, {
            className: v.guildBoostCtaBoost,
            innerClassName: o()(v.__invalid_guildBoostCtaContent, v.guildBoostCtaBoostContent),
            buttonShineClassName: v.guildBoostCtaBoostShine,
            guild: n,
            analyticsLocation: {
              page: b.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: b.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: b.qAy.BUTTON_CTA,
              objectType: b.AnalyticsObjectTypes.BUY
            },
            closeLayer: t,
            color: c.zx.Colors.WHITE,
            size: c.zx.Sizes.LARGE,
            fullWidth: true
          })
        })
      }), g.ZP.hasFreeBoosts(T) || g.ZP.isPremium(T, y.PremiumTypes.TIER_2) ? (0, r.jsxs)(c.zx, {
        "data-migration-pending": true,
        className: o()(v.guildBoostCta, v.guildBoostCtaSecondary),
        innerClassName: o()(v.__invalid_guildBoostCtaContent, v.guildBoostCtaGiftContent),
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        onClick: P,
        size: c.zx.Sizes.LARGE,
        children: [(0, r.jsx)(u.OgN, {
          size: "md",
          color: "currentColor",
          className: v.guildBoostCtaGiftIcon
        }), O.intl.string(O.t["8MYSQw"])]
      }) : (0, r.jsx)(c.zx, {
        "data-migration-pending": true,
        className: o()(v.guildBoostCta, v.guildBoostCtaSecondary),
        innerClassName: o()(v.__invalid_guildBoostCtaContent, v.__invalid_guildBoostCtaSubscribeContent),
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        onClick: R,
        size: c.zx.Sizes.LARGE,
        children: O.intl.string(O.t.Q43TvC)
      })]
    })]
  })
}