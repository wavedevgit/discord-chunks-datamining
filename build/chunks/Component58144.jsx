/** Chunk was on 31385 **/
/** chunk id: 58144, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk427262 = require("./427262.js"),
  Chunk10005 = require("./10005.js"),
  Chunk534654 = require("./534654.js"),
  Chunk208993 = require("./208993.jsx"),
  Chunk299628 = require("./299628.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk319530 = require("./319530.js");
let x = e => {
  let {
    currentUser: t,
    otherUser: r,
    transitionState: o,
    onClose: x
  } = e, y = l.useCallback(() => {
    x()
  }, [x]), m = (0, d.A)(), [h, O] = l.useState(false), g = l.useCallback(() => {
    O(true)
  }, []), {
    acceptLinkRequest: w,
    isAcceptLoading: v
  } = (0, c.A)({
    onError: g,
    onSuccess: y
  });
  return a()(m, "FamilyCenterAcceptLinkModal should only be rendered for teens."), (0, n.jsxs)(s.dWK, {
    transitionState: o,
    onClose: x,
    "aria-label": b.intl.string(f.default.rlNJwZ),
    children: [h && (0, n.jsx)(s.wx6, {
      type: "critical",
      children: b.intl.string(f.default.pegSM5)
    }), (0, n.jsxs)(s.cwr, {
      children: [(0, n.jsx)(u.A.Header, {
        currentUser: t,
        otherUser: r,
        header: b.intl.string(f.default.rlNJwZ),
        icon: (0, n.jsx)(s.qYV, {
          size: "md",
          color: "currentColor",
          className: j.wP
        })
      }), (0, n.jsxs)(u.A.Content, {
        children: [(0, n.jsx)(p.A, {
          inModal: true
        }), (0, n.jsx)(s.Text, {
          className: j.ed,
          variant: "text-xs/normal",
          color: "text-default",
          children: b.intl.format(f.default.snlFqR, {
            username: i.Ay.getName(r)
          })
        })]
      })]
    }), (0, n.jsx)(s.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: b.intl.string(b.t["ETE/oC"]),
        onClick: x,
        disabled: v
      }, {
        variant: "primary",
        text: b.intl.string(f.default["wI/jo3"]),
        onClick: () => {
          O(false), w(r.id)
        },
        disabled: v,
        loading: v
      }]
    })]
  })
}