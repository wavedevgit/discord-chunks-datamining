/** Chunk was on 31553 **/
/** chunk id: 886794, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    channelId: _,
    messageId: w,
    roleId: D,
    sessionId: R,
    transitionState: L,
    openedAt: M,
    onClose: U,
    sourceAnalyticsLocations: k = []
  } = e, B = C === N.ME ? true : C, F = (0, p.ZP)(t.id, B), V = u.ZP.getName(B, _, t), G = (0, a.Dt)(), {
    analyticsLocations: z
  } = (0, s.ZP)([...k, o.Z.USER_PROFILE_MODAL]), W = (0, m.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: R,
    guildId: B,
    channelId: _,
    messageId: w,
    roleId: D
  }), K = i.useRef(null), Y = (0, c.X)(K);
  return (0, l.jsx)(s.Gt, {
    value: z,
    children: (0, l.jsx)(m.Mt, {
      value: W,
      openedAt: M,
      fetchStartedAt: null == F ? true : F.fetchStartedAt,
      fetchEndedAt: null == F ? true : F.fetchEndedAt,
      isLoaded: null == F ? true : F.isLoaded,
      children: (0, l.jsxs)(r.Y0X, {
        "data-migration-pending": true,
        transitionState: L,
        className: A.root,
        hideShadow: true,
        "aria-labelledby": G,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, l.jsx)(r.y5t, {
          component: (0, l.jsx)(r.nn4, {
            children: (0, l.jsx)(r.H, {
              id: G,
              children: T.intl.format(T.t.KRe1Fh, {
                name: V
              })
            })
          }),
          children: (0, l.jsxs)(b.Z, {
            user: t,
            displayProfile: F,
            themeType: P.l.MODAL,
            ref: (null == F ? true : F.profileEffect) != null ? K : true,
            children: [(0, l.jsx)(Z.Z, {
              children: (0, l.jsx)(I.Z, {
                user: t
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(x.Z, {
                user: t,
                displayProfile: F,
                themeType: P.l.MODAL
              }), (0, l.jsx)("div", {
                className: A.headerInner,
                children: (0, l.jsx)(f.Z, {
                  user: t,
                  displayProfile: F,
                  guildId: B,
                  channelId: _,
                  themeType: P.l.MODAL
                })
              })]
            }), (0, l.jsxs)("div", {
              className: A.body,
              children: [(0, l.jsx)(y.Z, {
                className: A.username,
                user: t,
                guildId: B,
                nickname: V,
                pronouns: null == F ? true : F.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, l.jsx)(h.Z, {
                  displayProfile: F,
                  themeType: P.l.MODAL,
                  onClose: U
                })
              }), (0, l.jsxs)("div", {
                className: S.container,
                children: [(0, l.jsx)(r.njP, {
                  className: S.tabBar,
                  type: "top",
                  selectedItem: O.oh.BOT_INFO,
                  onItemSelect: N.dG4,
                  children: (0, l.jsx)(r.njP.Item, {
                    className: S.tabBarItem,
                    id: O.oh.BOT_INFO,
                    "aria-label": T.intl.string(T.t.jGoPJS),
                    children: (0, l.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      children: T.intl.string(T.t.jGoPJS)
                    })
                  }, O.oh.BOT_INFO)
                }), (0, l.jsxs)(r.zJl, {
                  fade: true,
                  className: E.scroller,
                  children: [(0, l.jsx)(j.Z, {
                    userId: t.id,
                    userBio: null == F ? true : F.bio,
                    setLineClamp: false
                  }), (0, l.jsx)(g.Z, {
                    heading: T.intl.string(T.t["A//N4u"]),
                    children: (0, l.jsx)(v.Z, {
                      userId: t.id,
                      guildId: B,
                      tooltipDelay: O.vB
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == F ? true : F.profileEffect) != null && (0, l.jsx)(d.Z, {
          skuId: null == F || null == (n = F.profileEffect) ? true : n.skuId,
          isHovering: Y
        })]
      })
    })
  })
}