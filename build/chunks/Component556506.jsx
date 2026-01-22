/** Chunk was on 10919 **/
/** chunk id: 556506, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  t = require.n(Chunk503698),
  Chunk862482 = require("./862482.jsx"),
  Chunk935462 = require("./935462.jsx"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933976 = require("./933976.js");
let h = e => {
  let a, l, i, {
      body: h,
      cancelText: b,
      className: p,
      confirmColor: x,
      confirmText: j = f.intl.string(f.t.BddRzS),
      secondaryConfirmText: g,
      onCancel: N,
      onClose: A,
      onConfirm: D,
      onConfirmSecondary: k,
      title: C,
      transitionState: _,
      titleClassName: S
    } = e,
    y = d.$n.Sizes.MEDIUM,
    [z, E] = s.useState(false);
  return s.useEffect(() => () => {
    z && (null == k || k())
  }, [z, k]), null != b && "" !== b && (a = (0, n.jsx)(d.$n, {
    "data-migration-pending": true,
    type: "button",
    size: y,
    color: d.$n.Colors.PRIMARY,
    onClick: () => {
      null == A || A(), null == N || N()
    },
    className: m.zr,
    children: b
  })), null != j && "" !== j && (l = (0, n.jsx)(d.$n, {
    "data-migration-pending": true,
    type: "submit",
    color: x,
    size: y,
    className: m.FS,
    autoFocus: true,
    children: j
  })), null != g && "" !== g && (i = (0, n.jsx)(o.Checkbox, {
    checked: z,
    onChange: e => E(e),
    label: g,
    labelType: "secondary"
  })), (0, n.jsx)(r.EO, {
    "data-migration-pending": true,
    transitionState: _,
    size: r.rI.DYNAMIC,
    className: t()(p, m.kL),
    "aria-label": C,
    parentComponent: "Alert",
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == A || A(), null == D || D()
      },
      className: m.Zd,
      children: [(0, n.jsx)(r.rQ, {
        children: null != C ? (0, n.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          className: t()(m.DD, S),
          children: C
        }) : (0, n.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: t()(m.DD, S),
          children: C
        })
      }), (0, n.jsx)(r.$m, {
        className: m.jE,
        children: (0, n.jsx)(u.A, {
          direction: u.A.Direction.VERTICAL,
          justify: u.A.Justify.START,
          className: m.Qs,
          children: null != h && (0, n.jsx)(c.E, {
            variant: "text-md/normal",
            className: m.rf,
            color: "text-default",
            children: h
          })
        })
      }), (0, n.jsxs)(r.jl, {
        justify: true,
        wrap: u.A.Wrap.WRAP,
        className: m.Hx,
        children: [l, a, i]
      })]
    })
  })
}