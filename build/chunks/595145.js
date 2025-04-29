/** Chunk was on 30776 **/
t.d(n, {
  Z: () => W
}), t(388685);
var o = t(200651),
  r = t(192379),
  a = t(272573),
  i = t(442837),
  c = t(481060),
  l = t(666520),
  s = t(727637),
  d = t(616780),
  u = t(100527),
  f = t(906732),
  p = t(368326),
  m = t(429467),
  b = t(680295),
  _ = t(189156),
  h = t(706454),
  y = t(430824),
  g = t(699516),
  x = t(246946),
  j = t(5192),
  I = t(785717),
  v = t(221292),
  O = t(687158),
  C = t(250822),
  N = t(771362),
  P = t(510659),
  A = t(113557),
  Z = t(648052),
  w = t(867176),
  T = t(280885),
  S = t(819602),
  M = t(681837),
  E = t(451834),
  U = t(900927),
  B = t(678738),
  V = t(502762),
  k = t(530),
  D = t(4517),
  L = t(179828),
  F = t(993160),
  R = t(661462),
  G = t(228168),
  H = t(388032),
  Y = t(517603);

function W(e) {
  let {
    user: n,
    currentUser: t,
    guildId: W,
    channelId: z,
    messageId: K,
    roleId: q,
    sessionId: X,
    friendToken: J,
    initialSection: Q,
    initialSubsection: $,
    transitionState: ee,
    customStatusPrompt: en,
    openedAt: et,
    onClose: eo,
    sourceAnalyticsLocations: er = []
  } = e, {
    analyticsLocations: ea
  } = (0, f.ZP)([...er, u.Z.USER_PROFILE_MODAL_V2]), ei = (0, I.ZB)({
    layout: "MODAL_V2",
    userId: n.id,
    sourceSessionId: X,
    showGuildProfile: !0,
    guildId: W,
    channelId: z,
    messageId: K,
    roleId: q
  }), ec = r.createRef(), el = (0, s.Z)(ec), es = (0, P.$m)(), ed = (0, c.q_F)({
    opacity: +(null != es.interactionType),
    config: {
      duration: 150
    }
  }), eu = (0, i.e7)([y.Z], () => null != W ? y.Z.getGuild(W) : null), ef = r.useMemo(() => null != W ? {
    [W]: [n.id]
  } : {}, [W, n.id]);
  (0, d.$)(ef);
  let ep = (0, O.ZP)(n.id, W),
    em = (0, i.e7)([g.Z], () => g.Z.getRelationshipType(n.id)),
    eb = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
    e_ = (0, p.p)({
      location: "UserProfileModalV2"
    }),
    eh = r.useMemo(() => null != en ? en : (0, m.Z)(), [en]),
    ey = (0, i.e7)([h.default], () => h.default.locale),
    eg = (0, N.Z)(n.id),
    ex = (0, C.Z)(n.id);
  return (0, o.jsx)(f.Gt, {
    value: ea,
    children: (0, o.jsx)(I.Mt, {
      value: ei,
      openedAt: et,
      fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
      fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
      isLoaded: null == ep ? void 0 : ep.isLoaded,
      children: (0, o.jsx)(P.NJ, {
        value: es,
        children: (0, o.jsx)(c.Y0X, {
          hideShadow: !0,
          className: Y.root,
          transitionState: ee,
          "aria-label": H.intl.string(H.t["3N/J2t"]),
          children: (0, o.jsxs)(V.Z, {
            ref: ec,
            user: n,
            displayProfile: ep,
            themeType: G.lY.MODAL_V2,
            children: [(0, o.jsxs)("div", {
              className: Y.profile,
              children: [null != es.interactionType && (0, o.jsx)(a.animated.div, {
                style: ed,
                className: Y.backdrop
              }), (0, o.jsxs)("header", {
                className: Y.profileHeader,
                children: [(0, o.jsx)(w.Z, {
                  user: n,
                  displayProfile: ep,
                  themeType: G.lY.MODAL_V2
                }), (0, o.jsx)(E.Z, {
                  userId: n.id,
                  onClose: eo,
                  className: Y.toast
                }), (0, o.jsx)(A.Z, {
                  location: "UserProfileModalV2",
                  user: n,
                  displayProfile: ep,
                  guildId: W,
                  channelId: z,
                  themeType: G.lY.MODAL_V2
                }), (0, o.jsx)(D.Z, {
                  location: "UserProfileModalV2",
                  user: n,
                  guildId: W,
                  channelId: z,
                  themeType: G.lY.MODAL_V2,
                  hasEntered: ee === c.Dvm.ENTERED,
                  prompt: e_ && n.id === t.id ? eh : null,
                  onCloseProfile: eo
                })]
              }), (0, o.jsxs)("div", {
                className: Y.profileBody,
                children: [(0, o.jsx)(k.Z, {
                  user: n,
                  onClose: eo,
                  className: Y.profileUsername,
                  nickname: j.ZP.useName(null == eu ? void 0 : eu.id, z, n),
                  nicknameIcons: (0, o.jsx)(M.Z, {
                    userId: n.id
                  }),
                  nicknameVariant: "heading-xxl/semibold",
                  pronouns: null == ep ? void 0 : ep.pronouns,
                  tagClassName: Y.profileUsernameTag,
                  tags: (0, o.jsx)(Z.Z, {
                    displayProfile: ep,
                    themeType: G.lY.MODAL_V2,
                    onClose: eo
                  })
                }), (0, o.jsx)("div", {
                  className: Y.profileButtons,
                  children: (0, o.jsx)(F.Z, {
                    user: n,
                    currentUser: t,
                    guildId: W,
                    relationshipType: em,
                    friendToken: J,
                    onClose: eo
                  })
                }), (0, o.jsxs)(c.Ttm, {
                  fade: !0,
                  className: Y.profileScroller,
                  children: [(null == ep ? void 0 : ep.bio) != null && (null == ep ? void 0 : ep.bio) !== "" && !eb && (0, o.jsx)(T.Z, {
                    userBio: ep.bio,
                    setLineClamp: !1
                  }), n.isProvisional && (0, o.jsx)(_.WR, {
                    userId: n.id,
                    headingColor: "header-secondary"
                  }), (0, o.jsx)(B.Z, {
                    heading: H.intl.string(H.t.a6XYDw),
                    headingClassName: Y.profileHeading,
                    headingVariant: "text-xs/semibold",
                    headingColor: "none",
                    children: (0, o.jsx)(U.Z, {
                      userId: n.id,
                      guildId: null == ep ? void 0 : ep.guildId,
                      tooltipDelay: G.vB
                    })
                  }), null != eu && (0, o.jsx)(L.Z, {
                    user: n,
                    currentUser: t,
                    guild: eu,
                    headingClassName: Y.profileHeading,
                    headingVariant: "text-xs/semibold",
                    headingColor: "none",
                    scrollIntoView: $ === G.Tb.ROLES
                  }), eg.length > 0 && (0, o.jsx)(B.Z, {
                    heading: H.intl.string(H.t["3fe7U1"]),
                    headingClassName: Y.profileHeading,
                    headingVariant: "text-xs/semibold",
                    headingColor: "none",
                    scrollIntoView: $ === G.Tb.CONNECTIONS,
                    children: (0, o.jsx)(S.ZP, {
                      connectedAccounts: eg,
                      className: Y.profileConnections,
                      userId: n.id,
                      locale: ey
                    })
                  }), ex.length > 0 && (0, o.jsx)(B.Z, {
                    heading: H.intl.string(H.t.PHjkRE),
                    headingClassName: Y.profileHeading,
                    headingVariant: "text-xs/semibold",
                    headingColor: "none",
                    children: ex.map(e => (0, o.jsx)(S.tH, {
                      className: Y.profileAppConnections,
                      applicationRoleConnection: e,
                      selectedGuildId: W,
                      locale: ey,
                      onApplicationClicked: () => {
                        (0, v.pQ)({
                          action: "PRESS_APP_CONNECTION"
                        }), eo()
                      }
                    }, e.application.id))
                  }), (0, o.jsx)(B.Z, {
                    heading: H.intl.string(H.t["mQKv+v"]),
                    headingClassName: Y.profileHeading,
                    headingVariant: "text-xs/semibold",
                    headingColor: "none",
                    scrollIntoView: $ === G.Tb.NOTE,
                    children: (0, o.jsx)(l.Z, {
                      userId: n.id,
                      className: Y.profileNote,
                      autoFocus: $ === G.Tb.NOTE,
                      onUpdate: () => (0, v.pQ)(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                          var t = null != arguments[n] ? arguments[n] : {},
                            o = Object.keys(t);
                          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                          }))), o.forEach(function(n) {
                            var o;
                            o = t[n], n in e ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            }) : e[n] = o
                          })
                        }
                        return e
                      }({
                        action: "SET_NOTE"
                      }, ei))
                    })
                  })]
                })]
              }), (null == ep ? void 0 : ep.profileEffectId) != null && (0, o.jsx)(b.Z, {
                profileEffectId: null == ep ? void 0 : ep.profileEffectId,
                isHovering: el
              })]
            }), (0, o.jsx)(R.Z, {
              user: n,
              currentUser: t,
              displayProfile: ep,
              guildId: W,
              channelId: z,
              initialSection: Q,
              initialSubsection: $,
              onClose: eo
            })]
          })
        })
      })
    })
  })
}