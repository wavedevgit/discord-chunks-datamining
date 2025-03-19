/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => eD
});
var r = n(200651),
  i = n(990547),
  s = n(704215),
  a = n(481060),
  l = n(37234),
  o = n(493544),
  c = n(353093),
  A = n(593128),
  d = n(979264),
  u = n(688465),
  g = n(749681),
  f = n(258971),
  m = n(676317),
  p = n(874993),
  h = n(45966),
  C = n(637853),
  b = n(352981),
  v = n(610403),
  x = n(923726),
  N = n(303737),
  j = n(15030),
  E = n(220685),
  I = n(536442),
  O = n(84615),
  y = n(575258),
  w = n(276687),
  P = n(594174),
  B = n(585483),
  D = n(823379),
  T = n(434404),
  S = n(360606),
  L = n(946724),
  R = n(999382),
  Q = n(44550),
  Z = n(853714),
  W = n(359191),
  k = n(84658),
  M = n(142961),
  _ = n(730910),
  G = n(475013),
  F = n(213956),
  U = n(702478),
  H = n(247031),
  z = n(787561),
  X = n(579648),
  Y = n(511480),
  K = n(460461),
  V = n(29605),
  J = n(365307),
  q = n(497666),
  $ = n(324330),
  ee = n(495300),
  et = n(312397),
  en = n(651780),
  er = n(279542),
  ei = n(413335),
  es = n(665324),
  ea = n(208150),
  el = n(353398),
  eo = n(365774),
  ec = n(803288),
  eA = n(804153),
  ed = n(178387),
  eu = n(993097),
  eg = n(486358),
  ef = n(942478),
  em = n(890861),
  ep = n(708510),
  eh = n(237245),
  eC = n(658666),
  eb = n(224726),
  ev = n(308619),
  ex = n(254925),
  eN = n(209402),
  ej = n(981631),
  eE = n(308083),
  eI = n(49898),
  eO = n(135899),
  ey = n(388032),
  ew = n(989113);

function eP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function eB(e, t) {
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
let eD = {
  getSectionDefinition: function(e, t) {
    var eD;
    let eT = (0, b.p)(t.guild.id, "guild_settings"),
      eS = !1 === t.guild.hasFeature(ej.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(ej.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
      eL = eT && eS ? {
        label: (0, r.jsx)("div", {
          className: ew.roleSubLabel,
          children: ey.NW.string(ey.t.Tn7Koq)
        }),
        ariaLabel: ey.NW.string(ey.t.Tn7Koq)
      } : {
        label: (0, r.jsx)("div", {
          className: ew.roleSubLabel,
          children: ey.NW.string(ey.t["KzCF//"])
        }),
        ariaLabel: ey.NW.string(ey.t["KzCF//"])
      },
      eR = t.guild.hasFeature(ej.oNc.COMMUNITY) && t.canViewGuildAnalytics,
      eQ = (null === (eD = t.guild.profile) || void 0 === eD ? void 0 : eD.badge) != null ? (0, c.ky)(t.guild.id, t.guild.profile.badge, eE.NC.SIZE_16) : null;
    switch (e) {
      case ej.pNK.PROFILE:
        return {
          section: ej.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: ey.NW.string(ey.t.txdaxc), ariaLabel: ey.NW.string(ey.t.txdaxc), element: eb.Z, type: o.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [R.Z],
            element: ev.Z
          }
        };
      case ej.pNK.TAG:
        return {
          section: ej.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: ey.NW.string(ey.t["2QmKZ2"]), ariaLabel: ey.NW.string(ey.t["2QmKZ2"]), element: ex.ZP, predicate: () => t.canManageGuild && t.guild.hasFeature(ej.oNc.GUILD_TAGS), notice: {
            stores: [R.Z],
            element: eN.Z
          }
        };
      case ej.pNK.ENGAGEMENT:
        return {
          section: ej.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: ey.NW.string(ey.t["6TAHb2"]), ariaLabel: ey.NW.string(ey.t["6TAHb2"]), element: eg.Z, notice: {
            stores: [R.Z],
            element: ef.R
          }
        };
      case ej.pNK.BOOST_PERKS:
        return {
          section: ej.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: ey.NW.string(ey.t.UKgg5O), ariaLabel: ey.NW.string(ey.t.UKgg5O), element: ed.I, notice: {
            stores: [R.Z, Q.Z],
            element: eu.C
          }
        };
      case ej.pNK.INVITES:
        return {
          section: ej.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: ey.NW.string(ey.t.YOt3Oj), ariaLabel: ey.NW.string(ey.t.YOt3Oj), element: em.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case ej.pNK.OVERVIEW:
        return {
          section: ej.pNK.OVERVIEW, impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW, label: ey.NW.string(ey.t["/dp6yc"]), ariaLabel: ey.NW.string(ey.t["/dp6yc"]), element: et.Z, notice: {
            stores: [R.Z],
            element: et.O
          }
        };
      case ej.pNK.ROLES:
        return {
          section: ej.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: ey.NW.string(ey.t.LPJmLy), element: G.Z, type: o.bT.MINIMAL, ariaLabel: ey.NW.string(ey.t.KXcECw), notice: {
            stores: [L.Z],
            element: G._
          }, predicate: () => t.canManageRoles
        };
      case ej.pNK.EMOJI:
        return {
          section: ej.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: ey.NW.string(ey.t.sMOuub), element: V.ZP, predicate: () => t.canManageGuildExpressions
        };
      case ej.pNK.STICKERS:
        return {
          section: ej.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: ey.NW.string(ey.t.R5nQkZ), ariaLabel: ey.NW.string(ey.t.R5nQkZ), element: ea.Z, predicate: () => t.canManageGuildExpressions
        };
      case ej.pNK.SOUNDBOARD:
        return {
          section: ej.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: ey.NW.string(ey.t.OWQNYm), ariaLabel: ey.NW.string(ey.t.OWQNYm), element: es.Z, predicate: () => t.canManageGuildExpressions
        };
      case ej.pNK.WIDGET:
        return {
          section: ej.pNK.WIDGET, impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET, label: ey.NW.string(ey.t.ACjbTk), element: eA.Z, predicate: () => t.canManageGuild
        };
      case ej.pNK.GUILD_TEMPLATES:
        return {
          section: ej.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(eo.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: ey.NW.string(ey.t.KUw7Sk), element: el.ZP, notice: {
            stores: [el.Sf],
            element: el.Q5
          }, predicate: () => t.canManageGuild
        };
      case ej.pNK.VANITY_URL:
        return {
          section: ej.pNK.VANITY_URL, impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL, label: ey.NW.string(ey.t["5XZKy8"]), element: ec.Z, notice: {
            stores: [Q.Z],
            element: ec.T
          }, predicate: () => t.isGuildAdmin
        };
      case ej.pNK.ACCESS:
        return {
          section: ej.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: ey.NW.string(ey.t.YJlvBA), element: ep.O, notice: {
            stores: [eC.Z],
            element: eh.w
          }, predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild, ariaLabel: ey.NW.string(ey.t.YJlvBA)
        };
      case ej.pNK.INTEGRATIONS:
        return {
          section: ej.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: ey.NW.string(ey.t.CIsNZ2), ariaLabel: ey.NW.string(ey.t.CIsNZ2), element: J.Z, notice: {
            stores: [S.default, R.Z],
            element: J.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case ej.pNK.APP_DIRECTORY:
        return {
          section: ej.pNK.APP_DIRECTORY, label: ey.NW.string(ey.t.AKcFUl), ariaLabel: ey.NW.string(ey.t.AKcFUl), onClick() {
            (0, g.transitionToGlobalDiscovery)({
              tab: eI.GlobalDiscoveryTab.APPS,
              newSessionState: {
                guildId: t.guild.id,
                entrypoint: {
                  name: f.xF.GUILD_SETTINGS,
                  guildSettingsSection: e
                }
              }
            }), (0, l.xf)()
          }
        };
      case ej.pNK.SAFETY:
        return {
          section: ej.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: ey.NW.string(ey.t["suhY+f"]), ariaLabel: ey.NW.string(ey.t["suhY+f"]), element: F.Z, newIndicatorDismissibleContentTypes: [s.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY)
        };
      case ej.pNK.MODERATION:
        return {
          section: ej.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: ey.NW.string(ey.t["suhY+f"]), element: er.ZP, predicate: () => t.canManageGuild && !t.guild.hasFeature(ej.oNc.COMMUNITY)
        };
      case ej.pNK.GUILD_AUTOMOD:
        return {
          section: ej.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: ew.landingPageTabLink,
            children: ey.NW.string(ey.t.uRelg4)
          }), ariaLabel: ey.NW.string(ey.t.uRelg4), element: p.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.hasFeature(ej.oNc.COMMUNITY) && ((0, m.Nb)(t.guild.id) || (0, m.ze)(t.guild.id))
        };
      case ej.pNK.AUDIT_LOG:
        return {
          section: ej.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: ey.NW.string(ey.t.SPWLyc), element: Z.Z, type: o.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case ej.pNK.BANS:
        return {
          section: ej.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: ey.NW.string(ey.t.ZbeITU), element: H.Z, predicate: () => t.canManageBans
        };
      case ej.pNK.CLAN:
        return {
          section: ej.pNK.CLAN, label: ey.NW.string(ey.t["6g8uHB"]), ariaLabel: ey.NW.string(ey.t["6g8uHB"]), onClick() {
            (0, O.q4)(e => {
              let {
                closeLayer: n
              } = e;
              return (0, r.jsx)(A.Z, {
                onClose: n,
                guildId: t.guild.id
              })
            }, {
              layerKey: eE.q2
            }), (0, l.xf)()
          }, predicate() {
            var e;
            return null !== (e = t.canAccessClanSettings) && void 0 !== e && e
          }, icon: null != eQ ? (0, r.jsx)(d.KQ, {
            src: eQ
          }) : null
        };
      case ej.pNK.COMMUNITY:
        let eZ = ey.NW.string(ey.t.ElKTeX);
        return t.guild.hasFeature(ej.oNc.COMMUNITY) && (eZ = t.isGuildSettingsFoundationEnabled ? ey.NW.string(ey.t["8nY2LC"]) : ey.NW.string(ey.t["/dp6yc"])), {
          section: ej.pNK.COMMUNITY,
          impressionName: t.guild.hasFeature(ej.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: eZ,
          element: z.Z,
          ariaLabel: eZ,
          newIndicator: !t.guild.hasFeature(ej.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eO.U3 && I.qc.hasHotspot(I.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [R.Z],
            element: z.X
          }
        };
      case ej.pNK.ONBOARDING:
        return {
          section: ej.pNK.ONBOARDING, label: ey.NW.string(ey.t.LdxCKy), element: ee.Z, ariaLabel: ey.NW.string(ey.t.LdxCKy), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [s.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [W.Z],
            element: _.Z
          }, predicate: () => (0, C.wC)(t.guild.id), decoration: function(e, t) {
            if (h.Z.getEnabled(e)) return ey.NW.string(ey.t.pPSmxs).toUpperCase();
            if ((0, M.C)(e)) return ey.NW.string(ey.t.HDF4o6).toUpperCase();
            let n = k.ug,
              r = n.findIndex(e => e === t);
            if (-1 !== r) return ey.NW.formatToPlainString(ey.t["5r28iY"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case ej.pNK.ANALYTICS:
        return {
          section: ej.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: ey.NW.string(ey.t["0wWfUF"]), ariaLabel: ey.NW.string(ey.t["0wWfUF"]), element: U.Z, predicate: () => eR
        };
      case ej.pNK.DISCOVERY:
        return {
          section: ej.pNK.DISCOVERY, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY, label: ey.NW.string(ey.t.oGaVGx), element: Y.Z, notice: {
            stores: [R.Z],
            element: Y.s
          }, predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY), ariaLabel: t.guild.hasFeature(ej.oNc.DISCOVERABLE) ? ey.NW.string(ey.t.oGaVGx) : ey.NW.string(ey.t.XU0S6u)
        };
      case ej.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: ej.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: ew.landingPageTabLink,
            children: [ey.NW.string(ey.t.kGlQGB), " ", (0, r.jsx)(u.Z, {})]
          }), ariaLabel: ey.NW.string(ey.t.kGlQGB), element: K.Z, notice: {
            stores: [R.Z],
            element: K.J
          }, type: o.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.hasFeature(ej.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished))
          }
        };
      case ej.pNK.COMMUNITY_WELCOME:
        return {
          section: ej.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: ey.NW.string(ey.t["2rkmDg"]), ariaLabel: ey.NW.string(ey.t["2rkmDg"]), element: X.Z, notice: {
            stores: [y.Z],
            element: w.Z
          }, predicate: () => t.canManageGuild && t.guild.hasFeature(ej.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(ej.oNc.GUILD_SERVER_GUIDE)
        };
      case ej.pNK.ROLE_SUBSCRIPTIONS:
        return eB(eP({}, eL), {
          section: ej.pNK.ROLE_SUBSCRIPTIONS,
          element: j.Z,
          type: o.bT.CUSTOM,
          predicate: t.monetizationPredicate,
          newIndicatorDismissibleContentTypes: (0, N.sO)(t.guild) ? [s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case ej.pNK.GUILD_PRODUCTS:
        return {
          section: ej.pNK.GUILD_PRODUCTS, label: ey.NW.string(ey.t.X6h2g4), ariaLabel: ey.NW.string(ey.t.X6h2g4), element: v.Z, predicate: () => t.monetizationPredicate() && (0, b.p)(t.guild.id, "guild_product_settings_predicate") && (0, x.sy)(t.guild)
        };
      case ej.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: ej.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: ey.NW.string(ey.t.ipTYsr), ariaLabel: ey.NW.string(ey.t.ipTYsr), element: E.Z, predicate: () => t.monetizationPredicate() && (0, x.sy)(t.guild)
        };
      case ej.pNK.GUILD_PREMIUM:
        return {
          section: ej.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: ey.NW.string(ey.t["8+VX4+"]), ariaLabel: ey.NW.string(ey.t["8+VX4+"]), element: en.Z, className: ew.serverBoostTabItem, icon: (0, r.jsx)(ei.Z, {
            className: ew.icon
          })
        };
      case ej.pNK.MEMBERS:
        return {
          section: ej.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)($.$, {}), ariaLabel: ey.NW.string(ey.t["9Oq93t"]), element: $.Z, type: o.bT.CUSTOM, predicate: () => t.canAccessMembersPage
        };
      case ej.pNK.INSTANT_INVITES:
        return {
          section: ej.pNK.INSTANT_INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES, label: ey.NW.string(ey.t["9F90iY"]), element: q.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case ej.pNK.DELETE:
        return {
          section: ej.pNK.DELETE, onClick() {
            let e = P.default.getCurrentUser();
            if (null == e) return;
            let i = t.guild.toString(),
              s = {
                header: ey.NW.formatToPlainString(ey.t.us7mCw, {
                  name: i
                }),
                confirmText: ey.NW.string(ey.t.l3hWPz),
                cancelText: ey.NW.string(ey.t["ETE/oK"]),
                onConfirm: () => {
                  B.S.subscribeOnce(ej.CkL.LAYER_POP_COMPLETE, () => {
                    T.Z.deleteGuild(t.guild.id, i)
                  }), (0, l.xf)()
                }
              };
            e.mfaEnabled ? (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, eB(eP({}, e, s), {
              children: (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                children: ey.NW.format(ey.t["Zuo+VV"], {
                  name: i
                })
              })
            }))) : (0, a.ZDy)(async () => {
              let {
                default: e
              } = await n.e("18259").then(n.bind(n, 1493));
              return t => (0, r.jsx)(e, eB(eP({}, t, s), {
                validationText: i,
                instructionText: ey.NW.string(ey.t.abprOD),
                errorText: ey.NW.string(ey.t["c2/DS0"]),
                children: ey.NW.format(ey.t["Zuo+VV"], {
                  name: i
                })
              }))
            })
          }, label: ey.NW.string(ey.t.l3hWPz), ariaLabel: ey.NW.string(ey.t.l3hWPz), icon: (0, r.jsx)(a.XHJ, {
            size: "xs",
            color: "currentColor"
          }), predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case ej.pNK.LANDING:
      case ej.pNK.MEMBER_EDIT:
      case ej.pNK.MEMBER_TIMEOUT:
      case ej.pNK.MEMBER_KICK:
      case ej.pNK.MEMBER_BAN:
      case ej.pNK.CHANNELS:
      case ej.pNK.ROLE_EDIT:
      case ej.pNK.ROLE_PERMISSIONS:
      case ej.pNK.MEMBER_VERIFICATION:
      case ej.pNK.CLYDE:
      case ej.pNK.INTEGRATION_SETTINGS:
      case ej.pNK.SECURITY:
      case ej.pNK.AUDIT_LOG_FILTER:
      case ej.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case ej.pNK.WEBHOOKS:
      case ej.pNK.EDIT_WEBHOOK:
      case ej.pNK.INTEGRATION_PLATFORM:
      case ej.pNK.LOBBIES_LINKED:
      case ej.pNK.EDIT_LINKED_LOBBY:
      case ej.pNK.CHANNELS_FOLLOWED:
      case ej.pNK.COMMUNITY_INTRO:
      case ej.pNK.ROLE_EDIT_REFRESH:
      case ej.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case ej.pNK.ROLE_SUBSCRIPTIONS_BASIC:
      case ej.pNK.ROLE_SUBSCRIPTIONS_TIERS:
      case ej.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case ej.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
      case ej.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, D.vE)(e)
    }
  }
}