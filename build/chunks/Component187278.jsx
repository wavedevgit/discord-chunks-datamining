/** Chunk was on 17219 **/
/** chunk id: 187278, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk10005 = require("./10005.js"),
  Chunk438732 = require("./438732.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk528427 = require("./528427.js");
let f = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: f
  } = e, [y, j] = l.useState(false), O = l.useCallback(() => {
    j(true)
  }, []), h = l.useCallback(() => {
    f()
  }, [f]), m = (0, i.A)(), {
    cancelLinkRequest: x,
    isCancelLoading: g
  } = (0, a.A)({
    onError: O,
    onSuccess: h
  });
  return c()(m, "FamilyCenterCancelLinkModal should only be rendered for parents."), (0, n.jsxs)(s.dWK, {
    transitionState: o,
    onClose: f,
    children: [y && (0, n.jsx)(s.wx6, {
      type: "critical",
      children: p.intl.string(u.default["6gyAQZ"])
    }), (0, n.jsx)(s.cwr, {
      children: (0, n.jsx)(d.A.Header, {
        currentUser: t,
        otherUser: r,
        header: p.intl.string(u.default.HynllX),
        icon: (0, n.jsx)(s.PGe, {
          size: "md",
          color: "currentColor",
          className: b.u
        })
      })
    }), (0, n.jsx)(s.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: p.intl.string(u.default.czincX),
        onClick: f,
        disabled: g
      }, {
        variant: "critical-primary",
        text: p.intl.string(u.default.mK40bk),
        onClick: () => {
          j(false), x(r.id)
        },
        disabled: g || y,
        loading: g
      }]
    })]
  })
}