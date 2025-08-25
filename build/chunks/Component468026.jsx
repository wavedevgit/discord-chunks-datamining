/** Chunk was on web.js **/
/** chunk id: 468026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk512983 = require("./512983.jsx"),
  Chunk466377 = require("./466377.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964144 = require("./964144.js");
let h = e => {
  let t, n, o, {
      body: h,
      cancelText: m,
      className: g,
      confirmColor: E,
      confirmText: b = _.intl.string(_.t.BddRzc),
      secondaryConfirmText: y,
      onCancel: O,
      onClose: v,
      onConfirm: I,
      onConfirmSecondary: T,
      title: S,
      transitionState: A,
      titleClassName: C
    } = e,
    N = s.zx.Sizes.MEDIUM,
    [R, P] = i.useState(false);
  i.useEffect(() => () => {
    R && (null == T || T())
  }, [R, T]);
  let w = () => {
      null == v || v(), null == O || O()
    },
    D = e => {
      null != e && e.preventDefault(), null == v || v(), null == I || I()
    };
  return null != m && "" !== m && (t = (0, r.jsx)(s.zx, {
    type: "button",
    size: N,
    color: s.zx.Colors.PRIMARY,
    onClick: w,
    className: p.secondaryButton,
    children: m
  })), null != b && "" !== b && (n = (0, r.jsx)(s.zx, {
    type: "submit",
    color: E,
    size: N,
    className: p.primaryButton,
    autoFocus: true,
    children: b
  })), null != y && "" !== y && (o = (0, r.jsx)(d.XZJ, {
    value: R,
    onChange: (e, t) => P(t),
    type: d.XZJ.Types.DEFAULT,
    children: (0, r.jsx)(u.x, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: y
    })
  })), (0, r.jsx)(c.Y0, {
    transitionState: A,
    size: c.Cg.DYNAMIC,
    className: a()(g, p.container),
    "aria-label": S,
    parentComponent: "Alert",
    children: (0, r.jsxs)("form", {
      onSubmit: D,
      className: p.form,
      children: [(0, r.jsx)(c.xB, {
        children: null != S ? (0, r.jsx)(d.X6q, {
          variant: "heading-lg/semibold",
          className: a()(p.title, C),
          children: S
        }) : (0, r.jsx)(l.v, {
          tag: "h2",
          className: a()(p.title, C),
          children: S
        })
      }), (0, r.jsx)(c.hz, {
        className: p.modalContent,
        children: (0, r.jsx)(f.Z, {
          direction: f.Z.Direction.VERTICAL,
          justify: f.Z.Justify.START,
          className: p.content,
          children: null != h && (0, r.jsx)(u.x, {
            variant: "text-md/normal",
            className: p.body,
            color: "header-secondary",
            children: h
          })
        })
      }), (0, r.jsxs)(c.mz, {
        justify: true,
        wrap: f.Z.Wrap.WRAP,
        className: p.modalFooter,
        children: [n, t, o]
      })]
    })
  })
}