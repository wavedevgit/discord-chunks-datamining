/** Chunk was on 1113 **/
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
  } = e, D = __OVERLAY__ || !(0, u.A)(n.id), L = (0, m.Ay)(n.id), M = (0, a.Ay)(), k = l.useRef(Date.now()), {
    analyticsLocations: G
  } = (0, c.Ay)(o.A.USER_PROFILE_SIDEBAR), U = (0, g.pb)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: R.id
  }), V = l.useRef(null), {
    isHoveringOrFocusing: B,
    isHovering: H
  } = (0, d.A)(V), F = () => {
    (0, b.openUserProfileModal)(w({
      sourceAnalyticsLocations: G,
      hideRestrictedProfile: true
    }, U))
  };
  return (0, r.jsx)(c.f5, {
    value: G,
    children: (0, r.jsx)(g.of, {
      value: U,
      openedAt: k.current,
      fetchStartedAt: null == L ? true : L.fetchStartedAt,
      fetchEndedAt: null == L ? true : L.fetchEndedAt,
      isLoaded: null == L ? true : L.isLoaded,
      children: (0, r.jsxs)(v.A, {
        ref: V,
        user: n,
        displayProfile: L,
        themeType: I.d.SIDEBAR,
        themeOverride: M,
        children: [(0, r.jsxs)(i.d_W, {
          children: [(0, r.jsx)(S.A, {
            children: (0, r.jsx)(C.A, {
              user: n
            })
          }), (0, r.jsxs)("div", {
            className: T.wx,
            children: [(0, r.jsx)(O.A, {
              user: n,
              displayProfile: L,
              themeType: I.d.SIDEBAR,
              animateOnHoverOrFocusOnly: !B
            }), (0, r.jsx)(A.A, {
              user: n,
              displayProfile: L,
              channelId: R.id,
              themeType: I.d.SIDEBAR,
              onOpenProfile: D ? true : F
            })]
          }), (0, r.jsxs)("div", {
            className: P.rf,
            children: [(0, r.jsx)(E.A, {
              user: n,
              guildId: R.guild_id,
              nickname: p.Ay.getName(null, R.id, n),
              pronouns: null == L ? true : L.pronouns,
              onOpenProfile: D ? true : F,
              tags: (0, r.jsx)(y.A, {
                displayProfile: L,
                themeType: I.d.SIDEBAR
              })
            }), (0, r.jsxs)(v.A.Overlay, {
              className: P.Lw,
              children: [(0, r.jsx)(j.A, {
                heading: N.intl.string(N.t["61W33d"]),
                headingColor: "text-strong",
                children: (0, r.jsx)(_.A, {
                  userBio: null == L ? true : L.bio,
                  userId: n.id,
                  animateOnHoverOrFocusOnly: true,
                  isHoveringOrFocusing: B
                })
              }), (0, r.jsx)(j.A, {
                heading: N.intl.string(N.t["A//N4k"]),
                headingColor: "text-strong",
                children: (0, r.jsx)(x.A, {
                  userId: n.id
                })
              })]
            })]
          })]
        }), !D && (0, r.jsx)("div", {
          className: T.qr,
          children: (0, r.jsx)(s.DUT, {
            onClick: () => {
              F(), (0, f.Wn)(w({
                action: "PRESS_VIEW_PROFILE",
                analyticsLocations: G
              }, U))
            },
            className: T.wC,
            children: N.intl.string(N.t["+Xp3hq"])
          })
        }), (null == L ? true : L.profileEffect) != null && (0, r.jsx)(h.A, {
          skuId: null == L || null == (t = L.profileEffect) ? true : t.skuId,
          isHovering: H
        })]
      })
    })
  })
}