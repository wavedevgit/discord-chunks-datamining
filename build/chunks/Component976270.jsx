/** Chunk was on 63974 **/
/** chunk id: 976270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
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

function R(e) {
  let {
    user: t,
    currentUser: n,
    guildId: R,
    channelId: D,
    messageId: w,
    roleId: M,
    sessionId: G,
    initialTabSection: U,
    initialScrollTarget: k,
    transitionState: F,
    openedAt: V,
    onClose: B,
    sourceAnalyticsLocations: W = [],
    showGuildProfile: K
  } = e, z = R === T.ME ? true : R, H = (0, u.Ay)(t.id, K ? z : true), Y = d.Ay.getName(z, D, t), J = (0, a.GV)(), {
    analyticsLocations: X
  } = (0, o.Ay)([...W, s.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: G,
    guildId: z,
    channelId: D,
    messageId: w,
    roleId: M
  }), $ = (0, E.A)(t), Z = (0, p.A)({
    user: t,
    guildId: z,
    channelId: D,
    displayProfile: H,
    onClose: B
  });
  return (0, l.jsx)(o.f5, {
    value: X,
    children: (0, l.jsx)(c.of, {
      value: Q,
      openedAt: V,
      fetchStartedAt: null == H ? true : H.fetchStartedAt,
      fetchEndedAt: null == H ? true : H.fetchEndedAt,
      isLoaded: null == H ? true : H.isLoaded,
      children: (0, l.jsx)(f.N, {
        value: k,
        children: (0, l.jsx)(i.EOs, {
          "data-migration-pending": true,
          transitionState: F,
          className: L.zr,
          hideShadow: true,
          "aria-labelledby": J,
          parentComponent: "BotUserProfileModal",
          children: (0, l.jsx)(i.Fmo, {
            component: (0, l.jsx)(i.AC4, {
              children: (0, l.jsx)(i.H, {
                id: J,
                children: S.intl.format(S.t.KRe1Fk, {
                  name: Y
                })
              })
            }),
            children: (0, l.jsxs)(j.A, {
              user: t,
              displayProfile: H,
              themeType: C.d.MODAL,
              children: [(0, l.jsx)(y.A, {
                children: (0, l.jsx)(v.A, {
                  user: t,
                  guildId: z,
                  viewProfileItem: Z
                })
              }), (0, l.jsxs)("div", {
                children: [(0, l.jsx)(x.A, {
                  user: t,
                  displayProfile: H,
                  themeType: C.d.MODAL
                }), (0, l.jsxs)("div", {
                  className: L.El,
                  children: [(0, l.jsx)(m.A, {
                    user: t,
                    displayProfile: H,
                    guildId: z,
                    channelId: D,
                    themeType: C.d.MODAL
                  }), (0, l.jsx)(O.A, {
                    user: t,
                    themeType: C.d.MODAL,
                    hasEntered: F === i.ip4.ENTERED,
                    onCloseProfile: B,
                    disableToolbar: true
                  }), (0, l.jsxs)("div", {
                    className: L.Pz,
                    children: [(0, l.jsx)("div", {
                      className: L.jS,
                      children: (0, l.jsx)(_.e, {
                        variant: "secondary",
                        userId: t.id,
                        onClose: r.A.popAll
                      })
                    }), (0, l.jsx)("div", {
                      className: L.pg,
                      children: (0, l.jsx)(_.l, {
                        variant: "secondary",
                        userId: t.id,
                        onClose: r.A.popAll
                      })
                    }), (0, l.jsx)(I.A, {
                      user: t,
                      guildId: z
                    }), (0, l.jsx)(b.A, {
                      user: t
                    })]
                  })]
                })]
              }), (0, l.jsx)(g.A, {
                userId: t.id,
                className: L.Fd
              }), (0, l.jsxs)("div", {
                className: L.rf,
                children: [(0, l.jsx)(h.A, {
                  className: L.Xh,
                  user: t,
                  guildId: z,
                  nickname: Y,
                  pronouns: null == H ? true : H.pronouns,
                  nicknameVariant: "heading-xl/bold",
                  tags: (0, l.jsx)(A.A, {
                    displayProfile: H,
                    themeType: C.d.MODAL,
                    onClose: B
                  })
                }), (0, l.jsx)(N.A, {
                  user: t,
                  currentUser: n,
                  displayProfile: H,
                  guildId: z,
                  items: $,
                  initialSection: null != U ? U : P.RP.BOT_INFO,
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