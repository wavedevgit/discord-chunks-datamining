/** Chunk was on 50872 **/
/** chunk id: 442673, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk601582 = require("./601582.js");
let f = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: f,
    onClose: h
  } = e, p = o.useCallback(() => {
    h()
  }, [h]), j = (0, a.Z)(), [m, g] = o.useState(false), [x, y] = o.useState(false), O = o.useCallback(() => {
    y(true), g(false)
  }, []), {
    disconnectLinkRequest: v,
    isDisconnectLoading: k
  } = (0, c.G)({
    onSuccess: p,
    onError: O
  });
  return (0, n.jsx)(l.Z, {
    transitionState: f,
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault(), v(r.id)
      },
      children: [(0, n.jsx)(l.Z.Error, {
        error: x ? u.intl.string(d.default.krIDd3) : true
      }), (0, n.jsxs)(s.hzk, {
        "data-migration-pending": true,
        children: [(0, n.jsx)(l.Z.Header, {
          currentUser: t,
          otherUser: r,
          header: u.intl.formatToPlainString(d.default.NMSTb2, {
            isAdult: String(j)
          }),
          icon: (0, n.jsx)(s.Dio, {
            size: "md",
            color: "currentColor",
            className: b.closeIcon
          })
        }), (0, n.jsx)(l.Z.Notice, {
          notice: j ? u.intl.string(d.default.EvMGLS) : u.intl.string(d.default.f1SUeX)
        }), (0, n.jsx)(i.VL, {
          className: b.acknowledgementCheckbox,
          checked: m,
          onChange: e => {
            g(e), y(false)
          },
          label: j ? u.intl.string(d.default["/MYCeX"]) : u.intl.string(d.default.VJaHUV)
        })]
      }), (0, n.jsx)(s.mzw, {
        "data-migration-pending": true,
        children: (0, n.jsx)(l.Z.ButtonFooter, {
          children: (0, n.jsxs)(s.hE2, {
            direction: "horizontal-reverse",
            children: [(0, n.jsx)(s.zxk, {
              variant: "secondary",
              size: "sm",
              text: u.intl.string(u.t["ETE/oK"]),
              type: "button",
              onClick: h,
              disabled: k
            }), (0, n.jsx)(s.zxk, {
              variant: "critical-primary",
              size: "sm",
              text: u.intl.string(d.default["c5L+sr"]),
              type: "submit",
              disabled: !m || k,
              loading: k
            })]
          })
        })
      })]
    })
  })
}