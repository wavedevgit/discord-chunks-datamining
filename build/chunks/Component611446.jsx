/** Chunk was on 89650 **/
/** chunk id: 611446, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => x,
  default: () => p
}), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk367408 = require("./367408.js"),
  Chunk473092 = require("./473092.js"),
  Chunk419672 = require("./419672.jsx"),
  Chunk858597 = require("./858597.jsx"),
  Chunk486213 = require("./486213.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk523547 = require("./523547.js"),
  x = ((i = {}).ACTIONS = "ACTIONS", i.SAFETY_TIPS = "SAFETY_TIPS", i.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS", i);
let p = t => {
  let {
    onClose: e,
    channelId: n,
    warningId: i,
    warningType: x,
    otherUserId: p,
    transitionState: b
  } = t, E = null != (0, o.M)(n), [A, h] = r.useState("ACTIONS"), O = r.useCallback(t => {
    (0, c.qc)({
      channelId: n,
      warningId: i,
      warningType: x,
      senderId: p,
      cta: t,
      isNudgeWarning: E
    })
  }, [n, i, x, p, E]), g = r.useCallback(t => {
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
    switch (A) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, s.jsx)(g, {
          text: _.intl.string(_.t["13/7kZ"]),
          onClick: () => h("ACTIONS")
        });
      default:
        return null
    }
  }, [A, g]), N = r.useCallback(() => {
    switch (A) {
      case "SAFETY_TIPS":
        return _.intl.string(_.t.EtNxi4);
      case "ABOUT_SAFETY_ALERTS":
        return _.intl.string(_.t.qI14KC);
      default:
        return _.intl.string(_.t.MAhAp6)
    }
  }, [A]), j = r.useCallback(t => {
    h(t)
  }, [h]);
  return (0, s.jsxs)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: b,
    "aria-label": _.intl.string(_.t.eXlt09),
    size: l.CgR.SMALL,
    parentComponent: "SafetyToolsModal",
    children: [(0, s.jsx)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: S.modalHeader,
      justify: a.Z.Justify.CENTER,
      children: (0, s.jsx)(l.X6q, {
        variant: "heading-xl/semibold",
        children: N()
      })
    }), (0, s.jsx)(l.Ttm, {
      children: (0, s.jsxs)(l.MyZ, {
        activeSlide: A,
        width: 440,
        children: [(0, s.jsx)(l.Mi4, {
          id: "ACTIONS",
          children: (0, s.jsx)(T.Z, {
            otherUserId: p,
            channelId: n,
            warningId: i,
            warningType: x,
            transitionToSlide: j
          })
        }), (0, s.jsx)(l.Mi4, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, s.jsx)(d.Z, {
            channelId: n,
            onClose: () => {
              e(), O(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
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
      children: [(0, s.jsx)(g, {
        text: _.intl.string(_.t.cpT0Cg),
        onClick: () => {
          e(), O(c.NM.USER_SAFETY_TOOLS_DISMISS)
        }
      }), m()]
    })]
  })
}