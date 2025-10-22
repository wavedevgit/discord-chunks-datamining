/** Chunk was on 93979 **/
/** chunk id: 752342, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk572691 = require("./572691.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk444141 = require("./444141.jsx"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk681837 = require("./681837.jsx"),
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
  Chunk526594 = require("./526594.js");

function S(e) {
  let {
    user: n,
    currentUser: t,
    guildId: S,
    channelId: w,
    messageId: D,
    roleId: R,
    sessionId: L,
    initialSection: M,
    initialSubsection: B,
    transitionState: U,
    openedAt: k,
    onClose: G,
    sourceAnalyticsLocations: V = [],
    showGuildProfile: F
  } = e, W = S === T.ME ? true : S, H = (0, u.ZP)(n.id, F ? W : true), z = c.ZP.getName(W, w, n), Y = (0, a.Dt)(), {
    analyticsLocations: K
  } = (0, s.ZP)([...V, r.Z.USER_PROFILE_MODAL]), J = (0, d.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: L,
    guildId: W,
    channelId: w,
    messageId: D,
    roleId: R
  }), q = (0, N.Z)(n), X = (0, m.Z)({
    user: n,
    guildId: W,
    channelId: w,
    displayProfile: H,
    onClose: G
  });
  return (0, l.jsx)(s.Gt, {
    value: K,
    children: (0, l.jsx)(d.Mt, {
      value: J,
      openedAt: k,
      fetchStartedAt: null == H ? true : H.fetchStartedAt,
      fetchEndedAt: null == H ? true : H.fetchEndedAt,
      isLoaded: null == H ? true : H.isLoaded,
      children: (0, l.jsx)(i.Y0X, {
        "data-migration-pending": true,
        transitionState: U,
        className: C.root,
        hideShadow: true,
        "aria-labelledby": Y,
        parentComponent: "BotUserProfileModal",
        children: (0, l.jsx)(i.y5t, {
          component: (0, l.jsx)(i.nn4, {
            children: (0, l.jsx)(i.H, {
              id: Y,
              children: E.intl.format(E.t.KRe1Fk, {
                name: z
              })
            })
          }),
          children: (0, l.jsxs)(v.Z, {
            user: n,
            displayProfile: H,
            themeType: P.l.MODAL,
            children: [(0, l.jsx)(y.Z, {
              children: (0, l.jsx)(b.Z, {
                user: n,
                guildId: W,
                viewProfileItem: X,
                onCloseProfile: G
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(x.Z, {
                user: n,
                displayProfile: H,
                themeType: P.l.MODAL
              }), (0, l.jsxs)("div", {
                className: C.headerInner,
                children: [(0, l.jsx)(p.Z, {
                  user: n,
                  displayProfile: H,
                  guildId: W,
                  channelId: w,
                  themeType: P.l.MODAL
                }), (0, l.jsx)(Z.Z, {
                  user: n,
                  themeType: P.l.MODAL,
                  hasEntered: U === i.Dvm.ENTERED,
                  onCloseProfile: G,
                  disableToolbar: true
                }), (0, l.jsxs)("div", {
                  className: C.headerButtons,
                  children: [(0, l.jsx)("div", {
                    className: C.messageTextButton,
                    children: (0, l.jsx)(_.H, {
                      variant: "secondary",
                      userId: n.id,
                      onClose: o.Z.popAll
                    })
                  }), (0, l.jsx)("div", {
                    className: C.messageIconButton,
                    children: (0, l.jsx)(_.v, {
                      variant: "secondary",
                      userId: n.id,
                      onClose: o.Z.popAll
                    })
                  }), (0, l.jsx)(I.Z, {
                    user: n,
                    guildId: W
                  }), (0, l.jsx)(g.Z, {
                    user: n
                  })]
                })]
              })]
            }), (0, l.jsxs)("div", {
              className: C.body,
              children: [(0, l.jsx)(j.Z, {
                className: C.username,
                user: n,
                guildId: W,
                nickname: z,
                pronouns: null == H ? true : H.pronouns,
                nicknameVariant: "heading-xl/bold",
                nicknameIcons: (0, l.jsx)(h.Z, {
                  size: "sm",
                  userId: n.id
                }),
                tags: (0, l.jsx)(f.Z, {
                  displayProfile: H,
                  themeType: P.l.MODAL,
                  onClose: G
                })
              }), (0, l.jsx)(O.Z, {
                user: n,
                currentUser: t,
                displayProfile: H,
                guildId: W,
                items: q,
                initialSection: null != M ? M : A.oh.BOT_INFO,
                initialSubsection: B,
                onClose: G
              })]
            })]
          })
        })
      })
    })
  })
}