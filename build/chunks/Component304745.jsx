/** Chunk was on 32202 **/
/** chunk id: 304745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => S
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk317381 = require("./317381.js"),
  Chunk314490 = require("./314490.js"),
  Chunk374065 = require("./374065.js"),
  Chunk451576 = require("./451576.js"),
  Chunk526846 = require("./526846.jsx"),
  Chunk119315 = require("./119315.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk397698 = require("./397698.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk579185 = require("./579185.js"),
  Chunk301076 = require("./301076.jsx"),
  Chunk127379 = require("./127379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function S(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: S,
    setWhichPopoutIsOpen: P
  } = e, I = (0, l.e7)([c.ZP], () => c.ZP.isLaunchingActivity()), Z = (0, d.KF)(t.id), T = (0, d.g5)(Z), N = Z !== d.jy.CAN_LAUNCH || I, {
    isHovered: A,
    setIsHovered: w,
    onMouseEnter: M,
    onMouseLeave: R
  } = (0, _.Z)(200, 300), k = (0, u.p)({
    surface: s.eR.VOICE_LAUNCHER
  }), L = (0, l.e7)([c.ZP], () => null != c.ZP.getSelfEmbeddedActivityForLocation(c.ZP.getConnectedActivityLocation())), D = !N, U = i.useCallback(e => {
    "focus" !== e.type && M()
  }, [M]), B = (0, C.bp)() === O.IlC.POPOUT, {
    parentAnalyticsLocation: H,
    newestAnalyticsLocation: V
  } = (0, m.ZP)(), F = i.useCallback(() => {
    (0, b.v)(H, b.d.ACTIVITY), (0, g.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: B,
      analyticsLocation: V
    })
  }, [t, B, V, H]), G = [];
  N || G.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, p.Z)(t.id) && !N && G.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), N || G.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
  let z = i.useRef(false),
    W = i.useRef(null);
  return (0, r.jsx)(y.ZP, {
    contentTypes: G,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, s = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !A;
      return z.current && !s && l(j.L.AUTO_DISMISS), z.current !== s && (z.current = s), (0, r.jsx)(o.yRy, {
        targetElementRef: W,
        fixed: true,
        shouldShow: A && (S === x.D.ACTIVITY || null == S),
        animation: o.yRy.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          w(false), null == P || P(true)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: i
          } = e;
          return D ? (0, r.jsx)(h.m, {
            ref: e => {
              null == i || i(e)
            },
            channel: t,
            closePopout: n,
            onMouseEnter: M,
            onMouseLeave: R,
            isHovered: A,
            onClick: () => l(j.L.UNKNOWN)
          }) : (0, r.jsx)(r.Fragment, {})
        },
        children: () => (0, r.jsx)(y.Xf, {
          contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
          latestVersion: k,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(o.ua7, {
                text: E.intl.string(E.t.P8vmUl),
                color: o.FGA.BRAND,
                forceOpen: true,
                shouldShow: s,
                children: e => {
                  var o, s;
                  return (0, r.jsx)("div", (o = function(e) {
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
                  }({
                    ref: W
                  }, e), s = s = {
                    children: (0, r.jsx)(v.Z, {
                      disabled: N,
                      "aria-label": T,
                      label: D ? true : T,
                      isActivityActive: L,
                      onClick: () => {
                        F(), (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(j.L.TAKE_ACTION), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(j.L.TAKE_ACTION)
                      },
                      onMouseEnter: U,
                      onMouseLeave: R
                    })
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(s)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
                  }), o))
                }
              }), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, r.jsx)(f.r, {
                top: 2,
                right: 2,
                size: 6
              }) : null]
            })
          }
        })
      })
    }
  })
}