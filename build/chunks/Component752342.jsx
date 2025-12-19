/** Chunk was on 93979 **/
/** chunk id: 752342, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk572691 = require("./572691.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk444141 = require("./444141.jsx"),
  Chunk104287 = require("./104287.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk407699 = require("./407699.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk871604 = require("./871604.jsx"),
  Chunk952124 = require("./952124.jsx"),
  Chunk53558 = require("./53558.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk30556 = require("./30556.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk740628 = require("./740628.jsx"),
  Chunk398145 = require("./398145.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk968847 = require("./968847.js");

function w(e) {
  let {
    user: n,
    currentUser: t,
    guildId: w,
    channelId: D,
    messageId: L,
    roleId: R,
    sessionId: M,
    initialTabSection: B,
    initialScrollTarget: U,
    transitionState: k,
    openedAt: G,
    onClose: F,
    sourceAnalyticsLocations: V = [],
    showGuildProfile: W
  } = e, z = w === E.ME ? true : w, H = (0, u.ZP)(n.id, W ? z : true), Y = s.ZP.getName(z, D, n), K = (0, c.Dt)(), {
    analyticsLocations: J
  } = (0, a.ZP)([...V, r.Z.USER_PROFILE_MODAL]), q = (0, d.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: M,
    guildId: z,
    channelId: D,
    messageId: L,
    roleId: R
  }), X = (0, A.Z)(n), Q = (0, f.Z)({
    user: n,
    guildId: z,
    channelId: D,
    displayProfile: H,
    onClose: F
  });
  return (0, l.jsx)(a.Gt, {
    value: J,
    children: (0, l.jsx)(d.Mt, {
      value: q,
      openedAt: G,
      fetchStartedAt: null == H ? true : H.fetchStartedAt,
      fetchEndedAt: null == H ? true : H.fetchEndedAt,
      isLoaded: null == H ? true : H.isLoaded,
      children: (0, l.jsx)(m.n, {
        value: U,
        children: (0, l.jsx)(i.Y0X, {
          "data-migration-pending": true,
          transitionState: k,
          className: S.root,
          hideShadow: true,
          "aria-labelledby": K,
          parentComponent: "BotUserProfileModal",
          children: (0, l.jsx)(i.y5t, {
            component: (0, l.jsx)(i.nn4, {
              children: (0, l.jsx)(i.H, {
                id: K,
                children: C.intl.format(C.t.KRe1Fk, {
                  name: Y
                })
              })
            }),
            children: (0, l.jsxs)(v.Z, {
              user: n,
              displayProfile: H,
              themeType: _.l.MODAL,
              children: [(0, l.jsx)(Z.Z, {
                children: (0, l.jsx)(I.Z, {
                  user: n,
                  guildId: z,
                  viewProfileItem: Q
                })
              }), (0, l.jsxs)("div", {
                children: [(0, l.jsx)(h.Z, {
                  user: n,
                  displayProfile: H,
                  themeType: _.l.MODAL
                }), (0, l.jsxs)("div", {
                  className: S.headerInner,
                  children: [(0, l.jsx)(p.Z, {
                    user: n,
                    displayProfile: H,
                    guildId: z,
                    channelId: D,
                    themeType: _.l.MODAL
                  }), (0, l.jsx)(T.Z, {
                    user: n,
                    themeType: _.l.MODAL,
                    hasEntered: k === i.Dvm.ENTERED,
                    onCloseProfile: F,
                    disableToolbar: true
                  }), (0, l.jsxs)("div", {
                    className: S.headerButtons,
                    children: [(0, l.jsx)("div", {
                      className: S.messageTextButton,
                      children: (0, l.jsx)(O.H, {
                        variant: "secondary",
                        userId: n.id,
                        onClose: o.Z.popAll
                      })
                    }), (0, l.jsx)("div", {
                      className: S.messageIconButton,
                      children: (0, l.jsx)(O.v, {
                        variant: "secondary",
                        userId: n.id,
                        onClose: o.Z.popAll
                      })
                    }), (0, l.jsx)(y.Z, {
                      user: n,
                      guildId: z
                    }), (0, l.jsx)(g.Z, {
                      user: n
                    })]
                  })]
                })]
              }), (0, l.jsx)(j.Z, {
                userId: n.id,
                className: S.fetchError
              }), (0, l.jsxs)("div", {
                className: S.body,
                children: [(0, l.jsx)(b.Z, {
                  className: S.username,
                  user: n,
                  guildId: z,
                  nickname: Y,
                  pronouns: null == H ? true : H.pronouns,
                  nicknameVariant: "heading-xl/bold",
                  tags: (0, l.jsx)(x.Z, {
                    displayProfile: H,
                    themeType: _.l.MODAL,
                    onClose: F
                  })
                }), (0, l.jsx)(N.Z, {
                  user: n,
                  currentUser: t,
                  displayProfile: H,
                  guildId: z,
                  items: X,
                  initialSection: null != B ? B : P.oh.BOT_INFO,
                  onClose: F
                })]
              })]
            })
          })
        })
      })
    })
  })
}