/** Chunk was on 84811 **/
/** chunk id: 389094, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk10005 = require("./10005.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk765488 = require("./765488.js");
let b = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: b
  } = e, [f, y] = l.useState(false), j = l.useCallback(() => {
    y(true)
  }, []), x = l.useCallback(() => {
    b()
  }, [b]), O = t.nsfwAllowed, {
    declineLinkRequest: h,
    isDeclineLoading: m
  } = (0, c.A)({
    onError: j,
    onSuccess: x
  });
  return i()(!O, "FamilyCenterDeclineLinkModal should only be rendered for teens."), (0, n.jsxs)(s.dWK, {
    transitionState: o,
    onClose: b,
    children: [f && (0, n.jsx)(s.wx6, {
      type: "critical",
      children: u.intl.string(d.default.tJAUyn)
    }), (0, n.jsxs)(s.cwr, {
      children: [(0, n.jsx)(a.A.Header, {
        currentUser: t,
        otherUser: r,
        header: u.intl.string(d.default.teIRCR),
        icon: (0, n.jsx)(s.PGe, {
          size: "md",
          color: "currentColor",
          className: p.u
        })
      }), (0, n.jsx)(a.A.Content, {
        children: (0, n.jsx)(a.A.Notice, {
          notice: u.intl.string(d.default.LcM8BS)
        })
      })]
    }), (0, n.jsx)(s.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: u.intl.string(u.t["ETE/oC"]),
        onClick: b,
        disabled: m
      }, {
        variant: "critical-primary",
        text: u.intl.string(d.default.dKxFcn),
        onClick: () => {
          y(false), h(r.id)
        },
        disabled: m,
        loading: m
      }]
    })]
  })
}