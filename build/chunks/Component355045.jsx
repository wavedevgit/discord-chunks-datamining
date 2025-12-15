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
  Chunk691807 = require("./691807.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk314884 = require("./314884.js"),
  Chunk74538 = require("./74538.js"),
  Chunk678558 = require("./678558.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887477 = require("./887477.js");
let I = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: a
  } = e, I = i.useRef(null), T = (0, s.e7)([h.default], () => h.default.getCurrentUser()), C = (0, s.e7)([g.Z], () => g.Z.boostSlots), A = null == T ? true : T.isPremiumGroupMember(), {
    analyticsLocations: N
  } = (0, d.ZP)(), P = i.useMemo(() => Object.keys(C).filter(e => {
    let t = C[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }).length, [C, n.id]), R = (0, _.Z)(e.guild.id).total;

  function w() {
    (0, p.Z)({
      initialPlanId: null,
      subscriptionTier: O.Si.TIER_2,
      analyticsLocations: N,
      analyticsObject: {
        page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: y.qAy.BUTTON_ICON,
        objectType: y.AnalyticsObjectTypes.BUY
      },
      onClose: e => e && t()
    })
  }

  function D() {
    (0, p.Z)({
      initialPlanId: null,
      subscriptionTier: O.Si.TIER_2,
      isGift: true,
      analyticsLocations: N,
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
    className: S.guildStatus,
    children: [(0, r.jsx)(f.Z, {
      className: S.guildIcon,
      guild: n,
      size: f.Z.Sizes.LARGER
    }), (0, r.jsx)(u.Heading, {
      className: S.guildName,
      color: "always-white",
      variant: "text-lg/bold",
      children: n.name
    }), (0, r.jsxs)("div", {
      className: S.guildBoostCountWrapper,
      children: [(0, r.jsxs)("div", {
        className: S.guildBoostCount,
        children: [(0, r.jsx)(u.Ucv, {
          color: R > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
          className: o()(S.guildBoostBadge, {
            [S.guildBoostBadgeWithBoosts]: R > 0
          })
        }), (0, r.jsx)(u.Text, {
          className: S.guildStatusCopy,
          variant: "text-md/bold",
          children: v.intl.format(v.t["pob/cL"], {
            subscriptions: R
          })
        })]
      }), P > 0 ? (0, r.jsx)(u.Text, {
        className: S.guildBoostCountCurrentUser,
        variant: "text-sm/normal",
        children: v.intl.format(v.t.Jeto2u, {
          numSubscriptions: P
        })
      }) : null]
    }), A ? (0, r.jsx)(m.Z, {}) : null, (0, r.jsxs)("div", {
      className: S.guildBoostCtas,
      children: [(0, r.jsx)(l.$, {
        innerRef: I,
        onChange: a,
        threshold: .9,
        children: (0, r.jsx)("div", {
          ref: I,
          className: o()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
          children: (0, r.jsx)(b.Z, {
            className: S.guildBoostCtaBoost,
            innerClassName: S.guildBoostCtaBoostContent,
            buttonShineClassName: S.guildBoostCtaBoostShine,
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
      }), E.ZP.hasFreeBoosts(T) || E.ZP.isPremium(T, O.PremiumTypes.TIER_2) ? (0, r.jsxs)(c.zx, {
        "data-migration-pending": true,
        className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
        innerClassName: S.guildBoostCtaGiftContent,
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        onClick: D,
        size: c.zx.Sizes.LARGE,
        children: [(0, r.jsx)(u.OgN, {
          size: "md",
          color: "currentColor",
          className: S.guildBoostCtaGiftIcon
        }), v.intl.string(v.t["8MYSQw"])]
      }) : (0, r.jsx)(c.zx, {
        "data-migration-pending": true,
        className: o()(S.guildBoostCta, S.guildBoostCtaSecondary),
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        onClick: w,
        size: c.zx.Sizes.LARGE,
        disabled: A,
        children: v.intl.string(v.t.Q43TvC)
      })]
    })]
  })
}