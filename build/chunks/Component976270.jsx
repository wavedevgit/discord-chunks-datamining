/** Chunk was on 64228 **/
/** chunk id: 976270, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk630054 = require("./630054.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk722868 = require("./722868.jsx"),
  Chunk716804 = require("./716804.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk559506 = require("./559506.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk570314 = require("./570314.jsx"),
  Chunk490752 = require("./490752.jsx"),
  Chunk571077 = require("./571077.jsx"),
  Chunk587168 = require("./587168.jsx"),
  Chunk982985 = require("./982985.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk240783 = require("./240783.jsx"),
  Chunk371843 = require("./371843.js"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk763563 = require("./763563.js");

function D(e) {
  let {
    user: l,
    currentUser: t,
    guildId: D,
    channelId: R,
    messageId: w,
    roleId: G,
    sessionId: M,
    initialTabSection: U,
    initialScrollTarget: k,
    transitionState: F,
    openedAt: V,
    onClose: B,
    sourceAnalyticsLocations: W = [],
    showGuildProfile: K
  } = e, z = D === P.ME ? true : D, H = (0, u.Ay)(l.id, K ? z : true), Y = d.Ay.getName(z, R, l), J = (0, o.GV)(), {
    analyticsLocations: X
  } = (0, a.Ay)([...W, s.A.USER_PROFILE_MODAL]), Z = (0, c.pb)({
    layout: "MODAL",
    userId: l.id,
    sourceSessionId: M,
    guildId: z,
    channelId: R,
    messageId: w,
    roleId: G
  }), Q = (0, _.A)(l), $ = (0, f.A)({
    user: l,
    guildId: z,
    channelId: R,
    displayProfile: H,
    onClose: B
  });
  return (0, n.jsx)(a.f5, {
    value: X,
    children: (0, n.jsx)(c.of, {
      value: Z,
      openedAt: V,
      fetchStartedAt: null == H ? true : H.fetchStartedAt,
      fetchEndedAt: null == H ? true : H.fetchEndedAt,
      isLoaded: null == H ? true : H.isLoaded,
      children: (0, n.jsx)(p.N, {
        value: k,
        children: (0, n.jsx)(i.EOs, {
          "data-migration-pending": true,
          transitionState: F,
          className: L.zr,
          hideShadow: true,
          "aria-labelledby": J,
          parentComponent: "BotUserProfileModal",
          children: (0, n.jsx)(i.Fmo, {
            component: (0, n.jsx)(i.AC4, {
              children: (0, n.jsx)(i.H, {
                id: J,
                children: C.intl.format(C.t.KRe1Fk, {
                  name: Y
                })
              })
            }),
            children: (0, n.jsxs)(h.A, {
              user: l,
              displayProfile: H,
              themeType: S.d.MODAL,
              children: [(0, n.jsx)(y.A, {
                children: (0, n.jsx)(b.A, {
                  user: l,
                  guildId: z,
                  viewProfileItem: $
                })
              }), (0, n.jsxs)("div", {
                children: [(0, n.jsx)(A.A, {
                  user: l,
                  displayProfile: H,
                  themeType: S.d.MODAL
                }), (0, n.jsxs)("div", {
                  className: L.El,
                  children: [(0, n.jsx)(m.A, {
                    user: l,
                    displayProfile: H,
                    guildId: z,
                    channelId: R,
                    themeType: S.d.MODAL
                  }), (0, n.jsx)(N.A, {
                    user: l,
                    themeType: S.d.MODAL,
                    hasEntered: F === i.ip4.ENTERED,
                    onCloseProfile: B,
                    disableToolbar: true
                  }), (0, n.jsxs)("div", {
                    className: L.Pz,
                    children: [(0, n.jsx)("div", {
                      className: L.jS,
                      children: (0, n.jsx)(O.e, {
                        variant: "secondary",
                        userId: l.id,
                        onClose: r.A.popAll
                      })
                    }), (0, n.jsx)("div", {
                      className: L.pg,
                      children: (0, n.jsx)(O.l, {
                        variant: "secondary",
                        userId: l.id,
                        onClose: r.A.popAll
                      })
                    }), (0, n.jsx)(I.A, {
                      user: l,
                      guildId: z
                    }), (0, n.jsx)(v.A, {
                      user: l
                    })]
                  })]
                })]
              }), (0, n.jsx)(j.A, {
                userId: l.id,
                className: L.Fd
              }), (0, n.jsxs)("div", {
                className: L.rf,
                children: [(0, n.jsx)(g.A, {
                  className: L.Xh,
                  user: l,
                  guildId: z,
                  nickname: Y,
                  pronouns: null == H ? true : H.pronouns,
                  nicknameVariant: "heading-xl/bold",
                  tags: (0, n.jsx)(x.A, {
                    displayProfile: H,
                    themeType: S.d.MODAL,
                    onClose: B
                  })
                }), (0, n.jsx)(E.A, {
                  user: l,
                  currentUser: t,
                  displayProfile: H,
                  guildId: z,
                  items: Q,
                  initialSection: null != U ? U : T.RP.BOT_INFO,
                  onClose: B
                })]
              })]
            })
          })
        })
      })
    })
  })
}