/** Chunk was on 384 **/
/** chunk id: 146305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eO
});
var Chunk54381 = require("./54381.js"),
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

function e_(e) {
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
let eO = {
  getSectionDefinition: function(e, t) {
    let eO = (0, h.p)(t.guild.id, "guild_settings"),
      eC = (0, d.Vm)(t.guild.id),
      ey = false === t.guild.features.has(eh.GuildFeatures.CREATOR_MONETIZABLE) && false === t.guild.features.has(eh.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
      eN = eO && ey ? {
        label: (0, r.jsx)("div", {
          className: ej.roleSubLabel,
          children: ex.intl.string(ex.t.Tn7Koo)
        }),
        ariaLabel: ex.intl.string(ex.t.Tn7Koo)
      } : {
        label: (0, r.jsx)("div", {
          className: ej.roleSubLabel,
          children: ex.intl.string(ex.t["KzCF/6"])
        }),
        ariaLabel: ex.intl.string(ex.t["KzCF/6"])
      },
      eE = t.guild.features.has(eh.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case eh.pNK.PROFILE:
        return {
          section: eh.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: ex.intl.string(ex.t.txdaxf), ariaLabel: ex.intl.string(ex.t.txdaxf), element: ep.Z, type: o.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [T.Z],
            element: ef.Z
          }
        };
      case eh.pNK.TAG:
        return {
          section: eh.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: ex.intl.string(ex.t["2QmKZ2"]), ariaLabel: ex.intl.string(ex.t["2QmKZ2"]), element: et.Z, predicate: () => t.canManageGuild, notice: {
            stores: [T.Z],
            element: en.Z
          }, newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
        };
      case eh.pNK.ENGAGEMENT:
        return {
          section: eh.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: ex.intl.string(ex.t["6TAHbx"]), ariaLabel: ex.intl.string(ex.t["6TAHbx"]), element: eo.Z, notice: {
            stores: [T.Z],
            element: ec.R
          }
        };
      case eh.pNK.BOOST_PERKS:
        return {
          section: eh.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: ex.intl.string(ex.t.UKgg5N), ariaLabel: ex.intl.string(ex.t.UKgg5N), element: J.I, notice: {
            stores: [T.Z, X.Z],
            element: Q.C
          }
        };
      case eh.pNK.INVITES:
        return {
          section: eh.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: ex.intl.string(ex.t.YOt3Om), ariaLabel: ex.intl.string(ex.t.YOt3Om), element: ed.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case eh.pNK.ROLES:
        return {
          section: eh.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: ex.intl.string(ex.t["LPJmL/"]), element: V.Z, type: o.bT.MINIMAL, ariaLabel: ex.intl.string(ex.t.KXcEC9), notice: {
            stores: [z.Z],
            element: V._
          }, predicate: () => t.canManageRoles, icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", {
            className: ej.redDot
          }) : true
        };
      case eh.pNK.EMOJI:
        return {
          section: eh.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: ex.intl.string(ex.t.sMOuuS), element: er.ZP, predicate: () => t.canManageGuildExpressions
        };
      case eh.pNK.STICKERS:
        return {
          section: eh.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: ex.intl.string(ex.t.R5nQkS), ariaLabel: ex.intl.string(ex.t.R5nQkS), element: ee.Z, predicate: () => t.canManageGuildExpressions
        };
      case eh.pNK.SOUNDBOARD:
        return {
          section: eh.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: ex.intl.string(ex.t.OWQNYr), ariaLabel: ex.intl.string(ex.t.OWQNYr), element: $.Z, predicate: () => t.canManageGuildExpressions
        };
      case eh.pNK.GUILD_TEMPLATES:
        return {
          section: eh.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(es.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: ex.intl.string(ex.t.KUw7Ss), element: ea.ZP, notice: {
            stores: [ea.Sf],
            element: ea.Q5
          }, predicate: () => t.canManageGuild
        };
      case eh.pNK.ACCESS:
        return {
          section: eh.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: ex.intl.string(ex.t.YJlvBM), element: eu.O, notice: {
            stores: [em.Z],
            element: eg.w
          }, predicate: () => t.canManageGuild, ariaLabel: ex.intl.string(ex.t.YJlvBM)
        };
      case eh.pNK.INTEGRATIONS:
        return {
          section: eh.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: ex.intl.string(ex.t.CIsNZw), ariaLabel: ex.intl.string(ex.t.CIsNZw), element: k.Z, notice: {
            stores: [L.default, T.Z],
            element: k.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case eh.pNK.APP_DIRECTORY:
        return {
          section: eh.pNK.APP_DIRECTORY, label: (0, r.jsx)(P.K, {}), ariaLabel: ex.intl.string(ex.t.AKcFUj), onClick: () => {
            (0, P.O)({
              guildId: t.guild.id,
              section: e
            })
          }
        };
      case eh.pNK.SAFETY:
        return {
          section: eh.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: ex.intl.string(ex.t["suhY+Y"]), ariaLabel: ex.intl.string(ex.t["suhY+Y"]), element: Y.Z, newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(eh.GuildFeatures.COMMUNITY)
        };
      case eh.pNK.MODERATION:
        return {
          section: eh.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: ex.intl.string(ex.t["suhY+Y"]), element: q.ZP, predicate: () => t.canManageGuild && !t.guild.features.has(eh.GuildFeatures.COMMUNITY)
        };
      case eh.pNK.GUILD_AUTOMOD:
        return {
          section: eh.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: ej.landingPageTabLink,
            children: ex.intl.string(ex.t.uRelgx)
          }), ariaLabel: ex.intl.string(ex.t.uRelgx), element: m.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(eh.GuildFeatures.COMMUNITY) && ((0, g.Nb)(t.guild.id) || (0, g.ze)(t.guild.id))
        };
      case eh.pNK.AUDIT_LOG:
        return {
          section: eh.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: ex.intl.string(ex.t.SPWLyT), element: w.Z, type: o.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case eh.pNK.BANS:
        return {
          section: eh.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: ex.intl.string(ex.t.ZbeITS), element: K.Z, predicate: () => t.canManageBans
        };
      case eh.pNK.COMMUNITY:
        let eI = ex.intl.string(ex.t.ElKTeb);
        return t.guild.features.has(eh.GuildFeatures.COMMUNITY) && (eI = ex.intl.string(ex.t["8nY2LE"])), {
          section: eh.pNK.COMMUNITY,
          impressionName: t.guild.features.has(eh.GuildFeatures.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eI,
          element: R.Z,
          ariaLabel: eI,
          newIndicator: !t.guild.features.has(eh.GuildFeatures.COMMUNITY) && null != t.memberCount && t.memberCount >= eb.U3 && O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [T.Z],
            element: R.X
          }
        };
      case eh.pNK.ONBOARDING:
        return {
          section: eh.pNK.ONBOARDING, label: ex.intl.string(ex.t["LdxCK/"]), element: H.Z, ariaLabel: ex.intl.string(ex.t["LdxCK/"]), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [U.Z, M.Z, G.Z],
            element: W.Z
          }, predicate: () => (0, f.wC)(t.guild.id), decoration: function(e, t) {
            if (p.Z.getEnabled(e)) return ex.intl.string(ex.t.pPSmxg).toUpperCase();
            if ((0, F.C)(e)) return ex.intl.string(ex.t["HDF4o/"]).toUpperCase();
            let n = B.ug,
              r = n.findIndex(e => e === t);
            if (false !== r) return ex.intl.formatToPlainString(ex.t["5r28iW"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case eh.pNK.ANALYTICS:
        return {
          section: eh.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: ex.intl.string(ex.t["0wWfUG"]), ariaLabel: ex.intl.string(ex.t["0wWfUG"]), element: Z.Z, predicate: () => eE
        };
      case eh.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: eh.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: ej.landingPageTabLink,
            children: [ex.intl.string(ex.t.kGlQGF), " ", (0, r.jsx)(u.Z, {})]
          }), ariaLabel: ex.intl.string(ex.t.kGlQGF), element: A.Z, notice: {
            stores: [T.Z],
            element: A.J
          }, type: o.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(eh.GuildFeatures.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case eh.pNK.COMMUNITY_WELCOME:
        return {
          section: eh.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: ex.intl.string(ex.t["2rkmDr"]), ariaLabel: ex.intl.string(ex.t["2rkmDr"]), element: D.Z, notice: {
            stores: [C.Z],
            element: y.Z
          }, predicate: () => t.canManageGuild && t.guild.features.has(eh.GuildFeatures.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(eh.GuildFeatures.GUILD_SERVER_GUIDE)
        };
      case eh.pNK.ROLE_SUBSCRIPTIONS:
        return ev(e_({}, eN), {
          section: eh.pNK.ROLE_SUBSCRIPTIONS,
          element: _.Z,
          type: o.bT.CUSTOM,
          predicate: () => eC ? t.monetizationPredicate() && ((0, x.sy)(t.guild) || c.Z.hasSeenCreatorOnboardingForGuild(t.guild.id)) : t.monetizationPredicate(),
          newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case eh.pNK.GUILD_PRODUCTS:
        return {
          section: eh.pNK.GUILD_PRODUCTS, label: ex.intl.string(ex.t.X6h2gz), ariaLabel: ex.intl.string(ex.t.X6h2gz), element: b.Z, predicate: () => t.monetizationPredicate() && (0, h.p)(t.guild.id, "guild_product_settings_predicate") && (0, x.sy)(t.guild)
        };
      case eh.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: eh.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: ex.intl.string(ex.t.ipTYsk), ariaLabel: ex.intl.string(ex.t.ipTYsk), element: v.Z, predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild)
        };
      case eh.pNK.GUILD_PREMIUM:
        return {
          section: eh.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: ex.intl.string(ex.t["8+VX4z"]), ariaLabel: ex.intl.string(ex.t["8+VX4z"]), element: el.Z, className: ej.serverBoostTabItem, icon: (0, r.jsx)(a.Ucv, {
            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            size: "sm",
            className: ej.icon
          })
        };
      case eh.pNK.MEMBERS:
        return {
          section: eh.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(ei.$r, {}), ariaLabel: ex.intl.string(ex.t["9Oq93m"]), element: ei.ZP, type: o.bT.CUSTOM, predicate: () => t.canAccessMembersPage, onClick: () => {
            (0, ei.JA)()
          }
        };
      case eh.pNK.DELETE:
        return {
          section: eh.pNK.DELETE, onClick() {
            let e = N.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = () => {
              E.S.subscribeOnce(eh.CkL.LAYER_POP_COMPLETE, () => {
                S.Z.deleteGuild(t.guild.id)
              }), (0, s.xf)()
            };
            e.mfaEnabled ? (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, ev(e_({}, e), {
              header: ex.intl.formatToPlainString(ex.t.us7mC1, {
                name: i
              }),
              confirmText: ex.intl.string(ex.t.l3hWP6),
              cancelText: ex.intl.string(ex.t["ETE/oC"]),
              onConfirm: l,
              children: (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                children: ex.intl.format(ex.t["Zuo+Vd"], {
                  name: i
                })
              })
            }))) : (0, a.ZDy)(async () => {
              let {
                default: e
              } = await n.e("93197").then(n.bind(n, 848876));
              return t => (0, r.jsx)(e, ev(e_({}, t), {
                onConfirm: l,
                guildName: i
              }))
            })
          }, label: ex.intl.string(ex.t.l3hWP6), ariaLabel: ex.intl.string(ex.t.l3hWP6), icon: (0, r.jsx)(a.XHJ, {
            size: "xs",
            color: "currentColor"
          }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case eh.pNK.LANDING:
      case eh.pNK.MEMBER_EDIT:
      case eh.pNK.MEMBER_TIMEOUT:
      case eh.pNK.MEMBER_KICK:
      case eh.pNK.MEMBER_BAN:
      case eh.pNK.CHANNELS:
      case eh.pNK.ROLE_EDIT:
      case eh.pNK.ROLE_PERMISSIONS:
      case eh.pNK.MEMBER_VERIFICATION:
      case eh.pNK.INTEGRATION_SETTINGS:
      case eh.pNK.SECURITY:
      case eh.pNK.AUDIT_LOG_FILTER:
      case eh.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case eh.pNK.VANITY_URL:
      case eh.pNK.INSTANT_INVITES:
      case eh.pNK.OVERVIEW:
      case eh.pNK.WEBHOOKS:
      case eh.pNK.EDIT_WEBHOOK:
      case eh.pNK.INTEGRATION_PLATFORM:
      case eh.pNK.LOBBIES_LINKED:
      case eh.pNK.EDIT_LINKED_LOBBY:
      case eh.pNK.CHANNELS_FOLLOWED:
      case eh.pNK.COMMUNITY_INTRO:
      case eh.pNK.ROLE_EDIT_REFRESH:
      case eh.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case eh.pNK.ROLE_SUBSCRIPTIONS_BASIC:
      case eh.pNK.ROLE_SUBSCRIPTIONS_TIERS:
      case eh.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case eh.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
      case eh.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, I.vE)(e)
    }
  }
}