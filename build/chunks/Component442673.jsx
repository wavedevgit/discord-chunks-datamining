/** Chunk was on 50872 **/
/** chunk id: 442673, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk601582 = require("./601582.js");
let b = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: b,
    onClose: f
  } = e, h = i.useCallback(() => {
    f()
  }, [f]), p = (0, a.Z)(), [j, g] = i.useState(false), [m, x] = i.useState(false), y = i.useCallback(() => {
    x(true), g(false)
  }, []), {
    disconnectLinkRequest: O,
    isDisconnectLoading: v
  } = (0, c.G)({
    onSuccess: h,
    onError: y
  });
  return (0, n.jsx)(s.Z, {
    transitionState: b,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        x(false), e.preventDefault(), O(r.id)
      },
      children: [m && (0, n.jsx)(o.M14, {
        type: "critical",
        children: d.intl.string(l.default.krIDd3)
      }), (0, n.jsxs)(o.hzk, {
        "data-migration-pending": true,
        children: [(0, n.jsx)(s.Z.Header, {
          currentUser: t,
          otherUser: r,
          header: d.intl.formatToPlainString(l.default.NMSTb2, {
            isAdult: String(p)
          }),
          icon: (0, n.jsx)(o.Dio, {
            size: "md",
            color: "currentColor",
            className: u.closeIcon
          })
        }), (0, n.jsx)(s.Z.Notice, {
          notice: p ? d.intl.string(l.default.EvMGLS) : d.intl.string(l.default.f1SUeX)
        }), (0, n.jsx)("div", {
          className: u.acknowledgementCheckbox,
          children: (0, n.jsx)(o.Checkbox, {
            checked: j,
            onChange: e => {
              g(e), x(false)
            },
            label: p ? d.intl.string(l.default["/MYCeX"]) : d.intl.string(l.default.VJaHUV)
          })
        })]
      }), (0, n.jsx)(o.mzw, {
        "data-migration-pending": true,
        children: (0, n.jsx)(s.Z.ButtonFooter, {
          children: (0, n.jsxs)(o.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(o.Button, {
              variant: "secondary",
              size: "sm",
              text: d.intl.string(d.t["ETE/oK"]),
              type: "button",
              onClick: f,
              disabled: v
            }), (0, n.jsx)(o.Button, {
              variant: "critical-primary",
              size: "sm",
              text: d.intl.string(l.default["c5L+sr"]),
              type: "submit",
              disabled: !j || v,
              loading: v
            })]
          })
        })
      })]
    })
  })
}