/** Chunk was on 84112 **/
/** chunk id: 273352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk466377 = require("./466377.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk573857 = require("./573857.js");
let x = e => {
  let t, n, o, {
      body: x,
      cancelText: _,
      className: p,
      confirmColor: y,
      confirmText: b = m.intl.string(m.t.BddRzS),
      secondaryConfirmText: f,
      onCancel: j,
      onClose: C,
      onConfirm: z,
      onConfirmSecondary: N,
      title: g,
      transitionState: B,
      titleClassName: k
    } = e,
    v = i.zx.Sizes.MEDIUM,
    [A, R] = a.useState(false);
  return a.useEffect(() => () => {
    A && (null == N || N())
  }, [A, N]), null != _ && "" !== _ && (t = (0, l.jsx)(i.zx, {
    type: "button",
    size: v,
    color: i.zx.Colors.PRIMARY,
    onClick: () => {
      null == C || C(), null == j || j()
    },
    className: h.secondaryButton,
    children: _
  })), null != b && "" !== b && (n = (0, l.jsx)(i.zx, {
    type: "submit",
    color: y,
    size: v,
    className: h.primaryButton,
    autoFocus: true,
    children: b
  })), null != f && "" !== f && (o = (0, l.jsx)(d.Checkbox, {
    checked: A,
    onChange: e => R(e),
    label: f,
    labelType: "secondary"
  })), (0, l.jsx)(r.Y0, {
    transitionState: B,
    size: r.Cg.DYNAMIC,
    className: s()(p, h.container),
    "aria-label": g,
    parentComponent: "Alert",
    children: (0, l.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == C || C(), null == z || z()
      },
      className: h.form,
      children: [(0, l.jsx)(r.xB, {
        children: null != g ? (0, l.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          className: s()(h.title, k),
          children: g
        }) : (0, l.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          className: s()(h.title, k),
          children: g
        })
      }), (0, l.jsx)(r.hz, {
        className: h.modalContent,
        children: (0, l.jsx)(u.Z, {
          direction: u.Z.Direction.VERTICAL,
          justify: u.Z.Justify.START,
          className: h.content,
          children: null != x && (0, l.jsx)(c.x, {
            variant: "text-md/normal",
            className: h.body,
            color: "text-default",
            children: x
          })
        })
      }), (0, l.jsxs)(r.mz, {
        justify: true,
        wrap: u.Z.Wrap.WRAP,
        className: h.modalFooter,
        children: [n, t, o]
      })]
    })
  })
}