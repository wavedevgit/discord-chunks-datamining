/** Chunk was on 42402 **/
/** chunk id: 543274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => S
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk933958 = require("./933958.js"),
  Chunk404522 = require("./404522.js"),
  Chunk782091 = require("./782091.js"),
  Chunk641703 = require("./641703.js"),
  Chunk807067 = require("./807067.jsx"),
  Chunk521588 = require("./521588.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk975412 = require("./975412.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk421773 = require("./421773.js"),
  Chunk168754 = require("./168754.jsx"),
  Chunk376086 = require("./376086.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function S(e) {
  let {
    channel: t,
    idle: n,
    whichPopoutIsOpen: S,
    setWhichPopoutIsOpen: I
  } = e, N = (0, i.bG)([u.Ay], () => u.Ay.isLaunchingActivity()), T = (0, p.et)(t.id), P = (0, p.dL)(T), w = T !== p.xy.CAN_LAUNCH || N, {
    isHovered: R,
    setIsHovered: D,
    onMouseEnter: L,
    onMouseLeave: M
  } = (0, j.A)(200, 300), G = (0, d.b)({
    surface: c.YI.VOICE_LAUNCHER
  }), k = (0, i.bG)([u.Ay], () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation())), U = !w, V = l.useCallback(e => {
    "focus" !== e.type && L()
  }, [L]), B = (0, O.Us)() === v.BRT.POPOUT, {
    parentAnalyticsLocation: H,
    newestAnalyticsLocation: F
  } = (0, m.Ay)(), Y = l.useCallback(() => {
    (0, A.X)(H, A.O.ACTIVITY), (0, b.A)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: B,
      analyticsLocation: F
    })
  }, [t, B, F, H]), K = [];
  w || K.push(s.M.ACTIVITIES_MINI_SHELF_SPARKLES), (0, h.A)(t.id) && !w && K.push(s.M.ACTIVITY_GDM_ROCKET_SPARKLE), w || K.push(s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
  let W = l.useRef(false),
    z = l.useRef(null);
  return (0, r.jsx)(y.Ay, {
    contentTypes: K,
    children: e => {
      let {
        visibleContent: l,
        markAsDismissed: i
      } = e, c = l === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !R;
      return W.current && !c && i(E.i.AUTO_DISMISS), W.current !== c && (W.current = c), (0, r.jsx)(o.YNO, {
        targetElementRef: z,
        fixed: true,
        shouldShow: R && (S === _.P.ACTIVITY || null == S),
        animation: o.YNO.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          D(false), null == I || I(true)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: l
          } = e;
          return U ? (0, r.jsx)(g.f, {
            ref: e => {
              null == l || l(e)
            },
            channel: t,
            closePopout: n,
            onMouseEnter: L,
            onMouseLeave: M,
            isHovered: R,
            onClick: () => i(E.i.UNKNOWN)
          }) : (0, r.jsx)(r.Fragment, {})
        },
        children: () => (0, r.jsx)(y.GY, {
          contentType: s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
          latestVersion: G,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(a.m, {
                text: C.intl.string(C.t.P8vmUv),
                forceOpen: true,
                shouldShow: c,
                children: (0, r.jsx)("div", {
                  ref: z,
                  children: (0, r.jsx)(x.A, {
                    disabled: w,
                    "aria-label": P,
                    label: U ? true : P,
                    isActivityActive: k,
                    onClick: () => {
                      Y(), (l === s.M.ACTIVITIES_MINI_SHELF_SPARKLES || l === s.M.ACTIVITY_GDM_ROCKET_SPARKLE || l === s.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === s.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && i(E.i.TAKE_ACTION), t === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(E.i.TAKE_ACTION)
                    },
                    onMouseEnter: V,
                    onMouseLeave: M
                  })
                })
              }), t === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, r.jsx)(f.a, {
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