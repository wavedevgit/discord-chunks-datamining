/** Chunk was on 64228 **/
/** chunk id: 916217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
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

function S(e) {
  var t;
  let {
    user: n,
    guildId: S,
    channelId: L,
    messageId: R,
    roleId: D,
    sessionId: w,
    transitionState: M,
    openedAt: G,
    onClose: U,
    sourceAnalyticsLocations: k = []
  } = e, F = S === O.ME ? true : S, V = (0, m.Ay)(n.id, F), B = u.Ay.getName(F, L, n), W = (0, a.GV)(), {
    analyticsLocations: K
  } = (0, o.Ay)([...k, s.A.USER_PROFILE_MODAL]), z = (0, p.pb)({
    layout: "MODAL",
    userId: n.id,
    sourceSessionId: w,
    guildId: F,
    channelId: L,
    messageId: R,
    roleId: D
  }), H = i.useRef(null), Y = (0, c.M)(H);
  return (0, l.jsx)(o.f5, {
    value: K,
    children: (0, l.jsx)(p.of, {
      value: z,
      openedAt: G,
      fetchStartedAt: null == V ? true : V.fetchStartedAt,
      fetchEndedAt: null == V ? true : V.fetchEndedAt,
      isLoaded: null == V ? true : V.isLoaded,
      children: (0, l.jsxs)(r.EOs, {
        "data-migration-pending": true,
        transitionState: M,
        className: T.zr,
        hideShadow: true,
        "aria-labelledby": W,
        parentComponent: "NonUserBotProfileModal",
        children: [(0, l.jsx)(r.Fmo, {
          component: (0, l.jsx)(r.AC4, {
            children: (0, l.jsx)(r.H, {
              id: W,
              children: E.intl.format(E.t.KRe1Fk, {
                name: B
              })
            })
          }),
          children: (0, l.jsxs)(v.A, {
            user: n,
            displayProfile: V,
            themeType: N.d.MODAL,
            ref: (null == V ? true : V.profileEffect) != null ? H : true,
            children: [(0, l.jsx)(y.A, {
              children: (0, l.jsx)(I.A, {
                user: n
              })
            }), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(x.A, {
                user: n,
                displayProfile: V,
                themeType: N.d.MODAL
              }), (0, l.jsx)("div", {
                className: T.El,
                children: (0, l.jsx)(f.A, {
                  user: n,
                  displayProfile: V,
                  guildId: F,
                  channelId: L,
                  themeType: N.d.MODAL
                })
              })]
            }), (0, l.jsxs)("div", {
              className: T.rf,
              children: [(0, l.jsx)(b.A, {
                className: T.Xh,
                user: n,
                guildId: F,
                nickname: B,
                pronouns: null == V ? true : V.pronouns,
                nicknameVariant: "heading-xl/bold",
                tags: (0, l.jsx)(A.A, {
                  displayProfile: V,
                  themeType: N.d.MODAL,
                  onClose: U
                })
              }), (0, l.jsxs)("div", {
                className: C.kL,
                children: [(0, l.jsx)(r.VQ0, {
                  className: C.$H,
                  type: "top",
                  selectedItem: _.RP.BOT_INFO,
                  onItemSelect: O.tEg,
                  children: (0, l.jsx)(r.VQ0.Item, {
                    className: C.YU,
                    id: _.RP.BOT_INFO,
                    "aria-label": E.intl.string(E.t.jGoPJT),
                    children: (0, l.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      children: E.intl.string(E.t.jGoPJT)
                    })
                  }, _.RP.BOT_INFO)
                }), (0, l.jsxs)(r.IpV, {
                  fade: true,
                  className: P.XG,
                  children: [(0, l.jsx)(j.A, {
                    userId: n.id,
                    userBio: null == V ? true : V.bio,
                    setLineClamp: false
                  }), (0, l.jsx)(g.A, {
                    heading: E.intl.string(E.t["A//N4k"]),
                    children: (0, l.jsx)(h.A, {
                      userId: n.id,
                      guildId: F,
                      tooltipDelay: _.In
                    })
                  })]
                })]
              })]
            })]
          })
        }), (null == V ? true : V.profileEffect) != null && (0, l.jsx)(d.A, {
          skuId: null == V || null == (t = V.profileEffect) ? true : t.skuId,
          isHovering: Y
        })]
      })
    })
  })
}