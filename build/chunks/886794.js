/** Chunk was on 88235 **/
n.d(t, {
  Z: () => S
}), n(388685);
var r = n(200651),
  l = n(192379),
  i = n(481060),
  o = n(727637),
  s = n(100527),
  a = n(906732),
  c = n(680295),
  d = n(5192),
  u = n(785717),
  f = n(687158),
  p = n(899007),
  h = n(648052),
  j = n(867176),
  g = n(280885),
  m = n(900927),
  v = n(678738),
  b = n(502762),
  O = n(530),
  x = n(679332),
  Z = n(544989),
  y = n(228168),
  I = n(981631),
  P = n(388032),
  E = n(405666),
  T = n(349966),
  N = n(923243);

function S(e) {
  let {
    user: t,
    guildId: n,
    channelId: S,
    messageId: A,
    roleId: C,
    sessionId: _,
    transitionState: w,
    openedAt: R,
    onClose: M,
    sourceAnalyticsLocations: L = []
  } = e, D = n === I.ME ? void 0 : n, U = (0, f.ZP)(t.id, D), {
    analyticsLocations: G
  } = (0, a.ZP)([...L, s.Z.USER_PROFILE_MODAL]), B = (0, u.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: _,
    guildId: D,
    channelId: S,
    messageId: A,
    roleId: C
  }), k = l.createRef(), Y = (0, o.Z)(k);
  return (0, r.jsx)(a.Gt, {
    value: G,
    children: (0, r.jsx)(u.Mt, {
      value: B,
      openedAt: R,
      fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
      fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
      isLoaded: null == U ? void 0 : U.isLoaded,
      children: (0, r.jsxs)(i.Y0X, {
        transitionState: w,
        className: E.root,
        hideShadow: !0,
        "aria-label": P.intl.string(P.t["3N/J2t"]),
        children: [(0, r.jsxs)(b.Z, {
          user: t,
          displayProfile: U,
          themeType: y.lY.MODAL,
          ref: k,
          children: [(0, r.jsx)(Z.Z, {
            children: (0, r.jsx)(x.Z, {
              user: t
            })
          }), (0, r.jsxs)("header", {
            children: [(0, r.jsx)(j.Z, {
              user: t,
              displayProfile: U,
              themeType: y.lY.MODAL
            }), (0, r.jsx)("div", {
              className: E.headerInner,
              children: (0, r.jsx)(p.Z, {
                user: t,
                displayProfile: U,
                guildId: D,
                channelId: S,
                themeType: y.lY.MODAL
              })
            })]
          }), (0, r.jsxs)("div", {
            className: E.body,
            children: [(0, r.jsx)(O.Z, {
              className: E.username,
              user: t,
              nickname: d.ZP.getName(D, S, t),
              pronouns: null == U ? void 0 : U.pronouns,
              nicknameVariant: "heading-xl/bold",
              tags: (0, r.jsx)(h.Z, {
                displayProfile: U,
                themeType: y.lY.MODAL,
                onClose: M
              })
            }), (0, r.jsxs)("div", {
              className: N.container,
              children: [(0, r.jsx)(i.njP, {
                className: N.tabBar,
                type: "top",
                selectedItem: y.oh.BOT_INFO,
                onItemSelect: I.dG4,
                children: (0, r.jsx)(i.njP.Item, {
                  className: N.tabBarItem,
                  id: y.oh.BOT_INFO,
                  "aria-label": P.intl.string(P.t.jGoPJS),
                  children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: P.intl.string(P.t.jGoPJS)
                  })
                }, y.oh.BOT_INFO)
              }), (0, r.jsxs)(i.zJl, {
                fade: !0,
                className: T.scroller,
                children: [(0, r.jsx)(g.Z, {
                  userId: t.id,
                  userBio: null == U ? void 0 : U.bio,
                  setLineClamp: !1
                }), (0, r.jsx)(v.Z, {
                  heading: P.intl.string(P.t["A//N4u"]),
                  children: (0, r.jsx)(m.Z, {
                    userId: t.id,
                    guildId: D,
                    tooltipDelay: y.vB
                  })
                })]
              })]
            })]
          })]
        }), (null == U ? void 0 : U.profileEffectId) != null && (0, r.jsx)(c.Z, {
          profileEffectId: null == U ? void 0 : U.profileEffectId,
          isHovering: Y
        })]
      })
    })
  })
}