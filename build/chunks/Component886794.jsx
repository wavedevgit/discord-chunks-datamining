/** Chunk was on 93979 **/
/** chunk id: 886794, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk526594 = require("./526594.js"),
  Chunk438160 = require("./438160.js"),
  Chunk909735 = require("./909735.js");

function C(e) {
  var n;
  let {
    user: t,
    guildId: C,
    channelId: S,
    messageId: w,
    roleId: D,
    sessionId: R,
    transitionState: L,
    openedAt: M,
    onClose: B,
    sourceAnalyticsLocations: U = []
  } = e, k = C === O.ME ? true : C, G = (0, p.ZP)(t.id, k), V = u.ZP.getName(k, S, t), F = (0, a.Dt)(), {
    analyticsLocations: W
  } = (0, s.ZP)([...U, r.Z.USER_PROFILE_MODAL]), H = (0, m.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: R,
    guildId: k,
    channelId: S,
    messageId: w,
    roleId: D
  }), z = i.useRef(null), Y = (0, c.X)(z);
  return (0, l.jsx)(s.Gt, {
    value: W,
    children: (0, l.jsx)(m.Mt, {
      value: H,
      openedAt: M,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, l.jsxs)(o.Y0X, {
        "data-migration-pending": true,
        transitionState: L,
        className: T.root,
        hideShadow: true,
        "aria-labelledby": F,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, l.jsx)(o.y5t, {
          component: (0, l.jsx)(o.nn4, {
            children: (0, l.jsx)(o.H, {
              id: F,
              children: A.intl.format(A.t.KRe1Fk, {
                name: V
              })
            })
          }),
          children: (0, l.jsxs)(b.Z, {
            user: t,
            displayProfile: G,
            themeType: N.l.MODAL,
            ref: (null == G ? true : G.profileEffect) != null ? z : true,
            children: [(0, l.jsx)(_.Z, {
              children: (0, l.jsx)(y.Z, {
                user: t
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(h.Z, {
                user: t,
                displayProfile: G,
                themeType: N.l.MODAL
              }), (0, l.jsx)("div", {
                className: T.headerInner,
                children: (0, l.jsx)(f.Z, {
                  user: t,
                  displayProfile: G,
                  guildId: k,
                  channelId: S,
                  themeType: N.l.MODAL
                })
              })]
            }), (0, l.jsxs)("div", {
              className: T.body,
              children: [(0, l.jsx)(I.Z, {
                className: T.username,
                user: t,
                guildId: k,
                nickname: V,
                pronouns: null == G ? true : G.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, l.jsx)(x.Z, {
                  displayProfile: G,
                  themeType: N.l.MODAL,
                  onClose: B
                })
              }), (0, l.jsxs)("div", {
                className: E.container,
                children: [(0, l.jsx)(o.njP, {
                  className: E.tabBar,
                  type: "top",
                  selectedItem: Z.oh.BOT_INFO,
                  onItemSelect: O.dG4,
                  children: (0, l.jsx)(o.njP.Item, {
                    className: E.tabBarItem,
                    id: Z.oh.BOT_INFO,
                    "aria-label": A.intl.string(A.t.jGoPJT),
                    children: (0, l.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      children: A.intl.string(A.t.jGoPJT)
                    })
                  }, Z.oh.BOT_INFO)
                }), (0, l.jsxs)(o.zJl, {
                  fade: true,
                  className: P.scroller,
                  children: [(0, l.jsx)(v.Z, {
                    userId: t.id,
                    userBio: null == G ? true : G.bio,
                    setLineClamp: false
                  }), (0, l.jsx)(g.Z, {
                    heading: A.intl.string(A.t["A//N4k"]),
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
          skuId: null == G || null == (n = G.profileEffect) ? true : n.skuId,
          isHovering: Y
        })]
      })
    })
  })
}