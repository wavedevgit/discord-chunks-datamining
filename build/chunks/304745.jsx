/** Chunk was on web.js **/
/** chunk id: 304745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => D
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk314490 = require("./314490.js"),
  Chunk374065 = require("./374065.js"),
  Chunk451576 = require("./451576.js"),
  Chunk526846 = require("./526846.js"),
  Chunk119315 = require("./119315.jsx"),
  Chunk906732 = require("./906732.js"),
  Chunk397698 = require("./397698.js"),
  Chunk522651 = require("./522651.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk579185 = require("./579185.js"),
  Chunk301076 = require("./301076.jsx"),
  Chunk127379 = require("./127379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = 300,
  w = 200;

function D(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: A,
    setWhichPopoutIsOpen: C
  } = e, D = (0, o.e7)([u.ZP], () => u.ZP.isLaunchingActivity()), L = (0, f.KF)(t.id), x = (0, f.g5)(L), M = L !== f.jy.CAN_LAUNCH || D, {
    isHovered: k,
    setIsHovered: j,
    onMouseEnter: U,
    onMouseLeave: G
  } = (0, y.Z)(w, P), B = (0, d.p)({
    surface: l.eR.VOICE_LAUNCHER
  }), Z = (0, o.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())), F = !M, V = i.useCallback(e => {
    "focus" !== e.type && U()
  }, [U]), H = (0, c.bp)() === I.IlC.POPOUT, {
    parentAnalyticsLocation: Y,
    newestAnalyticsLocation: W
  } = (0, m.ZP)(), K = i.useCallback(() => {
    (0, E.v)(Y, E.d.ACTIVITY), (0, g.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: H,
      analyticsLocation: W
    })
  }, [t, H, W, Y]), z = [];
  M || z.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, _.Z)(t.id) && !M && z.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), M || z.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
  let q = i.useRef(false),
    X = i.useRef(null);
  return <b.ZP contentTypes={z}>{e => {
      let {
        visibleContent: i,
        markAsDismissed: o
      } = e, l = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !k;
      return q.current && !l && o(T.L.AUTO_DISMISS), q.current !== l && (q.current = l), (0, r.jsx)(s.yRy, {
        targetElementRef: X,
        fixed: true,
        shouldShow: k && (A === v.D.ACTIVITY || null == A),
        animation: s.yRy.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          j(false), null == C || C(true)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: i
          } = e;
          return F ? (0, r.jsx)(p.m, {
            ref: e => {
              null == i || i(e)
            },
            channel: t,
            closePopout: n,
            onMouseEnter: U,
            onMouseLeave: G,
            isHovered: k,
            onClick: () => o(T.L.UNKNOWN)
          }) : (0, r.jsx)(r.Fragment, {})
        },
        children: () => (0, r.jsx)(b.Xf, {
          contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
          latestVersion: B,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.ua7, {
                text: S.intl.string(S.t.P8vmUl),
                color: s.FGA.BRAND,
                forceOpen: true,
                shouldShow: l,
                children: e => (0, r.jsx)("div", R(N({
                  ref: X
                }, e), {
                  children: (0, r.jsx)(O.Z, {
                    disabled: M,
                    "aria-label": x,
                    label: F ? true : x,
                    isActivityActive: Z,
                    onClick: () => {
                      K(), (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && o(T.L.TAKE_ACTION), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(T.L.TAKE_ACTION)
                    },
                    onMouseEnter: V,
                    onMouseLeave: G
                  })
                }))
              }), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, r.jsx)(h.r, {
                top: 2,
                right: 2,
                size: 6
              }) : null]
            })
          }
        })
      })
    }}</b.ZP>
}