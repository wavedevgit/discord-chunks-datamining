/** Chunk was on 17219 **/
/** chunk id: 187278, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk10005 = require("./10005.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk528427 = require("./528427.js");
let b = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: b
  } = e, [f, y] = l.useState(false), j = l.useCallback(() => {
    y(true)
  }, []), O = l.useCallback(() => {
    b()
  }, [b]), h = t.nsfwAllowed, {
    cancelLinkRequest: m,
    isCancelLoading: x
  } = (0, i.A)({
    onError: j,
    onSuccess: O
  });
  return c()(h, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, n.jsxs)(s.dWK, {
    transitionState: o,
    onClose: b,
    children: [f && (0, n.jsx)(s.wx6, {
      type: "critical",
      children: u.intl.string(d.default["6gyAQZ"])
    }), (0, n.jsx)(s.cwr, {
      children: (0, n.jsx)(a.A.Header, {
        currentUser: t,
        otherUser: r,
        header: u.intl.string(d.default.HynllX),
        icon: (0, n.jsx)(s.PGe, {
          size: "md",
          color: "currentColor",
          className: p.u
        })
      })
    }), (0, n.jsx)(s.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: u.intl.string(d.default.czincX),
        onClick: b,
        disabled: x
      }, {
        variant: "critical-primary",
        text: u.intl.string(d.default.mK40bk),
        onClick: () => {
          y(false), m(r.id)
        },
        disabled: x || f,
        loading: x
      }]
    })]
  })
}