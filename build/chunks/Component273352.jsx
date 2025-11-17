/** Chunk was on web.js **/
/** chunk id: 273352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk466377 = require("./466377.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk731646 = require("./731646.js");
let p = e => {
  let t, n, a, {
      body: p,
      cancelText: h,
      className: m,
      confirmColor: g,
      confirmText: E = f.intl.string(f.t.BddRzS),
      secondaryConfirmText: b,
      onCancel: y,
      onClose: O,
      onConfirm: v,
      onConfirmSecondary: I,
      title: T,
      transitionState: S,
      titleClassName: A
    } = e,
    C = s.Button.Sizes.MEDIUM,
    [N, R] = i.useState(false);
  i.useEffect(() => () => {
    N && (null == I || I())
  }, [N, I]);
  let P = () => {
      null == O || O(), null == y || y()
    },
    D = e => {
      null != e && e.preventDefault(), null == O || O(), null == v || v()
    };
  return null != h && "" !== h && (t = (0, r.jsx)(s.Button, {
    type: "button",
    size: C,
    color: s.Button.Colors.PRIMARY,
    onClick: P,
    className: _.secondaryButton,
    children: h
  })), null != E && "" !== E && (n = (0, r.jsx)(s.Button, {
    type: "submit",
    color: g,
    size: C,
    className: _.primaryButton,
    autoFocus: true,
    children: E
  })), null != b && "" !== b && (a = (0, r.jsx)(u.Checkbox, {
    checked: N,
    onChange: e => R(e),
    label: b,
    labelType: "secondary"
  })), (0, r.jsx)(l.Y0, {
    transitionState: S,
    size: l.Cg.DYNAMIC,
    className: o()(m, _.container),
    "aria-label": T,
    parentComponent: "Alert",
    children: (0, r.jsxs)("form", {
      onSubmit: D,
      className: _.form,
      children: [(0, r.jsx)(l.xB, {
        children: null != T ? (0, r.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          className: o()(_.title, A),
          children: T
        }) : (0, r.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: o()(_.title, A),
          children: T
        })
      }), (0, r.jsx)(l.hz, {
        className: _.modalContent,
        children: (0, r.jsx)(d.Z, {
          direction: d.Z.Direction.VERTICAL,
          justify: d.Z.Justify.START,
          className: _.content,
          children: null != p && (0, r.jsx)(c.x, {
            variant: "text-md/normal",
            className: _.body,
            color: "header-secondary",
            children: p
          })
        })
      }), (0, r.jsxs)(l.mz, {
        justify: true,
        wrap: d.Z.Wrap.WRAP,
        className: _.modalFooter,
        children: [n, t, a]
      })]
    })
  })
}