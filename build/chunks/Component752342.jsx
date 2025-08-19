/** Chunk was on 99799 **/
/** chunk id: 752342, original params: e,t,n (module,exports,require) **/
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
    user: t,
    currentUser: n,
    guildId: E,
    channelId: S,
    messageId: w,
    roleId: B,
    sessionId: L,
    initialSection: D,
    initialSubsection: M,
    transitionState: U,
    openedAt: R,
    onClose: k,
    sourceAnalyticsLocations: G = []
  } = e, V = E === T.ME ? true : E, F = (0, u.ZP)(t.id, V), Y = s.ZP.getName(V, S, t), W = (0, c.Dt)(), {
    analyticsLocations: z
  } = (0, a.ZP)([...G, l.Z.USER_PROFILE_MODAL]), H = (0, d.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: L,
    guildId: V,
    channelId: S,
    messageId: w,
    roleId: B
  }), K = (0, Z.Z)(t);
  return (0, r.jsx)(a.Gt, {
    value: z,
    children: (0, r.jsx)(d.Mt, {
      value: H,
      openedAt: R,
      fetchStartedAt: null == F ? true : F.fetchStartedAt,
      fetchEndedAt: null == F ? true : F.fetchEndedAt,
      isLoaded: null == F ? true : F.isLoaded,
      children: (0, r.jsx)(o.Y0X, {
        "data-migration-pending": true,
        transitionState: U,
        className: N.root,
        hideShadow: true,
        "aria-labelledby": W,
        parentComponent: "BotUserProfileModal",
        children: (0, r.jsx)(o.y5t, {
          component: (0, r.jsx)(o.nn4, {
            children: (0, r.jsx)(o.H, {
              id: W,
              children: A.intl.format(A.t.KRe1Fh, {
                name: Y
              })
            })
          }),
          children: (0, r.jsxs)(g.Z, {
            user: t,
            displayProfile: F,
            themeType: C.l.MODAL,
            children: [(0, r.jsx)(v.Z, {
              children: (0, r.jsx)(_.Z, {
                user: t,
                guildId: V,
                onCloseProfile: k
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(m.Z, {
                user: t,
                displayProfile: F,
                themeType: C.l.MODAL
              }), (0, r.jsxs)("div", {
                className: N.headerInner,
                children: [(0, r.jsx)(f.Z, {
                  user: t,
                  displayProfile: F,
                  guildId: V,
                  channelId: S,
                  themeType: C.l.MODAL
                }), (0, r.jsx)(I.Z, {
                  location: "BotUserProfileModal",
                  user: t,
                  themeType: C.l.MODAL,
                  hasEntered: U === o.Dvm.ENTERED,
                  onCloseProfile: k,
                  disableToolbar: true
                }), (0, r.jsxs)("div", {
                  className: N.headerButtons,
                  children: [(0, r.jsx)(y.Z, {
                    type: "text",
                    userId: t.id,
                    onClose: i.Z.popAll,
                    className: N.messageTextButton
                  }), (0, r.jsx)(y.Z, {
                    type: "icon",
                    userId: t.id,
                    onClose: i.Z.popAll,
                    tooltipContainerClassName: N.messageIconButton
                  }), (0, r.jsx)(j.Z, {
                    user: t,
                    guildId: V
                  }), (0, r.jsx)(x.Z, {
                    user: t
                  })]
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: N.body,
              children: [(0, r.jsx)(h.Z, {
                className: N.username,
                user: t,
                nickname: Y,
                pronouns: null == F ? true : F.pronouns,
                nicknameVariant: "heading-xl/bold",
                nicknameIcons: (0, r.jsx)(b.Z, {
                  size: "sm",
                  userId: t.id
                }),
                tags: (0, r.jsx)(p.Z, {
                  displayProfile: F,
                  themeType: C.l.MODAL,
                  onClose: k
                })
              }), (0, r.jsx)(O.Z, {
                user: t,
                currentUser: n,
                displayProfile: F,
                guildId: V,
                items: K,
                initialSection: null != D ? D : P.oh.BOT_INFO,
                initialSubsection: M,
                onClose: k
              })]
            })]
          })
        })
      })
    })
  })
}