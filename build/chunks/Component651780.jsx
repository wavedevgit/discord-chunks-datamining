/** Chunk was on 9536 **/
/** chunk id: 651780, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk874176 = require("./874176.js");

function _(e) {
  let {
    endsAt: t,
    appliedGuildBoostsToMaintain: n,
    tierName: r
  } = e, {
    days: i,
    hours: l
  } = (0, u.Z)(t);
  return n <= 0 ? null : 0 === i && 0 === l ? I.intl.format(I.t.kF0HEa, {
    tierName: r,
    numPremiumSubscriptions: n
  }) : I.intl.format(I.t.neDJhq, {
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
      className: S.guildBoostingGracePeriodTitle,
      children: I.intl.format(I.t.LG7vvg, {})
    }), (0, r.jsx)(_, {
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
  i.useEffect(() => {
    s.Z.wait(() => {
      (0, o.tZ)(), (0, d.Y2)()
    })
  }, []);
  let e = (0, l.e7)([N.Z], () => N.Z.getGuild()),
    t = (0, l.e7)([v.Z], () => null != e ? v.Z.getAppliedGuildBoostsForGuild(e.id) : null),
    n = (0, f.V)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: I.intl.string(I.t.nLovSZ)
      }), null != t && null != e ? (0, r.jsx)(T, {
        appliedGuildBoosts: t,
        guildId: e.id
      }) : null, (0, r.jsx)(a.Text, {
        className: S.titleBlurb,
        variant: "text-sm/normal",
        children: I.intl.format(I.t.hLOkp9, {
          helpdeskArticle: y.Z.getArticleURL(E.BhN.GUILD_SUBSCRIPTIONS)
        })
      })]
    }), null != e && (0, r.jsx)(h.Z, {
      guild: e,
      onButtonClick: function() {
        null != e && ((0, c.xf)(), (0, p.Z)(e.id, g.Z.GUILD_POWERUPS_GUILD_SETTINGS_PREMIUM))
      }
    }), (0, r.jsx)(x.Z, {
      tiers: (0, C.cP)(null != e && e.features.has(E.GuildFeatures.COMMUNITY) && e.maxStageVideoChannelUsers >= E.B9o),
      renderTier: P
    }), (0, r.jsx)("div", {
      className: S.divider
    }), n ? (0, r.jsx)(b.Z, {}) : null, n ? (0, r.jsx)(m.Z, {
      onOpenPremiumClick: () => void O.default.track(E.rMx.PREMIUM_PROMOTION_OPENED, {
        location: {
          page: E.ZY5.GUILD_SETTINGS,
          section: E.jXE.NITRO_CROSS_PROMO_FROM_BOOSTING,
          object: E.qAy.BUTTON_CTA
        }
      })
    }) : null]
  })
}