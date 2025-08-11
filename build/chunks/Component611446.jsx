/** Chunk was on 9738 **/
/** chunk id: 611446, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => _,
  default: () => b
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk367408 = require("./367408.js"),
  Chunk473092 = require("./473092.js"),
  Chunk419672 = require("./419672.jsx"),
  Chunk858597 = require("./858597.jsx"),
  Chunk486213 = require("./486213.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk692056 = require("./692056.js"),
  _ = ((i = {}).ACTIONS = "ACTIONS", i.SAFETY_TIPS = "SAFETY_TIPS", i.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS", i);
let b = t => {
  let {
    onClose: e,
    channelId: n,
    warningId: i,
    warningType: _,
    otherUserId: b,
    transitionState: O
  } = t, g = null != (0, o.M)(n), [E, h] = s.useState("ACTIONS"), p = s.useCallback(t => {
    (0, c.qc)({
      channelId: n,
      warningId: i,
      warningType: _,
      senderId: b,
      cta: t,
      isNudgeWarning: g
    })
  }, [n, i, _, b, g]), A = s.useCallback(t => {
    let {
      text: e,
      onClick: n
    } = t;
    return (0, r.jsx)(l.Avr, {
      onClick: n,
      text: e,
      variant: "secondary",
      textVariant: "text-sm/normal"
    })
  }, []), m = s.useCallback(() => {
    switch (E) {
      case "SAFETY_TIPS":
      case "ABOUT_SAFETY_ALERTS":
        return (0, r.jsx)(A, {
          text: S.intl.string(S.t["13/7kZ"]),
          onClick: () => h("ACTIONS")
        });
      default:
        return null
    }
  }, [E, A]), j = s.useCallback(() => {
    switch (E) {
      case "SAFETY_TIPS":
        return S.intl.string(S.t.EtNxi4);
      case "ABOUT_SAFETY_ALERTS":
        return S.intl.string(S.t.qI14KC);
      default:
        return S.intl.string(S.t.MAhAp6)
    }
  }, [E]), f = s.useCallback(t => {
    h(t)
  }, [h]);
  return (0, r.jsxs)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: O,
    "aria-label": S.intl.string(S.t.eXlt09),
    size: l.CgR.SMALL,
    parentComponent: "SafetyToolsModal",
    children: [(0, r.jsx)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: x.modalHeader,
      justify: a.Z.Justify.CENTER,
      children: (0, r.jsx)(l.X6q, {
        variant: "heading-xl/semibold",
        children: j()
      })
    }), (0, r.jsx)(l.Ttm, {
      children: (0, r.jsxs)(l.MyZ, {
        activeSlide: E,
        width: 440,
        children: [(0, r.jsx)(l.Mi4, {
          id: "ACTIONS",
          children: (0, r.jsx)(d.Z, {
            otherUserId: b,
            channelId: n,
            warningId: i,
            warningType: _,
            transitionToSlide: f
          })
        }), (0, r.jsx)(l.Mi4, {
          id: "ABOUT_SAFETY_ALERTS",
          children: (0, r.jsx)(u.Z, {
            channelId: n,
            onClose: () => {
              e(), p(c.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS)
            }
          })
        }), (0, r.jsx)(l.Mi4, {
          id: "SAFETY_TIPS",
          children: (0, r.jsx)(T.Z, {})
        })]
      })
    }), (0, r.jsxs)(l.mzw, {
      "data-migration-pending": true,
      justify: a.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(A, {
        text: S.intl.string(S.t.cpT0Cg),
        onClick: () => {
          e(), p(c.NM.USER_SAFETY_TOOLS_DISMISS)
        }
      }), m()]
    })]
  })
}