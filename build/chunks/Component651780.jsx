/** Chunk was on 29679 **/
/** chunk id: 651780, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk37234 = require("./37234.js"),
  Chunk821849 = require("./821849.js"),
  Chunk774078 = require("./774078.js"),
  Chunk100527 = require("./100527.js"),
  Chunk15640 = require("./15640.js"),
  Chunk774380 = require("./774380.jsx"),
  Chunk404270 = require("./404270.jsx"),
  Chunk441536 = require("./441536.js"),
  Chunk174604 = require("./174604.jsx"),
  Chunk399829 = require("./399829.jsx"),
  Chunk428862 = require("./428862.jsx"),
  Chunk899667 = require("./899667.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk63063 = require("./63063.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk901550 = require("./901550.js");

function S(e) {
  let {
    endsAt: t,
    appliedGuildBoostsToMaintain: n,
    tierName: r
  } = e, {
    days: i,
    hours: l
  } = (0, u.Z)(t);
  return n <= 0 ? null : 0 === i && 0 === l ? N.intl.format(N.t.kF0HEa, {
    tierName: r,
    numPremiumSubscriptions: n
  }) : N.intl.format(N.t.neDJhq, {
    days: i,
    hours: l,
    tierName: r,
    numPremiumSubscriptions: n
  })
}

function T(e) {
  let {
    appliedGuildBoosts: t,
    guildId: n
  } = e, i = (0, C.gZ)(t, n), l = (0, C.nW)((0, C.Jh)(n));
  if (null == i || null == l) return null;
  let s = (0, C._k)(t, n);
  return (0, r.jsxs)(a.Wn, {
    messageType: a.QYI.WARNING,
    children: [(0, r.jsx)("div", {
      className: I.guildBoostingGracePeriodTitle,
      children: N.intl.format(N.t.LG7vvg, {})
    }), (0, r.jsx)(S, {
      endsAt: i,
      appliedGuildBoostsToMaintain: s,
      tierName: l
    })]
  })
}
let P = e => {
  let {
    isAnimatedTo: t,
    onSetRef: n,
    subscriptionCount: i,
    tier: l,
    tiers: a,
    tierIndex: s,
    guildId: o
  } = e;
  return (0, r.jsx)(j.Z, {
    subscriptionCount: i,
    tier: l,
    onSetRef: n,
    isAnimatedTo: t,
    hasBottomMargin: s !== a.length - 1,
    guildId: o
  }, l.tier)
};

function w() {
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(() => {
      (0, Chunk355467.tZ)(), (0, Chunk821849.Y2)()
    })
  }, []);
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk442837.e7)([Chunk899667.Z], () => null != module ? Chunk899667.Z.getAppliedGuildBoostsForGuild(module.id) : null),
    n = (0, Chunk15640.V)();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.nLovSZ)
      }), null != exports && null != module ? (0, Chunk951288.jsx)(T, {
        appliedGuildBoosts: exports,
        guildId: module.id
      }) : null, (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk901550.titleBlurb,
        variant: "text-sm/normal",
        children: Chunk388032.intl.format(Chunk388032.t.hLOkp9, {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.GUILD_SUBSCRIPTIONS)
        })
      })]
    }), null != module && (0, Chunk951288.jsx)(Chunk174604.Z, {
      guild: module,
      onButtonClick: function() {
        null != module && ((0, Chunk37234.xf)(), (0, Chunk441536.Z)(module.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_PREMIUM))
      }
    }), (0, Chunk951288.jsx)(Chunk399829.Z, {
      tiers: (0, Chunk267642.cP)(null != module && module.features.has(Chunk981631.GuildFeatures.COMMUNITY) && module.maxStageVideoChannelUsers >= Chunk981631.B9o),
      renderTier: P
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk901550.divider
    }), require ? (0, Chunk951288.jsx)(Chunk404270.Z, {}) : null, require ? (0, Chunk951288.jsx)(Chunk774380.Z, {
      onOpenPremiumClick: () => void Chunk626135.default.track(Chunk981631.rMx.PREMIUM_PROMOTION_OPENED, {
        location: {
          page: Chunk981631.ZY5.GUILD_SETTINGS,
          section: Chunk981631.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
          object: Chunk981631.qAy.BUTTON_CTA
        }
      })
    }) : null]
  })
}