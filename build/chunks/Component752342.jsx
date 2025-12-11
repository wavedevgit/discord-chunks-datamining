/** Chunk was on 93979 **/
/** chunk id: 752342, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  } = e, W = S === P.ME ? true : S, H = (0, u.ZP)(n.id, F ? W : true), z = s.ZP.getName(W, w, n), Y = (0, c.Dt)(), {
    analyticsLocations: K
  } = (0, a.ZP)([...V, r.Z.USER_PROFILE_MODAL]), J = (0, d.ZB)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: L,
    guildId: W,
    channelId: w,
    messageId: D,
    roleId: R
  }), q = (0, T.Z)(n), X = (0, f.Z)({
    user: n,
    guildId: W,
    channelId: w,
    displayProfile: H,
    onClose: G
  });
  return (0, l.jsx)(a.Gt, {
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
              children: _.intl.format(_.t.KRe1Fk, {
                name: z
              })
            })
          }),
          children: (0, l.jsxs)(b.Z, {
            user: n,
            displayProfile: H,
            themeType: E.l.MODAL,
            children: [(0, l.jsx)(y.Z, {
              children: (0, l.jsx)(g.Z, {
                user: n,
                guildId: W,
                viewProfileItem: X
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(x.Z, {
                user: n,
                displayProfile: H,
                themeType: E.l.MODAL
              }), (0, l.jsxs)("div", {
                className: C.headerInner,
                children: [(0, l.jsx)(m.Z, {
                  user: n,
                  displayProfile: H,
                  guildId: W,
                  channelId: w,
                  themeType: E.l.MODAL
                }), (0, l.jsx)(O.Z, {
                  user: n,
                  themeType: E.l.MODAL,
                  hasEntered: U === i.Dvm.ENTERED,
                  onCloseProfile: G,
                  disableToolbar: true
                }), (0, l.jsxs)("div", {
                  className: C.headerButtons,
                  children: [(0, l.jsx)("div", {
                    className: C.messageTextButton,
                    children: (0, l.jsx)(Z.H, {
                      variant: "secondary",
                      userId: n.id,
                      onClose: o.Z.popAll
                    })
                  }), (0, l.jsx)("div", {
                    className: C.messageIconButton,
                    children: (0, l.jsx)(Z.v, {
                      variant: "secondary",
                      userId: n.id,
                      onClose: o.Z.popAll
                    })
                  }), (0, l.jsx)(I.Z, {
                    user: n,
                    guildId: W
                  }), (0, l.jsx)(j.Z, {
                    user: n
                  })]
                })]
              })]
            }), (0, l.jsx)(h.Z, {
              userId: n.id,
              className: C.fetchError
            }), (0, l.jsxs)("div", {
              className: C.body,
              children: [(0, l.jsx)(v.Z, {
                className: C.username,
                user: n,
                guildId: W,
                nickname: z,
                pronouns: null == H ? true : H.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, l.jsx)(p.Z, {
                  displayProfile: H,
                  themeType: E.l.MODAL,
                  onClose: G
                })
              }), (0, l.jsx)(N.Z, {
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