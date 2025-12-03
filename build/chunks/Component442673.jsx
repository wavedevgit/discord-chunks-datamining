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
  Chunk744038 = require("./744038.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk601582 = require("./601582.js");
let u = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: u,
    onClose: f
  } = e, b = i.useCallback(() => {
    f()
  }, [f]), p = t.nsfwAllowed, [h, j] = i.useState(false), [g, y] = i.useState(false), x = i.useCallback(() => {
    y(true), j(false)
  }, []), {
    disconnectLinkRequest: O,
    isDisconnectLoading: m
  } = (0, c.G)({
    onSuccess: b,
    onError: x
  });
  return (0, n.jsxs)(o.IX, {
    transitionState: u,
    onClose: f,
    children: [g && (0, n.jsx)(o.M14, {
      type: "critical",
      children: s.intl.string(a.default.krIDdy)
    }), (0, n.jsxs)(o.fef, {
      children: [(0, n.jsx)(l.Z.Header, {
        currentUser: t,
        otherUser: r,
        header: s.intl.formatToPlainString(a.default["NMSTb/"], {
          isAdult: String(p)
        }),
        icon: (0, n.jsx)(o.Dio, {
          size: "md",
          color: "currentColor",
          className: d.closeIcon
        })
      }), (0, n.jsxs)(o.Kqy, {
        gap: 16,
        children: [(0, n.jsx)(l.Z.Notice, {
          notice: p ? s.intl.string(a.default.EvMGLT) : s.intl.string(a.default.f1SUeW)
        }), (0, n.jsx)(o.Checkbox, {
          checked: h,
          onChange: e => {
            j(e), y(false)
          },
          label: p ? s.intl.string(a.default["/MYCee"]) : s.intl.string(a.default.VJaHUb)
        })]
      })]
    }), (0, n.jsx)(o.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: s.intl.string(s.t["ETE/oC"]),
        onClick: f,
        disabled: m
      }, {
        variant: "critical-primary",
        text: s.intl.string(a.default["c5L+sl"]),
        onClick: () => {
          y(false), O(r.id)
        },
        disabled: !h || m,
        loading: m
      }]
    })]
  })
}