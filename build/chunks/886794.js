/** Chunk was on 81818 **/
t.d(n, {
  Z: () => S
}), t(47120);
var r = t(200651),
  o = t(192379),
  i = t(481060),
  l = t(727637),
  s = t(100527),
  c = t(906732),
  a = t(680295),
  d = t(5192),
  u = t(785717),
  f = t(687158),
  p = t(899007),
  b = t(648052),
  m = t(867176),
  v = t(280885),
  g = t(900927),
  y = t(678738),
  I = t(502762),
  h = t(530),
  j = t(679332),
  x = t(544989),
  _ = t(228168),
  O = t(981631),
  Z = t(388032),
  N = t(835145),
  P = t(330724),
  E = t(363899);

function S(e) {
  let {
    user: n,
    guildId: t,
    channelId: S,
    messageId: T,
    roleId: C,
    sessionId: A,
    transitionState: w,
    onClose: L,
    sourceAnalyticsLocations: R = []
  } = e, M = t === O.ME ? void 0 : t, U = (0, f.ZP)(n.id, M), {
    analyticsLocations: B
  } = (0, c.ZP)([...R, s.Z.SIMPLIFIED_PROFILE_MODAL]), D = (0, u.ZB)({
    layout: "SIMPLIFIED_MODAL",
    userId: n.id,
    sourceSessionId: A,
    guildId: M,
    channelId: S,
    messageId: T,
    roleId: C
  }), W = o.createRef(), F = (0, l.Z)(W);
  return (0, r.jsx)(c.Gt, {
    value: B,
    children: (0, r.jsx)(u.Mt, {
      value: D,
      children: (0, r.jsxs)(i.Y0X, {
        transitionState: w,
        className: N.root,
        hideShadow: !0,
        "aria-label": Z.NW.string(Z.t["3N/J2t"]),
        children: [(0, r.jsxs)(I.Z, {
          user: n,
          displayProfile: U,
          profileType: _.y0.FULL_SIZE,
          ref: W,
          children: [(0, r.jsx)(x.Z, {
            profileType: _.y0.FULL_SIZE,
            children: (0, r.jsx)(j.Z, {
              user: n
            })
          }), (0, r.jsxs)("header", {
            children: [(0, r.jsx)(m.Z, {
              user: n,
              displayProfile: U,
              profileType: _.y0.FULL_SIZE
            }), (0, r.jsx)("div", {
              className: N.headerInner,
              children: (0, r.jsx)(p.Z, {
                user: n,
                displayProfile: U,
                guildId: M,
                channelId: S,
                profileType: _.y0.FULL_SIZE
              })
            })]
          }), (0, r.jsxs)("div", {
            className: N.body,
            children: [(0, r.jsx)(h.Z, {
              user: n,
              profileType: _.y0.FULL_SIZE,
              nickname: d.ZP.getName(M, S, n),
              pronouns: null == U ? void 0 : U.pronouns,
              nicknameVariant: "heading-xl/bold",
              tags: (0, r.jsx)(b.Z, {
                displayProfile: U,
                profileType: _.y0.FULL_SIZE,
                onClose: L
              })
            }), (0, r.jsx)(I.Z.Overlay, {
              className: N.overlay,
              children: (0, r.jsxs)("div", {
                className: E.container,
                children: [(0, r.jsx)(i.njP, {
                  className: E.tabBar,
                  type: "top",
                  selectedItem: _.oh.BOT_INFO,
                  onItemSelect: O.dG4,
                  children: (0, r.jsx)(i.njP.Item, {
                    className: E.tabBarItem,
                    id: _.oh.BOT_INFO,
                    "aria-label": Z.NW.string(Z.t.jGoPJS),
                    children: (0, r.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      children: Z.NW.string(Z.t.jGoPJS)
                    })
                  }, _.oh.BOT_INFO)
                }), (0, r.jsxs)(i.zJl, {
                  fade: !0,
                  className: P.scroller,
                  children: [(0, r.jsx)(v.Z, {
                    userId: n.id,
                    userBio: null == U ? void 0 : U.bio,
                    setLineClamp: !1
                  }), (0, r.jsx)(y.Z, {
                    heading: Z.NW.string(Z.t["A//N4u"]),
                    children: (0, r.jsx)(g.Z, {
                      userId: n.id,
                      guildId: M,
                      tooltipDelay: _.vB
                    })
                  })]
                })]
              })
            })]
          })]
        }), (null == U ? void 0 : U.profileEffectId) != null && (0, r.jsx)(a.Z, {
          profileEffectId: null == U ? void 0 : U.profileEffectId,
          isHovering: F
        })]
      })
    })
  })
}