/** Chunk was on 64228 **/
/** chunk id: 916217, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk713517 = require("./713517.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk389996 = require("./389996.jsx"),
  Chunk743987 = require("./743987.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk35241 = require("./35241.jsx"),
  Chunk587168 = require("./587168.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk763563 = require("./763563.js"),
  Chunk195723 = require("./195723.js"),
  Chunk368519 = require("./368519.js");

function C(e) {
  var l;
  let {
    user: t,
    guildId: C,
    channelId: L,
    messageId: D,
    roleId: R,
    sessionId: w,
    transitionState: G,
    openedAt: M,
    onClose: U,
    sourceAnalyticsLocations: k = []
  } = e, F = C === N.ME ? true : C, V = (0, p.Ay)(t.id, F), B = u.Ay.getName(F, L, t), W = (0, o.GV)(), {
    analyticsLocations: K
  } = (0, a.Ay)([...k, s.A.USER_PROFILE_MODAL]), z = (0, f.pb)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: w,
    guildId: F,
    channelId: L,
    messageId: D,
    roleId: R
  }), H = i.useRef(null), Y = (0, d.M)(H);
  return (0, n.jsx)(a.f5, {
    value: K,
    children: (0, n.jsx)(f.of, {
      value: z,
      openedAt: M,
      fetchStartedAt: null == V ? true : V.fetchStartedAt,
      fetchEndedAt: null == V ? true : V.fetchEndedAt,
      isLoaded: null == V ? true : V.isLoaded,
      children: (0, n.jsxs)(r.EOs, {
        "data-migration-pending": true,
        transitionState: G,
        className: T.zr,
        hideShadow: true,
        "aria-labelledby": W,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, n.jsx)(r.Fmo, {
          component: (0, n.jsx)(r.AC4, {
            children: (0, n.jsx)(r.H, {
              id: W,
              children: _.intl.format(_.t.KRe1Fk, {
                name: B
              })
            })
          }),
          children: (0, n.jsxs)(v.A, {
            user: t,
            displayProfile: V,
            themeType: E.d.MODAL,
            ref: (null == V ? true : V.profileEffect) != null ? H : true,
            children: [(0, n.jsx)(y.A, {
              children: (0, n.jsx)(I.A, {
                user: t
              })
            }), (0, n.jsxs)("div", {
              children: [(0, n.jsx)(A.A, {
                user: t,
                displayProfile: V,
                themeType: E.d.MODAL
              }), (0, n.jsx)("div", {
                className: T.El,
                children: (0, n.jsx)(m.A, {
                  user: t,
                  displayProfile: V,
                  guildId: F,
                  channelId: L,
                  themeType: E.d.MODAL
                })
              })]
            }), (0, n.jsxs)("div", {
              className: T.rf,
              children: [(0, n.jsx)(b.A, {
                className: T.Xh,
                user: t,
                guildId: F,
                nickname: B,
                pronouns: null == V ? true : V.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, n.jsx)(x.A, {
                  displayProfile: V,
                  themeType: E.d.MODAL,
                  onClose: U
                })
              }), (0, n.jsxs)("div", {
                className: S.kL,
                children: [(0, n.jsx)(r.VQ0, {
                  className: S.$H,
                  type: "top",
                  selectedItem: O.RP.BOT_INFO,
                  onItemSelect: N.tEg,
                  children: (0, n.jsx)(r.VQ0.Item, {
                    className: S.YU,
                    id: O.RP.BOT_INFO,
                    "aria-label": _.intl.string(_.t.jGoPJT),
                    children: (0, n.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      children: _.intl.string(_.t.jGoPJT)
                    })
                  }, O.RP.BOT_INFO)
                }), (0, n.jsxs)(r.IpV, {
                  fade: true,
                  className: P.XG,
                  children: [(0, n.jsx)(j.A, {
                    userId: t.id,
                    userBio: null == V ? true : V.bio,
                    setLineClamp: false
                  }), (0, n.jsx)(g.A, {
                    heading: _.intl.string(_.t["A//N4k"]),
                    children: (0, n.jsx)(h.A, {
                      userId: t.id,
                      guildId: F,
                      tooltipDelay: O.In
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == V ? true : V.profileEffect) != null && (0, n.jsx)(c.A, {
          skuId: null == V || null == (l = V.profileEffect) ? true : l.skuId,
          isHovering: Y
        })]
      })
    })
  })
}