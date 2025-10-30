/** Chunk was on 13873 **/
/** chunk id: 304745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => P
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
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

function P(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: P,
    setWhichPopoutIsOpen: I
  } = e, Z = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()), T = (0, p.KF)(t.id), N = (0, p.g5)(T), A = T !== p.jy.CAN_LAUNCH || Z, {
    isHovered: w,
    setIsHovered: M,
    onMouseEnter: R,
    onMouseLeave: D
  } = (0, v.Z)(200, 300), L = (0, d.p)({
    surface: c.eR.VOICE_LAUNCHER
  }), k = (0, l.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())), U = !A, B = i.useCallback(e => {
    "focus" !== e.type && R()
  }, [R]), F = (0, C.bp)() === E.IlC.POPOUT, {
    parentAnalyticsLocation: V,
    newestAnalyticsLocation: H
  } = (0, g.ZP)(), G = i.useCallback(() => {
    (0, _.v)(V, _.d.ACTIVITY), (0, b.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: F,
      analyticsLocation: H
    })
  }, [t, F, H, V]), W = [];
  A || W.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, f.Z)(t.id) && !A && W.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), A || W.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
  let z = i.useRef(false),
    q = i.useRef(null);
  return (0, r.jsx)(y.ZP, {
    contentTypes: W,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, c = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !w;
      return z.current && !c && l(j.L.AUTO_DISMISS), z.current !== c && (z.current = c), (0, r.jsx)(s.yRy, {
        targetElementRef: q,
        fixed: true,
        shouldShow: w && (P === x.D.ACTIVITY || null == P),
        animation: s.yRy.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          M(false), null == I || I(true)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: i
          } = e;
          return U ? (0, r.jsx)(h.m, {
            ref: e => {
              null == i || i(e)
            },
            channel: t,
            closePopout: n,
            onMouseEnter: R,
            onMouseLeave: D,
            isHovered: w,
            onClick: () => l(j.L.UNKNOWN)
          }) : (0, r.jsx)(r.Fragment, {})
        },
        children: () => (0, r.jsx)(y.Xf, {
          contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
          latestVersion: L,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(o.u, {
                text: S.intl.string(S.t.P8vmUv),
                forceOpen: true,
                shouldShow: c,
                children: (0, r.jsx)("div", {
                  ref: q,
                  children: (0, r.jsx)(O.Z, {
                    disabled: A,
                    "aria-label": N,
                    label: U ? true : N,
                    isActivityActive: k,
                    onClick: () => {
                      G(), (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(j.L.TAKE_ACTION), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(j.L.TAKE_ACTION)
                    },
                    onMouseEnter: B,
                    onMouseLeave: D
                  })
                })
              }), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, r.jsx)(m.r, {
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