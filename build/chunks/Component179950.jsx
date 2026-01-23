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
  }, [b]), p = t.nsfwAllowed, [j, y] = l.useState(false), [g, x] = l.useState(false), h = l.useCallback(() => {
    x(true), y(false)
  }, []), {
    disconnectLinkRequest: O,
    isDisconnectLoading: m
  } = (0, s.A)({
    onSuccess: f,
    onError: h
  });
  return (0, n.jsxs)(o.dWK, {
    transitionState: u,
    onClose: b,
    children: [g && (0, n.jsx)(o.wx6, {
      type: "critical",
      children: a.intl.string(c.default.krIDdy)
    }), (0, n.jsxs)(o.cwr, {
      children: [(0, n.jsx)(i.A.Header, {
        currentUser: t,
        otherUser: r,
        header: a.intl.formatToPlainString(c.default["NMSTb/"], {
          isAdult: String(p)
        }),
        icon: (0, n.jsx)(o.PGe, {
          size: "md",
          color: "currentColor",
          className: d.ut
        })
      }), (0, n.jsxs)(o.BJc, {
        gap: 16,
        children: [(0, n.jsx)(i.A.Notice, {
          notice: p ? a.intl.string(c.default.EvMGLT) : a.intl.string(c.default.f1SUeW)
        }), (0, n.jsx)(o.Checkbox, {
          checked: j,
          onChange: e => {
            y(e), x(false)
          },
          label: p ? a.intl.string(c.default["/MYCee"]) : a.intl.string(c.default.VJaHUb)
        })]
      })]
    }), (0, n.jsx)(o.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: a.intl.string(a.t["ETE/oC"]),
        onClick: b,
        disabled: m
      }, {
        variant: "critical-primary",
        text: a.intl.string(c.default["c5L+sl"]),
        onClick: () => {
          x(false), O(r.id)
        },
        disabled: !j || m,
        loading: m
      }]
    })]
  })
}