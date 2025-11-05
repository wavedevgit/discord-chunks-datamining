/** Chunk was on 14953 **/
/** chunk id: 124823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk580552 = require("./580552.js"),
  Chunk104505 = require("./104505.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231688 = require("./231688.js"),
  Chunk892273 = require("./892273.js");

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function w(e) {
  var t;
  let {
    user: n,
    channel: w
  } = e, A = __OVERLAY__ || !(0, d.Z)(n.id), D = (0, m.ZP)(n.id), L = (0, s.ZP)(), M = i.useRef(Date.now()), {
    analyticsLocations: k
  } = (0, c.ZP)(o.Z.USER_PROFILE_SIDEBAR), U = (0, f.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: w.id
  }), G = i.useRef(null), {
    isHoveringOrFocusing: H,
    isHovering: F
  } = (0, u.Z)(G), B = e => {
    (0, b.openUserProfileModal)(R({
      sourceAnalyticsLocations: k,
      hideRestrictedProfile: true
    }, U, e))
  };
  return (0, r.jsx)(c.Gt, {
    value: k,
    children: (0, r.jsx)(f.Mt, {
      value: U,
      openedAt: M.current,
      fetchStartedAt: null == D ? true : D.fetchStartedAt,
      fetchEndedAt: null == D ? true : D.fetchEndedAt,
      isLoaded: null == D ? true : D.isLoaded,
      children: (0, r.jsxs)(C.Z, {
        ref: G,
        user: n,
        displayProfile: D,
        themeType: Z.l.SIDEBAR,
        themeOverride: L,
        children: [(0, r.jsxs)(l.u2D, {
          children: [(0, r.jsx)(E.Z, {
            children: (0, r.jsx)(S.Z, {
              user: n
            })
          }), (0, r.jsxs)("div", {
            className: T.header,
            children: [(0, r.jsx)(x.Z, {
              user: n,
              displayProfile: D,
              themeType: Z.l.SIDEBAR,
              animateOnHoverOrFocusOnly: !H
            }), (0, r.jsx)(_.Z, {
              user: n,
              displayProfile: D,
              channelId: w.id,
              themeType: Z.l.SIDEBAR,
              onOpenProfile: A ? true : B
            })]
          }), (0, r.jsxs)("div", {
            className: N.body,
            children: [(0, r.jsx)(I.Z, {
              user: n,
              guildId: w.guild_id,
              nickname: h.ZP.getName(null, w.id, n),
              pronouns: null == D ? true : D.pronouns,
              onOpenProfile: A ? true : B,
              tags: (0, r.jsx)(y.Z, {
                displayProfile: D,
                themeType: Z.l.SIDEBAR
              })
            }), (0, r.jsxs)(C.Z.Overlay, {
              className: N.overlay,
              children: [(0, r.jsx)(v.Z, {
                heading: P.intl.string(P.t["61W33d"]),
                headingColor: "header-primary",
                children: (0, r.jsx)(O.Z, {
                  userBio: null == D ? true : D.bio,
                  userId: n.id,
                  animateOnHoverOrFocusOnly: true,
                  isHoveringOrFocusing: H
                })
              }), (0, r.jsx)(v.Z, {
                heading: P.intl.string(P.t["A//N4k"]),
                headingColor: "header-primary",
                children: (0, r.jsx)(j.Z, {
                  userId: n.id
                })
              })]
            })]
          })]
        }), !A && (0, r.jsx)("div", {
          className: T.footer,
          children: (0, r.jsx)(a.P3F, {
            onClick: () => {
              B(), (0, g.pQ)(R({
                action: "PRESS_VIEW_PROFILE",
                analyticsLocations: k
              }, U))
            },
            className: T.footerButton,
            children: P.intl.string(P.t["+Xp3hq"])
          })
        }), (null == D ? true : D.profileEffect) != null && (0, r.jsx)(p.Z, {
          skuId: null == D || null == (t = D.profileEffect) ? true : t.skuId,
          isHovering: F
        })]
      })
    })
  })
}