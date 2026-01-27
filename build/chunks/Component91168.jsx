/** Chunk was on 39048 **/
/** chunk id: 91168, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => eO
});
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk554146 = require("./554146.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk448564 = require("./448564.js"),
  Chunk611371 = require("./611371.jsx"),
  Chunk979816 = require("./979816.js"),
  Chunk774780 = require("./774780.jsx"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk130978 = require("./130978.js"),
  Chunk84763 = require("./84763.jsx"),
  Chunk567305 = require("./567305.js"),
  Chunk739455 = require("./739455.js"),
  Chunk599167 = require("./599167.jsx"),
  Chunk7891 = require("./7891.jsx"),
  Chunk450510 = require("./450510.js"),
  Chunk861410 = require("./861410.js"),
  Chunk433522 = require("./433522.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk203982 = require("./203982.js"),
  Chunk403362 = require("./403362.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk723278 = require("./723278.jsx"),
  Chunk282625 = require("./282625.jsx"),
  Chunk423981 = require("./423981.jsx"),
  Chunk925622 = require("./925622.jsx"),
  Chunk123488 = require("./123488.jsx"),
  Chunk758246 = require("./758246.jsx"),
  Chunk53656 = require("./53656.js"),
  Chunk826292 = require("./826292.jsx"),
  Chunk352821 = require("./352821.js"),
  Chunk132514 = require("./132514.js"),
  Chunk287479 = require("./287479.js"),
  Chunk400812 = require("./400812.js"),
  Chunk72533 = require("./72533.js"),
  Chunk291444 = require("./291444.jsx"),
  Chunk239741 = require("./239741.jsx"),
  Chunk396816 = require("./396816.js"),
  Chunk807165 = require("./807165.jsx"),
  Chunk454516 = require("./454516.jsx"),
  Chunk155008 = require("./155008.jsx"),
  Chunk965033 = require("./965033.jsx"),
  Chunk737331 = require("./737331.js"),
  Chunk771935 = require("./771935.jsx"),
  Chunk647171 = require("./647171.jsx"),
  Chunk113266 = require("./113266.jsx"),
  Chunk91534 = require("./91534.jsx"),
  Chunk984562 = require("./984562.jsx"),
  Chunk997418 = require("./997418.jsx"),
  Chunk314737 = require("./314737.jsx"),
  Chunk660834 = require("./660834.jsx"),
  Chunk365701 = require("./365701.jsx"),
  Chunk712367 = require("./712367.jsx"),
  Chunk533350 = require("./533350.jsx"),
  Chunk251838 = require("./251838.jsx"),
  Chunk239484 = require("./239484.jsx"),
  Chunk933137 = require("./933137.jsx"),
  Chunk234721 = require("./234721.jsx"),
  Chunk306846 = require("./306846.js"),
  Chunk215194 = require("./215194.jsx"),
  Chunk489154 = require("./489154.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk124759 = require("./124759.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk453263 = require("./453263.js");

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

function e_(e, t) {
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
    let eO = (0, h.$)(t.guild.id, "guild_settings"),
      ev = false === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE) && false === t.guild.features.has(ef.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
      ey = eO && ev ? {
        label: (0, r.jsx)("div", {
          className: ex.vf,
          children: eb.intl.string(eb.t.Tn7Koo)
        }),
        ariaLabel: eb.intl.string(eb.t.Tn7Koo)
      } : {
        label: (0, r.jsx)("div", {
          className: ex.vf,
          children: eb.intl.string(eb.t["KzCF/6"])
        }),
        ariaLabel: eb.intl.string(eb.t["KzCF/6"])
      },
      eA = t.guild.features.has(ef.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case ef.BEX.PROFILE:
        return {
          section: ef.BEX.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: eb.intl.string(eb.t.txdaxf), ariaLabel: eb.intl.string(eb.t.txdaxf), element: em.A, type: c.Py.SCROLLABLE_CUSTOM, notice: {
            stores: [T.A],
            element: ep.A
          }
        };
      case ef.BEX.TAG:
        return {
          section: ef.BEX.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: eb.intl.string(eb.t["2QmKZ2"]), ariaLabel: eb.intl.string(eb.t["2QmKZ2"]), element: et.A, predicate: () => t.canManageGuild, notice: {
            stores: [T.A],
            element: en.A
          }
        };
      case ef.BEX.ENGAGEMENT:
        return {
          section: ef.BEX.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: eb.intl.string(eb.t["6TAHbx"]), ariaLabel: eb.intl.string(eb.t["6TAHbx"]), element: ea.A, notice: {
            stores: [T.A],
            element: eo.y
          }
        };
      case ef.BEX.BOOST_PERKS:
        return {
          section: ef.BEX.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: eb.intl.string(eb.t.UKgg5N), ariaLabel: eb.intl.string(eb.t.UKgg5N), element: Q.H, notice: {
            stores: [T.A, Z.A],
            element: q.l
          }
        };
      case ef.BEX.INVITES:
        return {
          section: ef.BEX.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: eb.intl.string(eb.t.YOt3Om), ariaLabel: eb.intl.string(eb.t.YOt3Om), element: ec.A, type: c.Py.CUSTOM, predicate: () => t.canManageGuild
        };
      case ef.BEX.ROLES:
        return {
          section: ef.BEX.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: eb.intl.string(eb.t["LPJmL/"]), element: W.A, type: c.Py.MINIMAL, ariaLabel: eb.intl.string(eb.t.KXcEC9), notice: {
            stores: [z.A],
            element: W.W
          }, predicate: () => t.canManageRoles, icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", {
            className: ex.Vx
          }) : true
        };
      case ef.BEX.EMOJI:
        return {
          section: ef.BEX.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: eb.intl.string(eb.t.sMOuuS), element: er.Ay, predicate: () => t.canManageGuildExpressions
        };
      case ef.BEX.STICKERS:
        return {
          section: ef.BEX.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: eb.intl.string(eb.t.R5nQkS), ariaLabel: eb.intl.string(eb.t.R5nQkS), element: ee.A, predicate: () => t.canManageGuildExpressions
        };
      case ef.BEX.SOUNDBOARD:
        return {
          section: ef.BEX.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: eb.intl.string(eb.t.OWQNYr), ariaLabel: eb.intl.string(eb.t.OWQNYr), element: $.A, predicate: () => t.canManageGuildExpressions
        };
      case ef.BEX.GUILD_TEMPLATES:
        return {
          section: ef.BEX.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(es.A, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: eb.intl.string(eb.t.KUw7Ss), element: el.Ay, notice: {
            stores: [el.Jx],
            element: el.lz
          }, predicate: () => t.canManageGuild
        };
      case ef.BEX.ACCESS:
        return {
          section: ef.BEX.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: eb.intl.string(eb.t.YJlvBM), element: ed.y, notice: {
            stores: [eg.A],
            element: eu.G
          }, predicate: () => t.canManageGuild, ariaLabel: eb.intl.string(eb.t.YJlvBM)
        };
      case ef.BEX.INTEGRATIONS:
        return {
          section: ef.BEX.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: eb.intl.string(eb.t.CIsNZw), ariaLabel: eb.intl.string(eb.t.CIsNZw), element: k.A, notice: {
            stores: [L.default, T.A],
            element: k.K
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case ef.BEX.APP_DIRECTORY:
        return {
          section: ef.BEX.APP_DIRECTORY, label: (0, r.jsx)(C.L, {}), ariaLabel: eb.intl.string(eb.t.AKcFUj), onClick: () => {
            (0, C.N)({
              guildId: t.guild.id,
              section: e
            })
          }
        };
      case ef.BEX.SAFETY:
        return {
          section: ef.BEX.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: eb.intl.string(eb.t["suhY+Y"]), ariaLabel: eb.intl.string(eb.t["suhY+Y"]), element: X.A, newIndicatorDismissibleContentTypes: [l.M.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(ef.GuildFeatures.COMMUNITY)
        };
      case ef.BEX.MODERATION:
        return {
          section: ef.BEX.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: eb.intl.string(eb.t["suhY+Y"]), element: J.Ay, predicate: () => t.canManageGuild && !t.guild.features.has(ef.GuildFeatures.COMMUNITY)
        };
      case ef.BEX.GUILD_AUTOMOD:
        return {
          section: ef.BEX.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: ex.o2,
            children: eb.intl.string(eb.t.uRelgx)
          }), ariaLabel: eb.intl.string(eb.t.uRelgx), element: m.A, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(ef.GuildFeatures.COMMUNITY) && ((0, g.hX)(t.guild.id) || (0, g.i_)(t.guild.id))
        };
      case ef.BEX.AUDIT_LOG:
        return {
          section: ef.BEX.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: eb.intl.string(eb.t.SPWLyT), element: P.A, type: c.Py.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case ef.BEX.BANS:
        return {
          section: ef.BEX.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: eb.intl.string(eb.t.ZbeITS), element: Y.A, predicate: () => t.canManageBans
        };
      case ef.BEX.COMMUNITY:
        let eE = eb.intl.string(eb.t.ElKTeb);
        return t.guild.features.has(ef.GuildFeatures.COMMUNITY) && (eE = eb.intl.string(eb.t["8nY2LE"])), {
          section: ef.BEX.COMMUNITY,
          impressionName: t.guild.features.has(ef.GuildFeatures.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eE,
          element: R.A,
          ariaLabel: eE,
          newIndicator: !t.guild.features.has(ef.GuildFeatures.COMMUNITY) && null != t.memberCount && t.memberCount >= eh.dH && v.HP.hasHotspot(v._2.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [T.A],
            element: R.L
          }
        };
      case ef.BEX.ONBOARDING:
        return {
          section: ef.BEX.ONBOARDING, label: eb.intl.string(eb.t["LdxCK/"]), element: V.A, ariaLabel: eb.intl.string(eb.t["LdxCK/"]), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.M.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [B.A, U.A, M.A],
            element: K.A
          }, predicate: () => (0, f.rs)(t.guild.id), decoration: function(e, t) {
            if (p.A.getEnabled(e)) return eb.intl.string(eb.t.pPSmxg).toUpperCase();
            if ((0, H.o)(e)) return eb.intl.string(eb.t["HDF4o/"]).toUpperCase();
            let n = F.ti,
              r = n.findIndex(e => e === t);
            if (false !== r) return eb.intl.formatToPlainString(eb.t["5r28iW"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case ef.BEX.ANALYTICS:
        return {
          section: ef.BEX.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: eb.intl.string(eb.t["0wWfUG"]), ariaLabel: eb.intl.string(eb.t["0wWfUG"]), element: w.A, predicate: () => eA
        };
      case ef.BEX.DISCOVERY_LANDING_PAGE:
        return {
          section: ef.BEX.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: ex.o2,
            children: [eb.intl.string(eb.t.kGlQGF), " ", (0, r.jsx)(u.A, {})]
          }), ariaLabel: eb.intl.string(eb.t.kGlQGF), element: G.A, notice: {
            stores: [T.A],
            element: G.j
          }, type: c.Py.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(ef.GuildFeatures.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case ef.BEX.COMMUNITY_WELCOME:
        return {
          section: ef.BEX.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: eb.intl.string(eb.t["2rkmDr"]), ariaLabel: eb.intl.string(eb.t["2rkmDr"]), element: D.A, notice: {
            stores: [y.A],
            element: A.A
          }, predicate: () => t.canManageGuild && t.guild.features.has(ef.GuildFeatures.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(ef.GuildFeatures.GUILD_SERVER_GUIDE)
        };
      case ef.BEX.ROLE_SUBSCRIPTIONS:
        return e_(ej({}, ey), {
          section: ef.BEX.ROLE_SUBSCRIPTIONS,
          element: _.A,
          type: c.Py.CUSTOM,
          predicate: () => t.monetizationPredicate() && ((0, x.hA)(t.guild) || d.A.hasSeenCreatorOnboardingForGuild(t.guild.id)),
          newIndicatorDismissibleContentTypes: (0, j.aV)(t.guild) ? [l.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case ef.BEX.GUILD_PRODUCTS:
        return {
          section: ef.BEX.GUILD_PRODUCTS, label: eb.intl.string(eb.t.X6h2gz), ariaLabel: eb.intl.string(eb.t.X6h2gz), element: b.A, predicate: () => t.monetizationPredicate() && (0, h.$)(t.guild.id, "guild_product_settings_predicate") && (0, x.hA)(t.guild)
        };
      case ef.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: ef.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: eb.intl.string(eb.t.ipTYsk), ariaLabel: eb.intl.string(eb.t.ipTYsk), element: O.A, predicate: () => t.monetizationPredicate() && (0, x.hA)(t.guild)
        };
      case ef.BEX.MEMBERS:
        return {
          section: ef.BEX.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(ei.Q$, {}), ariaLabel: eb.intl.string(eb.t["9Oq93m"]), element: ei.Ay, type: c.Py.CUSTOM, predicate: () => t.canAccessMembersPage, onClick: () => {
            (0, ei.N8)()
          }
        };
      case ef.BEX.DELETE:
        return {
          section: ef.BEX.DELETE, onClick() {
            let e = E.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = () => {
              N._.subscribeOnce(ef.jej.LAYER_POP_COMPLETE, () => {
                I.A.deleteGuild(t.guild.id)
              }), (0, o.jH)()
            };
            e.mfaEnabled ? (0, s.A)({
              title: eb.intl.formatToPlainString(eb.t.us7mC1, {
                name: i
              }),
              subtitle: eb.intl.format(eb.t["Zuo+Vd"], {
                name: i
              }),
              confirmText: eb.intl.string(eb.t.l3hWP6),
              onConfirm: l
            }) : (0, a.mMO)(async () => {
              let {
                default: e
              } = await n.e("45199").then(n.bind(n, 310482));
              return t => (0, r.jsx)(e, e_(ej({}, t), {
                onConfirm: l,
                guildName: i
              }))
            })
          }, label: eb.intl.string(eb.t.l3hWP6), ariaLabel: eb.intl.string(eb.t.l3hWP6), icon: (0, r.jsx)(a.ucK, {
            size: "xs",
            color: "currentColor"
          }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case ef.BEX.LANDING:
      case ef.BEX.MEMBER_EDIT:
      case ef.BEX.MEMBER_TIMEOUT:
      case ef.BEX.MEMBER_KICK:
      case ef.BEX.MEMBER_BAN:
      case ef.BEX.CHANNELS:
      case ef.BEX.ROLE_EDIT:
      case ef.BEX.ROLE_PERMISSIONS:
      case ef.BEX.MEMBER_VERIFICATION:
      case ef.BEX.INTEGRATION_SETTINGS:
      case ef.BEX.SECURITY:
      case ef.BEX.AUDIT_LOG_FILTER:
      case ef.BEX.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case ef.BEX.VANITY_URL:
      case ef.BEX.INSTANT_INVITES:
      case ef.BEX.OVERVIEW:
      case ef.BEX.WEBHOOKS:
      case ef.BEX.EDIT_WEBHOOK:
      case ef.BEX.INTEGRATION_PLATFORM:
      case ef.BEX.LOBBIES_LINKED:
      case ef.BEX.EDIT_LINKED_LOBBY:
      case ef.BEX.CHANNELS_FOLLOWED:
      case ef.BEX.COMMUNITY_INTRO:
      case ef.BEX.ROLE_EDIT_REFRESH:
      case ef.BEX.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case ef.BEX.ROLE_SUBSCRIPTIONS_BASIC:
      case ef.BEX.ROLE_SUBSCRIPTIONS_TIERS:
      case ef.BEX.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case ef.BEX.ROLE_SUBSCRIPTIONS_EMOJIS:
      case ef.BEX.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, S.xb)(e)
    }
  }
}