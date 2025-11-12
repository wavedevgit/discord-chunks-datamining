/** Chunk was on web.js **/
/** chunk id: 355045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
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
  Chunk375646 = require("./375646.js");
let T = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: a
  } = e, T = i.useRef(null), S = (0, s.e7)([m.default], () => m.default.getCurrentUser()), A = (0, s.e7)([g.Z], () => g.Z.boostSlots), {
    analyticsLocations: C
  } = (0, d.ZP)(), {
    fractionalState: N
  } = (0, f.Z)({
    forceFetch: false
  }), R = i.useMemo(() => Object.keys(A).filter(e => {
    let t = A[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }).length, [A, n.id]), P = (0, h.Z)(e.guild.id).total;

  function D() {
    (0, p.Z)({
      initialPlanId: null,
      subscriptionTier: O.Si.TIER_2,
      analyticsLocations: C,
      analyticsObject: {
        page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: y.qAy.BUTTON_ICON,
        objectType: y.AnalyticsObjectTypes.BUY
      },
      onClose: e => e && t()
    })
  }

  function w() {
    (0, p.Z)({
      initialPlanId: null,
      subscriptionTier: O.Si.TIER_2,
      isGift: true,
      analyticsLocations: C,
      analyticsObject: {
        page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: y.qAy.BUTTON_ICON,
        objectType: y.AnalyticsObjectTypes.GIFT
      },
      onClose: e => e && t()
    })
  }
  return (0, r.jsxs)("div", {
    className: I.guildStatus,
    children: [(0, r.jsx)(_.Z, {
      className: I.guildIcon,
      guild: n,
      size: _.Z.Sizes.LARGER
    }), (0, r.jsx)(u.Heading, {
      className: I.guildName,
      color: "always-white",
      variant: "text-lg/bold",
      children: n.name
    }), (0, r.jsxs)("div", {
      className: I.guildBoostCountWrapper,
      children: [(0, r.jsxs)("div", {
        className: I.guildBoostCount,
        children: [(0, r.jsx)(u.Ucv, {
          color: P > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
          className: o()(I.guildBoostBadge, {
            [I.guildBoostBadgeWithBoosts]: P > 0
          })
        }), (0, r.jsx)(u.Text, {
          className: I.guildStatusCopy,
          variant: "text-md/bold",
          children: v.intl.format(v.t["pob/cL"], {
            subscriptions: P
          })
        })]
      }), R > 0 ? (0, r.jsx)(u.Text, {
        className: I.guildBoostCountCurrentUser,
        variant: "text-sm/normal",
        children: v.intl.format(v.t.Jeto2u, {
          numSubscriptions: R
        })
      }) : null]
    }), (0, r.jsxs)("div", {
      className: I.guildBoostCtas,
      children: [(0, r.jsx)(l.$, {
        innerRef: T,
        onChange: a,
        threshold: .9,
        children: (0, r.jsx)("div", {
          ref: T,
          className: o()(I.guildBoostCta, I.guildBoostCtaBoostWrapper),
          children: (0, r.jsx)(b.Z, {
            className: I.guildBoostCtaBoost,
            innerClassName: o()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaBoostContent),
            buttonShineClassName: I.guildBoostCtaBoostShine,
            guild: n,
            analyticsLocation: {
              page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: y.qAy.BUTTON_CTA,
              objectType: y.AnalyticsObjectTypes.BUY
            },
            closeLayer: t,
            color: c.zx.Colors.WHITE,
            size: c.zx.Sizes.LARGE,
            fullWidth: true
          })
        })
      }), E.ZP.hasFreeBoosts(S, N) || E.ZP.isPremium(S, O.PremiumTypes.TIER_2) ? (0, r.jsxs)(c.zx, {
        "data-migration-pending": true,
        className: o()(I.guildBoostCta, I.guildBoostCtaSecondary),
        innerClassName: o()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaGiftContent),
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        onClick: w,
        size: c.zx.Sizes.LARGE,
        children: [(0, r.jsx)(u.OgN, {
          size: "md",
          color: "currentColor",
          className: I.guildBoostCtaGiftIcon
        }), v.intl.string(v.t["8MYSQw"])]
      }) : (0, r.jsx)(c.zx, {
        "data-migration-pending": true,
        className: o()(I.guildBoostCta, I.guildBoostCtaSecondary),
        innerClassName: o()(I.__invalid_guildBoostCtaContent, I.__invalid_guildBoostCtaSubscribeContent),
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        onClick: D,
        size: c.zx.Sizes.LARGE,
        children: v.intl.string(v.t.Q43TvC)
      })]
    })]
  })
}