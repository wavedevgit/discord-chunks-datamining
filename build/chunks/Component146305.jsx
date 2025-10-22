/** Chunk was on 29679 **/
/** chunk id: 146305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => e_
});
var Chunk951288 = require("./951288.js"),
  Chunk990547 = require("./990547.js"),
  Chunk704215 = require("./704215.js"),
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
  Chunk929958 = require("./929958.js");

function ej(e) {
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

function ev(e, t) {
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
let e_ = {
  getSectionDefinition: function(e, t) {
    let e_ = (0, h.p)(t.guild.id, "guild_settings"),
      eC = (0, d.Vm)(t.guild.id),
      eO = false === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE) && false === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
      ey = e_ && eO ? {
        label: (0, r.jsx)("div", {
          className: ex.roleSubLabel,
          children: eb.intl.string(eb.t.Tn7Koo)
        }),
        ariaLabel: eb.intl.string(eb.t.Tn7Koo)
      } : {
        label: (0, r.jsx)("div", {
          className: ex.roleSubLabel,
          children: eb.intl.string(eb.t["KzCF/6"])
        }),
        ariaLabel: eb.intl.string(eb.t["KzCF/6"])
      },
      eE = t.guild.features.has(ef.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case ef.pNK.PROFILE:
        return {
          section: ef.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: eb.intl.string(eb.t.txdaxf), ariaLabel: eb.intl.string(eb.t.txdaxf), element: em.Z, type: o.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [T.Z],
            element: ep.Z
          }
        };
      case ef.pNK.TAG:
        return {
          section: ef.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: eb.intl.string(eb.t["2QmKZ2"]), ariaLabel: eb.intl.string(eb.t["2QmKZ2"]), element: ee.Z, predicate: () => t.canManageGuild, notice: {
            stores: [T.Z],
            element: et.Z
          }, newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
        };
      case ef.pNK.ENGAGEMENT:
        return {
          section: ef.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: eb.intl.string(eb.t["6TAHbx"]), ariaLabel: eb.intl.string(eb.t["6TAHbx"]), element: es.Z, notice: {
            stores: [T.Z],
            element: eo.R
          }
        };
      case ef.pNK.BOOST_PERKS:
        return {
          section: ef.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: eb.intl.string(eb.t.UKgg5N), ariaLabel: eb.intl.string(eb.t.UKgg5N), element: X.I, notice: {
            stores: [T.Z, q.Z],
            element: J.C
          }
        };
      case ef.pNK.INVITES:
        return {
          section: ef.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: eb.intl.string(eb.t.YOt3Om), ariaLabel: eb.intl.string(eb.t.YOt3Om), element: ec.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case ef.pNK.ROLES:
        return {
          section: ef.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: eb.intl.string(eb.t["LPJmL/"]), element: z.Z, type: o.bT.MINIMAL, ariaLabel: eb.intl.string(eb.t.KXcEC9), notice: {
            stores: [W.Z],
            element: z._
          }, predicate: () => t.canManageRoles, icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", {
            className: ex.redDot
          }) : true
        };
      case ef.pNK.EMOJI:
        return {
          section: ef.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: eb.intl.string(eb.t.sMOuuS), element: en.ZP, predicate: () => t.canManageGuildExpressions
        };
      case ef.pNK.STICKERS:
        return {
          section: ef.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: eb.intl.string(eb.t.R5nQkS), ariaLabel: eb.intl.string(eb.t.R5nQkS), element: $.Z, predicate: () => t.canManageGuildExpressions
        };
      case ef.pNK.SOUNDBOARD:
        return {
          section: ef.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: eb.intl.string(eb.t.OWQNYr), ariaLabel: eb.intl.string(eb.t.OWQNYr), element: Q.Z, predicate: () => t.canManageGuildExpressions
        };
      case ef.pNK.GUILD_TEMPLATES:
        return {
          section: ef.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(ea.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: eb.intl.string(eb.t.KUw7Ss), element: el.ZP, notice: {
            stores: [el.Sf],
            element: el.Q5
          }, predicate: () => t.canManageGuild
        };
      case ef.pNK.ACCESS:
        return {
          section: ef.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: eb.intl.string(eb.t.YJlvBM), element: ed.O, notice: {
            stores: [eg.Z],
            element: eu.w
          }, predicate: () => t.canManageGuild, ariaLabel: eb.intl.string(eb.t.YJlvBM)
        };
      case ef.pNK.INTEGRATIONS:
        return {
          section: ef.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: eb.intl.string(eb.t.CIsNZw), ariaLabel: eb.intl.string(eb.t.CIsNZw), element: k.Z, notice: {
            stores: [L.default, T.Z],
            element: k.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case ef.pNK.APP_DIRECTORY:
        return {
          section: ef.pNK.APP_DIRECTORY, label: (0, r.jsx)(P.K, {}), ariaLabel: eb.intl.string(eb.t.AKcFUj), onClick: () => {
            (0, P.O)({
              guildId: t.guild.id,
              section: e
            })
          }
        };
      case ef.pNK.SAFETY:
        return {
          section: ef.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: eb.intl.string(eb.t["suhY+Y"]), ariaLabel: eb.intl.string(eb.t["suhY+Y"]), element: K.Z, newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(ef.GuildFeatures.COMMUNITY)
        };
      case ef.pNK.MODERATION:
        return {
          section: ef.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: eb.intl.string(eb.t["suhY+Y"]), element: Y.ZP, predicate: () => t.canManageGuild && !t.guild.features.has(ef.GuildFeatures.COMMUNITY)
        };
      case ef.pNK.GUILD_AUTOMOD:
        return {
          section: ef.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: ex.landingPageTabLink,
            children: eb.intl.string(eb.t.uRelgx)
          }), ariaLabel: eb.intl.string(eb.t.uRelgx), element: m.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(ef.GuildFeatures.COMMUNITY) && ((0, g.Nb)(t.guild.id) || (0, g.ze)(t.guild.id))
        };
      case ef.pNK.AUDIT_LOG:
        return {
          section: ef.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: eb.intl.string(eb.t.SPWLyT), element: w.Z, type: o.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case ef.pNK.BANS:
        return {
          section: ef.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: eb.intl.string(eb.t.ZbeITS), element: V.Z, predicate: () => t.canManageBans
        };
      case ef.pNK.COMMUNITY:
        let eN = eb.intl.string(eb.t.ElKTeb);
        return t.guild.features.has(ef.GuildFeatures.COMMUNITY) && (eN = eb.intl.string(eb.t["8nY2LE"])), {
          section: ef.pNK.COMMUNITY,
          impressionName: t.guild.features.has(ef.GuildFeatures.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eN,
          element: R.Z,
          ariaLabel: eN,
          newIndicator: !t.guild.features.has(ef.GuildFeatures.COMMUNITY) && null != t.memberCount && t.memberCount >= eh.U3 && C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [T.Z],
            element: R.X
          }
        };
      case ef.pNK.ONBOARDING:
        return {
          section: ef.pNK.ONBOARDING, label: eb.intl.string(eb.t["LdxCK/"]), element: F.Z, ariaLabel: eb.intl.string(eb.t["LdxCK/"]), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [M.Z, G.Z],
            element: H.Z
          }, predicate: () => (0, f.wC)(t.guild.id), decoration: function(e, t) {
            if (p.Z.getEnabled(e)) return eb.intl.string(eb.t.pPSmxg).toUpperCase();
            if ((0, B.C)(e)) return eb.intl.string(eb.t["HDF4o/"]).toUpperCase();
            let n = U.ug,
              r = n.findIndex(e => e === t);
            if (false !== r) return eb.intl.formatToPlainString(eb.t["5r28iW"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case ef.pNK.ANALYTICS:
        return {
          section: ef.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: eb.intl.string(eb.t["0wWfUG"]), ariaLabel: eb.intl.string(eb.t["0wWfUG"]), element: Z.Z, predicate: () => eE
        };
      case ef.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: ef.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: ex.landingPageTabLink,
            children: [eb.intl.string(eb.t.kGlQGF), " ", (0, r.jsx)(u.Z, {})]
          }), ariaLabel: eb.intl.string(eb.t.kGlQGF), element: A.Z, notice: {
            stores: [T.Z],
            element: A.J
          }, type: o.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(ef.GuildFeatures.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case ef.pNK.COMMUNITY_WELCOME:
        return {
          section: ef.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: eb.intl.string(eb.t["2rkmDr"]), ariaLabel: eb.intl.string(eb.t["2rkmDr"]), element: D.Z, notice: {
            stores: [O.Z],
            element: y.Z
          }, predicate: () => t.canManageGuild && t.guild.features.has(ef.GuildFeatures.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(ef.GuildFeatures.GUILD_SERVER_GUIDE)
        };
      case ef.pNK.ROLE_SUBSCRIPTIONS:
        return ev(ej({}, ey), {
          section: ef.pNK.ROLE_SUBSCRIPTIONS,
          element: v.Z,
          type: o.bT.CUSTOM,
          predicate: () => eC ? t.monetizationPredicate() && ((0, x.sy)(t.guild) || c.Z.hasSeenCreatorOnboardingForGuild(t.guild.id)) : t.monetizationPredicate(),
          newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case ef.pNK.GUILD_PRODUCTS:
        return {
          section: ef.pNK.GUILD_PRODUCTS, label: eb.intl.string(eb.t.X6h2gz), ariaLabel: eb.intl.string(eb.t.X6h2gz), element: b.Z, predicate: () => t.monetizationPredicate() && (0, h.p)(t.guild.id, "guild_product_settings_predicate") && (0, x.sy)(t.guild)
        };
      case ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: eb.intl.string(eb.t.ipTYsk), ariaLabel: eb.intl.string(eb.t.ipTYsk), element: _.Z, predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild)
        };
      case ef.pNK.GUILD_PREMIUM:
        return {
          section: ef.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: eb.intl.string(eb.t["8+VX4z"]), ariaLabel: eb.intl.string(eb.t["8+VX4z"]), element: ei.Z, className: ex.serverBoostTabItem, icon: (0, r.jsx)(a.Ucv, {
            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            size: "sm",
            className: ex.icon
          })
        };
      case ef.pNK.MEMBERS:
        return {
          section: ef.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(er.$r, {}), ariaLabel: eb.intl.string(eb.t["9Oq93m"]), element: er.ZP, type: o.bT.CUSTOM, predicate: () => t.canAccessMembersPage, onClick: () => {
            (0, er.JA)()
          }
        };
      case ef.pNK.DELETE:
        return {
          section: ef.pNK.DELETE, onClick() {
            let e = E.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = {
              header: eb.intl.formatToPlainString(eb.t.us7mC1, {
                name: i
              }),
              confirmText: eb.intl.string(eb.t.l3hWP6),
              cancelText: eb.intl.string(eb.t["ETE/oC"]),
              onConfirm: () => {
                N.S.subscribeOnce(ef.CkL.LAYER_POP_COMPLETE, () => {
                  S.Z.deleteGuild(t.guild.id, i)
                }), (0, s.xf)()
              }
            };
            e.mfaEnabled ? (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, ev(ej({}, e, l), {
              children: (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                children: eb.intl.format(eb.t["Zuo+Vd"], {
                  name: i
                })
              })
            }))) : (0, a.ZDy)(async () => {
              let {
                default: e
              } = await n.e("95112").then(n.bind(n, 647748));
              return t => (0, r.jsx)(e, ev(ej({}, t, l), {
                validationText: i,
                instructionText: eb.intl.string(eb.t.abprOC),
                errorText: eb.intl.string(eb.t["c2/DS/"]),
                children: eb.intl.format(eb.t["Zuo+Vd"], {
                  name: i
                })
              }))
            })
          }, label: eb.intl.string(eb.t.l3hWP6), ariaLabel: eb.intl.string(eb.t.l3hWP6), icon: (0, r.jsx)(a.XHJ, {
            size: "xs",
            color: "currentColor"
          }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case ef.pNK.LANDING:
      case ef.pNK.MEMBER_EDIT:
      case ef.pNK.MEMBER_TIMEOUT:
      case ef.pNK.MEMBER_KICK:
      case ef.pNK.MEMBER_BAN:
      case ef.pNK.CHANNELS:
      case ef.pNK.ROLE_EDIT:
      case ef.pNK.ROLE_PERMISSIONS:
      case ef.pNK.MEMBER_VERIFICATION:
      case ef.pNK.INTEGRATION_SETTINGS:
      case ef.pNK.SECURITY:
      case ef.pNK.AUDIT_LOG_FILTER:
      case ef.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case ef.pNK.VANITY_URL:
      case ef.pNK.INSTANT_INVITES:
      case ef.pNK.OVERVIEW:
      case ef.pNK.WEBHOOKS:
      case ef.pNK.EDIT_WEBHOOK:
      case ef.pNK.INTEGRATION_PLATFORM:
      case ef.pNK.LOBBIES_LINKED:
      case ef.pNK.EDIT_LINKED_LOBBY:
      case ef.pNK.CHANNELS_FOLLOWED:
      case ef.pNK.COMMUNITY_INTRO:
      case ef.pNK.ROLE_EDIT_REFRESH:
      case ef.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case ef.pNK.ROLE_SUBSCRIPTIONS_BASIC:
      case ef.pNK.ROLE_SUBSCRIPTIONS_TIERS:
      case ef.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case ef.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
      case ef.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, I.vE)(e)
    }
  }
}