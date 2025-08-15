/** Chunk was on 6049 **/
/** chunk id: 146305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ev
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

function ex(e) {
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

function ej(e, t) {
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
    let ev = (0, f.p)(t.guild.id, "guild_settings"),
      e_ = (0, d.Vm)(t.guild.id),
      eO = false === t.guild.features.has(ep.oNc.CREATOR_MONETIZABLE) && false === t.guild.features.has(ep.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
      ey = ev && eO ? {
        label: (0, r.jsx)("div", {
          className: eb.roleSubLabel,
          children: ef.intl.string(ef.t.Tn7Koq)
        }),
        ariaLabel: ef.intl.string(ef.t.Tn7Koq)
      } : {
        label: (0, r.jsx)("div", {
          className: eb.roleSubLabel,
          children: ef.intl.string(ef.t["KzCF//"])
        }),
        ariaLabel: ef.intl.string(ef.t["KzCF//"])
      },
      eC = t.guild.features.has(ep.oNc.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case ep.pNK.PROFILE:
        return {
          section: ep.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: ef.intl.string(ef.t.txdaxc), ariaLabel: ef.intl.string(ef.t.txdaxc), element: ed.Z, type: o.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [w.Z],
            element: eu.Z
          }
        };
      case ep.pNK.TAG:
        return {
          section: ep.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: ef.intl.string(ef.t["2QmKZ2"]), ariaLabel: ef.intl.string(ef.t["2QmKZ2"]), element: em.Z, predicate: () => t.canManageGuild, notice: {
            stores: [w.Z],
            element: eg.Z
          }, newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
        };
      case ep.pNK.ENGAGEMENT:
        return {
          section: ep.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: ef.intl.string(ef.t["6TAHb2"]), ariaLabel: ef.intl.string(ef.t["6TAHb2"]), element: ei.Z, notice: {
            stores: [w.Z],
            element: el.R
          }
        };
      case ep.pNK.BOOST_PERKS:
        return {
          section: ep.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: ef.intl.string(ef.t.UKgg5O), ariaLabel: ef.intl.string(ef.t.UKgg5O), element: en.I, notice: {
            stores: [w.Z, R.Z],
            element: er.C
          }
        };
      case ep.pNK.INVITES:
        return {
          section: ep.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: ef.intl.string(ef.t.YOt3Oj), ariaLabel: ef.intl.string(ef.t.YOt3Oj), element: ea.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case ep.pNK.ROLES:
        return {
          section: ep.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: ef.intl.string(ef.t.LPJmLy), element: M.Z, type: o.bT.MINIMAL, ariaLabel: ef.intl.string(ef.t.KXcECw), notice: {
            stores: [P.Z],
            element: M._
          }, predicate: () => t.canManageRoles, icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", {
            className: eb.redDot
          }) : true
        };
      case ep.pNK.EMOJI:
        return {
          section: ep.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: ef.intl.string(ef.t.sMOuub), element: V.ZP, predicate: () => t.canManageGuildExpressions
        };
      case ep.pNK.STICKERS:
        return {
          section: ep.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: ef.intl.string(ef.t.R5nQkZ), ariaLabel: ef.intl.string(ef.t.R5nQkZ), element: $.Z, predicate: () => t.canManageGuildExpressions
        };
      case ep.pNK.SOUNDBOARD:
        return {
          section: ep.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: ef.intl.string(ef.t.OWQNYm), ariaLabel: ef.intl.string(ef.t.OWQNYm), element: J.Z, predicate: () => t.canManageGuildExpressions
        };
      case ep.pNK.GUILD_TEMPLATES:
        return {
          section: ep.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(et.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: ef.intl.string(ef.t.KUw7Sk), element: ee.ZP, notice: {
            stores: [ee.Sf],
            element: ee.Q5
          }, predicate: () => t.canManageGuild
        };
      case ep.pNK.ACCESS:
        return {
          section: ep.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: ef.intl.string(ef.t.YJlvBA), element: es.O, notice: {
            stores: [ec.Z],
            element: eo.w
          }, predicate: () => t.canManageGuild, ariaLabel: ef.intl.string(ef.t.YJlvBA)
        };
      case ep.pNK.INTEGRATIONS:
        return {
          section: ep.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: ef.intl.string(ef.t.CIsNZ2), ariaLabel: ef.intl.string(ef.t.CIsNZ2), element: Y.Z, notice: {
            stores: [T.default, w.Z],
            element: Y.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case ep.pNK.APP_DIRECTORY:
        return {
          section: ep.pNK.APP_DIRECTORY, label: (0, r.jsx)(B.K, {
            section: e,
            guildId: t.guild.id
          }), ariaLabel: ef.intl.string(ef.t.AKcFUl)
        };
      case ep.pNK.SAFETY:
        return {
          section: ep.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: ef.intl.string(ef.t["suhY+f"]), ariaLabel: ef.intl.string(ef.t["suhY+f"]), element: G.Z, newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(ep.oNc.COMMUNITY)
        };
      case ep.pNK.MODERATION:
        return {
          section: ep.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: ef.intl.string(ef.t["suhY+f"]), element: Q.ZP, predicate: () => t.canManageGuild && !t.guild.features.has(ep.oNc.COMMUNITY)
        };
      case ep.pNK.GUILD_AUTOMOD:
        return {
          section: ep.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: eb.landingPageTabLink,
            children: ef.intl.string(ef.t.uRelg4)
          }), ariaLabel: ef.intl.string(ef.t.uRelg4), element: g.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(ep.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id))
        };
      case ep.pNK.AUDIT_LOG:
        return {
          section: ep.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: ef.intl.string(ef.t.SPWLyc), element: Z.Z, type: o.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case ep.pNK.BANS:
        return {
          section: ep.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: ef.intl.string(ef.t.ZbeITU), element: F.Z, predicate: () => t.canManageBans
        };
      case ep.pNK.COMMUNITY:
        let eN = ef.intl.string(ef.t.ElKTeX);
        return t.guild.features.has(ep.oNc.COMMUNITY) && (eN = ef.intl.string(ef.t["8nY2LC"])), {
          section: ep.pNK.COMMUNITY,
          impressionName: t.guild.features.has(ep.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eN,
          element: H.Z,
          ariaLabel: eN,
          newIndicator: !t.guild.features.has(ep.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eh.U3 && O.qc.hasHotspot(O.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [w.Z],
            element: H.X
          }
        };
      case ep.pNK.ONBOARDING:
        return {
          section: ep.pNK.ONBOARDING, label: ef.intl.string(ef.t.LdxCKy), element: q.Z, ariaLabel: ef.intl.string(ef.t.LdxCKy), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [D.Z],
            element: L.Z
          }, predicate: () => (0, h.wC)(t.guild.id), decoration: function(e, t) {
            if (p.Z.getEnabled(e)) return ef.intl.string(ef.t.pPSmxs).toUpperCase();
            if ((0, k.C)(e)) return ef.intl.string(ef.t.HDF4o6).toUpperCase();
            let n = A.ug,
              r = n.findIndex(e => e === t);
            if (false !== r) return ef.intl.formatToPlainString(ef.t["5r28iY"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case ep.pNK.ANALYTICS:
        return {
          section: ep.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: ef.intl.string(ef.t["0wWfUF"]), ariaLabel: ef.intl.string(ef.t["0wWfUF"]), element: U.Z, predicate: () => eC
        };
      case ep.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: ep.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: eb.landingPageTabLink,
            children: [ef.intl.string(ef.t.kGlQGB), " ", (0, r.jsx)(u.Z, {})]
          }), ariaLabel: ef.intl.string(ef.t.kGlQGB), element: W.Z, notice: {
            stores: [w.Z],
            element: W.J
          }, type: o.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(ep.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case ep.pNK.COMMUNITY_WELCOME:
        return {
          section: ep.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: ef.intl.string(ef.t["2rkmDg"]), ariaLabel: ef.intl.string(ef.t["2rkmDg"]), element: z.Z, notice: {
            stores: [y.Z],
            element: C.Z
          }, predicate: () => t.canManageGuild && t.guild.features.has(ep.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(ep.oNc.GUILD_SERVER_GUIDE)
        };
      case ep.pNK.ROLE_SUBSCRIPTIONS:
        return ej(ex({}, ey), {
          section: ep.pNK.ROLE_SUBSCRIPTIONS,
          element: v.Z,
          type: o.bT.CUSTOM,
          predicate: () => e_ ? t.monetizationPredicate() && ((0, x.sy)(t.guild) || c.Z.hasSeenCreatorOnboardingForGuild(t.guild.id)) : t.monetizationPredicate(),
          newIndicatorDismissibleContentTypes: (0, j.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case ep.pNK.GUILD_PRODUCTS:
        return {
          section: ep.pNK.GUILD_PRODUCTS, label: ef.intl.string(ef.t.X6h2g4), ariaLabel: ef.intl.string(ef.t.X6h2g4), element: b.Z, predicate: () => t.monetizationPredicate() && (0, f.p)(t.guild.id, "guild_product_settings_predicate") && (0, x.sy)(t.guild)
        };
      case ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: ep.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: ef.intl.string(ef.t.ipTYsr), ariaLabel: ef.intl.string(ef.t.ipTYsr), element: _.Z, predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild)
        };
      case ep.pNK.GUILD_PREMIUM:
        return {
          section: ep.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: ef.intl.string(ef.t["8+VX4+"]), ariaLabel: ef.intl.string(ef.t["8+VX4+"]), element: X.Z, className: eb.serverBoostTabItem, icon: (0, r.jsx)(a.$Eu, {
            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            size: "sm",
            className: eb.icon
          })
        };
      case ep.pNK.MEMBERS:
        return {
          section: ep.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(K.$, {}), ariaLabel: ef.intl.string(ef.t["9Oq93t"]), element: K.Z, type: o.bT.CUSTOM, predicate: () => t.canAccessMembersPage
        };
      case ep.pNK.DELETE:
        return {
          section: ep.pNK.DELETE, onClick() {
            let e = N.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = {
              header: ef.intl.formatToPlainString(ef.t.us7mCw, {
                name: i
              }),
              confirmText: ef.intl.string(ef.t.l3hWPz),
              cancelText: ef.intl.string(ef.t["ETE/oK"]),
              onConfirm: () => {
                I.S.subscribeOnce(ep.CkL.LAYER_POP_COMPLETE, () => {
                  S.Z.deleteGuild(t.guild.id, i)
                }), (0, s.xf)()
              }
            };
            e.mfaEnabled ? (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, ej(ex({}, e, l), {
              children: (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                children: ef.intl.format(ef.t["Zuo+VV"], {
                  name: i
                })
              })
            }))) : (0, a.ZDy)(async () => {
              let {
                default: e
              } = await n.e("18259").then(n.bind(n, 1493));
              return t => (0, r.jsx)(e, ej(ex({}, t, l), {
                validationText: i,
                instructionText: ef.intl.string(ef.t.abprOD),
                errorText: ef.intl.string(ef.t["c2/DS0"]),
                children: ef.intl.format(ef.t["Zuo+VV"], {
                  name: i
                })
              }))
            })
          }, label: ef.intl.string(ef.t.l3hWPz), ariaLabel: ef.intl.string(ef.t.l3hWPz), icon: (0, r.jsx)(a.XHJ, {
            size: "xs",
            color: "currentColor"
          }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case ep.pNK.LANDING:
      case ep.pNK.MEMBER_EDIT:
      case ep.pNK.MEMBER_TIMEOUT:
      case ep.pNK.MEMBER_KICK:
      case ep.pNK.MEMBER_BAN:
      case ep.pNK.CHANNELS:
      case ep.pNK.ROLE_EDIT:
      case ep.pNK.ROLE_PERMISSIONS:
      case ep.pNK.MEMBER_VERIFICATION:
      case ep.pNK.INTEGRATION_SETTINGS:
      case ep.pNK.SECURITY:
      case ep.pNK.AUDIT_LOG_FILTER:
      case ep.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case ep.pNK.VANITY_URL:
      case ep.pNK.INSTANT_INVITES:
      case ep.pNK.OVERVIEW:
      case ep.pNK.WEBHOOKS:
      case ep.pNK.EDIT_WEBHOOK:
      case ep.pNK.INTEGRATION_PLATFORM:
      case ep.pNK.LOBBIES_LINKED:
      case ep.pNK.EDIT_LINKED_LOBBY:
      case ep.pNK.CHANNELS_FOLLOWED:
      case ep.pNK.COMMUNITY_INTRO:
      case ep.pNK.ROLE_EDIT_REFRESH:
      case ep.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case ep.pNK.ROLE_SUBSCRIPTIONS_BASIC:
      case ep.pNK.ROLE_SUBSCRIPTIONS_TIERS:
      case ep.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case ep.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
      case ep.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, E.vE)(e)
    }
  }
}