/** Chunk was on 93979 **/
/** chunk id: 886794, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
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
  Chunk968847 = require("./968847.js"),
  Chunk199912 = require("./199912.js"),
  Chunk9113 = require("./9113.js");

function _(e) {
  var n;
  let {
    user: t,
    guildId: _,
    channelId: S,
    messageId: w,
    roleId: D,
    sessionId: L,
    transitionState: R,
    openedAt: M,
    onClose: B,
    sourceAnalyticsLocations: U = []
  } = e, k = _ === N.ME ? true : _, G = (0, m.ZP)(t.id, k), F = u.ZP.getName(k, S, t), V = (0, c.Dt)(), {
    analyticsLocations: W
  } = (0, a.ZP)([...U, r.Z.USER_PROFILE_MODAL]), z = (0, f.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: L,
    guildId: k,
    channelId: S,
    messageId: w,
    roleId: D
  }), H = i.useRef(null), K = (0, s.X)(H);
  return (0, l.jsx)(a.Gt, {
    value: W,
    children: (0, l.jsx)(f.Mt, {
      value: z,
      openedAt: M,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, l.jsxs)(o.Y0X, {
        "data-migration-pending": true,
        transitionState: R,
        className: P.root,
        hideShadow: true,
        "aria-labelledby": V,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, l.jsx)(o.y5t, {
          component: (0, l.jsx)(o.nn4, {
            children: (0, l.jsx)(o.H, {
              id: V,
              children: A.intl.format(A.t.KRe1Fk, {
                name: F
              })
            })
          }),
          children: (0, l.jsxs)(g.Z, {
            user: t,
            displayProfile: G,
            themeType: T.l.MODAL,
            ref: (null == G ? true : G.profileEffect) != null ? H : true,
            children: [(0, l.jsx)(Z.Z, {
              children: (0, l.jsx)(y.Z, {
                user: t
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(h.Z, {
                user: t,
                displayProfile: G,
                themeType: T.l.MODAL
              }), (0, l.jsx)("div", {
                className: P.headerInner,
                children: (0, l.jsx)(p.Z, {
                  user: t,
                  displayProfile: G,
                  guildId: k,
                  channelId: S,
                  themeType: T.l.MODAL
                })
              })]
            }), (0, l.jsxs)("div", {
              className: P.body,
              children: [(0, l.jsx)(I.Z, {
                className: P.username,
                user: t,
                guildId: k,
                nickname: F,
                pronouns: null == G ? true : G.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, l.jsx)(x.Z, {
                  displayProfile: G,
                  themeType: T.l.MODAL,
                  onClose: B
                })
              }), (0, l.jsxs)("div", {
                className: C.container,
                children: [(0, l.jsx)(o.njP, {
                  className: C.tabBar,
                  type: "top",
                  selectedItem: O.oh.BOT_INFO,
                  onItemSelect: N.dG4,
                  children: (0, l.jsx)(o.njP.Item, {
                    className: C.tabBarItem,
                    id: O.oh.BOT_INFO,
                    "aria-label": A.intl.string(A.t.jGoPJT),
                    children: (0, l.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      children: A.intl.string(A.t.jGoPJT)
                    })
                  }, O.oh.BOT_INFO)
                }), (0, l.jsxs)(o.zJl, {
                  fade: true,
                  className: E.scroller,
                  children: [(0, l.jsx)(j.Z, {
                    userId: t.id,
                    userBio: null == G ? true : G.bio,
                    setLineClamp: false
                  }), (0, l.jsx)(b.Z, {
                    heading: A.intl.string(A.t["A//N4k"]),
                    children: (0, l.jsx)(v.Z, {
                      userId: t.id,
                      guildId: k,
                      tooltipDelay: O.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == G ? true : G.profileEffect) != null && (0, l.jsx)(d.Z, {
          skuId: null == G || null == (n = G.profileEffect) ? true : n.skuId,
          isHovering: K
        })]
      })
    })
  })
}