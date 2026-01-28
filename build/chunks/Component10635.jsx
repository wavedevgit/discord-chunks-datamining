/** Chunk was on 78528 **/
/** chunk id: 10635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk311016 = require("./311016.js"),
  Chunk713517 = require("./713517.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk657331 = require("./657331.js"),
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
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk743789 = require("./743789.js"),
  Chunk673721 = require("./673721.js");

function w(e) {
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

function R(e) {
  var t;
  let {
    user: n,
    channel: R
  } = e, D = __OVERLAY__ || !(0, u.A)(n.id), M = (0, m.Ay)(n.id), L = (0, a.Ay)(), k = l.useRef(Date.now()), {
    analyticsLocations: G
  } = (0, c.Ay)(o.A.USER_PROFILE_SIDEBAR), U = (0, f.pb)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: R.id
  }), B = l.useRef(null), {
    isHoveringOrFocusing: V,
    isHovering: F
  } = (0, d.A)(B), H = () => {
    (0, b.openUserProfileModal)(w({
      sourceAnalyticsLocations: G,
      hideRestrictedProfile: true
    }, U))
  };
  return (0, r.jsx)(c.f5, {
    value: G,
    children: (0, r.jsx)(f.of, {
      value: U,
      openedAt: k.current,
      fetchStartedAt: null == M ? true : M.fetchStartedAt,
      fetchEndedAt: null == M ? true : M.fetchEndedAt,
      isLoaded: null == M ? true : M.isLoaded,
      children: (0, r.jsxs)(x.A, {
        ref: B,
        user: n,
        displayProfile: M,
        themeType: I.d.SIDEBAR,
        themeOverride: L,
        children: [(0, r.jsxs)(i.d_W, {
          children: [(0, r.jsx)(S.A, {
            children: (0, r.jsx)(C.A, {
              user: n
            })
          }), (0, r.jsxs)("div", {
            className: T.wx,
            children: [(0, r.jsx)(_.A, {
              user: n,
              displayProfile: M,
              themeType: I.d.SIDEBAR,
              animateOnHoverOrFocusOnly: !V
            }), (0, r.jsx)(A.A, {
              user: n,
              displayProfile: M,
              channelId: R.id,
              themeType: I.d.SIDEBAR,
              onOpenProfile: D ? true : H
            })]
          }), (0, r.jsxs)("div", {
            className: P.rf,
            children: [(0, r.jsx)(E.A, {
              user: n,
              guildId: R.guild_id,
              nickname: h.Ay.getName(null, R.id, n),
              pronouns: null == M ? true : M.pronouns,
              onOpenProfile: D ? true : H,
              tags: (0, r.jsx)(y.A, {
                displayProfile: M,
                themeType: I.d.SIDEBAR
              })
            }), (0, r.jsxs)(x.A.Overlay, {
              className: P.Lw,
              children: [(0, r.jsx)(v.A, {
                heading: N.intl.string(N.t["61W33d"]),
                headingColor: "text-strong",
                children: (0, r.jsx)(O.A, {
                  userBio: null == M ? true : M.bio,
                  userId: n.id,
                  animateOnHoverOrFocusOnly: true,
                  isHoveringOrFocusing: V
                })
              }), (0, r.jsx)(v.A, {
                heading: N.intl.string(N.t["A//N4k"]),
                headingColor: "text-strong",
                children: (0, r.jsx)(j.A, {
                  userId: n.id
                })
              })]
            })]
          })]
        }), !D && (0, r.jsx)("div", {
          className: T.qr,
          children: (0, r.jsx)(s.DUT, {
            onClick: () => {
              H(), (0, g.Wn)(w({
                action: "PRESS_VIEW_PROFILE",
                analyticsLocations: G
              }, U))
            },
            className: T.wC,
            children: N.intl.string(N.t["+Xp3hq"])
          })
        }), (null == M ? true : M.profileEffect) != null && (0, r.jsx)(p.A, {
          skuId: null == M || null == (t = M.profileEffect) ? true : t.skuId,
          isHovering: F
        })]
      })
    })
  })
}