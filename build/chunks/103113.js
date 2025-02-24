/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(727637),
  s = n(100527),
  l = n(906732),
  c = n(580552),
  u = n(688465),
  d = n(680295),
  f = n(5192),
  p = n(785717),
  _ = n(221292),
  h = n(687158),
  m = n(899007),
  g = n(648052),
  E = n(867176),
  v = n(280885),
  b = n(502762),
  y = n(530),
  O = n(679332),
  S = n(544989),
  I = n(171368),
  T = n(228168),
  N = n(388032),
  A = n(913340);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function P(e) {
  let {
    user: t,
    guildId: n,
    channelId: C,
    messageId: P,
    roleId: D,
    setPopoutRef: w,
    closePopout: L,
    disableUserProfileLink: x = __OVERLAY__,
    newAnalyticsLocations: M = []
  } = e, j = (0, h.ZP)(t.id, n), {
    analyticsLocations: k
  } = (0, l.ZP)([...M, s.Z.BITE_SIZE_PROFILE_POPOUT]), U = (0, p.ZB)({
    layout: "BITE_SIZE_POPOUT",
    userId: t.id,
    guildId: n,
    channelId: C,
    messageId: P,
    roleId: D
  }), G = i.useRef(null), B = (0, a.Z)(G);
  i.useEffect(() => {
    null == w || w(null == G ? void 0 : G.current)
  }, [G, w]);
  let F = () => {
      null == L || L(), (0, I.openUserProfileModal)(R({
        sourceAnalyticsLocations: k
      }, U))
    },
    V = !x && (0, c.Z)(t.id),
    Z = () => V ? (0, r.jsx)(o.sNh, {
      id: "view-profile",
      label: N.NW.string(N.t["+Xp3ho"]),
      action: () => {
        F(), (0, _.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: k
        }, U))
      }
    }) : null;
  return (0, r.jsx)(l.Gt, {
    value: k,
    children: (0, r.jsx)(p.Mt, {
      value: U,
      children: (0, r.jsxs)(o.VqE, {
        ref: G,
        "aria-label": t.username,
        children: [(0, r.jsxs)(b.Z, {
          user: t,
          displayProfile: j,
          profileType: T.y0.BITE_SIZE,
          children: [(0, r.jsx)(S.Z, {
            profileType: T.y0.BITE_SIZE,
            children: (0, r.jsx)(O.Z, {
              user: t,
              viewProfileItem: Z()
            })
          }), (0, r.jsxs)("header", {
            className: A.header,
            children: [(0, r.jsx)(E.Z, {
              user: t,
              displayProfile: j,
              guildId: n,
              profileType: T.y0.BITE_SIZE
            }), (0, r.jsx)(m.Z, {
              user: t,
              displayProfile: j,
              guildId: n,
              channelId: C,
              profileType: T.y0.BITE_SIZE,
              onOpenProfile: V ? F : void 0
            }), t.isClyde() && (0, r.jsx)(u.Z, {
              className: A.headerTag
            })]
          }), (0, r.jsxs)(o.Ttm, {
            fade: !0,
            className: A.body,
            children: [(0, r.jsx)(y.Z, {
              user: t,
              profileType: T.y0.BITE_SIZE,
              nickname: f.ZP.getName(n, C, t),
              onOpenProfile: V ? F : void 0,
              tags: (0, r.jsx)(g.Z, {
                displayProfile: j,
                profileType: T.y0.BITE_SIZE,
                onClose: L
              })
            }), (0, r.jsx)(v.Z, {
              userId: t.id,
              userBio: null == j ? void 0 : j.bio,
              setLineClamp: !1,
              textColor: "header-primary"
            })]
          }), (0, r.jsx)("footer", {
            className: A.footer
          })]
        }), (null == j ? void 0 : j.profileEffectId) != null && (0, r.jsx)(d.Z, {
          profileEffectId: null == j ? void 0 : j.profileEffectId,
          isHovering: B
        })]
      })
    })
  })
}