/** Chunk was on 86357 **/
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
  let {
    user: t,
    channel: n
  } = e, w = __OVERLAY__ || !(0, d.Z)(t.id), R = (0, g.ZP)(t.id), M = (0, s.ZP)(), k = i.useRef(Date.now()), {
    analyticsLocations: D
  } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR), L = (0, f.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: n.id
  }), U = i.useRef(null), B = (0, o.Z)(U), F = e => {
    (0, b.openUserProfileModal)(A({
      sourceAnalyticsLocations: D,
      hideRestrictedProfile: true
    }, L, e))
  };
  return (0, r.jsx)(u.Gt, {
    value: D,
    children: (0, r.jsx)(f.Mt, {
      value: L,
      openedAt: k.current,
      fetchStartedAt: null == R ? true : R.fetchStartedAt,
      fetchEndedAt: null == R ? true : R.fetchEndedAt,
      isLoaded: null == R ? true : R.isLoaded,
      children: (0, r.jsxs)(O.Z, {
        ref: U,
        user: t,
        displayProfile: R,
        themeType: I.l.SIDEBAR,
        themeOverride: M,
        children: [(0, r.jsxs)(l.u2, {
          children: [(0, r.jsx)(P.Z, {
            children: (0, r.jsx)(S.Z, {
              user: t
            })
          }), (0, r.jsxs)("div", {
            className: T.header,
            children: [(0, r.jsx)(C.Z, {
              user: t,
              displayProfile: R,
              themeType: I.l.SIDEBAR,
              animateOnHover: !B
            }), (0, r.jsx)(y.Z, {
              user: t,
              displayProfile: R,
              channelId: n.id,
              themeType: I.l.SIDEBAR,
              onOpenProfile: w ? true : F
            })]
          }), (0, r.jsxs)("div", {
            className: N.body,
            children: [(0, r.jsx)(E.Z, {
              user: t,
              nickname: h.ZP.getName(null, n.id, t),
              pronouns: null == R ? true : R.pronouns,
              onOpenProfile: w ? true : F,
              tags: (0, r.jsx)(_.Z, {
                displayProfile: R,
                themeType: I.l.SIDEBAR
              })
            }), (0, r.jsxs)(O.Z.Overlay, {
              className: N.overlay,
              children: [(0, r.jsx)(j.Z, {
                heading: Z.intl.string(Z.t["61W33d"]),
                headingColor: "header-primary",
                children: (0, r.jsx)(x.Z, {
                  userBio: null == R ? true : R.bio,
                  userId: t.id,
                  animateOnHover: true,
                  isHovering: B
                })
              }), (0, r.jsx)(j.Z, {
                heading: Z.intl.string(Z.t["A//N4u"]),
                headingColor: "header-primary",
                children: (0, r.jsx)(v.Z, {
                  userId: t.id
                })
              })]
            })]
          })]
        }), !w && (0, r.jsx)("div", {
          className: T.footer,
          children: (0, r.jsx)(a.P3F, {
            onClick: () => {
              F(), (0, m.pQ)(A({
                action: "PRESS_VIEW_PROFILE",
                analyticsLocations: D
              }, L))
            },
            className: T.footerButton,
            children: Z.intl.string(Z.t["+Xp3ho"])
          })
        }), (null == R ? true : R.profileEffectId) != null && (0, r.jsx)(p.Z, {
          profileEffectId: null == R ? true : R.profileEffectId,
          isHovering: B
        })]
      })
    })
  })
}