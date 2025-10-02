/** Chunk was on 91053 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk137317 = require("./137317.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk612600 = require("./612600.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk952124 = require("./952124.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk481932 = require("./481932.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk350207 = require("./350207.jsx"),
  Chunk277117 = require("./277117.jsx"),
  Chunk52639 = require("./52639.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231688 = require("./231688.js");

function D(e) {
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

function L(e) {
  var t;
  let {
    user: n,
    currentUser: f,
    channel: w
  } = e, L = __OVERLAY__, k = (0, g.ZP)(n.id), U = (0, c.ZP)(), G = i.useRef(Date.now()), {
    analyticsLocations: H
  } = (0, u.ZP)(d.Z.USER_PROFILE_SIDEBAR), F = (0, h.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: w.id
  }), B = i.useRef(null), z = (0, o.Z)(B), V = (0, b.$m)(), W = (0, s.q_F)({
    opacity: +(null != V.interactionType),
    config: {
      duration: 150
    }
  }), Y = e => {
    (0, y.openUserProfileModal)(D({
      sourceAnalyticsLocations: H,
      hideRestrictedProfile: true
    }, F, e))
  }, q = (0, m.Z)({
    location: "UserProfileSidebar"
  }), K = (null == k ? true : k.widgets) != null && k.widgets.length > 0;
  return (0, r.jsx)(u.Gt, {
    value: H,
    children: (0, r.jsx)(h.Mt, {
      value: F,
      openedAt: G.current,
      fetchStartedAt: null == k ? true : k.fetchStartedAt,
      fetchEndedAt: null == k ? true : k.fetchEndedAt,
      isLoaded: null == k ? true : k.isLoaded,
      children: (0, r.jsx)(b.NJ, {
        value: V,
        children: (0, r.jsxs)(x.Z, {
          ref: B,
          user: n,
          displayProfile: k,
          themeType: R.l.SIDEBAR,
          themeOverride: U,
          children: [null != V.interactionType && (0, r.jsx)(l.animated.div, {
            style: W,
            className: A.backdrop
          }), (0, r.jsxs)(a.u2D, {
            children: [(0, r.jsxs)(C.Z, {
              children: [(0, r.jsx)(I.Z, {
                user: n,
                themeType: R.l.SIDEBAR,
                shouldShowTooltip: null === V.interactionType
              }), n.bot ? (0, r.jsx)(v.Z, {
                user: n
              }) : (0, r.jsx)(E.Z, {
                type: "banner",
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: A.header,
              children: [(0, r.jsx)(O.Z, {
                user: n,
                displayProfile: k,
                themeType: R.l.SIDEBAR,
                animateOnHover: !z,
                className: A.banner
              }), (0, r.jsx)(j.Z, {
                userId: n.id,
                className: A.toast
              }), (0, r.jsx)(_.Z, {
                user: n,
                displayProfile: k,
                channelId: w.id,
                themeType: R.l.SIDEBAR,
                onOpenProfile: L ? true : Y
              }), (0, r.jsx)(S.Z, {
                user: n,
                channelId: w.id,
                themeType: R.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(P.Z, {
              user: n,
              currentUser: f,
              displayProfile: k,
              channel: w,
              isHovering: null == V.interactionType && z,
              onOpenProfile: L ? true : Y
            }), q && K && (0, r.jsx)("div", {
              className: A.widgetBreadcrumb,
              children: (0, r.jsx)(Z.Z, {
                widgets: k.widgets,
                onClick: () => {
                  null == Y || Y({
                    section: N.oh.WIDGETS
                  })
                }
              })
            }), (0, r.jsx)(T.Z, {
              user: n,
              channelId: w.id
            })]
          }), !L && (0, r.jsx)(M, {
            handleOpenProfile: Y,
            analyticsLocations: H,
            context: F
          }), (null == k ? true : k.profileEffect) != null && (0, r.jsx)(p.Z, {
            skuId: null == k || null == (t = k.profileEffect) ? true : t.skuId,
            isHovering: z,
            urlQueryString: "dmView"
          })]
        })
      })
    })
  })
}
let M = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, o] = i.useState("interactive-normal");
  return (0, r.jsx)("div", {
    className: A.footer,
    children: (0, r.jsx)(s.P3F, {
      onMouseEnter: () => o("interactive-hover"),
      onMouseLeave: () => o("interactive-normal"),
      onClick: () => {
        t(), (0, f.pQ)(D({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: A.footerButton,
      children: (0, r.jsx)(s.Text, {
        color: a,
        variant: "text-sm/normal",
        children: w.intl.string(w.t["+Xp3ho"])
      })
    })
  })
}