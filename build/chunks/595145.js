/** Chunk was on 43473 **/
n.d(t, {
  Z: () => Y
}), n(388685);
var o = n(255367),
  r = n(73800),
  c = n(230986),
  i = n(442837),
  a = n(481060),
  l = n(666520),
  s = n(727637),
  d = n(616780),
  u = n(100527),
  f = n(906732),
  m = n(368326),
  p = n(429467),
  b = n(680295),
  _ = n(189156),
  y = n(430824),
  h = n(699516),
  g = n(246946),
  x = n(5192),
  j = n(785717),
  O = n(221292),
  I = n(687158),
  v = n(771362),
  P = n(510659),
  A = n(113557),
  T = n(648052),
  N = n(867176),
  C = n(280885),
  Z = n(681837),
  w = n(451834),
  S = n(900927),
  E = n(502762),
  B = n(530),
  D = n(4517),
  U = n(179828),
  k = n(993160),
  L = n(574887),
  M = n(693408),
  R = n(661462),
  G = n(768111),
  V = n(228168),
  F = n(388032),
  H = n(517603);

function Y(e) {
  let {
    user: t,
    currentUser: n,
    guildId: Y,
    channelId: W,
    messageId: K,
    roleId: X,
    sessionId: q,
    initialSection: z,
    initialSubsection: J,
    transitionState: Q,
    customStatusPrompt: $,
    openedAt: ee,
    onClose: et,
    sourceAnalyticsLocations: en = []
  } = e, {
    analyticsLocations: eo
  } = (0, f.ZP)([...en, u.Z.USER_PROFILE_MODAL_V2]), er = (0, j.ZB)({
    layout: "MODAL_V2",
    userId: t.id,
    sourceSessionId: q,
    showGuildProfile: !0,
    guildId: Y,
    channelId: W,
    messageId: K,
    roleId: X
  }), ec = r.useRef(null), ei = (0, s.Z)(ec), ea = (0, P.$m)(), el = (0, a.q_F)({
    opacity: +(null != ea.interactionType),
    config: {
      duration: 150
    }
  }), es = (0, i.e7)([y.Z], () => null != Y ? y.Z.getGuild(Y) : null), ed = r.useMemo(() => null != Y ? {
    [Y]: [t.id]
  } : {}, [Y, t.id]);
  (0, d.$)(ed);
  let eu = (0, I.ZP)(t.id, Y),
    ef = (0, i.e7)([h.Z], () => h.Z.getRelationshipType(t.id)),
    em = (0, i.e7)([g.Z], () => g.Z.hidePersonalInformation),
    ep = null == eu ? void 0 : eu.getBannerURL({
      canAnimate: !1,
      size: 1024
    }),
    eb = (0, m.p)({
      location: "UserProfileModalV2"
    }),
    e_ = r.useMemo(() => null != $ ? $ : (0, p.Z)(), [$]),
    ey = (0, G.Z)({
      user: t,
      currentUser: n
    }),
    eh = (0, v.Z)(t.id);
  return (0, o.jsx)(f.Gt, {
    value: eo,
    children: (0, o.jsx)(j.Mt, {
      value: er,
      openedAt: ee,
      fetchStartedAt: null == eu ? void 0 : eu.fetchStartedAt,
      fetchEndedAt: null == eu ? void 0 : eu.fetchEndedAt,
      isLoaded: null == eu ? void 0 : eu.isLoaded,
      children: (0, o.jsx)(P.NJ, {
        value: ea,
        children: (0, o.jsx)(a.Y0X, {
          hideShadow: !0,
          className: H.root,
          transitionState: Q,
          "aria-label": F.intl.string(F.t["3N/J2t"]),
          children: (0, o.jsxs)(E.Z, {
            ref: ec,
            user: t,
            displayProfile: eu,
            themeType: V.lY.MODAL_V2,
            children: [null != ep && (0, o.jsx)("div", {
              className: H.backgroundImage,
              style: {
                backgroundImage: "url(".concat(ep, ")")
              }
            }), null != ea.interactionType && (0, o.jsx)(c.animated.div, {
              style: el,
              className: H.backdrop
            }), (0, o.jsxs)("div", {
              className: H.profile,
              children: [(0, o.jsxs)("header", {
                className: H.profileHeader,
                children: [(0, o.jsx)(N.Z, {
                  user: t,
                  displayProfile: eu,
                  themeType: V.lY.MODAL_V2
                }), (0, o.jsx)(w.Z, {
                  userId: t.id,
                  onClose: et,
                  className: H.toast
                }), (0, o.jsx)(A.Z, {
                  location: "UserProfileModalV2",
                  user: t,
                  displayProfile: eu,
                  guildId: Y,
                  channelId: W,
                  themeType: V.lY.MODAL_V2
                }), (0, o.jsx)(D.Z, {
                  location: "UserProfileModalV2",
                  user: t,
                  guildId: Y,
                  channelId: W,
                  themeType: V.lY.MODAL_V2,
                  hasEntered: Q === a.Dvm.ENTERED,
                  prompt: eb && t.id === n.id ? e_ : null,
                  onCloseProfile: et
                })]
              }), (0, o.jsxs)("div", {
                className: H.profileBody,
                children: [(0, o.jsx)(B.Z, {
                  user: t,
                  onClose: et,
                  className: H.profileUsername,
                  nickname: x.ZP.useName(null == es ? void 0 : es.id, W, t),
                  nicknameIcons: (0, o.jsx)(Z.Z, {
                    userId: t.id
                  }),
                  nicknameVariant: "heading-xxl/semibold",
                  pronouns: null == eu ? void 0 : eu.pronouns,
                  tagClassName: H.profileUsernameTag,
                  tags: (0, o.jsx)(T.Z, {
                    displayProfile: eu,
                    themeType: V.lY.MODAL_V2,
                    onClose: et
                  })
                }), (0, o.jsx)("div", {
                  className: H.profileButtons,
                  children: (0, o.jsx)(k.Z, {
                    user: t,
                    currentUser: n,
                    guildId: Y,
                    relationshipType: ef,
                    onClose: et
                  })
                }), (0, o.jsxs)(a.Ttm, {
                  fade: !0,
                  className: H.profileScroller,
                  children: [(null == eu ? void 0 : eu.bio) != null && (null == eu ? void 0 : eu.bio) !== "" && !em && (0, o.jsx)(C.Z, {
                    userBio: eu.bio,
                    setLineClamp: !1
                  }), t.isProvisional && (0, o.jsx)(_.WR, {
                    userId: t.id,
                    headingColor: "header-secondary"
                  }), (0, o.jsx)(M.Z, {
                    heading: F.intl.string(F.t.a6XYDw),
                    children: (0, o.jsx)(S.Z, {
                      userId: t.id,
                      guildId: null == eu ? void 0 : eu.guildId,
                      tooltipDelay: V.vB
                    })
                  }), null != es && (0, o.jsx)(U.Z, {
                    user: t,
                    currentUser: n,
                    guild: es,
                    headingClassName: H.profileHeading,
                    headingVariant: "text-xs/semibold",
                    headingColor: "none",
                    scrollIntoView: J === V.Tb.ROLES
                  }), eh.length > 0 && (0, o.jsx)(M.Z, {
                    heading: F.intl.string(F.t.ZZ5jS0),
                    scrollIntoView: J === V.Tb.CONNECTIONS,
                    children: (0, o.jsx)(L.Z, {
                      connections: eh,
                      userId: t.id
                    })
                  }), (0, o.jsx)(M.Z, {
                    heading: F.intl.string(F.t["mQKv+v"]),
                    scrollIntoView: J === V.Tb.NOTE,
                    children: (0, o.jsx)(l.Z, {
                      userId: t.id,
                      className: H.profileNote,
                      autoFocus: J === V.Tb.NOTE,
                      onUpdate: () => (0, O.pQ)(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                            o = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                          }))), o.forEach(function(t) {
                            var o;
                            o = n[t], t in e ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            }) : e[t] = o
                          })
                        }
                        return e
                      }({
                        action: "SET_NOTE"
                      }, er))
                    })
                  })]
                })]
              }), (null == eu ? void 0 : eu.profileEffectId) != null && (0, o.jsx)(b.Z, {
                profileEffectId: null == eu ? void 0 : eu.profileEffectId,
                isHovering: ei
              })]
            }), (0, o.jsx)(R.Z, {
              user: t,
              currentUser: n,
              displayProfile: eu,
              guildId: Y,
              channelId: W,
              items: ey,
              initialSection: z,
              initialSubsection: J,
              onClose: et
            })]
          })
        })
      })
    })
  })
}