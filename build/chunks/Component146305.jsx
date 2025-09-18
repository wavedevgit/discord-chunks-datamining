/** Chunk was on 8106 **/
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
  Chunk360606 = require("./360606.js"),
  Chunk946724 = require("./946724.js"),
  Chunk999382 = require("./999382.js"),
  Chunk44550 = require("./44550.js"),
  Chunk853714 = require("./853714.jsx"),
  Chunk969632 = require("./969632.js"),
  Chunk359191 = require("./359191.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk730910 = require("./730910.jsx"),
  Chunk475013 = require("./475013.jsx"),
  Chunk213956 = require("./213956.jsx"),
  Chunk702478 = require("./702478.jsx"),
  Chunk60986 = require("./60986.jsx"),
  Chunk247031 = require("./247031.jsx"),
  Chunk787561 = require("./787561.jsx"),
  Chunk579648 = require("./579648.jsx"),
  Chunk460461 = require("./460461.jsx"),
  Chunk29605 = require("./29605.jsx"),
  Chunk365307 = require("./365307.jsx"),
  Chunk324330 = require("./324330.jsx"),
  Chunk495300 = require("./495300.jsx"),
  Chunk651780 = require("./651780.jsx"),
  Chunk279542 = require("./279542.jsx"),
  Chunk665324 = require("./665324.jsx"),
  Chunk208150 = require("./208150.jsx"),
  Chunk353398 = require("./353398.jsx"),
  Chunk365774 = require("./365774.jsx"),
  Chunk178387 = require("./178387.jsx"),
  Chunk993097 = require("./993097.jsx"),
  Chunk486358 = require("./486358.jsx"),
  Chunk942478 = require("./942478.jsx"),
  Chunk845995 = require("./845995.jsx"),
  Chunk708510 = require("./708510.jsx"),
  Chunk237245 = require("./237245.jsx"),
  Chunk658666 = require("./658666.js"),
  Chunk224726 = require("./224726.jsx"),
  Chunk308619 = require("./308619.jsx"),
  Chunk254925 = require("./254925.jsx"),
  Chunk209402 = require("./209402.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk135899 = require("./135899.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk566386 = require("./566386.js");

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
      eO = (0, d.Vm)(t.guild.id),
      ey = false === t.guild.features.has(ef.oNc.CREATOR_MONETIZABLE) && false === t.guild.features.has(ef.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
      eC = e_ && ey ? {
        label: (0, r.jsx)("div", {
          className: eb.roleSubLabel,
          children: ex.intl.string(ex.t.Tn7Koq)
        }),
        ariaLabel: ex.intl.string(ex.t.Tn7Koq)
      } : {
        label: (0, r.jsx)("div", {
          className: eb.roleSubLabel,
          children: ex.intl.string(ex.t["KzCF//"])
        }),
        ariaLabel: ex.intl.string(ex.t["KzCF//"])
      },
      eN = t.guild.features.has(ef.oNc.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case ef.pNK.PROFILE:
        return {
          section: ef.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: ex.intl.string(ex.t.txdaxc), ariaLabel: ex.intl.string(ex.t.txdaxc), element: eu.Z, type: o.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [w.Z],
            element: em.Z
          }
        };
      case ef.pNK.TAG:
        return {
          section: ef.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: ex.intl.string(ex.t["2QmKZ2"]), ariaLabel: ex.intl.string(ex.t["2QmKZ2"]), element: eg.Z, predicate: () => t.canManageGuild, notice: {
            stores: [w.Z],
            element: ep.Z
          }, newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
        };
      case ef.pNK.ENGAGEMENT:
        return {
          section: ef.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: ex.intl.string(ex.t["6TAHb2"]), ariaLabel: ex.intl.string(ex.t["6TAHb2"]), element: el.Z, notice: {
            stores: [w.Z],
            element: es.R
          }
        };
      case ef.pNK.BOOST_PERKS:
        return {
          section: ef.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: ex.intl.string(ex.t.UKgg5O), ariaLabel: ex.intl.string(ex.t.UKgg5O), element: er.I, notice: {
            stores: [w.Z, R.Z],
            element: ei.C
          }
        };
      case ef.pNK.INVITES:
        return {
          section: ef.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: ex.intl.string(ex.t.YOt3Oj), ariaLabel: ex.intl.string(ex.t.YOt3Oj), element: ea.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case ef.pNK.ROLES:
        return {
          section: ef.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: ex.intl.string(ex.t.LPJmLy), element: G.Z, type: o.bT.MINIMAL, ariaLabel: ex.intl.string(ex.t.KXcECw), notice: {
            stores: [P.Z],
            element: G._
          }, predicate: () => t.canManageRoles, icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", {
            className: eb.redDot
          }) : true
        };
      case ef.pNK.EMOJI:
        return {
          section: ef.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: ex.intl.string(ex.t.sMOuub), element: K.ZP, predicate: () => t.canManageGuildExpressions
        };
      case ef.pNK.STICKERS:
        return {
          section: ef.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: ex.intl.string(ex.t.R5nQkZ), ariaLabel: ex.intl.string(ex.t.R5nQkZ), element: ee.Z, predicate: () => t.canManageGuildExpressions
        };
      case ef.pNK.SOUNDBOARD:
        return {
          section: ef.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: ex.intl.string(ex.t.OWQNYm), ariaLabel: ex.intl.string(ex.t.OWQNYm), element: $.Z, predicate: () => t.canManageGuildExpressions
        };
      case ef.pNK.GUILD_TEMPLATES:
        return {
          section: ef.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(en.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: ex.intl.string(ex.t.KUw7Sk), element: et.ZP, notice: {
            stores: [et.Sf],
            element: et.Q5
          }, predicate: () => t.canManageGuild
        };
      case ef.pNK.ACCESS:
        return {
          section: ef.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: ex.intl.string(ex.t.YJlvBA), element: eo.O, notice: {
            stores: [ed.Z],
            element: ec.w
          }, predicate: () => t.canManageGuild, ariaLabel: ex.intl.string(ex.t.YJlvBA)
        };
      case ef.pNK.INTEGRATIONS:
        return {
          section: ef.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: ex.intl.string(ex.t.CIsNZ2), ariaLabel: ex.intl.string(ex.t.CIsNZ2), element: Y.Z, notice: {
            stores: [T.default, w.Z],
            element: Y.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case ef.pNK.APP_DIRECTORY:
        return {
          section: ef.pNK.APP_DIRECTORY, label: (0, r.jsx)(F.K, {}), ariaLabel: ex.intl.string(ex.t.AKcFUl), onClick: () => {
            (0, F.O)({
              guildId: t.guild.id,
              section: e
            })
          }
        };
      case ef.pNK.SAFETY:
        return {
          section: ef.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: ex.intl.string(ex.t["suhY+f"]), ariaLabel: ex.intl.string(ex.t["suhY+f"]), element: U.Z, newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(ef.oNc.COMMUNITY)
        };
      case ef.pNK.MODERATION:
        return {
          section: ef.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: ex.intl.string(ex.t["suhY+f"]), element: J.ZP, predicate: () => t.canManageGuild && !t.guild.features.has(ef.oNc.COMMUNITY)
        };
      case ef.pNK.GUILD_AUTOMOD:
        return {
          section: ef.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: eb.landingPageTabLink,
            children: ex.intl.string(ex.t.uRelg4)
          }), ariaLabel: ex.intl.string(ex.t.uRelg4), element: g.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(ef.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id))
        };
      case ef.pNK.AUDIT_LOG:
        return {
          section: ef.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: ex.intl.string(ex.t.SPWLyc), element: Z.Z, type: o.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case ef.pNK.BANS:
        return {
          section: ef.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: ex.intl.string(ex.t.ZbeITU), element: H.Z, predicate: () => t.canManageBans
        };
      case ef.pNK.COMMUNITY:
        let eE = ex.intl.string(ex.t.ElKTeX);
        return t.guild.features.has(ef.oNc.COMMUNITY) && (eE = ex.intl.string(ex.t["8nY2LC"])), {
          section: ef.pNK.COMMUNITY,
          impressionName: t.guild.features.has(ef.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eE,
          element: z.Z,
          ariaLabel: eE,
          newIndicator: !t.guild.features.has(ef.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eh.U3 && O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [w.Z],
            element: z.X
          }
        };
      case ef.pNK.ONBOARDING:
        return {
          section: ef.pNK.ONBOARDING, label: ex.intl.string(ex.t.LdxCKy), element: X.Z, ariaLabel: ex.intl.string(ex.t.LdxCKy), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [A.Z, D.Z],
            element: M.Z
          }, predicate: () => (0, f.wC)(t.guild.id), decoration: function(e, t) {
            if (p.Z.getEnabled(e)) return ex.intl.string(ex.t.pPSmxs).toUpperCase();
            if ((0, k.C)(e)) return ex.intl.string(ex.t.HDF4o6).toUpperCase();
            let n = L.ug,
              r = n.findIndex(e => e === t);
            if (false !== r) return ex.intl.formatToPlainString(ex.t["5r28iY"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case ef.pNK.ANALYTICS:
        return {
          section: ef.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: ex.intl.string(ex.t["0wWfUF"]), ariaLabel: ex.intl.string(ex.t["0wWfUF"]), element: B.Z, predicate: () => eN
        };
      case ef.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: ef.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: eb.landingPageTabLink,
            children: [ex.intl.string(ex.t.kGlQGB), " ", (0, r.jsx)(u.Z, {})]
          }), ariaLabel: ex.intl.string(ex.t.kGlQGB), element: W.Z, notice: {
            stores: [w.Z],
            element: W.J
          }, type: o.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(ef.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case ef.pNK.COMMUNITY_WELCOME:
        return {
          section: ef.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: ex.intl.string(ex.t["2rkmDg"]), ariaLabel: ex.intl.string(ex.t["2rkmDg"]), element: V.Z, notice: {
            stores: [y.Z],
            element: C.Z
          }, predicate: () => t.canManageGuild && t.guild.features.has(ef.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(ef.oNc.GUILD_SERVER_GUIDE)
        };
      case ef.pNK.ROLE_SUBSCRIPTIONS:
        return ev(ej({}, eC), {
          section: ef.pNK.ROLE_SUBSCRIPTIONS,
          element: v.Z,
          type: o.bT.CUSTOM,
          predicate: () => eO ? t.monetizationPredicate() && ((0, b.sy)(t.guild) || c.Z.hasSeenCreatorOnboardingForGuild(t.guild.id)) : t.monetizationPredicate(),
          newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case ef.pNK.GUILD_PRODUCTS:
        return {
          section: ef.pNK.GUILD_PRODUCTS, label: ex.intl.string(ex.t.X6h2g4), ariaLabel: ex.intl.string(ex.t.X6h2g4), element: x.Z, predicate: () => t.monetizationPredicate() && (0, h.p)(t.guild.id, "guild_product_settings_predicate") && (0, b.sy)(t.guild)
        };
      case ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: ef.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: ex.intl.string(ex.t.ipTYsr), ariaLabel: ex.intl.string(ex.t.ipTYsr), element: _.Z, predicate: () => t.monetizationPredicate() && (0, b.sy)(t.guild)
        };
      case ef.pNK.GUILD_PREMIUM:
        return {
          section: ef.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: ex.intl.string(ex.t["8+VX4+"]), ariaLabel: ex.intl.string(ex.t["8+VX4+"]), element: Q.Z, className: eb.serverBoostTabItem, icon: (0, r.jsx)(s.$Eu, {
            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            size: "sm",
            className: eb.icon
          })
        };
      case ef.pNK.MEMBERS:
        return {
          section: ef.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(q.$r, {}), ariaLabel: ex.intl.string(ex.t["9Oq93t"]), element: q.ZP, type: o.bT.CUSTOM, predicate: () => t.canAccessMembersPage, onClick: () => {
            (0, q.JA)()
          }
        };
      case ef.pNK.DELETE:
        return {
          section: ef.pNK.DELETE, onClick() {
            let e = N.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = {
              header: ex.intl.formatToPlainString(ex.t.us7mCw, {
                name: i
              }),
              confirmText: ex.intl.string(ex.t.l3hWPz),
              cancelText: ex.intl.string(ex.t["ETE/oK"]),
              onConfirm: () => {
                E.S.subscribeOnce(ef.CkL.LAYER_POP_COMPLETE, () => {
                  S.Z.deleteGuild(t.guild.id, i)
                }), (0, a.xf)()
              }
            };
            e.mfaEnabled ? (0, s.h7j)(e => (0, r.jsx)(s.ConfirmModal, ev(ej({}, e, l), {
              children: (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: ex.intl.format(ex.t["Zuo+VV"], {
                  name: i
                })
              })
            }))) : (0, s.ZDy)(async () => {
              let {
                default: e
              } = await n.e("18259").then(n.bind(n, 1493));
              return t => (0, r.jsx)(e, ev(ej({}, t, l), {
                validationText: i,
                instructionText: ex.intl.string(ex.t.abprOD),
                errorText: ex.intl.string(ex.t["c2/DS0"]),
                children: ex.intl.format(ex.t["Zuo+VV"], {
                  name: i
                })
              }))
            })
          }, label: ex.intl.string(ex.t.l3hWPz), ariaLabel: ex.intl.string(ex.t.l3hWPz), icon: (0, r.jsx)(s.XHJ, {
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