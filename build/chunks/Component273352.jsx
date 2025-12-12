/** Chunk was on 84112 **/
/** chunk id: 273352, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk881537 = require("./881537.js");
let h = e => {
  let n, t, o, {
      body: h,
      cancelText: p,
      className: x,
      confirmColor: y,
      confirmText: b = m.intl.string(m.t.BddRzS),
      secondaryConfirmText: g,
      onCancel: j,
      onClose: C,
      onConfirm: z,
      onConfirmSecondary: N,
      title: _,
      transitionState: B,
      titleClassName: k
    } = e,
    v = s.zx.Sizes.MEDIUM,
    [A, R] = l.useState(false);
  return l.useEffect(() => () => {
    A && (null == N || N())
  }, [A, N]), null != p && "" !== p && (n = (0, a.jsx)(s.zx, {
    "data-migration-pending": true,
    type: "button",
    size: v,
    color: s.zx.Colors.PRIMARY,
    onClick: () => {
      null == C || C(), null == j || j()
    },
    className: f.secondaryButton,
    children: p
  })), null != b && "" !== b && (t = (0, a.jsx)(s.zx, {
    "data-migration-pending": true,
    type: "submit",
    color: y,
    size: v,
    className: f.primaryButton,
    autoFocus: true,
    children: b
  })), null != g && "" !== g && (o = (0, a.jsx)(c.Checkbox, {
    checked: A,
    onChange: e => R(e),
    label: g,
    labelType: "secondary"
  })), (0, a.jsx)(r.Y0, {
    "data-migration-pending": true,
    transitionState: B,
    size: r.Cg.DYNAMIC,
    className: i()(x, f.container),
    "aria-label": _,
    parentComponent: "Alert",
    children: (0, a.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == C || C(), null == z || z()
      },
      className: f.form,
      children: [(0, a.jsx)(r.xB, {
        children: null != _ ? (0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: i()(f.title, k),
          children: _
        }) : (0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          className: i()(f.title, k),
          children: _
        })
      }), (0, a.jsx)(r.hz, {
        className: f.modalContent,
        children: (0, a.jsx)(u.Z, {
          direction: u.Z.Direction.VERTICAL,
          justify: u.Z.Justify.START,
          className: f.content,
          children: null != h && (0, a.jsx)(d.x, {
            variant: "text-md/normal",
            className: f.body,
            color: "text-default",
            children: h
          })
        })
      }), (0, a.jsxs)(r.mz, {
        justify: true,
        wrap: u.Z.Wrap.WRAP,
        className: f.modalFooter,
        children: [t, n, o]
      })]
    })
  })
}