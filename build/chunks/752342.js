/** Chunk was on 30514 **/
t.d(n, {
  Z: () => O
}), t(388685);
var i = t(200651);
t(192379);
var o = t(481060),
  l = t(100527),
  r = t(906732),
  s = t(5192),
  a = t(785717),
  c = t(687158),
  d = t(899007),
  u = t(648052),
  f = t(867176),
  p = t(681837),
  m = t(502762),
  h = t(530),
  I = t(871604),
  x = t(952124),
  _ = t(53558),
  b = t(544989),
  v = t(934861),
  g = t(4517),
  j = t(740628),
  Z = t(398145),
  y = t(228168),
  A = t(981631),
  N = t(388032),
  T = t(405666);

function O(e) {
  let {
    user: n,
    currentUser: t,
    guildId: O,
    channelId: E,
    messageId: P,
    roleId: C,
    sessionId: S,
    initialSection: M,
    initialSubsection: L,
    transitionState: w,
    openedAt: B,
    onClose: D,
    sourceAnalyticsLocations: U = []
  } = e, R = O === A.ME ? void 0 : O, G = (0, c.ZP)(n.id, R), {
    analyticsLocations: k
  } = (0, r.ZP)([...U, l.Z.USER_PROFILE_MODAL]), Y = (0, a.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: S,
    guildId: R,
    channelId: E,
    messageId: P,
    roleId: C
  }), V = (0, Z.Z)(n);
  return (0, i.jsx)(r.Gt, {
    value: k,
    children: (0, i.jsx)(a.Mt, {
      value: Y,
      openedAt: B,
      fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
      fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
      isLoaded: null == G ? void 0 : G.isLoaded,
      children: (0, i.jsx)(o.Y0X, {
        transitionState: w,
        className: T.root,
        hideShadow: !0,
        "aria-label": N.intl.string(N.t["3N/J2t"]),
        children: (0, i.jsxs)(m.Z, {
          user: n,
          displayProfile: G,
          themeType: y.lY.MODAL,
          children: [(0, i.jsx)(b.Z, {
            children: (0, i.jsx)(x.Z, {
              user: n,
              guildId: R,
              onCloseProfile: D
            })
          }), (0, i.jsxs)("header", {
            children: [(0, i.jsx)(f.Z, {
              user: n,
              displayProfile: G,
              themeType: y.lY.MODAL
            }), (0, i.jsxs)("div", {
              className: T.headerInner,
              children: [(0, i.jsx)(d.Z, {
                user: n,
                displayProfile: G,
                guildId: R,
                channelId: E,
                themeType: y.lY.MODAL
              }), (0, i.jsx)(g.Z, {
                location: "BotUserProfileModal",
                user: n,
                themeType: y.lY.MODAL,
                hasEntered: w === o.Dvm.ENTERED,
                onCloseProfile: D
              }), (0, i.jsxs)("div", {
                className: T.headerButtons,
                children: [(0, i.jsx)(v.c, {
                  userId: n.id,
                  onClose: D,
                  className: T.messageTextButton
                }), (0, i.jsx)(v.v, {
                  userId: n.id,
                  onClose: D,
                  tooltipContainerClassName: T.messageIconButton
                }), (0, i.jsx)(_.Z, {
                  user: n,
                  guildId: R
                }), (0, i.jsx)(I.Z, {
                  user: n
                })]
              })]
            })]
          }), (0, i.jsxs)("div", {
            className: T.body,
            children: [(0, i.jsx)(h.Z, {
              className: T.username,
              user: n,
              nickname: s.ZP.getName(R, E, n),
              pronouns: null == G ? void 0 : G.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, i.jsx)(p.Z, {
                userId: n.id
              }),
              tags: (0, i.jsx)(u.Z, {
                displayProfile: G,
                themeType: y.lY.MODAL,
                onClose: D
              })
            }), (0, i.jsx)(j.Z, {
              user: n,
              currentUser: t,
              displayProfile: G,
              guildId: R,
              items: V,
              initialSection: null != M ? M : y.oh.BOT_INFO,
              initialSubsection: L,
              onClose: D
            })]
          })]
        })
      })
    })
  })
}