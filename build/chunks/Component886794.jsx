/** Chunk was on 72164 **/
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
    roleId: D,
    sessionId: B,
    transitionState: L,
    openedAt: R,
    onClose: M,
    sourceAnalyticsLocations: U = []
  } = e, k = E === Z.ME ? true : E, V = (0, p.ZP)(t.id, k), F = u.ZP.getName(k, S, t), G = (0, s.Dt)(), {
    analyticsLocations: z
  } = (0, a.ZP)([...U, c.Z.USER_PROFILE_MODAL]), H = (0, f.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: B,
    guildId: k,
    channelId: S,
    messageId: w,
    roleId: D
  }), K = r.useRef(null), W = (0, i.Z)(K);
  return (0, o.jsx)(a.Gt, {
    value: z,
    children: (0, o.jsx)(f.Mt, {
      value: H,
      openedAt: R,
      fetchStartedAt: null == V ? true : V.fetchStartedAt,
      fetchEndedAt: null == V ? true : V.fetchEndedAt,
      isLoaded: null == V ? true : V.isLoaded,
      children: (0, o.jsxs)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: L,
        className: N.root,
        hideShadow: true,
        "aria-labelledby": G,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, o.jsx)(l.y5t, {
          component: (0, o.jsx)(l.nn4, {
            children: (0, o.jsx)(l.H, {
              id: G,
              children: T.intl.format(T.t.KRe1Fh, {
                name: F
              })
            })
          }),
          children: (0, o.jsxs)(v.Z, {
            user: t,
            displayProfile: V,
            themeType: P.l.MODAL,
            ref: (null == V ? true : V.profileEffect) != null ? K : true,
            children: [(0, o.jsx)(I.Z, {
              children: (0, o.jsx)(_.Z, {
                user: t
              })
            }), (0, o.jsxs)("div", {
              children: [(0, o.jsx)(b.Z, {
                user: t,
                displayProfile: V,
                themeType: P.l.MODAL
              }), (0, o.jsx)("div", {
                className: N.headerInner,
                children: (0, o.jsx)(m.Z, {
                  user: t,
                  displayProfile: V,
                  guildId: k,
                  channelId: S,
                  themeType: P.l.MODAL
                })
              })]
            }), (0, o.jsxs)("div", {
              className: N.body,
              children: [(0, o.jsx)(y.Z, {
                className: N.username,
                user: t,
                nickname: F,
                pronouns: null == V ? true : V.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, o.jsx)(x.Z, {
                  displayProfile: V,
                  themeType: P.l.MODAL,
                  onClose: M
                })
              }), (0, o.jsxs)("div", {
                className: C.container,
                children: [(0, o.jsx)(l.njP, {
                  className: C.tabBar,
                  type: "top",
                  selectedItem: O.oh.BOT_INFO,
                  onItemSelect: Z.dG4,
                  children: (0, o.jsx)(l.njP.Item, {
                    className: C.tabBarItem,
                    id: O.oh.BOT_INFO,
                    "aria-label": T.intl.string(T.t.jGoPJS),
                    children: (0, o.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: T.intl.string(T.t.jGoPJS)
                    })
                  }, O.oh.BOT_INFO)
                }), (0, o.jsxs)(l.zJl, {
                  fade: true,
                  className: A.scroller,
                  children: [(0, o.jsx)(h.Z, {
                    userId: t.id,
                    userBio: null == V ? true : V.bio,
                    setLineClamp: false
                  }), (0, o.jsx)(j.Z, {
                    heading: T.intl.string(T.t["A//N4u"]),
                    children: (0, o.jsx)(g.Z, {
                      userId: t.id,
                      guildId: k,
                      tooltipDelay: O.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == V ? true : V.profileEffect) != null && (0, o.jsx)(d.Z, {
          profileEffectId: null == V || null == (n = V.profileEffect) ? true : n.id,
          isHovering: W
        })]
      })
    })
  })
}