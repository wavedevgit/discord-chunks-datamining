/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  Z: () => eP
});
var r = n(200651),
  i = n(990547),
  s = n(704215),
  a = n(481060),
  l = n(37234),
  o = n(493544),
  c = n(353093),
  d = n(593128),
  u = n(979264),
  m = n(688465),
  g = n(749681),
  p = n(258971),
  h = n(676317),
  f = n(874993),
  b = n(45966),
  x = n(637853),
  j = n(352981),
  N = n(610403),
  v = n(923726),
  _ = n(303737),
  O = n(15030),
  y = n(220685),
  C = n(536442),
  I = n(84615),
  E = n(575258),
  S = n(276687),
  T = n(594174),
  P = n(585483),
  w = n(823379),
  R = n(434404),
  Z = n(360606),
  D = n(946724),
  A = n(999382),
  k = n(44550),
  W = n(853714),
  L = n(359191),
  M = n(84658),
  G = n(142961),
  U = n(730910),
  B = n(475013),
  F = n(213956),
  z = n(702478),
  H = n(247031),
  V = n(787561),
  Y = n(579648),
  K = n(511480),
  q = n(460461),
  X = n(29605),
  Q = n(365307),
  J = n(497666),
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
  ed = n(804153),
  eu = n(178387),
  em = n(993097),
  eg = n(486358),
  ep = n(942478),
  eh = n(890861),
  ef = n(708510),
  eb = n(237245),
  ex = n(658666),
  ej = n(224726),
  eN = n(308619),
  ev = n(254925),
  e_ = n(981631),
  eO = n(308083),
  ey = n(49898),
  eC = n(135899),
  eI = n(388032),
  eE = n(989113);

function eS(e) {
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

function eT(e, t) {
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
let eP = {
  getSectionDefinition: function(e, t) {
    var eP;
    let ew = (0, j.p)(t.guild.id, "guild_settings"),
      eR = !1 === t.guild.hasFeature(e_.oNc.CREATOR_MONETIZABLE) && !1 === t.guild.hasFeature(e_.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
      eZ = ew && eR ? {
        label: (0, r.jsx)("div", {
          className: eE.roleSubLabel,
          children: eI.NW.string(eI.t.Tn7Koq)
        }),
        ariaLabel: eI.NW.string(eI.t.Tn7Koq)
      } : {
        label: (0, r.jsx)("div", {
          className: eE.roleSubLabel,
          children: eI.NW.string(eI.t["KzCF//"])
        }),
        ariaLabel: eI.NW.string(eI.t["KzCF//"])
      },
      eD = t.guild.hasFeature(e_.oNc.COMMUNITY) && t.canViewGuildAnalytics,
      eA = (null === (eP = t.guild.profile) || void 0 === eP ? void 0 : eP.badge) != null ? (0, c.ky)(t.guild.id, t.guild.profile.badge, eO.NC.SIZE_16) : null;
    switch (e) {
      case e_.pNK.PROFILE:
        return {
          section: e_.pNK.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: eI.NW.string(eI.t.txdaxc), ariaLabel: eI.NW.string(eI.t.txdaxc), element: ej.Z, type: o.bT.SCROLLABLE_CUSTOM, notice: {
            stores: [A.Z],
            element: eN.Z
          }
        };
      case e_.pNK.TAG:
        return {
          section: e_.pNK.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: eI.NW.string(eI.t["2QmKZ2"]), ariaLabel: eI.NW.string(eI.t["2QmKZ2"]), element: ev.Z, predicate: () => !1
        };
      case e_.pNK.ENGAGEMENT:
        return {
          section: e_.pNK.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: eI.NW.string(eI.t["6TAHb2"]), ariaLabel: eI.NW.string(eI.t["6TAHb2"]), element: eg.Z, notice: {
            stores: [A.Z],
            element: ep.R
          }
        };
      case e_.pNK.BOOST_PERKS:
        return {
          section: e_.pNK.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: eI.NW.string(eI.t.UKgg5O), ariaLabel: eI.NW.string(eI.t.UKgg5O), element: eu.I, notice: {
            stores: [A.Z, k.Z],
            element: em.C
          }
        };
      case e_.pNK.INVITES:
        return {
          section: e_.pNK.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: eI.NW.string(eI.t.YOt3Oj), ariaLabel: eI.NW.string(eI.t.YOt3Oj), element: eh.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case e_.pNK.OVERVIEW:
        return {
          section: e_.pNK.OVERVIEW, impressionName: i.ImpressionNames.GUILD_SETTINGS_OVERVIEW, label: eI.NW.string(eI.t["/dp6yc"]), ariaLabel: eI.NW.string(eI.t["/dp6yc"]), element: et.Z, notice: {
            stores: [A.Z],
            element: et.O
          }
        };
      case e_.pNK.ROLES:
        return {
          section: e_.pNK.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: eI.NW.string(eI.t.LPJmLy), element: B.Z, type: o.bT.MINIMAL, ariaLabel: eI.NW.string(eI.t.KXcECw), notice: {
            stores: [D.Z],
            element: B._
          }, predicate: () => t.canManageRoles
        };
      case e_.pNK.EMOJI:
        return {
          section: e_.pNK.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: eI.NW.string(eI.t.sMOuub), element: X.ZP, predicate: () => t.canManageGuildExpressions
        };
      case e_.pNK.STICKERS:
        return {
          section: e_.pNK.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: eI.NW.string(eI.t.R5nQkZ), ariaLabel: eI.NW.string(eI.t.R5nQkZ), element: ea.Z, predicate: () => t.canManageGuildExpressions
        };
      case e_.pNK.SOUNDBOARD:
        return {
          section: e_.pNK.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: eI.NW.string(eI.t.OWQNYm), ariaLabel: eI.NW.string(eI.t.OWQNYm), element: es.Z, predicate: () => t.canManageGuildExpressions
        };
      case e_.pNK.WIDGET:
        return {
          section: e_.pNK.WIDGET, impressionName: i.ImpressionNames.GUILD_SETTINGS_WIDGET, label: eI.NW.string(eI.t.ACjbTk), element: ed.Z, predicate: () => t.canManageGuild
        };
      case e_.pNK.GUILD_TEMPLATES:
        return {
          section: e_.pNK.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(eo.Z, {
            showDirtyIndicator: t.showDirtyGuildTemplateIndicator
          }), ariaLabel: eI.NW.string(eI.t.KUw7Sk), element: el.ZP, notice: {
            stores: [el.Sf],
            element: el.Q5
          }, predicate: () => t.canManageGuild
        };
      case e_.pNK.VANITY_URL:
        return {
          section: e_.pNK.VANITY_URL, impressionName: i.ImpressionNames.GUILD_SETTINGS_VANITY_URL, label: eI.NW.string(eI.t["5XZKy8"]), element: ec.Z, notice: {
            stores: [k.Z],
            element: ec.T
          }, predicate: () => t.isGuildAdmin
        };
      case e_.pNK.ACCESS:
        return {
          section: e_.pNK.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: eI.NW.string(eI.t.YJlvBA), element: ef.O, notice: {
            stores: [ex.Z],
            element: eb.w
          }, predicate: () => t.memberVerificationRolloutEnabled && t.canManageGuild, ariaLabel: eI.NW.string(eI.t.YJlvBA)
        };
      case e_.pNK.INTEGRATIONS:
        return {
          section: e_.pNK.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: eI.NW.string(eI.t.CIsNZ2), ariaLabel: eI.NW.string(eI.t.CIsNZ2), element: Q.Z, notice: {
            stores: [Z.default, A.Z],
            element: Q.j
          }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
        };
      case e_.pNK.APP_DIRECTORY:
        return {
          section: e_.pNK.APP_DIRECTORY, label: eI.NW.string(eI.t.AKcFUl), ariaLabel: eI.NW.string(eI.t.AKcFUl), onClick() {
            (0, g.transitionToGlobalDiscovery)({
              tab: ey.GlobalDiscoveryTab.APPS,
              newSessionState: {
                guildId: t.guild.id,
                entrypoint: {
                  name: p.xF.GUILD_SETTINGS,
                  guildSettingsSection: e
                }
              }
            }), (0, l.xf)()
          }
        };
      case e_.pNK.SAFETY:
        return {
          section: e_.pNK.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: eI.NW.string(eI.t["suhY+f"]), ariaLabel: eI.NW.string(eI.t["suhY+f"]), element: F.Z, newIndicatorDismissibleContentTypes: [s.z.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.hasFeature(e_.oNc.COMMUNITY)
        };
      case e_.pNK.MODERATION:
        return {
          section: e_.pNK.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: eI.NW.string(eI.t["suhY+f"]), element: er.ZP, predicate: () => t.canManageGuild && !t.guild.hasFeature(e_.oNc.COMMUNITY)
        };
      case e_.pNK.GUILD_AUTOMOD:
        return {
          section: e_.pNK.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
            className: eE.landingPageTabLink,
            children: eI.NW.string(eI.t.uRelg4)
          }), ariaLabel: eI.NW.string(eI.t.uRelg4), element: f.Z, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.hasFeature(e_.oNc.COMMUNITY) && ((0, h.Nb)(t.guild.id) || (0, h.ze)(t.guild.id))
        };
      case e_.pNK.AUDIT_LOG:
        return {
          section: e_.pNK.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: eI.NW.string(eI.t.SPWLyc), element: W.Z, type: o.bT.CUSTOM, predicate: () => t.canViewAuditLog
        };
      case e_.pNK.BANS:
        return {
          section: e_.pNK.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: eI.NW.string(eI.t.ZbeITU), element: H.Z, predicate: () => t.canManageBans
        };
      case e_.pNK.CLAN:
        return {
          section: e_.pNK.CLAN, label: eI.NW.string(eI.t["6g8uHB"]), ariaLabel: eI.NW.string(eI.t["6g8uHB"]), onClick() {
            (0, I.q4)(e => {
              let {
                closeLayer: n
              } = e;
              return (0, r.jsx)(d.Z, {
                onClose: n,
                guildId: t.guild.id
              })
            }, {
              layerKey: eO.q2
            }), (0, l.xf)()
          }, predicate() {
            var e;
            return null !== (e = t.canAccessClanSettings) && void 0 !== e && e
          }, icon: null != eA ? (0, r.jsx)(u.KQ, {
            src: eA
          }) : null
        };
      case e_.pNK.COMMUNITY:
        let ek = eI.NW.string(eI.t.ElKTeX);
        return t.guild.hasFeature(e_.oNc.COMMUNITY) && (ek = t.isGuildSettingsFoundationEnabled ? eI.NW.string(eI.t["8nY2LC"]) : eI.NW.string(eI.t["/dp6yc"])), {
          section: e_.pNK.COMMUNITY,
          impressionName: t.guild.hasFeature(e_.oNc.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
          label: ek,
          element: V.Z,
          ariaLabel: ek,
          newIndicator: !t.guild.hasFeature(e_.oNc.COMMUNITY) && null != t.memberCount && t.memberCount >= eC.U3 && C.qc.hasHotspot(C.v6.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
          notice: {
            stores: [A.Z],
            element: V.X
          }
        };
      case e_.pNK.ONBOARDING:
        return {
          section: e_.pNK.ONBOARDING, label: eI.NW.string(eI.t.LdxCKy), element: ee.Z, ariaLabel: eI.NW.string(eI.t.LdxCKy), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [s.z.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
            stores: [L.Z],
            element: U.Z
          }, predicate: () => (0, x.wC)(t.guild.id), decoration: function(e, t) {
            if (b.Z.getEnabled(e)) return eI.NW.string(eI.t.pPSmxs).toUpperCase();
            if ((0, G.C)(e)) return eI.NW.string(eI.t.HDF4o6).toUpperCase();
            let n = M.ug,
              r = n.findIndex(e => e === t);
            if (-1 !== r) return eI.NW.formatToPlainString(eI.t["5r28iY"], {
              count: r + 1,
              total: n.length
            })
          }(t.guild.id, t.onboardingStep)
        };
      case e_.pNK.ANALYTICS:
        return {
          section: e_.pNK.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: eI.NW.string(eI.t["0wWfUF"]), ariaLabel: eI.NW.string(eI.t["0wWfUF"]), element: z.Z, predicate: () => eD
        };
      case e_.pNK.DISCOVERY:
        return {
          section: e_.pNK.DISCOVERY, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY, label: eI.NW.string(eI.t.oGaVGx), element: K.Z, notice: {
            stores: [A.Z],
            element: K.s
          }, predicate: () => !t.memberVerificationRolloutEnabled && t.canManageGuild && t.guild.hasFeature(e_.oNc.COMMUNITY), ariaLabel: t.guild.hasFeature(e_.oNc.DISCOVERABLE) ? eI.NW.string(eI.t.oGaVGx) : eI.NW.string(eI.t.XU0S6u)
        };
      case e_.pNK.DISCOVERY_LANDING_PAGE:
        return {
          section: e_.pNK.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
            className: eE.landingPageTabLink,
            children: [eI.NW.string(eI.t.kGlQGB), " ", (0, r.jsx)(m.Z, {})]
          }), ariaLabel: eI.NW.string(eI.t.kGlQGB), element: q.Z, notice: {
            stores: [A.Z],
            element: q.J
          }, type: o.bT.CUSTOM, predicate() {
            var e;
            return t.canManageGuild && (t.guild.hasFeature(e_.oNc.DISCOVERABLE) || !!(null === (e = t.guildMetadata) || void 0 === e ? void 0 : e.isPublished))
          }
        };
      case e_.pNK.COMMUNITY_WELCOME:
        return {
          section: e_.pNK.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: eI.NW.string(eI.t["2rkmDg"]), ariaLabel: eI.NW.string(eI.t["2rkmDg"]), element: Y.Z, notice: {
            stores: [E.Z],
            element: S.Z
          }, predicate: () => t.canManageGuild && t.guild.hasFeature(e_.oNc.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.hasFeature(e_.oNc.GUILD_SERVER_GUIDE)
        };
      case e_.pNK.ROLE_SUBSCRIPTIONS:
        return eT(eS({}, eZ), {
          section: e_.pNK.ROLE_SUBSCRIPTIONS,
          element: O.Z,
          type: o.bT.CUSTOM,
          predicate: t.monetizationPredicate,
          newIndicatorDismissibleContentTypes: (0, _.sO)(t.guild) ? [s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
        });
      case e_.pNK.GUILD_PRODUCTS:
        return {
          section: e_.pNK.GUILD_PRODUCTS, label: eI.NW.string(eI.t.X6h2g4), ariaLabel: eI.NW.string(eI.t.X6h2g4), element: N.Z, predicate: () => t.monetizationPredicate() && (0, j.p)(t.guild.id, "guild_product_settings_predicate") && (0, v.sy)(t.guild)
        };
      case e_.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE:
        return {
          section: e_.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: eI.NW.string(eI.t.ipTYsr), ariaLabel: eI.NW.string(eI.t.ipTYsr), element: y.Z, predicate: () => t.monetizationPredicate() && (0, v.sy)(t.guild)
        };
      case e_.pNK.GUILD_PREMIUM:
        return {
          section: e_.pNK.GUILD_PREMIUM, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS, label: eI.NW.string(eI.t["8+VX4+"]), ariaLabel: eI.NW.string(eI.t["8+VX4+"]), element: en.Z, className: eE.serverBoostTabItem, icon: (0, r.jsx)(ei.Z, {
            className: eE.icon
          })
        };
      case e_.pNK.MEMBERS:
        return {
          section: e_.pNK.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)($.$, {}), ariaLabel: eI.NW.string(eI.t["9Oq93t"]), element: $.Z, type: o.bT.CUSTOM, predicate: () => t.canAccessMembersPage
        };
      case e_.pNK.INSTANT_INVITES:
        return {
          section: e_.pNK.INSTANT_INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES, label: eI.NW.string(eI.t["9F90iY"]), element: J.Z, type: o.bT.CUSTOM, predicate: () => t.canManageGuild
        };
      case e_.pNK.DELETE:
        return {
          section: e_.pNK.DELETE, onClick() {
            let e = T.default.getCurrentUser();
            if (null == e) return;
            let i = t.guild.toString(),
              s = {
                header: eI.NW.formatToPlainString(eI.t.us7mCw, {
                  name: i
                }),
                confirmText: eI.NW.string(eI.t.l3hWPz),
                cancelText: eI.NW.string(eI.t["ETE/oK"]),
                onConfirm: () => {
                  P.S.subscribeOnce(e_.CkL.LAYER_POP_COMPLETE, () => {
                    R.Z.deleteGuild(t.guild.id, i)
                  }), (0, l.xf)()
                }
              };
            e.mfaEnabled ? (0, a.h7j)(e => (0, r.jsx)(a.ConfirmModal, eT(eS({}, e, s), {
              children: (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                children: eI.NW.format(eI.t["Zuo+VV"], {
                  name: i
                })
              })
            }))) : (0, a.ZDy)(async () => {
              let {
                default: e
              } = await n.e("18259").then(n.bind(n, 1493));
              return t => (0, r.jsx)(e, eT(eS({}, t, s), {
                validationText: i,
                instructionText: eI.NW.string(eI.t.abprOD),
                errorText: eI.NW.string(eI.t["c2/DS0"]),
                children: eI.NW.format(eI.t["Zuo+VV"], {
                  name: i
                })
              }))
            })
          }, label: eI.NW.string(eI.t.l3hWPz), ariaLabel: eI.NW.string(eI.t.l3hWPz), icon: (0, r.jsx)(a.XHJ, {
            size: "xs",
            color: "currentColor"
          }), predicate: () => t.isOwnerWithRequiredMfaLevel
        };
      case e_.pNK.LANDING:
      case e_.pNK.MEMBER_EDIT:
      case e_.pNK.MEMBER_TIMEOUT:
      case e_.pNK.MEMBER_KICK:
      case e_.pNK.MEMBER_BAN:
      case e_.pNK.CHANNELS:
      case e_.pNK.ROLE_EDIT:
      case e_.pNK.ROLE_PERMISSIONS:
      case e_.pNK.MEMBER_VERIFICATION:
      case e_.pNK.CLYDE:
      case e_.pNK.INTEGRATION_SETTINGS:
      case e_.pNK.SECURITY:
      case e_.pNK.AUDIT_LOG_FILTER:
      case e_.pNK.ROLE_SUBSCRIPTIONS_TIER_EDIT:
      case e_.pNK.WEBHOOKS:
      case e_.pNK.EDIT_WEBHOOK:
      case e_.pNK.INTEGRATION_PLATFORM:
      case e_.pNK.LOBBIES_LINKED:
      case e_.pNK.EDIT_LINKED_LOBBY:
      case e_.pNK.CHANNELS_FOLLOWED:
      case e_.pNK.COMMUNITY_INTRO:
      case e_.pNK.ROLE_EDIT_REFRESH:
      case e_.pNK.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
      case e_.pNK.ROLE_SUBSCRIPTIONS_BASIC:
      case e_.pNK.ROLE_SUBSCRIPTIONS_TIERS:
      case e_.pNK.ROLE_SUBSCRIPTIONS_PAYMENTS:
      case e_.pNK.ROLE_SUBSCRIPTIONS_EMOJIS:
      case e_.pNK.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
        return null;
      default:
        (0, w.vE)(e)
    }
  }
}