/** Chunk was on 93979 **/
/** chunk id: 886794, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
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

function C(e) {
  var n;
  let {
    user: t,
    guildId: C,
    channelId: S,
    messageId: w,
    roleId: D,
    sessionId: L,
    transitionState: M,
    openedAt: R,
    onClose: B,
    sourceAnalyticsLocations: U = []
  } = e, k = C === _.ME ? true : C, G = (0, f.ZP)(t.id, k), F = u.ZP.getName(k, S, t), V = (0, a.Dt)(), {
    analyticsLocations: z
  } = (0, s.ZP)([...U, c.Z.USER_PROFILE_MODAL]), W = (0, m.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: L,
    guildId: k,
    channelId: S,
    messageId: w,
    roleId: D
  }), Y = o.useRef(null), K = (0, i.Z)(Y);
  return (0, l.jsx)(s.Gt, {
    value: z,
    children: (0, l.jsx)(m.Mt, {
      value: W,
      openedAt: R,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, l.jsxs)(r.Y0X, {
        "data-migration-pending": true,
        transitionState: M,
        className: T.root,
        hideShadow: true,
        "aria-labelledby": V,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, l.jsx)(r.y5t, {
          component: (0, l.jsx)(r.nn4, {
            children: (0, l.jsx)(r.H, {
              id: V,
              children: N.intl.format(N.t.KRe1Fh, {
                name: F
              })
            })
          }),
          children: (0, l.jsxs)(g.Z, {
            user: t,
            displayProfile: G,
            themeType: P.l.MODAL,
            ref: (null == G ? true : G.profileEffect) != null ? Y : true,
            children: [(0, l.jsx)(I.Z, {
              children: (0, l.jsx)(O.Z, {
                user: t
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(h.Z, {
                user: t,
                displayProfile: G,
                themeType: P.l.MODAL
              }), (0, l.jsx)("div", {
                className: T.headerInner,
                children: (0, l.jsx)(p.Z, {
                  user: t,
                  displayProfile: G,
                  guildId: k,
                  channelId: S,
                  themeType: P.l.MODAL
                })
              })]
            }), (0, l.jsxs)("div", {
              className: T.body,
              children: [(0, l.jsx)(y.Z, {
                className: T.username,
                user: t,
                nickname: F,
                pronouns: null == G ? true : G.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, l.jsx)(x.Z, {
                  displayProfile: G,
                  themeType: P.l.MODAL,
                  onClose: B
                })
              }), (0, l.jsxs)("div", {
                className: E.container,
                children: [(0, l.jsx)(r.njP, {
                  className: E.tabBar,
                  type: "top",
                  selectedItem: Z.oh.BOT_INFO,
                  onItemSelect: _.dG4,
                  children: (0, l.jsx)(r.njP.Item, {
                    className: E.tabBarItem,
                    id: Z.oh.BOT_INFO,
                    "aria-label": N.intl.string(N.t.jGoPJS),
                    children: (0, l.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      children: N.intl.string(N.t.jGoPJS)
                    })
                  }, Z.oh.BOT_INFO)
                }), (0, l.jsxs)(r.zJl, {
                  fade: true,
                  className: A.scroller,
                  children: [(0, l.jsx)(b.Z, {
                    userId: t.id,
                    userBio: null == G ? true : G.bio,
                    setLineClamp: false
                  }), (0, l.jsx)(v.Z, {
                    heading: N.intl.string(N.t["A//N4u"]),
                    children: (0, l.jsx)(j.Z, {
                      userId: t.id,
                      guildId: k,
                      tooltipDelay: Z.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == G ? true : G.profileEffect) != null && (0, l.jsx)(d.Z, {
          profileEffectId: null == G || null == (n = G.profileEffect) ? true : n.id,
          isHovering: K
        })]
      })
    })
  })
}