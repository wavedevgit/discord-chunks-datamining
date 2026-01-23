/** Chunk was on 10919 **/
/** chunk id: 556506, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk862482 = require("./862482.jsx"),
  Chunk935462 = require("./935462.jsx"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933976 = require("./933976.js");
let p = e => {
  let n, l, t, {
      body: p,
      cancelText: _,
      className: x,
      confirmColor: j,
      confirmText: g = m.intl.string(m.t.BddRzS),
      secondaryConfirmText: b,
      onCancel: f,
      onClose: N,
      onConfirm: y,
      onConfirmSecondary: A,
      title: C,
      transitionState: D,
      titleClassName: k
    } = e,
    S = r.$n.Sizes.MEDIUM,
    [z, E] = s.useState(false);
  return s.useEffect(() => () => {
    z && (null == A || A())
  }, [z, A]), null != _ && "" !== _ && (n = (0, a.jsx)(r.$n, {
    "data-migration-pending": true,
    type: "button",
    size: S,
    color: r.$n.Colors.PRIMARY,
    onClick: () => {
      null == N || N(), null == f || f()
    },
    className: h.zr,
    children: _
  })), null != g && "" !== g && (l = (0, a.jsx)(r.$n, {
    "data-migration-pending": true,
    type: "submit",
    color: j,
    size: S,
    className: h.FS,
    autoFocus: true,
    children: g
  })), null != b && "" !== b && (t = (0, a.jsx)(c.Checkbox, {
    checked: z,
    onChange: e => E(e),
    label: b,
    labelType: "secondary"
  })), (0, a.jsx)(d.EO, {
    "data-migration-pending": true,
    transitionState: D,
    size: d.rI.DYNAMIC,
    className: i()(x, h.kL),
    "aria-label": C,
    parentComponent: "Alert",
    children: (0, a.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == N || N(), null == y || y()
      },
      className: h.Zd,
      children: [(0, a.jsx)(d.rQ, {
        children: null != C ? (0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: i()(h.DD, k),
          children: C
        }) : (0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          className: i()(h.DD, k),
          children: C
        })
      }), (0, a.jsx)(d.$m, {
        className: h.jE,
        children: (0, a.jsx)(u.A, {
          direction: u.A.Direction.VERTICAL,
          justify: u.A.Justify.START,
          className: h.Qs,
          children: null != p && (0, a.jsx)(o.E, {
            variant: "text-md/normal",
            className: h.rf,
            color: "text-default",
            children: p
          })
        })
      }), (0, a.jsxs)(d.jl, {
        justify: true,
        wrap: u.A.Wrap.WRAP,
        className: h.Hx,
        children: [l, n, t]
      })]
    })
  })
}