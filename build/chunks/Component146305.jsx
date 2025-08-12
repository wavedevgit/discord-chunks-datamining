/** Chunk was on 5533 **/
/** chunk id: 146305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ex
});
var Chunk255367 = require("./255367.js"),
  Chunk990547 = require("./990547.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk493544 = require("./493544.jsx"),
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
  Chunk116123 = require("./116123.js");

function ef(e) {
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

function eb(e, t) {
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
let ex = {
  getSectionDefinition: function(e, t) {
    let ex = (0, p.p)(t.guild.id, "guild_settings"),
      ej = false === t.guild.features.has(em.oNc.CREATOR_MONETIZABLE) && false === t.guild.features.has(em.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
      ev = ex && ej ? {
        label: (0, r.jsx)("div", {
          className: eh.roleSubLabel,
          children: ep.intl.string(ep.t.Tn7Koq)
        }),
        ariaLabel: ep.intl.string(ep.t.Tn7Koq)
      } : {
        label: (0, r.jsx)("div", {
          className: eh.roleSubLabel,
          children: ep.intl.string(ep.t["KzCF//"])
        }),
        ariaLabel: ep.intl.string(ep.t["KzCF//"])
      },
      e_ = t.guild.features.has(em.oNc.COMMUNITY) && t.canViewGuildAnalytics;
    switch (e) {
      case em.pNK.PROFILE:
        return {
          section: em.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: ep.intl.string(ep.t.txdaxc), ariaLabel: ep.intl.string(ep.t.txdaxc), element: eo.Z, type: o.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [T.Z],
            element: ec.Z
          }
        };
      case em.pNK.TAG:
        return {
          section: em.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: ep.intl.string(ep.t["2QmKZ2"]), ariaLabel: ep.intl.string(ep.t["2QmKZ2"]), element: ed.Z, predicate: () => t.canManageGuild, notice: {
            stores: [T.Z],
            element: eu.Z
          }, newIndicatorDismissibleContentTypes: [l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE]
        };
      case em.pNK.ENGAGEMENT:
        return {
          section: em.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: ep.intl.string(ep.t["6TAHb2"]), ariaLabel: ep.intl.string(ep.t["6TAHb2"]), element: en.Z, notice: {
            stores: [T.Z],
            element: er.R
          }
        };
      case em.pNK.BOOST_PERKS:
        return {
          section: em.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: ep.intl.string(ep.t.UKgg5O), ariaLabel: ep.intl.string(ep.t.UKgg5O), element: ee.I, notice: {
            stores: [T.Z, P.Z],
            element: et.C
          }
        };
      case em.pNK.INVITES:
        return {
          section: em.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: ep.intl.string(ep.t.YOt3Oj), ariaLabel: ep.intl.string(ep.t.YOt3Oj), element: ei.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case em.pNK.ROLES:
        return {
          section: em.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: ep.intl.string(ep.t.LPJmLy), element: k.Z, type: o.bT.MINIMAL, ariaLabel: ep.intl.string(ep.t.KXcECw), notice: {
            stores: [S.Z],
            element: k._
          }, predicate: () => t.canManageRoles, icon: t.pinPermissionMigrationAvailable ? (0, r.jsx)("div", {
            className: eh.redDot
          }) : true
        };
      case em.pNK.EMOJI:
        return {
          section: em.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: ep.intl.string(ep.t.sMOuub), element: z.ZP, predicate: () => t.canManageGuildExpressions
        };
      case em.pNK.STICKERS:
        return {
          section: em.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: ep.intl.string(ep.t.R5nQkZ), ariaLabel: ep.intl.string(ep.t.R5nQkZ), element: Q.Z, predicate: () => t.canManageGuildExpressions
        };
      case em.pNK.SOUNDBOARD:
        return {
          section: em.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: ep.intl.string(ep.t.OWQNYm), ariaLabel: ep.intl.string(ep.t.OWQNYm), element: X.Z, predicate: () => t.canManageGuildExpressions
        };
      case em.pNK.GUILD_TEMPLATES:
        return {
          section: em.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)($.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: ep.intl.string(ep.t.KUw7Sk), element: J.ZP, notice: {
            stores: [J.Sf],
            element: J.Q5
          }, predicate: () => t.canManageGuild
        };
      case em.pNK.ACCESS:
        return {
          section: em.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: ep.intl.string(ep.t.YJlvBA), element: el.O, notice: {
            stores: [es.Z],
            element: ea.w
          }, predicate: () => t.canManageGuild, ariaLabel: ep.intl.string(ep.t.YJlvBA)
        };
      case em.pNK.INTEGRATIONS:
        return {
          section: em.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: ep.intl.string(ep.t.CIsNZ2), ariaLabel: ep.intl.string(ep.t.CIsNZ2), element: W.Z, notice: {
            stores: [E.default, T.Z],
            element: W.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case em.pNK.APP_DIRECTORY:
        return {
          section: em.pNK.APP_DIRECTORY, label: (0, r.jsx)(G.K, {
            section: e,
            guildId: t.guild.id
          }), ariaLabel: ep.intl.string(ep.t.AKcFUl)
        };
      case em.pNK.SAFETY:
        return {
          section: em.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: ep.intl.string(ep.t["suhY+f"]), ariaLabel: ep.intl.string(ep.t["suhY+f"]), element: L.Z, newIndicatorDismissibleContentTypes: [l.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(em.oNc.COMMUNITY)
        };
      case em.pNK.MODERATION:
        return {
          section: em.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: ep.intl.string(ep.t["suhY+f"]), element: q.ZP, predicate: () => t.canManageGuild && !t.guild.features.has(em.oNc.COMMUNITY)
        };
      case em.pNK.GUILD_AUTOMOD:
        return {
          section: em.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: eh.landingPageTabLink,
            children: ep.intl.string(ep.t.uRelg4)
          }), ariaLabel: ep.intl.string(ep.t.uRelg4), element: u.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(em.oNc.COMMUNITY) && ((0, d.Nb)(t.guild.id) || (0, d.ze)(t.guild.id))
        };
      case em.pNK.AUDIT_LOG:
        return {
          section: em.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: ep.intl.string(ep.t.SPWLyc), element: w.Z, type: o.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case em.pNK.BANS:
        return {
          section: em.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: ep.intl.string(ep.t.ZbeITU), element: U.Z, predicate: () => t.canManageBans
        };
      case em.pNK.COMMUNITY:
        let eO = ep.intl.string(ep.t.ElKTeX);
        return t.guild.features.has(em.oNc.COMMUNITY) && (eO = ep.intl.string(ep.t["8nY2LC"])), {
          section: em.pNK.COMMUNITY,
          impressionName: t.guild.features.has(em.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eO,
          element: B.Z,
          ariaLabel: eO,
          newIndicator: !t.guild.features.has(em.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eg.U3 && v.qc.hasHotspot(v.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [T.Z],
            element: B.X
          }
        };
      case em.pNK.ONBOARDING:
        return {
          section: em.pNK.ONBOARDING, label: ep.intl.string(ep.t.LdxCKy), element: Y.Z, ariaLabel: ep.intl.string(ep.t.LdxCKy), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [R.Z],
            element: A.Z
          }, predicate: () => (0, g.wC)(t.guild.id), decoration: function(e, t) {
            if (m.Z.getEnabled(e)) return ep.intl.string(ep.t.pPSmxs).toUpperCase();
            if ((0, D.C)(e)) return ep.intl.string(ep.t.HDF4o6).toUpperCase();
            let n = Z.ug,
              r = n.findIndex(e => e === t);
            if (false !== r) return ep.intl.formatToPlainString(ep.t["5r28iY"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case em.pNK.ANALYTICS:
        return {
          section: em.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: ep.intl.string(ep.t["0wWfUF"]), ariaLabel: ep.intl.string(ep.t["0wWfUF"]), element: M.Z, predicate: () => e_
        };
      case em.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: em.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: eh.landingPageTabLink,
            children: [ep.intl.string(ep.t.kGlQGB), " ", (0, r.jsx)(c.Z, {})]
          }), ariaLabel: ep.intl.string(ep.t.kGlQGB), element: H.Z, notice: {
            stores: [T.Z],
            element: H.J
          }, type: o.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.features.has(em.oNc.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? true : e.isPublished))
          }
        };
      case em.pNK.COMMUNITY_WELCOME:
        return {
          section: em.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: ep.intl.string(ep.t["2rkmDg"]), ariaLabel: ep.intl.string(ep.t["2rkmDg"]), element: F.Z, notice: {
            stores: [_.Z],
            element: O.Z
          }, predicate: () => t.canManageGuild && t.guild.features.has(em.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(em.oNc.GUILD_SERVER_GUIDE)
        };
      case em.pNK.ROLE_SUBSCRIPTIONS:
        return eb(ef({}, ev), {
          section: em.pNK.ROLE_SUBSCRIPTIONS,
          element: x.Z,
          type: o.bT.CUSTOM,
          predicate: t.monetizationPredicate,
          newIndicatorDismissibleContentTypes: (0, b.sO)(t.guild) ? [l.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case em.pNK.GUILD_PRODUCTS:
        return {
          section: em.pNK.GUILD_PRODUCTS, label: ep.intl.string(ep.t.X6h2g4), ariaLabel: ep.intl.string(ep.t.X6h2g4), element: h.Z, predicate: () => t.monetizationPredicate() && (0, p.p)(t.guild.id, "guild_product_settings_predicate") && (0, f.sy)(t.guild)
        };
      case em.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: em.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: ep.intl.string(ep.t.ipTYsr), ariaLabel: ep.intl.string(ep.t.ipTYsr), element: j.Z, predicate: () => t.monetizationPredicate() && (0, f.sy)(t.guild)
        };
      case em.pNK.GUILD_PREMIUM:
        return {
          section: em.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: ep.intl.string(ep.t["8+VX4+"]), ariaLabel: ep.intl.string(ep.t["8+VX4+"]), element: K.Z, className: eh.serverBoostTabItem, icon: (0, r.jsx)(a.$Eu, {
            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            size: "sm",
            className: eh.icon
          })
        };
      case em.pNK.MEMBERS:
        return {
          section: em.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(V.$, {}), ariaLabel: ep.intl.string(ep.t["9Oq93t"]), element: V.Z, type: o.bT.CUSTOM, predicate: () => t.canAccessMembersPage
        };
      case em.pNK.DELETE:
        return {
          section: em.pNK.DELETE, onClick() {
            let e = y.default.getCurrentUser();
            if (null == e) return;
            let {
              name: i
            } = t.guild, l = {
              header: ep.intl.formatToPlainString(ep.t.us7mCw, {
                name: i
              }),
              confirmText: ep.intl.string(ep.t.l3hWPz),
              cancelText: ep.intl.string(ep.t["ETE/oK"]),
              onConfirm: () => {
                C.S.subscribeOnce(em.CkL.LAYER_POP_COMPLETE, () => {
                  I.Z.deleteGuild(t.guild.id, i)
                }), (0, s.xf)()
              }
            };
            e.mfaEnabled ? (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, eb(ef({}, e, l), {
              children: (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                children: ep.intl.format(ep.t["Zuo+VV"], {
                  name: i
                })
              })
            }))) : (0, a.ZDy)(async () => {
              let {
                default: e
              } = await n.e("18259").then(n.bind(n, 1493));
              return t => (0, r.jsx)(e, eb(ef({}, t, l), {
                validationText: i,
                instructionText: ep.intl.string(ep.t.abprOD),
                errorText: ep.intl.string(ep.t["c2/DS0"]),
                children: ep.intl.format(ep.t["Zuo+VV"], {
                  name: i
                })
              }))
            })
          }, label: ep.intl.string(ep.t.l3hWPz), ariaLabel: ep.intl.string(ep.t.l3hWPz), icon: (0, r.jsx)(a.XHJ, {
            size: "xs",
            color: "currentColor"
          }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case em.pNK.LANDING:
      case em.pNK.MEMBER_EDIT:
      case em.pNK.MEMBER_TIMEOUT:
      case em.pNK.MEMBER_KICK:
      case em.pNK.MEMBER_BAN:
      case em.pNK.CHANNELS:
      case em.pNK.ROLE_EDIT:
      case em.pNK.ROLE_PERMISSIONS:
      case em.pNK.MEMBER_VERIFICATION:
      case em.pNK.INTEGRATION_SETTINGS:
      case em.pNK.SECURITY:
      case em.pNK.AUDIT_LOG_FILTER:
      case em.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case em.pNK.VANITY_URL:
      case em.pNK.INSTANT_INVITES:
      case em.pNK.OVERVIEW:
      case em.pNK.WEBHOOKS:
      case em.pNK.EDIT_WEBHOOK:
      case em.pNK.INTEGRATION_PLATFORM:
      case em.pNK.LOBBIES_LINKED:
      case em.pNK.EDIT_LINKED_LOBBY:
      case em.pNK.CHANNELS_FOLLOWED:
      case em.pNK.COMMUNITY_INTRO:
      case em.pNK.ROLE_EDIT_REFRESH:
      case em.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case em.pNK.ROLE_SUBSCRIPTIONS_BASIC:
      case em.pNK.ROLE_SUBSCRIPTIONS_TIERS:
      case em.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case em.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
      case em.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, N.vE)(e)
    }
  }
}