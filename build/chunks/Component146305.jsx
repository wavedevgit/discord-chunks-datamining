/** Chunk was on 384 **/
/** chunk id: 146305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => eC
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk704215 = require("./704215.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk709246 = require("./709246.js"),
  Chunk223892 = require("./223892.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk676317 = require("./676317.js"),
  Chunk874993 = require("./874993.jsx"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk352981 = require("./352981.js"),
  Chunk610403 = require("./610403.jsx"),
  Chunk923726 = require("./923726.js"),
  Chunk303737 = require("./303737.js"),
  Chunk15030 = require("./15030.jsx"),
  Chunk220685 = require("./220685.jsx"),
  Chunk536442 = require("./536442.js"),
  Chunk575258 = require("./575258.js"),
  Chunk276687 = require("./276687.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk823379 = require("./823379.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk931805 = require("./931805.jsx"),
  Chunk853714 = require("./853714.jsx"),
  Chunk626137 = require("./626137.jsx"),
  Chunk822591 = require("./822591.jsx"),
  Chunk782604 = require("./782604.jsx"),
  Chunk614439 = require("./614439.jsx"),
  Chunk145260 = require("./145260.js"),
  Chunk789574 = require("./789574.jsx"),
  Chunk926958 = require("./926958.js"),
  Chunk969632 = require("./969632.js"),
  Chunk359191 = require("./359191.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk815977 = require("./815977.jsx"),
  Chunk730910 = require("./730910.jsx"),
  Chunk103576 = require("./103576.js"),
  Chunk475013 = require("./475013.jsx"),
  Chunk17699 = require("./17699.jsx"),
  Chunk213956 = require("./213956.jsx"),
  Chunk450377 = require("./450377.jsx"),
  Chunk566084 = require("./566084.js"),
  Chunk431301 = require("./431301.jsx"),
  Chunk802005 = require("./802005.jsx"),
  Chunk675377 = require("./675377.jsx"),
  Chunk312910 = require("./312910.jsx"),
  Chunk261317 = require("./261317.jsx"),
  Chunk966357 = require("./966357.jsx"),
  Chunk29605 = require("./29605.jsx"),
  Chunk324330 = require("./324330.jsx"),
  Chunk651780 = require("./651780.jsx"),
  Chunk353398 = require("./353398.jsx"),
  Chunk365774 = require("./365774.jsx"),
  Chunk486358 = require("./486358.jsx"),
  Chunk942478 = require("./942478.jsx"),
  Chunk845995 = require("./845995.jsx"),
  Chunk708510 = require("./708510.jsx"),
  Chunk237245 = require("./237245.jsx"),
  Chunk658666 = require("./658666.js"),
  Chunk224726 = require("./224726.jsx"),
  Chunk308619 = require("./308619.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk135899 = require("./135899.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk566386 = require("./566386.js");

function ev(e) {
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
}

function eO(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eC = {
  getSectionDefinition: function(e, t) {
    let eC = (0, b.p)(t.guild.id, "guild_settings"),
      ey = (0, u.Vm)(t.guild.id),
      eN = false === t.guild.features.has(eb.GuildFeatures.CREATOR_MONETIZABLE) && false === t.guild.features.has(eb.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
      eE = eC && eN ? {
        label: (0, r.jsx)("div", {
          className: e_.roleSubLabel,
          children: ej.intl.string(ej.t.Tn7Koo)
        }),
        ariaLabel: ej.intl.string(ej.t.Tn7Koo)
      } : {
        label: (0, r.jsx)("div", {
          className: e_.roleSubLabel,
          children: ej.intl.string(ej.t["KzCF/6"])
        }),
        ariaLabel: ej.intl.string(ej.t["KzCF/6"])
      },
      eI = t.guild.features.has(eb.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case eb.pNK.PROFILE:
        return {
          section: eb.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: ej.intl.string(ej.t.txdaxf), ariaLabel: ej.intl.string(ej.t.txdaxf), element: ef.Z, type: c.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [P.Z],
            element: eh.Z
          }
        };
      case eb.pNK.TAG:
        return {
          section: eb.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: ej.intl.string(ej.t["2QmKZ2"]), ariaLabel: ej.intl.string(ej.t["2QmKZ2"]), element: en.Z, predicate: () => t.canManageGuild, notice: {
            stores: [P.Z],
            element: er.Z
          }, newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
        };
      case eb.pNK.ENGAGEMENT:
        return {
          section: eb.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: ej.intl.string(ej.t["6TAHbx"]), ariaLabel: ej.intl.string(ej.t["6TAHbx"]), element: ec.Z, notice: {
            stores: [P.Z],
            element: ed.R
          }
        };
      case eb.pNK.BOOST_PERKS:
        return {
          section: eb.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: ej.intl.string(ej.t.UKgg5N), ariaLabel: ej.intl.string(ej.t.UKgg5N), element: Q.I, notice: {
            stores: [P.Z, J.Z],
            element: $.C
          }
        };
      case eb.pNK.INVITES:
        return {
          section: eb.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: ej.intl.string(ej.t.YOt3Om), ariaLabel: ej.intl.string(ej.t.YOt3Om), element: eu.Z, type: c.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case eb.pNK.ROLES:
        return {
          section: eb.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: ej.intl.string(ej.t["LPJmL/"]), element: K.Z, type: c.bT.MINIMAL, ariaLabel: ej.intl.string(ej.t.KXcEC9), notice: {
            stores: [V.Z],
            element: K._
          }, predicate: () => t.canManageRoles, icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", {
            className: e_.redDot
          }) : true
        };
      case eb.pNK.EMOJI:
        return {
          section: eb.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: ej.intl.string(ej.t.sMOuuS), element: ei.ZP, predicate: () => t.canManageGuildExpressions
        };
      case eb.pNK.STICKERS:
        return {
          section: eb.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: ej.intl.string(ej.t.R5nQkS), ariaLabel: ej.intl.string(ej.t.R5nQkS), element: et.Z, predicate: () => t.canManageGuildExpressions
        };
      case eb.pNK.SOUNDBOARD:
        return {
          section: eb.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: ej.intl.string(ej.t.OWQNYr), ariaLabel: ej.intl.string(ej.t.OWQNYr), element: ee.Z, predicate: () => t.canManageGuildExpressions
        };
      case eb.pNK.GUILD_TEMPLATES:
        return {
          section: eb.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(eo.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: ej.intl.string(ej.t.KUw7Ss), element: es.ZP, notice: {
            stores: [es.Sf],
            element: es.Q5
          }, predicate: () => t.canManageGuild
        };
      case eb.pNK.ACCESS:
        return {
          section: eb.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: ej.intl.string(ej.t.YJlvBM), element: eg.O, notice: {
            stores: [ep.Z],
            element: em.w
          }, predicate: () => t.canManageGuild, ariaLabel: ej.intl.string(ej.t.YJlvBM)
        };
      case eb.pNK.INTEGRATIONS:
        return {
          section: eb.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: ej.intl.string(ej.t.CIsNZw), ariaLabel: ej.intl.string(ej.t.CIsNZw), element: G.Z, notice: {
            stores: [k.default, P.Z],
            element: G.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case eb.pNK.APP_DIRECTORY:
        return {
          section: eb.pNK.APP_DIRECTORY, label: (0, r.jsx)(w.K, {}), ariaLabel: ej.intl.string(ej.t.AKcFUj), onClick: () => {
            (0, w.O)({
              guildId: t.guild.id,
              section: e
            })
          }
        };
      case eb.pNK.SAFETY:
        return {
          section: eb.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: ej.intl.string(ej.t["suhY+Y"]), ariaLabel: ej.intl.string(ej.t["suhY+Y"]), element: q.Z, newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(eb.GuildFeatures.COMMUNITY)
        };
      case eb.pNK.MODERATION:
        return {
          section: eb.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: ej.intl.string(ej.t["suhY+Y"]), element: X.ZP, predicate: () => t.canManageGuild && !t.guild.features.has(eb.GuildFeatures.COMMUNITY)
        };
      case eb.pNK.GUILD_AUTOMOD:
        return {
          section: eb.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: e_.landingPageTabLink,
            children: ej.intl.string(ej.t.uRelgx)
          }), ariaLabel: ej.intl.string(ej.t.uRelgx), element: p.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(eb.GuildFeatures.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id))
        };
      case eb.pNK.AUDIT_LOG:
        return {
          section: eb.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: ej.intl.string(ej.t.SPWLyT), element: Z.Z, type: c.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case eb.pNK.BANS:
        return {
          section: eb.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: ej.intl.string(ej.t.ZbeITS), element: Y.Z, predicate: () => t.canManageBans
        };
      case eb.pNK.COMMUNITY:
        let eS = ej.intl.string(ej.t.ElKTeb);
        return t.guild.features.has(eb.GuildFeatures.COMMUNITY) && (eS = ej.intl.string(ej.t["8nY2LE"])), {
          section: eb.pNK.COMMUNITY,
          impressionName: t.guild.features.has(eb.GuildFeatures.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eS,
          element: D.Z,
          ariaLabel: eS,
          newIndicator: !t.guild.features.has(eb.GuildFeatures.COMMUNITY) && null != t.memberCount && t.memberCount >= ex.U3 && C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [P.Z],
            element: D.X
          }
        };
      case eb.pNK.ONBOARDING:
        return {
          section: eb.pNK.ONBOARDING, label: ej.intl.string(ej.t["LdxCK/"]), element: z.Z, ariaLabel: ej.intl.string(ej.t["LdxCK/"]), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [B.Z, U.Z, M.Z],
            element: W.Z
          }, predicate: () => (0, h.wC)(t.guild.id), decoration: function(e, t) {
            if (f.Z.getEnabled(e)) return ej.intl.string(ej.t.pPSmxg).toUpperCase();
            if ((0, H.C)(e)) return ej.intl.string(ej.t["HDF4o/"]).toUpperCase();
            let n = F.ug,
              r = n.findIndex(e => e === t);
            if (false !== r) return ej.intl.formatToPlainString(ej.t["5r28iW"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case eb.pNK.ANALYTICS:
        return {
          section: eb.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: ej.intl.string(ej.t["0wWfUG"]), ariaLabel: ej.intl.string(ej.t["0wWfUG"]), element: R.Z, predicate: () => eI
        };
      case eb.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: eb.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: e_.landingPageTabLink,
            children: [ej.intl.string(ej.t.kGlQGF), " ", (0, r.jsx)(g.Z, {})]
          }), ariaLabel: ej.intl.string(ej.t.kGlQGF), element: L.Z, notice: {
            stores: [P.Z],
            element: L.J
          }, type: c.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(eb.GuildFeatures.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case eb.pNK.COMMUNITY_WELCOME:
        return {
          section: eb.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: ej.intl.string(ej.t["2rkmDr"]), ariaLabel: ej.intl.string(ej.t["2rkmDr"]), element: A.Z, notice: {
            stores: [y.Z],
            element: N.Z
          }, predicate: () => t.canManageGuild && t.guild.features.has(eb.GuildFeatures.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(eb.GuildFeatures.GUILD_SERVER_GUIDE)
        };
      case eb.pNK.ROLE_SUBSCRIPTIONS:
        return eO(ev({}, eE), {
          section: eb.pNK.ROLE_SUBSCRIPTIONS,
          element: v.Z,
          type: c.bT.CUSTOM,
          predicate: () => ey ? t.monetizationPredicate() && ((0, j.sy)(t.guild) || d.Z.hasSeenCreatorOnboardingForGuild(t.guild.id)) : t.monetizationPredicate(),
          newIndicatorDismissibleContentTypes: (0, _.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case eb.pNK.GUILD_PRODUCTS:
        return {
          section: eb.pNK.GUILD_PRODUCTS, label: ej.intl.string(ej.t.X6h2gz), ariaLabel: ej.intl.string(ej.t.X6h2gz), element: x.Z, predicate: () => t.monetizationPredicate() && (0, b.p)(t.guild.id, "guild_product_settings_predicate") && (0, j.sy)(t.guild)
        };
      case eb.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: eb.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: ej.intl.string(ej.t.ipTYsk), ariaLabel: ej.intl.string(ej.t.ipTYsk), element: O.Z, predicate: () => t.monetizationPredicate() && (0, j.sy)(t.guild)
        };
      case eb.pNK.GUILD_PREMIUM:
        return {
          section: eb.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: ej.intl.string(ej.t["8+VX4z"]), ariaLabel: ej.intl.string(ej.t["8+VX4z"]), element: ea.Z, className: e_.serverBoostTabItem, icon: (0, r.jsx)(s.Ucv, {
            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            size: "sm",
            className: e_.icon
          })
        };
      case eb.pNK.MEMBERS:
        return {
          section: eb.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(el.$r, {}), ariaLabel: ej.intl.string(ej.t["9Oq93m"]), element: el.ZP, type: c.bT.CUSTOM, predicate: () => t.canAccessMembersPage, onClick: () => {
            (0, el.JA)()
          }
        };
      case eb.pNK.DELETE:
        return {
          section: eb.pNK.DELETE, onClick() {
            let e = E.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = () => {
              I.S.subscribeOnce(eb.CkL.LAYER_POP_COMPLETE, () => {
                T.Z.deleteGuild(t.guild.id)
              }), (0, o.xf)()
            };
            e.mfaEnabled ? (0, a.Z)({
              title: ej.intl.formatToPlainString(ej.t.us7mC1, {
                name: i
              }),
              subtitle: ej.intl.format(ej.t["Zuo+Vd"], {
                name: i
              }),
              confirmText: ej.intl.string(ej.t.l3hWP6),
              onConfirm: l
            }) : (0, s.ZDy)(async () => {
              let {
                default: e
              } = await n.e("93197").then(n.bind(n, 848876));
              return t => (0, r.jsx)(e, eO(ev({}, t), {
                onConfirm: l,
                guildName: i
              }))
            })
          }, label: ej.intl.string(ej.t.l3hWP6), ariaLabel: ej.intl.string(ej.t.l3hWP6), icon: (0, r.jsx)(s.XHJ, {
            size: "xs",
            color: "currentColor"
          }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case eb.pNK.LANDING:
      case eb.pNK.MEMBER_EDIT:
      case eb.pNK.MEMBER_TIMEOUT:
      case eb.pNK.MEMBER_KICK:
      case eb.pNK.MEMBER_BAN:
      case eb.pNK.CHANNELS:
      case eb.pNK.ROLE_EDIT:
      case eb.pNK.ROLE_PERMISSIONS:
      case eb.pNK.MEMBER_VERIFICATION:
      case eb.pNK.INTEGRATION_SETTINGS:
      case eb.pNK.SECURITY:
      case eb.pNK.AUDIT_LOG_FILTER:
      case eb.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case eb.pNK.VANITY_URL:
      case eb.pNK.INSTANT_INVITES:
      case eb.pNK.OVERVIEW:
      case eb.pNK.WEBHOOKS:
      case eb.pNK.EDIT_WEBHOOK:
      case eb.pNK.INTEGRATION_PLATFORM:
      case eb.pNK.LOBBIES_LINKED:
      case eb.pNK.EDIT_LINKED_LOBBY:
      case eb.pNK.CHANNELS_FOLLOWED:
      case eb.pNK.COMMUNITY_INTRO:
      case eb.pNK.ROLE_EDIT_REFRESH:
      case eb.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case eb.pNK.ROLE_SUBSCRIPTIONS_BASIC:
      case eb.pNK.ROLE_SUBSCRIPTIONS_TIERS:
      case eb.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case eb.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
      case eb.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, S.vE)(e)
    }
  }
}