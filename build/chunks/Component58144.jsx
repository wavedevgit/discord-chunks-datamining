/** Chunk was on 31385 **/
/** chunk id: 58144, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk427262 = require("./427262.js"),
  Chunk10005 = require("./10005.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk299628 = require("./299628.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk319530 = require("./319530.js");
let j = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: j
  } = e, x = l.useCallback(() => {
    j()
  }, [j]), y = t.nsfwAllowed, [m, h] = l.useState(false), O = l.useCallback(() => {
    h(true)
  }, []), {
    acceptLinkRequest: g,
    isAcceptLoading: w
  } = (0, c.A)({
    onError: O,
    onSuccess: x
  });
  return a()(!y, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, n.jsxs)(s.dWK, {
    transitionState: o,
    onClose: j,
    "aria-label": f.intl.string(p.default.rlNJwZ),
    children: [m && (0, n.jsx)(s.wx6, {
      type: "critical",
      children: f.intl.string(p.default.pegSM5)
    }), (0, n.jsxs)(s.cwr, {
      children: [(0, n.jsx)(d.A.Header, {
        currentUser: t,
        otherUser: r,
        header: f.intl.string(p.default.rlNJwZ),
        icon: (0, n.jsx)(s.qYV, {
          size: "md",
          color: "currentColor",
          className: b.wP
        })
      }), (0, n.jsxs)(d.A.Content, {
        children: [(0, n.jsx)(u.A, {
          inModal: true
        }), (0, n.jsx)(s.Text, {
          className: b.ed,
          variant: "text-xs/normal",
          color: "text-default",
          children: f.intl.format(p.default.snlFqR, {
            username: i.Ay.getName(r)
          })
        })]
      })]
    }), (0, n.jsx)(s.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: f.intl.string(f.t["ETE/oC"]),
        onClick: j,
        disabled: w
      }, {
        variant: "primary",
        text: f.intl.string(p.default["wI/jo3"]),
        onClick: () => {
          h(false), g(r.id)
        },
        disabled: w,
        loading: w
      }]
    })]
  })
}