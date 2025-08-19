/** Chunk was on 36499 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk803948 = require("./803948.js"),
  Chunk597312 = require("./597312.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk113557 = require("./113557.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk952124 = require("./952124.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk481932 = require("./481932.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk277117 = require("./277117.jsx"),
  Chunk52639 = require("./52639.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231688 = require("./231688.js");

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
    currentUser: n,
    channel: f
  } = e, T = __OVERLAY__, w = (0, m.ZP)(t.id), M = (0, c.ZP)(), k = i.useRef(Date.now()), {
    analyticsLocations: D
  } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR), L = (0, h.ZB)({
    layout: "SIDEBAR",
    userId: t.id,
    channelId: f.id
  }), U = i.useRef(null), B = (0, s.Z)(U), F = (0, g.$m)(), H = (0, o.q_F)({
    opacity: +(null != F.interactionType),
    config: {
      duration: 150
    }
  }), G = e => {
    (0, b.openUserProfileModal)(A({
      sourceAnalyticsLocations: D,
      hideRestrictedProfile: true
    }, L, e))
  };
  return (0, r.jsx)(d.Gt, {
    value: D,
    children: (0, r.jsx)(h.Mt, {
      value: L,
      openedAt: k.current,
      fetchStartedAt: null == w ? true : w.fetchStartedAt,
      fetchEndedAt: null == w ? true : w.fetchEndedAt,
      isLoaded: null == w ? true : w.isLoaded,
      children: (0, r.jsx)(g.NJ, {
        value: F,
        children: (0, r.jsxs)(x.Z, {
          ref: U,
          user: t,
          displayProfile: w,
          themeType: Z.l.SIDEBAR,
          themeOverride: M,
          children: [null != F.interactionType && (0, r.jsx)(l.animated.div, {
            style: H,
            className: N.backdrop
          }), (0, r.jsxs)(a.u2, {
            children: [(0, r.jsxs)(j.Z, {
              children: [(0, r.jsx)(O.Z, {
                user: t,
                themeType: Z.l.SIDEBAR,
                shouldShowTooltip: null === F.interactionType
              }), t.bot ? (0, r.jsx)(v.Z, {
                user: t
              }) : (0, r.jsx)(E.Z, {
                type: "banner",
                user: t
              })]
            }), (0, r.jsxs)("div", {
              className: N.header,
              children: [(0, r.jsx)(_.Z, {
                user: t,
                displayProfile: w,
                themeType: Z.l.SIDEBAR,
                animateOnHover: !B,
                className: N.banner
              }), (0, r.jsx)(C.Z, {
                userId: t.id,
                className: N.toast
              }), (0, r.jsx)(y.Z, {
                location: "UserProfileSidebar",
                user: t,
                displayProfile: w,
                channelId: f.id,
                themeType: Z.l.SIDEBAR,
                onOpenProfile: T ? true : G
              }), (0, r.jsx)(S.Z, {
                location: "UserProfileSidebar",
                user: t,
                channelId: f.id,
                themeType: Z.l.SIDEBAR,
                disableToolbar: t.bot
              })]
            }), (0, r.jsx)(P.Z, {
              user: t,
              currentUser: n,
              displayProfile: w,
              channel: f,
              isHovering: null == F.interactionType && B,
              onOpenProfile: T ? true : G
            }), (0, r.jsx)(I.Z, {
              user: t,
              channelId: f.id
            })]
          }), !T && (0, r.jsx)(R, {
            handleOpenProfile: G,
            analyticsLocations: D,
            context: L
          }), (null == w ? true : w.profileEffectId) != null && (0, r.jsx)(p.Z, {
            profileEffectId: null == w ? true : w.profileEffectId,
            isHovering: B,
            urlQueryString: "dmView"
          })]
        })
      })
    })
  })
}
let R = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, s] = i.useState("interactive-normal");
  return (0, r.jsx)("div", {
    className: N.footer,
    children: (0, r.jsx)(o.P3F, {
      onMouseEnter: () => s("interactive-hover"),
      onMouseLeave: () => s("interactive-normal"),
      onClick: () => {
        t(), (0, f.pQ)(A({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: N.footerButton,
      children: (0, r.jsx)(o.Text, {
        color: a,
        variant: "text-sm/normal",
        children: T.intl.string(T.t["+Xp3ho"])
      })
    })
  })
}