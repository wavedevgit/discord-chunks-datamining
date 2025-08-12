/** Chunk was on 11776 **/
/** chunk id: 886794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk900927 = require("./900927.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk679332 = require("./679332.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405666 = require("./405666.js"),
  Chunk349966 = require("./349966.js"),
  Chunk923243 = require("./923243.js");

function S(e) {
  let {
    user: t,
    guildId: n,
    channelId: S,
    messageId: w,
    roleId: A,
    sessionId: C,
    transitionState: L,
    openedAt: D,
    onClose: R,
    sourceAnalyticsLocations: k = []
  } = e, M = n === P.ME ? true : n, G = (0, p.ZP)(t.id, M), B = u.ZP.getName(M, S, t), U = (0, s.Dt)(), {
    analyticsLocations: F
  } = (0, c.ZP)([...k, a.Z.USER_PROFILE_MODAL]), V = (0, f.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: C,
    guildId: M,
    channelId: S,
    messageId: w,
    roleId: A
  }), Y = l.useRef(null), H = (0, o.Z)(Y);
  return (0, r.jsx)(c.Gt, {
    value: F,
    children: (0, r.jsx)(f.Mt, {
      value: V,
      openedAt: D,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, r.jsxs)(i.Y0X, {
        "data-migration-pending": true,
        transitionState: L,
        className: Z.root,
        hideShadow: true,
        "aria-labelledby": U,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, r.jsx)(i.y5t, {
          component: (0, r.jsx)(i.nn4, {
            children: (0, r.jsx)(i.H, {
              id: U,
              children: E.intl.format(E.t.KRe1Fh, {
                name: B
              })
            })
          }),
          children: (0, r.jsxs)(h.Z, {
            user: t,
            displayProfile: G,
            themeType: I.lY.MODAL,
            ref: (null == G ? true : G.profileEffectId) != null ? Y : true,
            children: [(0, r.jsx)(_.Z, {
              children: (0, r.jsx)(v.Z, {
                user: t
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(b.Z, {
                user: t,
                displayProfile: G,
                themeType: I.lY.MODAL
              }), (0, r.jsx)("div", {
                className: Z.headerInner,
                children: (0, r.jsx)(m.Z, {
                  user: t,
                  displayProfile: G,
                  guildId: M,
                  channelId: S,
                  themeType: I.lY.MODAL
                })
              })]
            }), (0, r.jsxs)("div", {
              className: Z.body,
              children: [(0, r.jsx)(O.Z, {
                className: Z.username,
                user: t,
                nickname: B,
                pronouns: null == G ? true : G.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, r.jsx)(g.Z, {
                  displayProfile: G,
                  themeType: I.lY.MODAL,
                  onClose: R
                })
              }), (0, r.jsxs)("div", {
                className: N.container,
                children: [(0, r.jsx)(i.njP, {
                  className: N.tabBar,
                  type: "top",
                  selectedItem: I.oh.BOT_INFO,
                  onItemSelect: P.dG4,
                  children: (0, r.jsx)(i.njP.Item, {
                    className: N.tabBarItem,
                    id: I.oh.BOT_INFO,
                    "aria-label": E.intl.string(E.t.jGoPJS),
                    children: (0, r.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      children: E.intl.string(E.t.jGoPJS)
                    })
                  }, I.oh.BOT_INFO)
                }), (0, r.jsxs)(i.zJl, {
                  fade: true,
                  className: T.scroller,
                  children: [(0, r.jsx)(j.Z, {
                    userId: t.id,
                    userBio: null == G ? true : G.bio,
                    setLineClamp: false
                  }), (0, r.jsx)(x.Z, {
                    heading: E.intl.string(E.t["A//N4u"]),
                    children: (0, r.jsx)(y.Z, {
                      userId: t.id,
                      guildId: M,
                      tooltipDelay: I.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == G ? true : G.profileEffectId) != null && (0, r.jsx)(d.Z, {
          profileEffectId: null == G ? true : G.profileEffectId,
          isHovering: H
        })]
      })
    })
  })
}