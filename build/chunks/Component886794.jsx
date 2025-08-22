/** Chunk was on 98360 **/
/** chunk id: 886794, original params: e,n,t (module,exports,require) **/
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
  var n;
  let {
    user: t,
    guildId: E,
    channelId: S,
    messageId: w,
    roleId: B,
    sessionId: D,
    transitionState: L,
    openedAt: R,
    onClose: U,
    sourceAnalyticsLocations: M = []
  } = e, k = E === Z.ME ? true : E, G = (0, m.ZP)(t.id, k), V = u.ZP.getName(k, S, t), F = (0, s.Dt)(), {
    analyticsLocations: Y
  } = (0, a.ZP)([...M, c.Z.USER_PROFILE_MODAL]), z = (0, f.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: D,
    guildId: k,
    channelId: S,
    messageId: w,
    roleId: B
  }), W = o.useRef(null), K = (0, i.Z)(W);
  return (0, r.jsx)(a.Gt, {
    value: Y,
    children: (0, r.jsx)(f.Mt, {
      value: z,
      openedAt: R,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, r.jsxs)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: L,
        className: A.root,
        hideShadow: true,
        "aria-labelledby": F,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, r.jsx)(l.y5t, {
          component: (0, r.jsx)(l.nn4, {
            children: (0, r.jsx)(l.H, {
              id: F,
              children: T.intl.format(T.t.KRe1Fh, {
                name: V
              })
            })
          }),
          children: (0, r.jsxs)(v.Z, {
            user: t,
            displayProfile: G,
            themeType: P.l.MODAL,
            ref: (null == G ? true : G.profileEffect) != null ? W : true,
            children: [(0, r.jsx)(I.Z, {
              children: (0, r.jsx)(y.Z, {
                user: t
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(x.Z, {
                user: t,
                displayProfile: G,
                themeType: P.l.MODAL
              }), (0, r.jsx)("div", {
                className: A.headerInner,
                children: (0, r.jsx)(p.Z, {
                  user: t,
                  displayProfile: G,
                  guildId: k,
                  channelId: S,
                  themeType: P.l.MODAL
                })
              })]
            }), (0, r.jsxs)("div", {
              className: A.body,
              children: [(0, r.jsx)(_.Z, {
                className: A.username,
                user: t,
                nickname: V,
                pronouns: null == G ? true : G.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, r.jsx)(b.Z, {
                  displayProfile: G,
                  themeType: P.l.MODAL,
                  onClose: U
                })
              }), (0, r.jsxs)("div", {
                className: C.container,
                children: [(0, r.jsx)(l.njP, {
                  className: C.tabBar,
                  type: "top",
                  selectedItem: O.oh.BOT_INFO,
                  onItemSelect: Z.dG4,
                  children: (0, r.jsx)(l.njP.Item, {
                    className: C.tabBarItem,
                    id: O.oh.BOT_INFO,
                    "aria-label": T.intl.string(T.t.jGoPJS),
                    children: (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: T.intl.string(T.t.jGoPJS)
                    })
                  }, O.oh.BOT_INFO)
                }), (0, r.jsxs)(l.zJl, {
                  fade: true,
                  className: N.scroller,
                  children: [(0, r.jsx)(g.Z, {
                    userId: t.id,
                    userBio: null == G ? true : G.bio,
                    setLineClamp: false
                  }), (0, r.jsx)(j.Z, {
                    heading: T.intl.string(T.t["A//N4u"]),
                    children: (0, r.jsx)(h.Z, {
                      userId: t.id,
                      guildId: k,
                      tooltipDelay: O.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == G ? true : G.profileEffect) != null && (0, r.jsx)(d.Z, {
          profileEffectId: null == G || null == (n = G.profileEffect) ? true : n.id,
          isHovering: K
        })]
      })
    })
  })
}