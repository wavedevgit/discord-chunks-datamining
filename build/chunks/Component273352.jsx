/** Chunk was on 84112 **/
/** chunk id: 273352, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk466377 = require("./466377.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk573857 = require("./573857.js");
let p = e => {
  let n, t, o, {
      body: p,
      cancelText: x,
      className: _,
      confirmColor: y,
      confirmText: b = m.intl.string(m.t.BddRzS),
      secondaryConfirmText: f,
      onCancel: g,
      onClose: j,
      onConfirm: C,
      onConfirmSecondary: z,
      title: N,
      transitionState: B,
      titleClassName: k
    } = e,
    v = s.zx.Sizes.MEDIUM,
    [A, R] = l.useState(false);
  return l.useEffect(() => () => {
    A && (null == z || z())
  }, [A, z]), null != x && "" !== x && (n = (0, a.jsx)(s.zx, {
    "data-migration-pending": true,
    type: "button",
    size: v,
    color: s.zx.Colors.PRIMARY,
    onClick: () => {
      null == j || j(), null == g || g()
    },
    className: h.secondaryButton,
    children: x
  })), null != b && "" !== b && (t = (0, a.jsx)(s.zx, {
    "data-migration-pending": true,
    type: "submit",
    color: y,
    size: v,
    className: h.primaryButton,
    autoFocus: true,
    children: b
  })), null != f && "" !== f && (o = (0, a.jsx)(c.Checkbox, {
    checked: A,
    onChange: e => R(e),
    label: f,
    labelType: "secondary"
  })), (0, a.jsx)(r.Y0, {
    "data-migration-pending": true,
    transitionState: B,
    size: r.Cg.DYNAMIC,
    className: i()(_, h.container),
    "aria-label": N,
    parentComponent: "Alert",
    children: (0, a.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == j || j(), null == C || C()
      },
      className: h.form,
      children: [(0, a.jsx)(r.xB, {
        children: null != N ? (0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: i()(h.title, k),
          children: N
        }) : (0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          className: i()(h.title, k),
          children: N
        })
      }), (0, a.jsx)(r.hz, {
        className: h.modalContent,
        children: (0, a.jsx)(u.Z, {
          direction: u.Z.Direction.VERTICAL,
          justify: u.Z.Justify.START,
          className: h.content,
          children: null != p && (0, a.jsx)(d.x, {
            variant: "text-md/normal",
            className: h.body,
            color: "text-default",
            children: p
          })
        })
      }), (0, a.jsxs)(r.mz, {
        justify: true,
        wrap: u.Z.Wrap.WRAP,
        className: h.modalFooter,
        children: [t, n, o]
      })]
    })
  })
}