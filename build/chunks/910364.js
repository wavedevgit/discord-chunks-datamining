/** Chunk was on 30514 **/
t.d(n, {
  Z: () => R
}), t(388685);
var i = t(200651),
  o = t(192379),
  l = t(272573),
  r = t(442837),
  s = t(481060),
  a = t(727637),
  c = t(616780),
  d = t(100527),
  u = t(906732),
  f = t(368326),
  p = t(429467),
  m = t(680295),
  h = t(699516),
  I = t(5192),
  x = t(785717),
  _ = t(221292),
  b = t(687158),
  v = t(510659),
  g = t(892001),
  j = t(113557),
  Z = t(867176),
  y = t(451834),
  A = t(502762),
  N = t(544989),
  T = t(705556),
  O = t(481932),
  E = t(195387),
  P = t(272510),
  C = t(4517),
  S = t(62154),
  M = t(412317),
  L = t(228168),
  w = t(388032),
  B = t(405666);

function D(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = i
    })
  }
  return e
}

function U(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function R(e) {
  let {
    user: n,
    currentUser: t,
    guildId: R,
    channelId: G,
    messageId: k,
    roleId: Y,
    sessionId: V,
    friendToken: F,
    initialSection: W,
    initialSubsection: J,
    transitionState: K,
    customStatusPrompt: q,
    openedAt: H,
    onClose: z,
    showGuildProfile: X = !0,
    sourceAnalyticsLocations: Q = []
  } = e, {
    analyticsLocations: $
  } = (0, u.ZP)([...Q, d.Z.USER_PROFILE_MODAL]), ee = (0, x.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: V,
    guildId: R,
    channelId: G,
    messageId: k,
    roleId: Y,
    showGuildProfile: X
  }), en = (0, v.$m)(), et = (0, s.q_F)({
    opacity: +(null != en.interactionType),
    config: {
      duration: 150
    }
  }), ei = (0, b.ZP)(n.id, X ? R : void 0), eo = (0, b.ZP)(n.id, R), el = (0, r.e7)([h.Z], () => h.Z.getRelationshipType(n.id)), er = n.id === t.id, es = (0, f.p)({
    location: "UserProfileModal"
  }), ea = o.useMemo(() => null != q ? q : (0, p.Z)(), [q]), ec = o.useMemo(() => null != R ? {
    [R]: [n.id]
  } : {}, [R, n.id]);
  (0, c.$)(ec);
  let ed = o.createRef(),
    eu = (0, a.Z)(ed);
  return (0, i.jsx)(u.Gt, {
    value: $,
    children: (0, i.jsx)(x.Mt, {
      value: ee,
      openedAt: H,
      fetchStartedAt: null == ei ? void 0 : ei.fetchStartedAt,
      fetchEndedAt: null == ei ? void 0 : ei.fetchEndedAt,
      isLoaded: null == ei ? void 0 : ei.isLoaded,
      children: (0, i.jsx)(v.NJ, {
        value: en,
        children: (0, i.jsxs)(s.Y0X, {
          transitionState: K,
          className: B.root,
          hideShadow: !0,
          "aria-label": w.intl.string(w.t["3N/J2t"]),
          children: [(0, i.jsxs)(A.Z, {
            user: n,
            displayProfile: ei,
            themeType: L.lY.MODAL,
            ref: ed,
            children: [(0, i.jsxs)(N.Z, {
              children: [(0, i.jsx)(E.Z, {
                shouldShowTooltip: null === en.interactionType,
                user: n,
                guildId: R,
                channelId: G,
                onClose: z
              }), (0, i.jsx)(O.Z, {
                shouldShowTooltip: null === en.interactionType,
                themeType: L.lY.MODAL,
                user: n,
                friendToken: F
              }), (0, i.jsx)(P.Z, {
                user: n,
                guildId: R,
                viewProfileItem: (null == eo ? void 0 : eo.guildId) == null ? null : (null == ei ? void 0 : ei.guildId) != null ? (0, i.jsx)(s.sNh, {
                  id: "view-main-profile",
                  label: w.intl.string(w.t.GISTtb),
                  subtext: w.intl.formatToPlainString(w.t["mn/nW1"], {
                    displayName: I.ZP.getName(void 0, void 0, n)
                  }),
                  action: () => {
                    z(), (0, g.openUserProfileModal)(U(D({}, ee), {
                      showGuildProfile: !1,
                      friendToken: F,
                      sourceAnalyticsLocations: Q
                    })), (0, _.pQ)(D({
                      action: "PRESS_VIEW_MAIN_PROFILE",
                      analyticsLocations: $
                    }, ee))
                  }
                }) : (0, i.jsx)(s.sNh, {
                  id: "view-server-profile",
                  label: w.intl.string(w.t.DisZzM),
                  subtext: w.intl.formatToPlainString(w.t["mn/nW1"], {
                    displayName: I.ZP.getName(R, G, n)
                  }),
                  action: () => {
                    z(), (0, g.openUserProfileModal)(U(D({}, ee), {
                      showGuildProfile: !0,
                      friendToken: F,
                      sourceAnalyticsLocations: Q
                    })), (0, _.pQ)(D({
                      action: "PRESS_VIEW_SERVER_PROFILE",
                      analyticsLocations: $
                    }, ee))
                  }
                })
              })]
            }), (0, i.jsxs)("header", {
              children: [(0, i.jsx)(Z.Z, {
                user: n,
                displayProfile: ei,
                themeType: L.lY.MODAL
              }), (0, i.jsx)(y.Z, {
                userId: n.id,
                onClose: z,
                className: B.toast
              }), null != en.interactionType && (0, i.jsx)(l.animated.div, {
                style: et,
                className: B.backdrop
              }), (0, i.jsxs)("div", {
                className: B.headerInner,
                children: [(0, i.jsx)(j.Z, {
                  location: "UserProfileModal",
                  user: n,
                  displayProfile: ei,
                  guildId: R,
                  channelId: G,
                  themeType: L.lY.MODAL
                }), (0, i.jsx)(C.Z, {
                  location: "UserProfileModal",
                  user: n,
                  guildId: R,
                  channelId: G,
                  themeType: L.lY.MODAL,
                  hasEntered: K === s.Dvm.ENTERED,
                  onCloseProfile: z,
                  prompt: es && er ? ea : null
                }), (0, i.jsxs)("div", {
                  className: B.headerButtons,
                  children: [(0, i.jsx)(M.Z, {
                    isCurrentUser: er,
                    user: n,
                    relationshipType: el,
                    friendToken: F,
                    onClose: z
                  }), (0, i.jsx)(T.Z, {
                    user: n,
                    guildId: R,
                    onClose: z
                  })]
                })]
              })]
            }), (0, i.jsx)(S.Z, {
              user: n,
              currentUser: t,
              guildId: R,
              channelId: G,
              displayProfile: ei,
              initialSection: W,
              initialSubsection: J,
              friendToken: F,
              onClose: z
            })]
          }), (null == ei ? void 0 : ei.profileEffectId) != null && (0, i.jsx)(m.Z, {
            profileEffectId: null == ei ? void 0 : ei.profileEffectId,
            isHovering: eu
          })]
        })
      })
    })
  })
}