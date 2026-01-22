/** Chunk was on 47841 **/
/** chunk id: 91168, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => ev
});
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk554146 = require("./554146.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk448564 = require("./448564.js"),
  Chunk469993 = require("./469993.js"),
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

function eO(e) {
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

function ey(e, t) {
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
let ev = {
  getSectionDefinition: function(e, t) {
    let ev = (0, x.$)(t.guild.id, "guild_settings"),
      eA = (0, u.Zy)(t.guild.id),
      eE = false === t.guild.features.has(ep.GuildFeatures.CREATOR_MONETIZABLE) && false === t.guild.features.has(ep.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
      eN = ev && eE ? {
        label: (0, r.jsx)("div", {
          className: ej.vf,
          children: eh.intl.string(eh.t.Tn7Koo)
        }),
        ariaLabel: eh.intl.string(eh.t.Tn7Koo)
      } : {
        label: (0, r.jsx)("div", {
          className: ej.vf,
          children: eh.intl.string(eh.t["KzCF/6"])
        }),
        ariaLabel: eh.intl.string(eh.t["KzCF/6"])
      },
      e_ = t.guild.features.has(ep.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case ep.BEX.PROFILE:
        return {
          section: ep.BEX.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: eh.intl.string(eh.t.txdaxf), ariaLabel: eh.intl.string(eh.t.txdaxf), element: eb.A, type: o.Py.SCROLLABLE_CUSTOM, notice: {
            stores: [C.A],
            element: em.A
          }
        };
      case ep.BEX.TAG:
        return {
          section: ep.BEX.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: eh.intl.string(eh.t["2QmKZ2"]), ariaLabel: eh.intl.string(eh.t["2QmKZ2"]), element: en.A, predicate: () => t.canManageGuild, notice: {
            stores: [C.A],
            element: er.A
          }
        };
      case ep.BEX.ENGAGEMENT:
        return {
          section: ep.BEX.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: eh.intl.string(eh.t["6TAHbx"]), ariaLabel: eh.intl.string(eh.t["6TAHbx"]), element: ec.A, notice: {
            stores: [C.A],
            element: eo.y
          }
        };
      case ep.BEX.BOOST_PERKS:
        return {
          section: ep.BEX.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: eh.intl.string(eh.t.UKgg5N), ariaLabel: eh.intl.string(eh.t.UKgg5N), element: q.H, notice: {
            stores: [C.A, Q.A],
            element: $.l
          }
        };
      case ep.BEX.INVITES:
        return {
          section: ep.BEX.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: eh.intl.string(eh.t.YOt3Om), ariaLabel: eh.intl.string(eh.t.YOt3Om), element: ed.A, type: o.Py.CUSTOM, predicate: () => t.canManageGuild
        };
      case ep.BEX.ROLES:
        return {
          section: ep.BEX.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: eh.intl.string(eh.t["LPJmL/"]), element: W.A, type: o.Py.MINIMAL, ariaLabel: eh.intl.string(eh.t.KXcEC9), notice: {
            stores: [Y.A],
            element: W.W
          }, predicate: () => t.canManageRoles, icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", {
            className: ej.Vx
          }) : true
        };
      case ep.BEX.EMOJI:
        return {
          section: ep.BEX.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: eh.intl.string(eh.t.sMOuuS), element: ei.Ay, predicate: () => t.canManageGuildExpressions
        };
      case ep.BEX.STICKERS:
        return {
          section: ep.BEX.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: eh.intl.string(eh.t.R5nQkS), ariaLabel: eh.intl.string(eh.t.R5nQkS), element: et.A, predicate: () => t.canManageGuildExpressions
        };
      case ep.BEX.SOUNDBOARD:
        return {
          section: ep.BEX.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: eh.intl.string(eh.t.OWQNYr), ariaLabel: eh.intl.string(eh.t.OWQNYr), element: ee.A, predicate: () => t.canManageGuildExpressions
        };
      case ep.BEX.GUILD_TEMPLATES:
        return {
          section: ep.BEX.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(ea.A, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: eh.intl.string(eh.t.KUw7Ss), element: es.Ay, notice: {
            stores: [es.Jx],
            element: es.lz
          }, predicate: () => t.canManageGuild
        };
      case ep.BEX.ACCESS:
        return {
          section: ep.BEX.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: eh.intl.string(eh.t.YJlvBM), element: eu.y, notice: {
            stores: [eg.A],
            element: ef.G
          }, predicate: () => t.canManageGuild, ariaLabel: eh.intl.string(eh.t.YJlvBM)
        };
      case ep.BEX.INTEGRATIONS:
        return {
          section: ep.BEX.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: eh.intl.string(eh.t.CIsNZw), ariaLabel: eh.intl.string(eh.t.CIsNZw), element: M.A, notice: {
            stores: [k.default, C.A],
            element: M.K
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case ep.BEX.APP_DIRECTORY:
        return {
          section: ep.BEX.APP_DIRECTORY, label: (0, r.jsx)(P.L, {}), ariaLabel: eh.intl.string(eh.t.AKcFUj), onClick: () => {
            (0, P.N)({
              guildId: t.guild.id,
              section: e
            })
          }
        };
      case ep.BEX.SAFETY:
        return {
          section: ep.BEX.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: eh.intl.string(eh.t["suhY+Y"]), ariaLabel: eh.intl.string(eh.t["suhY+Y"]), element: J.A, newIndicatorDismissibleContentTypes: [l.M.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(ep.GuildFeatures.COMMUNITY)
        };
      case ep.BEX.MODERATION:
        return {
          section: ep.BEX.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: eh.intl.string(eh.t["suhY+Y"]), element: Z.Ay, predicate: () => t.canManageGuild && !t.guild.features.has(ep.GuildFeatures.COMMUNITY)
        };
      case ep.BEX.GUILD_AUTOMOD:
        return {
          section: ep.BEX.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: ej.o2,
            children: eh.intl.string(eh.t.uRelgx)
          }), ariaLabel: eh.intl.string(eh.t.uRelgx), element: b.A, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(ep.GuildFeatures.COMMUNITY) && ((0, g.hX)(t.guild.id) || (0, g.i_)(t.guild.id))
        };
      case ep.BEX.AUDIT_LOG:
        return {
          section: ep.BEX.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: eh.intl.string(eh.t.SPWLyT), element: w.A, type: o.Py.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case ep.BEX.BANS:
        return {
          section: ep.BEX.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: eh.intl.string(eh.t.ZbeITS), element: X.A, predicate: () => t.canManageBans
        };
      case ep.BEX.COMMUNITY:
        let eS = eh.intl.string(eh.t.ElKTeb);
        return t.guild.features.has(ep.GuildFeatures.COMMUNITY) && (eS = eh.intl.string(eh.t["8nY2LE"])), {
          section: ep.BEX.COMMUNITY,
          impressionName: t.guild.features.has(ep.GuildFeatures.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eS,
          element: D.A,
          ariaLabel: eS,
          newIndicator: !t.guild.features.has(ep.GuildFeatures.COMMUNITY) && null != t.memberCount && t.memberCount >= ex.dH && A.HP.hasHotspot(A._2.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [C.A],
            element: D.L
          }
        };
      case ep.BEX.ONBOARDING:
        return {
          section: ep.BEX.ONBOARDING, label: eh.intl.string(eh.t["LdxCK/"]), element: K.A, ariaLabel: eh.intl.string(eh.t["LdxCK/"]), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.M.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [B.A, F.A, U.A],
            element: z.A
          }, predicate: () => (0, p.rs)(t.guild.id), decoration: function(e, t) {
            if (m.A.getEnabled(e)) return eh.intl.string(eh.t.pPSmxg).toUpperCase();
            if ((0, V.o)(e)) return eh.intl.string(eh.t["HDF4o/"]).toUpperCase();
            let n = H.ti,
              r = n.findIndex(e => e === t);
            if (false !== r) return eh.intl.formatToPlainString(eh.t["5r28iW"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case ep.BEX.ANALYTICS:
        return {
          section: ep.BEX.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: eh.intl.string(eh.t["0wWfUG"]), ariaLabel: eh.intl.string(eh.t["0wWfUG"]), element: R.A, predicate: () => e_
        };
      case ep.BEX.DISCOVERY_LANDING_PAGE:
        return {
          section: ep.BEX.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: ej.o2,
            children: [eh.intl.string(eh.t.kGlQGF), " ", (0, r.jsx)(f.A, {})]
          }), ariaLabel: eh.intl.string(eh.t.kGlQGF), element: L.A, notice: {
            stores: [C.A],
            element: L.j
          }, type: o.Py.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(ep.GuildFeatures.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case ep.BEX.COMMUNITY_WELCOME:
        return {
          section: ep.BEX.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: eh.intl.string(eh.t["2rkmDr"]), ariaLabel: eh.intl.string(eh.t["2rkmDr"]), element: G.A, notice: {
            stores: [E.A],
            element: N.A
          }, predicate: () => t.canManageGuild && t.guild.features.has(ep.GuildFeatures.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(ep.GuildFeatures.GUILD_SERVER_GUIDE)
        };
      case ep.BEX.ROLE_SUBSCRIPTIONS:
        return ey(eO({}, eN), {
          section: ep.BEX.ROLE_SUBSCRIPTIONS,
          element: y.A,
          type: o.Py.CUSTOM,
          predicate: () => eA ? t.monetizationPredicate() && ((0, j.hA)(t.guild) || d.A.hasSeenCreatorOnboardingForGuild(t.guild.id)) : t.monetizationPredicate(),
          newIndicatorDismissibleContentTypes: (0, O.aV)(t.guild) ? [l.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case ep.BEX.GUILD_PRODUCTS:
        return {
          section: ep.BEX.GUILD_PRODUCTS, label: eh.intl.string(eh.t.X6h2gz), ariaLabel: eh.intl.string(eh.t.X6h2gz), element: h.A, predicate: () => t.monetizationPredicate() && (0, x.$)(t.guild.id, "guild_product_settings_predicate") && (0, j.hA)(t.guild)
        };
      case ep.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: ep.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: eh.intl.string(eh.t.ipTYsk), ariaLabel: eh.intl.string(eh.t.ipTYsk), element: v.A, predicate: () => t.monetizationPredicate() && (0, j.hA)(t.guild)
        };
      case ep.BEX.MEMBERS:
        return {
          section: ep.BEX.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(el.Q$, {}), ariaLabel: eh.intl.string(eh.t["9Oq93m"]), element: el.Ay, type: o.Py.CUSTOM, predicate: () => t.canAccessMembersPage, onClick: () => {
            (0, el.N8)()
          }
        };
      case ep.BEX.DELETE:
        return {
          section: ep.BEX.DELETE, onClick() {
            let e = _.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = () => {
              S._.subscribeOnce(ep.jej.LAYER_POP_COMPLETE, () => {
                I.A.deleteGuild(t.guild.id)
              }), (0, c.jH)()
            };
            e.mfaEnabled ? (0, s.A)({
              title: eh.intl.formatToPlainString(eh.t.us7mC1, {
                name: i
              }),
              subtitle: eh.intl.format(eh.t["Zuo+Vd"], {
                name: i
              }),
              confirmText: eh.intl.string(eh.t.l3hWP6),
              onConfirm: l
            }) : (0, a.mMO)(async () => {
              let {
                default: e
              } = await n.e("45199").then(n.bind(n, 310482));
              return t => (0, r.jsx)(e, ey(eO({}, t), {
                onConfirm: l,
                guildName: i
              }))
            })
          }, label: eh.intl.string(eh.t.l3hWP6), ariaLabel: eh.intl.string(eh.t.l3hWP6), icon: (0, r.jsx)(a.ucK, {
            size: "xs",
            color: "currentColor"
          }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case ep.BEX.LANDING:
      case ep.BEX.MEMBER_EDIT:
      case ep.BEX.MEMBER_TIMEOUT:
      case ep.BEX.MEMBER_KICK:
      case ep.BEX.MEMBER_BAN:
      case ep.BEX.CHANNELS:
      case ep.BEX.ROLE_EDIT:
      case ep.BEX.ROLE_PERMISSIONS:
      case ep.BEX.MEMBER_VERIFICATION:
      case ep.BEX.INTEGRATION_SETTINGS:
      case ep.BEX.SECURITY:
      case ep.BEX.AUDIT_LOG_FILTER:
      case ep.BEX.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case ep.BEX.VANITY_URL:
      case ep.BEX.INSTANT_INVITES:
      case ep.BEX.OVERVIEW:
      case ep.BEX.WEBHOOKS:
      case ep.BEX.EDIT_WEBHOOK:
      case ep.BEX.INTEGRATION_PLATFORM:
      case ep.BEX.LOBBIES_LINKED:
      case ep.BEX.EDIT_LINKED_LOBBY:
      case ep.BEX.CHANNELS_FOLLOWED:
      case ep.BEX.COMMUNITY_INTRO:
      case ep.BEX.ROLE_EDIT_REFRESH:
      case ep.BEX.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case ep.BEX.ROLE_SUBSCRIPTIONS_BASIC:
      case ep.BEX.ROLE_SUBSCRIPTIONS_TIERS:
      case ep.BEX.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case ep.BEX.ROLE_SUBSCRIPTIONS_EMOJIS:
      case ep.BEX.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, T.xb)(e)
    }
  }
}