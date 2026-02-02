/** Chunk was on 43139 **/
/** chunk id: 179950, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk10005 = require("./10005.js"),
  Chunk438732 = require("./438732.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk229468 = require("./229468.js");
let b = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: b,
    onClose: f
  } = e, p = l.useCallback(() => {
    f()
  }, [f]), j = (0, s.A)(), [y, g] = l.useState(false), [x, h] = l.useState(false), O = l.useCallback(() => {
    h(true), g(false)
  }, []), {
    disconnectLinkRequest: m,
    isDisconnectLoading: v
  } = (0, o.A)({
    onSuccess: p,
    onError: O
  });
  return (0, n.jsxs)(i.dWK, {
    transitionState: b,
    onClose: f,
    children: [x && (0, n.jsx)(i.wx6, {
      type: "critical",
      children: d.intl.string(a.default.krIDdy)
    }), (0, n.jsxs)(i.cwr, {
      children: [(0, n.jsx)(c.A.Header, {
        currentUser: t,
        otherUser: r,
        header: d.intl.formatToPlainString(a.default["NMSTb/"], {
          isAdult: String(j)
        }),
        icon: (0, n.jsx)(i.PGe, {
          size: "md",
          color: "currentColor",
          className: u.ut
        })
      }), (0, n.jsxs)(i.BJc, {
        gap: 16,
        children: [(0, n.jsx)(c.A.Notice, {
          notice: j ? d.intl.string(a.default.EvMGLT) : d.intl.string(a.default.f1SUeW)
        }), (0, n.jsx)(i.Checkbox, {
          checked: y,
          onChange: e => {
            g(e), h(false)
          },
          label: j ? d.intl.string(a.default["/MYCee"]) : d.intl.string(a.default.VJaHUb)
        })]
      })]
    }), (0, n.jsx)(i.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: d.intl.string(d.t["ETE/oC"]),
        onClick: f,
        disabled: v
      }, {
        variant: "critical-primary",
        text: d.intl.string(a.default["c5L+sl"]),
        onClick: () => {
          h(false), m(r.id)
        },
        disabled: !y || v,
        loading: v
      }]
    })]
  })
}