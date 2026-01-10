/** Chunk was on 81985 **/
/** chunk id: 705742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => I
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function I(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: I,
    setWhichPopoutIsOpen: P
  } = e, Z = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()), N = (0, p.KF)(t.id), T = (0, p.g5)(N), A = N !== p.jy.CAN_LAUNCH || Z, {
    isHovered: w,
    setIsHovered: R,
    onMouseEnter: D,
    onMouseLeave: M
  } = (0, j.Z)(200, 300), k = (0, d.p)({
    surface: c.eR.VOICE_LAUNCHER
  }), L = (0, l.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())), U = !A, G = i.useCallback(e => {
    "focus" !== e.type && D()
  }, [D]), B = (0, O.bp)() === E.IlC.POPOUT, {
    parentAnalyticsLocation: F,
    newestAnalyticsLocation: H
  } = (0, m.ZP)(), V = i.useCallback(() => {
    (0, y.v)(F, y.d.ACTIVITY), (0, b.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: B,
      analyticsLocation: H
    })
  }, [t, B, H, F]), z = [];
  A || z.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, f.Z)(t.id) && !A && z.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), A || z.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
  let W = i.useRef(false),
    K = i.useRef(null);
  return (0, r.jsx)(v.ZP, {
    contentTypes: z,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, c = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !w;
      return W.current && !c && l(S.L.AUTO_DISMISS), W.current !== c && (W.current = c), (0, r.jsx)(s.yRy, {
        targetElementRef: K,
        fixed: true,
        shouldShow: w && (I === C.D.ACTIVITY || null == I),
        animation: s.yRy.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          R(false), null == P || P(true)
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
            onMouseEnter: D,
            onMouseLeave: M,
            isHovered: w,
            onClick: () => l(S.L.UNKNOWN)
          }) : (0, r.jsx)(r.Fragment, {})
        },
        children: () => (0, r.jsx)(v.Xf, {
          contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
          latestVersion: k,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(o.u, {
                text: _.intl.string(_.t.P8vmUv),
                forceOpen: true,
                shouldShow: c,
                children: (0, r.jsx)("div", {
                  ref: K,
                  children: (0, r.jsx)(x.Z, {
                    disabled: A,
                    "aria-label": T,
                    label: U ? true : T,
                    isActivityActive: L,
                    onClick: () => {
                      V(), (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(S.L.TAKE_ACTION), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(S.L.TAKE_ACTION)
                    },
                    onMouseEnter: G,
                    onMouseLeave: M
                  })
                })
              }), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, r.jsx)(g.r, {
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