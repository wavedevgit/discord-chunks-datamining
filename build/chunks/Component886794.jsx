/** Chunk was on 12756 **/
/** chunk id: 886794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk673517 = require("./673517.js"),
  Chunk54966 = require("./54966.js"),
  Chunk602727 = require("./602727.js");

function S(e) {
  let {
    user: t,
    guildId: n,
    channelId: S,
    messageId: A,
    roleId: C,
    sessionId: D,
    transitionState: L,
    openedAt: R,
    onClose: G,
    sourceAnalyticsLocations: k = []
  } = e, B = n === P.ME ? true : n, M = (0, p.ZP)(t.id, B), U = u.ZP.getName(B, S, t), F = (0, s.Dt)(), {
    analyticsLocations: V
  } = (0, c.ZP)([...k, a.Z.USER_PROFILE_MODAL]), W = (0, f.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: D,
    guildId: B,
    channelId: S,
    messageId: A,
    roleId: C
  }), Y = i.useRef(null), z = (0, o.Z)(Y);
  return (0, r.jsx)(c.Gt, {
    value: V,
    children: (0, r.jsx)(f.Mt, {
      value: W,
      openedAt: R,
      fetchStartedAt: null == M ? true : M.fetchStartedAt,
      fetchEndedAt: null == M ? true : M.fetchEndedAt,
      isLoaded: null == M ? true : M.isLoaded,
      children: (0, r.jsxs)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: L,
        className: Z.root,
        hideShadow: true,
        "aria-labelledby": F,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, r.jsx)(l.y5t, {
          component: (0, r.jsx)(l.nn4, {
            children: (0, r.jsx)(l.H, {
              id: F,
              children: T.intl.format(T.t.KRe1Fh, {
                name: U
              })
            })
          }),
          children: (0, r.jsxs)(h.Z, {
            user: t,
            displayProfile: M,
            themeType: E.l.MODAL,
            ref: (null == M ? true : M.profileEffectId) != null ? Y : true,
            children: [(0, r.jsx)(_.Z, {
              children: (0, r.jsx)(v.Z, {
                user: t
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(b.Z, {
                user: t,
                displayProfile: M,
                themeType: E.l.MODAL
              }), (0, r.jsx)("div", {
                className: Z.headerInner,
                children: (0, r.jsx)(m.Z, {
                  user: t,
                  displayProfile: M,
                  guildId: B,
                  channelId: S,
                  themeType: E.l.MODAL
                })
              })]
            }), (0, r.jsxs)("div", {
              className: Z.body,
              children: [(0, r.jsx)(x.Z, {
                className: Z.username,
                user: t,
                nickname: U,
                pronouns: null == M ? true : M.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, r.jsx)(g.Z, {
                  displayProfile: M,
                  themeType: E.l.MODAL,
                  onClose: G
                })
              }), (0, r.jsxs)("div", {
                className: w.container,
                children: [(0, r.jsx)(l.njP, {
                  className: w.tabBar,
                  type: "top",
                  selectedItem: I.oh.BOT_INFO,
                  onItemSelect: P.dG4,
                  children: (0, r.jsx)(l.njP.Item, {
                    className: w.tabBarItem,
                    id: I.oh.BOT_INFO,
                    "aria-label": T.intl.string(T.t.jGoPJS),
                    children: (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: T.intl.string(T.t.jGoPJS)
                    })
                  }, I.oh.BOT_INFO)
                }), (0, r.jsxs)(l.zJl, {
                  fade: true,
                  className: N.scroller,
                  children: [(0, r.jsx)(j.Z, {
                    userId: t.id,
                    userBio: null == M ? true : M.bio,
                    setLineClamp: false
                  }), (0, r.jsx)(O.Z, {
                    heading: T.intl.string(T.t["A//N4u"]),
                    children: (0, r.jsx)(y.Z, {
                      userId: t.id,
                      guildId: B,
                      tooltipDelay: I.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == M ? true : M.profileEffectId) != null && (0, r.jsx)(d.Z, {
          profileEffectId: null == M ? true : M.profileEffectId,
          isHovering: z
        })]
      })
    })
  })
}