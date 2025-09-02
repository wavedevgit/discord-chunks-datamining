/** Chunk was on 31553 **/
/** chunk id: 752342, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk673517 = require("./673517.js");

function C(e) {
  let {
    user: n,
    currentUser: t,
    guildId: C,
    channelId: w,
    messageId: _,
    roleId: D,
    sessionId: R,
    initialSection: L,
    initialSubsection: M,
    transitionState: U,
    openedAt: k,
    onClose: B,
    sourceAnalyticsLocations: V = []
  } = e, F = C === T.ME ? true : C, G = (0, u.ZP)(n.id, F), z = c.ZP.getName(F, w, n), K = (0, a.Dt)(), {
    analyticsLocations: W
  } = (0, s.ZP)([...V, o.Z.USER_PROFILE_MODAL]), Y = (0, d.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: R,
    guildId: F,
    channelId: w,
    messageId: _,
    roleId: D
  }), H = (0, P.Z)(n);
  return (0, l.jsx)(s.Gt, {
    value: W,
    children: (0, l.jsx)(d.Mt, {
      value: Y,
      openedAt: k,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, l.jsx)(r.Y0X, {
        "data-migration-pending": true,
        transitionState: U,
        className: S.root,
        hideShadow: true,
        "aria-labelledby": K,
        parentComponent: "BotUserProfileModal",
        children: (0, l.jsx)(r.y5t, {
          component: (0, l.jsx)(r.nn4, {
            children: (0, l.jsx)(r.H, {
              id: K,
              children: A.intl.format(A.t.KRe1Fh, {
                name: z
              })
            })
          }),
          children: (0, l.jsxs)(j.Z, {
            user: n,
            displayProfile: G,
            themeType: E.l.MODAL,
            children: [(0, l.jsx)(y.Z, {
              children: (0, l.jsx)(g.Z, {
                user: n,
                guildId: F,
                onCloseProfile: B
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(f.Z, {
                user: n,
                displayProfile: G,
                themeType: E.l.MODAL
              }), (0, l.jsxs)("div", {
                className: S.headerInner,
                children: [(0, l.jsx)(m.Z, {
                  user: n,
                  displayProfile: G,
                  guildId: F,
                  channelId: w,
                  themeType: E.l.MODAL
                }), (0, l.jsx)(I.Z, {
                  user: n,
                  themeType: E.l.MODAL,
                  hasEntered: U === r.Dvm.ENTERED,
                  onCloseProfile: B,
                  disableToolbar: true
                }), (0, l.jsxs)("div", {
                  className: S.headerButtons,
                  children: [(0, l.jsx)(O.Z, {
                    type: "text",
                    userId: n.id,
                    onClose: i.Z.popAll,
                    className: S.messageTextButton
                  }), (0, l.jsx)(O.Z, {
                    type: "icon",
                    userId: n.id,
                    onClose: i.Z.popAll,
                    tooltipContainerClassName: S.messageIconButton
                  }), (0, l.jsx)(b.Z, {
                    user: n,
                    guildId: F
                  }), (0, l.jsx)(v.Z, {
                    user: n
                  })]
                })]
              })]
            }), (0, l.jsxs)("div", {
              className: S.body,
              children: [(0, l.jsx)(x.Z, {
                className: S.username,
                user: n,
                nickname: z,
                pronouns: null == G ? true : G.pronouns,
                nicknameVariant: "heading-xl/bold",
                nicknameIcons: (0, l.jsx)(h.Z, {
                  size: "sm",
                  userId: n.id
                }),
                tags: (0, l.jsx)(p.Z, {
                  displayProfile: G,
                  themeType: E.l.MODAL,
                  onClose: B
                })
              }), (0, l.jsx)(Z.Z, {
                user: n,
                currentUser: t,
                displayProfile: G,
                guildId: F,
                items: H,
                initialSection: null != L ? L : N.oh.BOT_INFO,
                initialSubsection: M,
                onClose: B
              })]
            })]
          })
        })
      })
    })
  })
}