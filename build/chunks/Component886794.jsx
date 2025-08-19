/** Chunk was on 99799 **/
/** chunk id: 886794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function E(e) {
  let {
    user: t,
    guildId: n,
    channelId: E,
    messageId: S,
    roleId: w,
    sessionId: B,
    transitionState: L,
    openedAt: D,
    onClose: M,
    sourceAnalyticsLocations: U = []
  } = e, R = n === Z.ME ? true : n, k = (0, p.ZP)(t.id, R), G = u.ZP.getName(R, E, t), V = (0, s.Dt)(), {
    analyticsLocations: F
  } = (0, c.ZP)([...U, a.Z.USER_PROFILE_MODAL]), Y = (0, f.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: B,
    guildId: R,
    channelId: E,
    messageId: S,
    roleId: w
  }), W = o.useRef(null), z = (0, l.Z)(W);
  return (0, r.jsx)(c.Gt, {
    value: F,
    children: (0, r.jsx)(f.Mt, {
      value: Y,
      openedAt: D,
      fetchStartedAt: null == k ? true : k.fetchStartedAt,
      fetchEndedAt: null == k ? true : k.fetchEndedAt,
      isLoaded: null == k ? true : k.isLoaded,
      children: (0, r.jsxs)(i.Y0X, {
        "data-migration-pending": true,
        transitionState: L,
        className: C.root,
        hideShadow: true,
        "aria-labelledby": V,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, r.jsx)(i.y5t, {
          component: (0, r.jsx)(i.nn4, {
            children: (0, r.jsx)(i.H, {
              id: V,
              children: T.intl.format(T.t.KRe1Fh, {
                name: G
              })
            })
          }),
          children: (0, r.jsxs)(j.Z, {
            user: t,
            displayProfile: k,
            themeType: P.l.MODAL,
            ref: (null == k ? true : k.profileEffectId) != null ? W : true,
            children: [(0, r.jsx)(I.Z, {
              children: (0, r.jsx)(y.Z, {
                user: t
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(g.Z, {
                user: t,
                displayProfile: k,
                themeType: P.l.MODAL
              }), (0, r.jsx)("div", {
                className: C.headerInner,
                children: (0, r.jsx)(m.Z, {
                  user: t,
                  displayProfile: k,
                  guildId: R,
                  channelId: E,
                  themeType: P.l.MODAL
                })
              })]
            }), (0, r.jsxs)("div", {
              className: C.body,
              children: [(0, r.jsx)(v.Z, {
                className: C.username,
                user: t,
                nickname: G,
                pronouns: null == k ? true : k.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, r.jsx)(b.Z, {
                  displayProfile: k,
                  themeType: P.l.MODAL,
                  onClose: M
                })
              }), (0, r.jsxs)("div", {
                className: N.container,
                children: [(0, r.jsx)(i.njP, {
                  className: N.tabBar,
                  type: "top",
                  selectedItem: O.oh.BOT_INFO,
                  onItemSelect: Z.dG4,
                  children: (0, r.jsx)(i.njP.Item, {
                    className: N.tabBarItem,
                    id: O.oh.BOT_INFO,
                    "aria-label": T.intl.string(T.t.jGoPJS),
                    children: (0, r.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      children: T.intl.string(T.t.jGoPJS)
                    })
                  }, O.oh.BOT_INFO)
                }), (0, r.jsxs)(i.zJl, {
                  fade: true,
                  className: A.scroller,
                  children: [(0, r.jsx)(h.Z, {
                    userId: t.id,
                    userBio: null == k ? true : k.bio,
                    setLineClamp: false
                  }), (0, r.jsx)(_.Z, {
                    heading: T.intl.string(T.t["A//N4u"]),
                    children: (0, r.jsx)(x.Z, {
                      userId: t.id,
                      guildId: R,
                      tooltipDelay: O.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == k ? true : k.profileEffectId) != null && (0, r.jsx)(d.Z, {
          profileEffectId: null == k ? true : k.profileEffectId,
          isHovering: z
        })]
      })
    })
  })
}