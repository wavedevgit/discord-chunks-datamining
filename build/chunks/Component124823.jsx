/** Chunk was on 5665 **/
/** chunk id: 124823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk597312 = require("./597312.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk580552 = require("./580552.js"),
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

function A(e) {
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
  } = e, R = __OVERLAY__ || !(0, d.Z)(n.id), M = (0, g.ZP)(n.id), D = (0, s.ZP)(), L = i.useRef(Date.now()), {
    analyticsLocations: k
  } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR), U = (0, f.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: w.id
  }), B = i.useRef(null), F = (0, o.Z)(B), G = e => {
    (0, b.openUserProfileModal)(A({
      sourceAnalyticsLocations: k,
      hideRestrictedProfile: true
    }, U, e))
  };
  return (0, r.jsx)(u.Gt, {
    value: k,
    children: (0, r.jsx)(f.Mt, {
      value: U,
      openedAt: L.current,
      fetchStartedAt: null == M ? true : M.fetchStartedAt,
      fetchEndedAt: null == M ? true : M.fetchEndedAt,
      isLoaded: null == M ? true : M.isLoaded,
      children: (0, r.jsxs)(j.Z, {
        ref: B,
        user: n,
        displayProfile: M,
        themeType: P.l.SIDEBAR,
        themeOverride: D,
        children: [(0, r.jsxs)(l.u2, {
          children: [(0, r.jsx)(I.Z, {
            children: (0, r.jsx)(S.Z, {
              user: n
            })
          }), (0, r.jsxs)("div", {
            className: T.header,
            children: [(0, r.jsx)(C.Z, {
              user: n,
              displayProfile: M,
              themeType: P.l.SIDEBAR,
              animateOnHover: !F
            }), (0, r.jsx)(_.Z, {
              user: n,
              displayProfile: M,
              channelId: w.id,
              themeType: P.l.SIDEBAR,
              onOpenProfile: R ? true : G
            })]
          }), (0, r.jsxs)("div", {
            className: N.body,
            children: [(0, r.jsx)(E.Z, {
              user: n,
              nickname: h.ZP.getName(null, w.id, n),
              pronouns: null == M ? true : M.pronouns,
              onOpenProfile: R ? true : G,
              tags: (0, r.jsx)(y.Z, {
                displayProfile: M,
                themeType: P.l.SIDEBAR
              })
            }), (0, r.jsxs)(j.Z.Overlay, {
              className: N.overlay,
              children: [(0, r.jsx)(O.Z, {
                heading: Z.intl.string(Z.t["61W33d"]),
                headingColor: "header-primary",
                children: (0, r.jsx)(x.Z, {
                  userBio: null == M ? true : M.bio,
                  userId: n.id,
                  animateOnHover: true,
                  isHovering: F
                })
              }), (0, r.jsx)(O.Z, {
                heading: Z.intl.string(Z.t["A//N4u"]),
                headingColor: "header-primary",
                children: (0, r.jsx)(v.Z, {
                  userId: n.id
                })
              })]
            })]
          })]
        }), !R && (0, r.jsx)("div", {
          className: T.footer,
          children: (0, r.jsx)(a.P3F, {
            onClick: () => {
              G(), (0, m.pQ)(A({
                action: "PRESS_VIEW_PROFILE",
                analyticsLocations: k
              }, U))
            },
            className: T.footerButton,
            children: Z.intl.string(Z.t["+Xp3ho"])
          })
        }), (null == M ? true : M.profileEffect) != null && (0, r.jsx)(p.Z, {
          profileEffectId: null == M || null == (t = M.profileEffect) ? true : t.id,
          isHovering: F
        })]
      })
    })
  })
}