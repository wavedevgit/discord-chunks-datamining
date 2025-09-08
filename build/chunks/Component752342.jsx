/** Chunk was on 72164 **/
/** chunk id: 752342, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function E(e) {
  let {
    user: n,
    currentUser: t,
    guildId: E,
    channelId: S,
    messageId: w,
    roleId: D,
    sessionId: B,
    initialSection: L,
    initialSubsection: R,
    transitionState: M,
    openedAt: U,
    onClose: k,
    sourceAnalyticsLocations: V = []
  } = e, F = E === T.ME ? true : E, G = (0, u.ZP)(n.id, F), z = s.ZP.getName(F, S, n), H = (0, a.Dt)(), {
    analyticsLocations: K
  } = (0, c.ZP)([...V, i.Z.USER_PROFILE_MODAL]), W = (0, d.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: B,
    guildId: F,
    channelId: S,
    messageId: w,
    roleId: D
  }), Y = (0, Z.Z)(n);
  return (0, o.jsx)(c.Gt, {
    value: K,
    children: (0, o.jsx)(d.Mt, {
      value: W,
      openedAt: U,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, o.jsx)(r.Y0X, {
        "data-migration-pending": true,
        transitionState: M,
        className: C.root,
        hideShadow: true,
        "aria-labelledby": H,
        parentComponent: "BotUserProfileModal",
        children: (0, o.jsx)(r.y5t, {
          component: (0, o.jsx)(r.nn4, {
            children: (0, o.jsx)(r.H, {
              id: H,
              children: A.intl.format(A.t.KRe1Fh, {
                name: z
              })
            })
          }),
          children: (0, o.jsxs)(b.Z, {
            user: n,
            displayProfile: G,
            themeType: N.l.MODAL,
            children: [(0, o.jsx)(y.Z, {
              children: (0, o.jsx)(j.Z, {
                user: n,
                guildId: F,
                onCloseProfile: k
              })
            }), (0, o.jsxs)("div", {
              children: [(0, o.jsx)(m.Z, {
                user: n,
                displayProfile: G,
                themeType: N.l.MODAL
              }), (0, o.jsxs)("div", {
                className: C.headerInner,
                children: [(0, o.jsx)(f.Z, {
                  user: n,
                  displayProfile: G,
                  guildId: F,
                  channelId: S,
                  themeType: N.l.MODAL
                }), (0, o.jsx)(I.Z, {
                  user: n,
                  themeType: N.l.MODAL,
                  hasEntered: M === r.Dvm.ENTERED,
                  onCloseProfile: k,
                  disableToolbar: true
                }), (0, o.jsxs)("div", {
                  className: C.headerButtons,
                  children: [(0, o.jsx)(_.Z, {
                    type: "text",
                    userId: n.id,
                    onClose: l.Z.popAll,
                    className: C.messageTextButton
                  }), (0, o.jsx)(_.Z, {
                    type: "icon",
                    userId: n.id,
                    onClose: l.Z.popAll,
                    tooltipContainerClassName: C.messageIconButton
                  }), (0, o.jsx)(v.Z, {
                    user: n,
                    guildId: F
                  }), (0, o.jsx)(g.Z, {
                    user: n
                  })]
                })]
              })]
            }), (0, o.jsxs)("div", {
              className: C.body,
              children: [(0, o.jsx)(h.Z, {
                className: C.username,
                user: n,
                nickname: z,
                pronouns: null == G ? true : G.pronouns,
                nicknameVariant: "heading-xl/bold",
                nicknameIcons: (0, o.jsx)(x.Z, {
                  size: "sm",
                  userId: n.id
                }),
                tags: (0, o.jsx)(p.Z, {
                  displayProfile: G,
                  themeType: N.l.MODAL,
                  onClose: k
                })
              }), (0, o.jsx)(O.Z, {
                user: n,
                currentUser: t,
                displayProfile: G,
                guildId: F,
                items: Y,
                initialSection: null != L ? L : P.oh.BOT_INFO,
                initialSubsection: R,
                onClose: k
              })]
            })]
          })
        })
      })
    })
  })
}