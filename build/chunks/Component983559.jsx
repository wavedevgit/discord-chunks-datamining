/** Chunk was on 5665 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk202841 = require("./202841.js"),
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
  Chunk231688 = require("./231688.js");

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

function M(e) {
  var t;
  let {
    user: n,
    currentUser: f,
    channel: A
  } = e, M = __OVERLAY__, L = (0, m.ZP)(n.id), k = (0, c.ZP)(), U = i.useRef(Date.now()), {
    analyticsLocations: B
  } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR), F = (0, h.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: A.id
  }), G = i.useRef(null), H = (0, s.Z)(G), V = (0, g.$m)(), z = (0, o.q_F)({
    opacity: +(null != V.interactionType),
    config: {
      duration: 150
    }
  }), W = e => {
    (0, b.openUserProfileModal)(R({
      sourceAnalyticsLocations: B,
      hideRestrictedProfile: true
    }, F, e))
  }, q = (null == L ? true : L.widgets) != null && L.widgets.length > 0;
  return (0, r.jsx)(d.Gt, {
    value: B,
    children: (0, r.jsx)(h.Mt, {
      value: F,
      openedAt: U.current,
      fetchStartedAt: null == L ? true : L.fetchStartedAt,
      fetchEndedAt: null == L ? true : L.fetchEndedAt,
      isLoaded: null == L ? true : L.isLoaded,
      children: (0, r.jsx)(g.NJ, {
        value: V,
        children: (0, r.jsxs)(x.Z, {
          ref: G,
          user: n,
          displayProfile: L,
          themeType: N.l.SIDEBAR,
          themeOverride: k,
          children: [null != V.interactionType && (0, r.jsx)(l.animated.div, {
            style: z,
            className: w.backdrop
          }), (0, r.jsxs)(a.u2, {
            children: [(0, r.jsxs)(O.Z, {
              children: [(0, r.jsx)(j.Z, {
                user: n,
                themeType: N.l.SIDEBAR,
                shouldShowTooltip: null === V.interactionType
              }), n.bot ? (0, r.jsx)(v.Z, {
                user: n
              }) : (0, r.jsx)(E.Z, {
                type: "banner",
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: w.header,
              children: [(0, r.jsx)(y.Z, {
                user: n,
                displayProfile: L,
                themeType: N.l.SIDEBAR,
                animateOnHover: !H,
                className: w.banner
              }), (0, r.jsx)(C.Z, {
                userId: n.id,
                className: w.toast
              }), (0, r.jsx)(_.Z, {
                user: n,
                displayProfile: L,
                channelId: A.id,
                themeType: N.l.SIDEBAR,
                onOpenProfile: M ? true : W
              }), (0, r.jsx)(S.Z, {
                user: n,
                channelId: A.id,
                themeType: N.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(P.Z, {
              user: n,
              currentUser: f,
              displayProfile: L,
              channel: A,
              isHovering: null == V.interactionType && H,
              onOpenProfile: M ? true : W
            }), q && (0, r.jsx)("div", {
              className: w.widgetBreadcrumb,
              children: (0, r.jsx)(I.Z, {
                widgets: L.widgets,
                onClick: () => {
                  null == W || W({
                    section: T.oh.WIDGETS
                  })
                }
              })
            }), (0, r.jsx)(Z.Z, {
              user: n,
              channelId: A.id
            })]
          }), !M && (0, r.jsx)(D, {
            handleOpenProfile: W,
            analyticsLocations: B,
            context: F
          }), (null == L ? true : L.profileEffect) != null && (0, r.jsx)(p.Z, {
            profileEffectId: null == L || null == (t = L.profileEffect) ? true : t.id,
            isHovering: H,
            urlQueryString: "dmView"
          })]
        })
      })
    })
  })
}
let D = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, s] = i.useState("interactive-normal");
  return (0, r.jsx)("div", {
    className: w.footer,
    children: (0, r.jsx)(o.P3F, {
      onMouseEnter: () => s("interactive-hover"),
      onMouseLeave: () => s("interactive-normal"),
      onClick: () => {
        t(), (0, f.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: w.footerButton,
      children: (0, r.jsx)(o.Text, {
        color: a,
        variant: "text-sm/normal",
        children: A.intl.string(A.t["+Xp3ho"])
      })
    })
  })
}