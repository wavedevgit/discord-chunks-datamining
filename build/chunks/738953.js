/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => B
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(642128),
  a = n(442837),
  s = n(481060),
  l = n(727637),
  c = n(616780),
  u = n(100527),
  d = n(906732),
  f = n(680295),
  p = n(271383),
  _ = n(430824),
  h = n(785717),
  m = n(221292),
  g = n(687158),
  E = n(326094),
  v = n(510659),
  b = n(113557),
  y = n(867176),
  O = n(451834),
  S = n(502762),
  I = n(544989),
  T = n(481932),
  N = n(195387),
  A = n(272510),
  C = n(4517),
  R = n(171368),
  P = n(978395),
  D = n(161572),
  w = n(228168),
  L = n(981631),
  x = n(388032),
  M = n(913340);

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e) {
  let {
    user: t,
    currentUser: n,
    guildId: j,
    channelId: U,
    messageId: B,
    roleId: F,
    closePopout: V,
    setPopoutRef: Z,
    disableUserProfileLink: H = __OVERLAY__,
    newAnalyticsLocations: W = [],
    appContext: Y = L.IlC.APP
  } = e, {
    analyticsLocations: K
  } = (0, d.ZP)([...W, u.Z.BITE_SIZE_PROFILE_POPOUT]), z = (0, E.Z)({
    user: t,
    currentUser: n,
    location: L.Sbl.BITE_SIZE_POPOUT
  }), q = (0, h.ZB)({
    layout: z ? "BITE_SIZE_POPOUT" : "BITE_SIZE_POPOUT_RESTRICTED_BLOCKER_PROFILE",
    userId: t.id,
    guildId: j,
    channelId: U,
    messageId: B,
    roleId: F
  }), Q = (0, a.e7)([_.Z], () => null != j ? _.Z.getGuild(j) : null), X = (0, a.e7)([p.ZP], () => null != j ? p.ZP.getMember(j, t.id) : null), J = i.useMemo(() => null != j ? {
    [j]: [t.id]
  } : {}, [j, t.id]);
  (0, c.$)(J);
  let $ = i.useRef(null),
    ee = (0, g.ZP)(t.id, j),
    et = (0, l.Z)($),
    en = (0, v.$m)(),
    er = (0, s.q_F)({
      opacity: +(null != en.interactionType),
      config: {
        duration: 150
      }
    });
  i.useEffect(() => {
    null == Z || Z(null == $ ? void 0 : $.current)
  }, [$, Z]);
  let ei = e => {
      null == V || V(), (0, R.openUserProfileModal)(G(k({
        sourceAnalyticsLocations: K
      }, q, e), {
        appContext: Y
      }))
    },
    eo = () => H ? null : (0, r.jsx)(s.sNh, {
      id: "view-profile",
      label: x.NW.string(x.t["+Xp3ho"]),
      action: () => {
        ei(), (0, m.pQ)(k({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: K
        }, q))
      }
    });
  return (0, r.jsx)(d.Gt, {
    value: K,
    children: (0, r.jsx)(h.Mt, {
      value: q,
      shouldTrackViewOnMount: null == X || null != X.fullProfileLoadedTimestamp,
      children: (0, r.jsx)(v.NJ, {
        value: en,
        children: (0, r.jsxs)(s.VqE, {
          ref: $,
          "aria-label": t.username,
          children: [(0, r.jsxs)(S.Z, {
            user: t,
            displayProfile: ee,
            profileType: w.y0.BITE_SIZE,
            children: [null != en.interactionType && (0, r.jsx)(o.animated.div, {
              style: er,
              className: M.backdrop
            }), (0, r.jsxs)(I.Z, {
              profileType: w.y0.BITE_SIZE,
              children: [(0, r.jsx)(N.Z, {
                shouldShowTooltip: null === en.interactionType,
                user: t,
                guildId: j,
                channelId: U,
                onClose: V,
                appContext: Y
              }), (0, r.jsx)(T.Z, {
                shouldShowTooltip: null === en.interactionType,
                profileType: w.y0.BITE_SIZE,
                user: t
              }), t.id !== n.id && (0, r.jsx)(A.Z, {
                user: t,
                guildId: j,
                viewProfileItem: eo(),
                appContext: Y
              })]
            }), (0, r.jsxs)("header", {
              className: M.header,
              children: [(0, r.jsx)(y.Z, {
                user: t,
                displayProfile: ee,
                guildId: j,
                profileType: w.y0.BITE_SIZE
              }), (0, r.jsx)(O.Z, {
                userId: t.id,
                className: M.toast,
                onClose: V
              }), (0, r.jsx)(b.Z, {
                location: "UserProfilePopout",
                user: t,
                displayProfile: ee,
                guildId: j,
                channelId: U,
                profileType: w.y0.BITE_SIZE,
                onOpenProfile: H ? void 0 : ei
              }), (0, r.jsx)(C.Z, {
                location: "UserProfilePopout",
                user: t,
                guildId: j,
                channelId: U,
                profileType: w.y0.BITE_SIZE,
                onCloseProfile: V
              })]
            }), (0, r.jsx)(P.Z, {
              user: t,
              currentUser: n,
              displayProfile: ee,
              guild: Q,
              isHovering: null == en.interactionType && et,
              onOpenProfile: H ? void 0 : ei,
              channelId: U,
              onClose: V
            }), (0, r.jsx)(D.Z, {
              user: t,
              guildId: j,
              channelId: U,
              onClose: V,
              appContext: Y
            })]
          }), (null == ee ? void 0 : ee.profileEffectId) != null && (0, r.jsx)(f.Z, {
            profileEffectId: null == ee ? void 0 : ee.profileEffectId,
            isHovering: et
          })]
        })
      })
    })
  })
}