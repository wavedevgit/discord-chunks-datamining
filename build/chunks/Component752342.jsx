/** Chunk was on 12756 **/
/** chunk id: 752342, original params: e,t,n (module,exports,require) **/
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

function S(e) {
  let {
    user: t,
    currentUser: n,
    guildId: S,
    channelId: A,
    messageId: C,
    roleId: D,
    sessionId: L,
    initialSection: R,
    initialSubsection: G,
    transitionState: k,
    openedAt: B,
    onClose: M,
    sourceAnalyticsLocations: U = []
  } = e, F = S === T.ME ? true : S, V = (0, u.ZP)(t.id, F), W = s.ZP.getName(F, A, t), Y = (0, c.Dt)(), {
    analyticsLocations: z
  } = (0, a.ZP)([...U, o.Z.USER_PROFILE_MODAL]), K = (0, d.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: L,
    guildId: F,
    channelId: A,
    messageId: C,
    roleId: D
  }), H = (0, P.Z)(t);
  return (0, r.jsx)(a.Gt, {
    value: z,
    children: (0, r.jsx)(d.Mt, {
      value: K,
      openedAt: B,
      fetchStartedAt: null == V ? true : V.fetchStartedAt,
      fetchEndedAt: null == V ? true : V.fetchEndedAt,
      isLoaded: null == V ? true : V.isLoaded,
      children: (0, r.jsx)(i.Y0X, {
        "data-migration-pending": true,
        transitionState: k,
        className: w.root,
        hideShadow: true,
        "aria-labelledby": Y,
        parentComponent: "BotUserProfileModal",
        children: (0, r.jsx)(i.y5t, {
          component: (0, r.jsx)(i.nn4, {
            children: (0, r.jsx)(i.H, {
              id: Y,
              children: N.intl.format(N.t.KRe1Fh, {
                name: W
              })
            })
          }),
          children: (0, r.jsxs)(b.Z, {
            user: t,
            displayProfile: V,
            themeType: Z.l.MODAL,
            children: [(0, r.jsx)(x.Z, {
              children: (0, r.jsx)(O.Z, {
                user: t,
                guildId: F,
                onCloseProfile: M
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(m.Z, {
                user: t,
                displayProfile: V,
                themeType: Z.l.MODAL
              }), (0, r.jsxs)("div", {
                className: w.headerInner,
                children: [(0, r.jsx)(f.Z, {
                  user: t,
                  displayProfile: V,
                  guildId: F,
                  channelId: A,
                  themeType: Z.l.MODAL
                }), (0, r.jsx)(_.Z, {
                  location: "BotUserProfileModal",
                  user: t,
                  themeType: Z.l.MODAL,
                  hasEntered: k === i.Dvm.ENTERED,
                  onCloseProfile: M,
                  disableToolbar: true
                }), (0, r.jsxs)("div", {
                  className: w.headerButtons,
                  children: [(0, r.jsx)(v.Z, {
                    type: "text",
                    userId: t.id,
                    onClose: l.Z.popAll,
                    className: w.messageTextButton
                  }), (0, r.jsx)(v.Z, {
                    type: "icon",
                    userId: t.id,
                    onClose: l.Z.popAll,
                    tooltipContainerClassName: w.messageIconButton
                  }), (0, r.jsx)(h.Z, {
                    user: t,
                    guildId: F
                  }), (0, r.jsx)(y.Z, {
                    user: t
                  })]
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: w.body,
              children: [(0, r.jsx)(j.Z, {
                className: w.username,
                user: t,
                nickname: W,
                pronouns: null == V ? true : V.pronouns,
                nicknameVariant: "heading-xl/bold",
                nicknameIcons: (0, r.jsx)(g.Z, {
                  size: "sm",
                  userId: t.id
                }),
                tags: (0, r.jsx)(p.Z, {
                  displayProfile: V,
                  themeType: Z.l.MODAL,
                  onClose: M
                })
              }), (0, r.jsx)(I.Z, {
                user: t,
                currentUser: n,
                displayProfile: V,
                guildId: F,
                items: H,
                initialSection: null != R ? R : E.oh.BOT_INFO,
                initialSubsection: G,
                onClose: M
              })]
            })]
          })
        })
      })
    })
  })
}