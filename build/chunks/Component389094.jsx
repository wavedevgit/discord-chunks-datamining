/** Chunk was on 84811 **/
/** chunk id: 389094, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk10005 = require("./10005.js"),
  Chunk534654 = require("./534654.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk765488 = require("./765488.js");
let f = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: f
  } = e, [y, j] = l.useState(false), x = l.useCallback(() => {
    j(true)
  }, []), O = l.useCallback(() => {
    f()
  }, [f]), h = (0, a.A)(), {
    declineLinkRequest: m,
    isDeclineLoading: g
  } = (0, s.A)({
    onError: x,
    onSuccess: O
  });
  return i()(h, "FamilyCenterDeclineLinkModal should only be rendered for teens."), (0, n.jsxs)(c.dWK, {
    transitionState: o,
    onClose: f,
    children: [y && (0, n.jsx)(c.wx6, {
      type: "critical",
      children: p.intl.string(u.default.tJAUyn)
    }), (0, n.jsxs)(c.cwr, {
      children: [(0, n.jsx)(d.A.Header, {
        currentUser: t,
        otherUser: r,
        header: p.intl.string(u.default.teIRCR),
        icon: (0, n.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: b.u
        })
      }), (0, n.jsx)(d.A.Content, {
        children: (0, n.jsx)(d.A.Notice, {
          notice: p.intl.string(u.default.LcM8BS)
        })
      })]
    }), (0, n.jsx)(c.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: p.intl.string(p.t["ETE/oC"]),
        onClick: f,
        disabled: g
      }, {
        variant: "critical-primary",
        text: p.intl.string(u.default.dKxFcn),
        onClick: () => {
          j(false), m(r.id)
        },
        disabled: g,
        loading: g
      }]
    })]
  })
}