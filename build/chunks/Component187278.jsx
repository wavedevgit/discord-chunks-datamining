/** Chunk was on 17219 **/
/** chunk id: 187278, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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
    transitionState: c,
    onClose: b
  } = e, [f, y] = l.useState(false), j = l.useCallback(() => {
    y(true)
  }, []), O = l.useCallback(() => {
    b()
  }, [b]), m = t.nsfwAllowed, {
    cancelLinkRequest: x,
    isCancelLoading: h
  } = (0, s.A)({
    onError: j,
    onSuccess: O
  });
  return a()(m, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, n.jsxs)(o.dWK, {
    transitionState: c,
    onClose: b,
    children: [f && (0, n.jsx)(o.wx6, {
      type: "critical",
      children: u.intl.string(d.default["6gyAQZ"])
    }), (0, n.jsx)(o.cwr, {
      children: (0, n.jsx)(i.A.Header, {
        currentUser: t,
        otherUser: r,
        header: u.intl.string(d.default.HynllX),
        icon: (0, n.jsx)(o.PGe, {
          size: "md",
          color: "currentColor",
          className: p.u
        })
      })
    }), (0, n.jsx)(o.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: u.intl.string(d.default.czincX),
        onClick: b,
        disabled: h
      }, {
        variant: "critical-primary",
        text: u.intl.string(d.default.mK40bk),
        onClick: () => {
          y(false), x(r.id)
        },
        disabled: h || f,
        loading: h
      }]
    })]
  })
}