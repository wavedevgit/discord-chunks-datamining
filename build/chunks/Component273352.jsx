/** Chunk was on 84112 **/
/** chunk id: 273352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk727781 = require("./727781.js");
let _ = e => {
  let t, n, a, {
      body: _,
      cancelText: p,
      className: x,
      confirmColor: y,
      confirmText: b = m.intl.string(m.t.BddRzS),
      secondaryConfirmText: j,
      onCancel: f,
      onClose: C,
      onConfirm: B,
      onConfirmSecondary: N,
      title: g,
      transitionState: k,
      titleClassName: z
    } = e,
    v = r.Button.Sizes.MEDIUM,
    [A, R] = o.useState(false);
  return o.useEffect(() => () => {
    A && (null == N || N())
  }, [A, N]), null != p && "" !== p && (t = (0, l.jsx)(r.Button, {
    type: "button",
    size: v,
    color: r.Button.Colors.PRIMARY,
    onClick: () => {
      null == C || C(), null == f || f()
    },
    className: h.secondaryButton,
    children: p
  })), null != b && "" !== b && (n = (0, l.jsx)(r.Button, {
    type: "submit",
    color: y,
    size: v,
    className: h.primaryButton,
    autoFocus: true,
    children: b
  })), null != j && "" !== j && (a = (0, l.jsx)(d.Checkbox, {
    checked: A,
    onChange: e => R(e),
    label: j,
    labelType: "secondary"
  })), (0, l.jsx)(i.Y0, {
    transitionState: k,
    size: i.Cg.DYNAMIC,
    className: s()(x, h.container),
    "aria-label": g,
    parentComponent: "Alert",
    children: (0, l.jsxs)("form", {
      onSubmit: e => {
        null != e && e.preventDefault(), null == C || C(), null == B || B()
      },
      className: h.form,
      children: [(0, l.jsx)(i.xB, {
        children: null != g ? (0, l.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          className: s()(h.title, z),
          children: g
        }) : (0, l.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          className: s()(h.title, z),
          children: g
        })
      }), (0, l.jsx)(i.hz, {
        className: h.modalContent,
        children: (0, l.jsx)(u.Z, {
          direction: u.Z.Direction.VERTICAL,
          justify: u.Z.Justify.START,
          className: h.content,
          children: null != _ && (0, l.jsx)(c.x, {
            variant: "text-md/normal",
            className: h.body,
            color: "header-secondary",
            children: _
          })
        })
      }), (0, l.jsxs)(i.mz, {
        justify: true,
        wrap: u.Z.Wrap.WRAP,
        className: h.modalFooter,
        children: [n, t, a]
      })]
    })
  })
}