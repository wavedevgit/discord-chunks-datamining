/** Chunk was on 11776 **/
/** chunk id: 752342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk388032 = require("./388032.jsx"),
  Chunk405666 = require("./405666.js");

function S(e) {
  let {
    user: t,
    currentUser: n,
    guildId: S,
    channelId: A,
    messageId: w,
    roleId: C,
    sessionId: L,
    initialSection: R,
    initialSubsection: D,
    transitionState: M,
    openedAt: k,
    onClose: G,
    sourceAnalyticsLocations: B = []
  } = e, U = S === Z.ME ? true : S, F = (0, u.ZP)(t.id, U), V = s.ZP.getName(U, A, t), Y = (0, c.Dt)(), {
    analyticsLocations: H
  } = (0, a.ZP)([...B, o.Z.USER_PROFILE_MODAL]), W = (0, d.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: L,
    guildId: U,
    channelId: A,
    messageId: w,
    roleId: C
  }), K = (0, P.Z)(t);
  return (0, r.jsx)(a.Gt, {
    value: H,
    children: (0, r.jsx)(d.Mt, {
      value: W,
      openedAt: k,
      fetchStartedAt: null == F ? true : F.fetchStartedAt,
      fetchEndedAt: null == F ? true : F.fetchEndedAt,
      isLoaded: null == F ? true : F.isLoaded,
      children: (0, r.jsx)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: M,
        className: N.root,
        hideShadow: true,
        "aria-labelledby": Y,
        parentComponent: "BotUserProfileModal",
        children: (0, r.jsx)(l.y5t, {
          component: (0, r.jsx)(l.nn4, {
            children: (0, r.jsx)(l.H, {
              id: Y,
              children: T.intl.format(T.t.KRe1Fh, {
                name: V
              })
            })
          }),
          children: (0, r.jsxs)(b.Z, {
            user: t,
            displayProfile: F,
            themeType: E.lY.MODAL,
            children: [(0, r.jsx)(v.Z, {
              children: (0, r.jsx)(h.Z, {
                user: t,
                guildId: U,
                onCloseProfile: G
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(m.Z, {
                user: t,
                displayProfile: F,
                themeType: E.lY.MODAL
              }), (0, r.jsxs)("div", {
                className: N.headerInner,
                children: [(0, r.jsx)(f.Z, {
                  user: t,
                  displayProfile: F,
                  guildId: U,
                  channelId: A,
                  themeType: E.lY.MODAL
                }), (0, r.jsx)(_.Z, {
                  location: "BotUserProfileModal",
                  user: t,
                  themeType: E.lY.MODAL,
                  hasEntered: M === l.Dvm.ENTERED,
                  onCloseProfile: G,
                  disableToolbar: true
                }), (0, r.jsxs)("div", {
                  className: N.headerButtons,
                  children: [(0, r.jsx)(O.Z, {
                    type: "text",
                    userId: t.id,
                    onClose: i.Z.popAll,
                    className: N.messageTextButton
                  }), (0, r.jsx)(O.Z, {
                    type: "icon",
                    userId: t.id,
                    onClose: i.Z.popAll,
                    tooltipContainerClassName: N.messageIconButton
                  }), (0, r.jsx)(y.Z, {
                    user: t,
                    guildId: U
                  }), (0, r.jsx)(x.Z, {
                    user: t
                  })]
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: N.body,
              children: [(0, r.jsx)(j.Z, {
                className: N.username,
                user: t,
                nickname: V,
                pronouns: null == F ? true : F.pronouns,
                nicknameVariant: "heading-xl/bold",
                nicknameIcons: (0, r.jsx)(g.Z, {
                  size: "sm",
                  userId: t.id
                }),
                tags: (0, r.jsx)(p.Z, {
                  displayProfile: F,
                  themeType: E.lY.MODAL,
                  onClose: G
                })
              }), (0, r.jsx)(I.Z, {
                user: t,
                currentUser: n,
                displayProfile: F,
                guildId: U,
                items: K,
                initialSection: null != R ? R : E.oh.BOT_INFO,
                initialSubsection: D,
                onClose: G
              })]
            })]
          })
        })
      })
    })
  })
}