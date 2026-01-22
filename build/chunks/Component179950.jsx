/** Chunk was on 43139 **/
/** chunk id: 179950, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk10005 = require("./10005.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk229468 = require("./229468.js");
let u = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: u,
    onClose: b
  } = e, f = l.useCallback(() => {
    b()
  }, [b]), p = t.nsfwAllowed, [j, y] = l.useState(false), [x, g] = l.useState(false), O = l.useCallback(() => {
    g(true), y(false)
  }, []), {
    disconnectLinkRequest: h,
    isDisconnectLoading: m
  } = (0, s.A)({
    onSuccess: f,
    onError: O
  });
  return (0, n.jsxs)(c.dWK, {
    transitionState: u,
    onClose: b,
    children: [x && (0, n.jsx)(c.wx6, {
      type: "critical",
      children: o.intl.string(i.default.krIDdy)
    }), (0, n.jsxs)(c.cwr, {
      children: [(0, n.jsx)(a.A.Header, {
        currentUser: t,
        otherUser: r,
        header: o.intl.formatToPlainString(i.default["NMSTb/"], {
          isAdult: String(p)
        }),
        icon: (0, n.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: d.ut
        })
      }), (0, n.jsxs)(c.BJc, {
        gap: 16,
        children: [(0, n.jsx)(a.A.Notice, {
          notice: p ? o.intl.string(i.default.EvMGLT) : o.intl.string(i.default.f1SUeW)
        }), (0, n.jsx)(c.Checkbox, {
          checked: j,
          onChange: e => {
            y(e), g(false)
          },
          label: p ? o.intl.string(i.default["/MYCee"]) : o.intl.string(i.default.VJaHUb)
        })]
      })]
    }), (0, n.jsx)(c.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: o.intl.string(o.t["ETE/oC"]),
        onClick: b,
        disabled: m
      }, {
        variant: "critical-primary",
        text: o.intl.string(i.default["c5L+sl"]),
        onClick: () => {
          g(false), h(r.id)
        },
        disabled: !j || m,
        loading: m
      }]
    })]
  })
}