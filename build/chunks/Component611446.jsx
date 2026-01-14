/** Chunk was on 89650 **/
/** chunk id: 611446, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => x,
  default: () => E
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk367408 = require("./367408.js"),
  Chunk473092 = require("./473092.js"),
  Chunk419672 = require("./419672.jsx"),
  Chunk858597 = require("./858597.jsx"),
  Chunk486213 = require("./486213.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk169418 = require("./169418.js"),
  x = ((i = {}).ACTIONS = "ACTIONS", i.SAFETY_TIPS = "SAFETY_TIPS", i.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS", i);
let E = t => {
  let {
    onClose: e,
    channelId: n,
    warningId: i,
    warningType: x,
    otherUserId: E,
    transitionState: A
  } = t, g = null != (0, o.M)(n), [O, N] = r.useState("ACTIONS"), h = r.useCallback(t => {
    (0, c.qc)({
      channelId: n,
      warningId: i,
      warningType: x,
      senderId: E,
      cta: t,
      isNudgeWarning: g
    })
  }, [n, i, x, E, g]), b = r.useCallback(t => {
    let {
      text: e,
      onClick: n
    } = t;
    return (0, s.jsx)(l.Avr, {
      onClick: n,
      text: e,
      variant: "secondary",
      textVariant: "text-sm/normal"
    })
  }, []), m = r.useCallback(() => {
    switch (O) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, s.jsx)(b, {
          text: S.intl.string(S.t["13/7kX"]),
          onClick: () => N("ACTIONS")
        });
      default:
        return null
    }
  }, [O, b]), p = r.useCallback(() => {
    switch (O) {
      case "SAFETY_TIPS":
        return S.intl.string(S.t.EtNxi6);
      case "ABOUT_SAFETY_ALERTS":
        return S.intl.string(S.t.qI14KM);
      default:
        return S.intl.string(S.t.MAhAp6)
    }
  }, [O]), j = r.useCallback(t => {
    N(t)
  }, [N]);
  return (0, s.jsxs)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: A,
    "aria-label": S.intl.string(S.t.eXlt01),
    size: l.CgR.SMALL,
    parentComponent: "SafetyToolsModal",
    children: [(0, s.jsx)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: _.modalHeader,
      justify: a.Z.Justify.CENTER,
      children: (0, s.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        children: p()
      })
    }), (0, s.jsx)(l.Ttm, {
      children: (0, s.jsxs)(l.MyZ, {
        activeSlide: O,
        width: 440,
        children: [(0, s.jsx)(l.Mi4, {
          id: "ACTIONS",
          children: (0, s.jsx)(d.Z, {
            otherUserId: E,
            channelId: n,
            warningId: i,
            warningType: x,
            transitionToSlide: j
          })
        }), (0, s.jsx)(l.Mi4, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, s.jsx)(T.Z, {
            channelId: n,
            onClose: () => {
              e(), h(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
            }
          })
        }), (0, s.jsx)(l.Mi4, {
          id: "SAFETY_TIPS",
          children: (0, s.jsx)(u.Z, {})
        })]
      })
    }), (0, s.jsxs)(l.mzw, {
      "data-migration-pending": true,
      justify: a.Z.Justify.BETWEEN,
      children: [(0, s.jsx)(b, {
        text: S.intl.string(S.t.cpT0Cq),
        onClick: () => {
          e(), h(c.NM.USER_SAFETY_TOOLS_DISMISS)
        }
      }), m()]
    })]
  })
}