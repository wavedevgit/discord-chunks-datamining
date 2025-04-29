/** Chunk was on 88235 **/
n.d(t, {
  Z: () => N
}), n(388685);
var r = n(200651);
n(192379);
var l = n(481060),
  i = n(100527),
  o = n(906732),
  s = n(5192),
  a = n(785717),
  c = n(687158),
  d = n(899007),
  u = n(648052),
  f = n(867176),
  p = n(681837),
  h = n(502762),
  j = n(530),
  g = n(871604),
  m = n(952124),
  v = n(53558),
  b = n(544989),
  O = n(30556),
  x = n(4517),
  Z = n(740628),
  y = n(398145),
  I = n(228168),
  P = n(981631),
  E = n(388032),
  T = n(405666);

function N(e) {
  let {
    user: t,
    currentUser: n,
    guildId: N,
    channelId: S,
    messageId: A,
    roleId: C,
    sessionId: _,
    initialSection: w,
    initialSubsection: R,
    transitionState: M,
    openedAt: L,
    onClose: D,
    sourceAnalyticsLocations: U = []
  } = e, G = N === P.ME ? void 0 : N, B = (0, c.ZP)(t.id, G), {
    analyticsLocations: k
  } = (0, o.ZP)([...U, i.Z.USER_PROFILE_MODAL]), Y = (0, a.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: _,
    guildId: G,
    channelId: S,
    messageId: A,
    roleId: C
  }), F = (0, y.Z)(t);
  return (0, r.jsx)(o.Gt, {
    value: k,
    children: (0, r.jsx)(a.Mt, {
      value: Y,
      openedAt: L,
      fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
      fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
      isLoaded: null == B ? void 0 : B.isLoaded,
      children: (0, r.jsx)(l.Y0X, {
        transitionState: M,
        className: T.root,
        hideShadow: !0,
        "aria-label": E.intl.string(E.t["3N/J2t"]),
        children: (0, r.jsxs)(h.Z, {
          user: t,
          displayProfile: B,
          themeType: I.lY.MODAL,
          children: [(0, r.jsx)(b.Z, {
            children: (0, r.jsx)(m.Z, {
              user: t,
              guildId: G,
              onCloseProfile: D
            })
          }), (0, r.jsxs)("header", {
            children: [(0, r.jsx)(f.Z, {
              user: t,
              displayProfile: B,
              themeType: I.lY.MODAL
            }), (0, r.jsxs)("div", {
              className: T.headerInner,
              children: [(0, r.jsx)(d.Z, {
                user: t,
                displayProfile: B,
                guildId: G,
                channelId: S,
                themeType: I.lY.MODAL
              }), (0, r.jsx)(x.Z, {
                location: "BotUserProfileModal",
                user: t,
                themeType: I.lY.MODAL,
                hasEntered: M === l.Dvm.ENTERED,
                onCloseProfile: D
              }), (0, r.jsxs)("div", {
                className: T.headerButtons,
                children: [(0, r.jsx)(O.Z, {
                  type: "text",
                  userId: t.id,
                  onClose: D,
                  className: T.messageTextButton
                }), (0, r.jsx)(O.Z, {
                  type: "icon",
                  userId: t.id,
                  onClose: D,
                  tooltipContainerClassName: T.messageIconButton
                }), (0, r.jsx)(v.Z, {
                  user: t,
                  guildId: G
                }), (0, r.jsx)(g.Z, {
                  user: t
                })]
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: T.body,
            children: [(0, r.jsx)(j.Z, {
              className: T.username,
              user: t,
              nickname: s.ZP.getName(G, S, t),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, r.jsx)(p.Z, {
                userId: t.id
              }),
              tags: (0, r.jsx)(u.Z, {
                displayProfile: B,
                themeType: I.lY.MODAL,
                onClose: D
              })
            }), (0, r.jsx)(Z.Z, {
              user: t,
              currentUser: n,
              displayProfile: B,
              guildId: G,
              items: F,
              initialSection: null != w ? w : I.oh.BOT_INFO,
              initialSubsection: R,
              onClose: D
            })]
          })]
        })
      })
    })
  })
}