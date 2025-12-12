/** Chunk was on 50872 **/
/** chunk id: 442673, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk957656 = require("./957656.jsx"),
  Chunk435757 = require("./435757.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk601582 = require("./601582.js");
let u = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: u,
    onClose: f
  } = e, b = o.useCallback(() => {
    f()
  }, [f]), p = t.nsfwAllowed, [h, j] = o.useState(false), [g, x] = o.useState(false), y = o.useCallback(() => {
    x(true), j(false)
  }, []), {
    disconnectLinkRequest: O,
    isDisconnectLoading: m
  } = (0, c.G)({
    onSuccess: b,
    onError: y
  });
  return (0, n.jsxs)(i.IX, {
    transitionState: u,
    onClose: f,
    children: [g && (0, n.jsx)(i.M14, {
      type: "critical",
      children: a.intl.string(s.default.krIDdy)
    }), (0, n.jsxs)(i.fef, {
      children: [(0, n.jsx)(l.Z.Header, {
        currentUser: t,
        otherUser: r,
        header: a.intl.formatToPlainString(s.default["NMSTb/"], {
          isAdult: String(p)
        }),
        icon: (0, n.jsx)(i.Dio, {
          size: "md",
          color: "currentColor",
          className: d.closeIcon
        })
      }), (0, n.jsxs)(i.Kqy, {
        gap: 16,
        children: [(0, n.jsx)(l.Z.Notice, {
          notice: p ? a.intl.string(s.default.EvMGLT) : a.intl.string(s.default.f1SUeW)
        }), (0, n.jsx)(i.Checkbox, {
          checked: h,
          onChange: e => {
            j(e), x(false)
          },
          label: p ? a.intl.string(s.default["/MYCee"]) : a.intl.string(s.default.VJaHUb)
        })]
      })]
    }), (0, n.jsx)(i.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: a.intl.string(a.t["ETE/oC"]),
        onClick: f,
        disabled: m
      }, {
        variant: "critical-primary",
        text: a.intl.string(s.default["c5L+sl"]),
        onClick: () => {
          x(false), O(r.id)
        },
        disabled: !h || m,
        loading: m
      }]
    })]
  })
}