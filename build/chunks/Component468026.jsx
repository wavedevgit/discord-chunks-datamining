/** Chunk was on web.js **/
/** chunk id: 468026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk512983 = require("./512983.jsx"),
  Chunk466377 = require("./466377.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964144 = require("./964144.js");
let m = e => {
  let t, n, a, {
      body: m,
      cancelText: g,
      className: E,
      confirmColor: b,
      confirmText: y = p.intl.string(p.t.BddRzc),
      secondaryConfirmText: O,
      onCancel: v,
      onClose: I,
      onConfirm: S,
      onConfirmSecondary: T,
      title: A,
      transitionState: C,
      titleClassName: N
    } = e,
    R = s.zx.Sizes.MEDIUM,
    [P, w] = i.useState(false);
  i.useEffect(() => () => {
    P && (null == T || T())
  }, [P, T]);
  let D = () => {
      null == I || I(), null == v || v()
    },
    x = e => {
      null != e && e.preventDefault(), null == I || I(), null == S || S()
    };
  return null != g && "" !== g && (t = (0, r.jsx)(s.zx, {
    type: "button",
    size: R,
    color: s.zx.Colors.PRIMARY,
    onClick: D,
    className: h.secondaryButton,
    children: g
  })), null != y && "" !== y && (n = (0, r.jsx)(s.zx, {
    type: "submit",
    color: b,
    size: R,
    className: h.primaryButton,
    autoFocus: true,
    children: y
  })), null != O && "" !== O && (a = (0, r.jsx)(d.$q, {
    value: P,
    onChange: (e, t) => w(t),
    type: d.M0.DEFAULT,
    children: (0, r.jsx)(u.x, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: O
    })
  })), (0, r.jsx)(c.Y0, {
    transitionState: C,
    size: c.Cg.DYNAMIC,
    className: o()(E, h.container),
    "aria-label": A,
    parentComponent: "Alert",
    children: (0, r.jsxs)("form", {
      onSubmit: x,
      className: h.form,
      children: [(0, r.jsx)(c.xB, {
        children: null != A ? (0, r.jsx)(f.X6q, {
          variant: "heading-lg/semibold",
          className: o()(h.title, N),
          children: A
        }) : (0, r.jsx)(l.v, {
          tag: "h2",
          className: o()(h.title, N),
          children: A
        })
      }), (0, r.jsx)(c.hz, {
        className: h.modalContent,
        children: (0, r.jsx)(_.Z, {
          direction: _.Z.Direction.VERTICAL,
          justify: _.Z.Justify.START,
          className: h.content,
          children: null != m && (0, r.jsx)(u.x, {
            variant: "text-md/normal",
            className: h.body,
            color: "header-secondary",
            children: m
          })
        })
      }), (0, r.jsxs)(c.mz, {
        justify: true,
        wrap: _.Z.Wrap.WRAP,
        className: h.modalFooter,
        children: [n, t, a]
      })]
    })
  })
}