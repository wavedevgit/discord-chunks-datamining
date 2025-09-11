/** Chunk was on 70127 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk938288 = require("./938288.js"),
  Chunk597312 = require("./597312.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk680295 = require("./680295.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk461133 = require("./461133.js"),
  Chunk687158 = require("./687158.js"),
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
  Chunk252748 = require("./252748.jsx"),
  Chunk277117 = require("./277117.jsx"),
  Chunk52639 = require("./52639.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk910455 = require("./910455.js");

function M(e) {
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

function D(e) {
  var t;
  let {
    user: n,
    currentUser: f,
    channel: w
  } = e, D = __OVERLAY__, k = (0, g.ZP)(n.id), U = (0, c.ZP)(), B = i.useRef(Date.now()), {
    analyticsLocations: G
  } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR), H = (0, h.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: w.id
  }), F = i.useRef(null), V = (0, s.Z)(F), z = (0, b.$m)(), W = (0, o.q_F)({
    opacity: +(null != z.interactionType),
    config: {
      duration: 150
    }
  }), q = e => {
    (0, y.openUserProfileModal)(M({
      sourceAnalyticsLocations: G,
      hideRestrictedProfile: true
    }, H, e))
  }, Y = (0, m.P)({
    location: "UserProfileSidebar"
  }), K = (null == k ? true : k.widgets) != null && k.widgets.length > 0;
  return (0, r.jsx)(d.Gt, {
    value: G,
    children: (0, r.jsx)(h.Mt, {
      value: H,
      openedAt: B.current,
      fetchStartedAt: null == k ? true : k.fetchStartedAt,
      fetchEndedAt: null == k ? true : k.fetchEndedAt,
      isLoaded: null == k ? true : k.isLoaded,
      children: (0, r.jsx)(b.NJ, {
        value: z,
        children: (0, r.jsxs)(x.Z, {
          ref: F,
          user: n,
          displayProfile: k,
          themeType: A.l.SIDEBAR,
          themeOverride: U,
          children: [null != z.interactionType && (0, r.jsx)(l.animated.div, {
            style: W,
            className: R.backdrop
          }), (0, r.jsxs)(a.u2, {
            children: [(0, r.jsxs)(j.Z, {
              children: [(0, r.jsx)(E.Z, {
                user: n,
                themeType: A.l.SIDEBAR,
                shouldShowTooltip: null === z.interactionType
              }), n.bot ? (0, r.jsx)(O.Z, {
                user: n
              }) : (0, r.jsx)(S.Z, {
                type: "banner",
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: R.header,
              children: [(0, r.jsx)(C.Z, {
                user: n,
                displayProfile: k,
                themeType: A.l.SIDEBAR,
                animateOnHover: !V,
                className: R.banner
              }), (0, r.jsx)(v.Z, {
                userId: n.id,
                className: R.toast
              }), (0, r.jsx)(_.Z, {
                user: n,
                displayProfile: k,
                channelId: w.id,
                themeType: A.l.SIDEBAR,
                onOpenProfile: D ? true : q
              }), (0, r.jsx)(I.Z, {
                user: n,
                channelId: w.id,
                themeType: A.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(Z.Z, {
              user: n,
              currentUser: f,
              displayProfile: k,
              channel: w,
              isHovering: null == z.interactionType && V,
              onOpenProfile: D ? true : q
            }), Y && K && (0, r.jsx)("div", {
              className: R.widgetBreadcrumb,
              children: (0, r.jsx)(P.Z, {
                widgets: k.gameWidgets,
                onClick: () => {
                  null == q || q({
                    section: N.oh.WIDGETS
                  })
                }
              })
            }), (0, r.jsx)(T.Z, {
              user: n,
              channelId: w.id
            })]
          }), !D && (0, r.jsx)(L, {
            handleOpenProfile: q,
            analyticsLocations: G,
            context: H
          }), (null == k ? true : k.profileEffect) != null && (0, r.jsx)(p.Z, {
            profileEffectId: null == k || null == (t = k.profileEffect) ? true : t.id,
            isHovering: V,
            urlQueryString: "dmView"
          })]
        })
      })
    })
  })
}
let L = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, s] = i.useState("interactive-normal");
  return (0, r.jsx)("div", {
    className: R.footer,
    children: (0, r.jsx)(o.P3F, {
      onMouseEnter: () => s("interactive-hover"),
      onMouseLeave: () => s("interactive-normal"),
      onClick: () => {
        t(), (0, f.pQ)(M({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: R.footerButton,
      children: (0, r.jsx)(o.Text, {
        color: a,
        variant: "text-sm/normal",
        children: w.intl.string(w.t["+Xp3ho"])
      })
    })
  })
}