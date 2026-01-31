/** Chunk was on 10919 **/
/** chunk id: 556506, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk862482 = require("./862482.jsx"),
  Chunk935462 = require("./935462.jsx"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933976 = require("./933976.js");
let h = e => {
  let n, a, i, {
      body: h,
      cancelText: _,
      className: g,
      confirmColor: x,
      confirmText: j = m.intl.string(m.t.BddRzS),
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
    [z, E] = t.useState(false);
  return t.useEffect(() => () => {
    z && (null == A || A())
  }, [z, A]), null != _ && "" !== _ && (n = (0, l.jsx)(r.$n, {
    "data-migration-pending": true,
    type: "button",
    size: S,
    color: r.$n.Colors.PRIMARY,
    onClick: () => {
      null == N || N(), null == f || f()
    },
    className: p.zr,
    children: _
  })), null != j && "" !== j && (a = (0, l.jsx)(r.$n, {
    "data-migration-pending": true,
    type: "submit",
    color: x,
    size: S,
    className: p.FS,
    autoFocus: true,
    children: j
  })), null != b && "" !== b && (i = (0, l.jsx)(c.Checkbox, {
    checked: z,
    onChange: e => E(e),
    label: b,
    labelType: "secondary"
  })), (0, l.jsx)(d.EO, {
    "data-migration-pending": true,
    transitionState: D,
    size: d.rI.DYNAMIC,
    className: s()(g, p.kL),
    "aria-label": C,
    parentComponent: "Alert",
    children: (0, l.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == N || N(), null == y || y()
      },
      className: p.Zd,
      children: [(0, l.jsx)(d.rQ, {
        "data-migration-pending": true,
        children: null != C ? (0, l.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: s()(p.DD, k),
          children: C
        }) : (0, l.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          className: s()(p.DD, k),
          children: C
        })
      }), (0, l.jsx)(d.$m, {
        "data-migration-pending": true,
        className: p.jE,
        children: (0, l.jsx)(u.A, {
          direction: u.A.Direction.VERTICAL,
          justify: u.A.Justify.START,
          className: p.Qs,
          children: null != h && (0, l.jsx)(o.E, {
            variant: "text-md/normal",
            className: p.rf,
            color: "text-default",
            children: h
          })
        })
      }), (0, l.jsxs)(d.jl, {
        "data-migration-pending": true,
        justify: true,
        wrap: u.A.Wrap.WRAP,
        className: p.Hx,
        children: [a, n, i]
      })]
    })
  })
}