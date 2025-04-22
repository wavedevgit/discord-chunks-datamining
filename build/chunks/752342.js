/** Chunk was on 54636 **/
t.d(n, {
  Z: () => E
}), t(388685);
var r = t(200651);
t(192379);
var o = t(481060),
  i = t(100527),
  l = t(906732),
  s = t(5192),
  c = t(785717),
  a = t(687158),
  d = t(899007),
  u = t(648052),
  f = t(867176),
  p = t(681837),
  m = t(502762),
  b = t(530),
  h = t(871604),
  g = t(952124),
  j = t(53558),
  v = t(544989),
  x = t(934861),
  y = t(4517),
  O = t(740628),
  I = t(398145),
  _ = t(228168),
  Z = t(981631),
  P = t(388032),
  A = t(405666);

function E(e) {
  let {
    user: n,
    currentUser: t,
    guildId: E,
    channelId: N,
    messageId: T,
    roleId: C,
    sessionId: S,
    initialSection: w,
    initialSubsection: M,
    transitionState: R,
    openedAt: L,
    onClose: D,
    sourceAnalyticsLocations: B = []
  } = e, G = E === Z.ME ? void 0 : E, U = (0, a.ZP)(n.id, G), {
    analyticsLocations: k
  } = (0, l.ZP)([...B, i.Z.USER_PROFILE_MODAL]), Y = (0, c.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: S,
    guildId: G,
    channelId: N,
    messageId: T,
    roleId: C
  }), V = (0, I.Z)(n);
  return (0, r.jsx)(l.Gt, {
    value: k,
    children: (0, r.jsx)(c.Mt, {
      value: Y,
      openedAt: L,
      fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
      fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
      isLoaded: null == U ? void 0 : U.isLoaded,
      children: (0, r.jsx)(o.Y0X, {
        transitionState: R,
        className: A.root,
        hideShadow: !0,
        "aria-label": P.intl.string(P.t["3N/J2t"]),
        children: (0, r.jsxs)(m.Z, {
          user: n,
          displayProfile: U,
          themeType: _.lY.MODAL,
          children: [(0, r.jsx)(v.Z, {
            themeType: _.lY.MODAL,
            children: (0, r.jsx)(g.Z, {
              user: n,
              guildId: G,
              onCloseProfile: D
            })
          }), (0, r.jsxs)("header", {
            children: [(0, r.jsx)(f.Z, {
              user: n,
              displayProfile: U,
              themeType: _.lY.MODAL
            }), (0, r.jsxs)("div", {
              className: A.headerInner,
              children: [(0, r.jsx)(d.Z, {
                user: n,
                displayProfile: U,
                guildId: G,
                channelId: N,
                themeType: _.lY.MODAL
              }), (0, r.jsx)(y.Z, {
                location: "BotUserProfileModal",
                user: n,
                themeType: _.lY.MODAL,
                hasEntered: R === o.Dvm.ENTERED,
                onCloseProfile: D
              }), (0, r.jsxs)("div", {
                className: A.headerButtons,
                children: [(0, r.jsx)(x.c, {
                  userId: n.id,
                  onClose: D,
                  className: A.messageTextButton
                }), (0, r.jsx)(x.v, {
                  userId: n.id,
                  onClose: D,
                  tooltipContainerClassName: A.messageIconButton
                }), (0, r.jsx)(j.Z, {
                  user: n,
                  guildId: G
                }), (0, r.jsx)(h.Z, {
                  user: n
                })]
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: A.body,
            children: [(0, r.jsx)(b.Z, {
              className: A.username,
              user: n,
              themeType: _.lY.MODAL,
              nickname: s.ZP.getName(G, N, n),
              pronouns: null == U ? void 0 : U.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, r.jsx)(p.Z, {
                userId: n.id
              }),
              tags: (0, r.jsx)(u.Z, {
                displayProfile: U,
                themeType: _.lY.MODAL,
                onClose: D
              })
            }), (0, r.jsx)(O.Z, {
              user: n,
              currentUser: t,
              displayProfile: U,
              guildId: G,
              items: V,
              initialSection: null != w ? w : _.oh.BOT_INFO,
              initialSubsection: M,
              onClose: D
            })]
          })]
        })
      })
    })
  })
}