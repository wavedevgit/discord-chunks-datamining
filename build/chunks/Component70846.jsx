/** Chunk was on 68720 **/
/** chunk id: 70846, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk426642 = require("./426642.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk458063 = require("./458063.js");
let d = e => {
  let {
    transitionState: t,
    errors: a,
    onClose: d
  } = e, c = (0, l.Dt)();
  return (0, r.jsxs)(s.Y0X, {
    transitionState: t,
    "aria-labelledby": c,
    parentComponent: "ImageInputUploadErrorModal",
    children: [(0, r.jsx)(s.xBx, {
      separator: false,
      className: o.modalHeader,
      children: (0, r.jsx)(s.olH, {
        onClick: d,
        className: o.closeButton
      })
    }), (0, r.jsxs)(s.hzk, {
      className: o.modalContent,
      children: [(0, r.jsxs)(s.hjN, {
        className: o.header,
        children: [(0, r.jsx)(s.vwX, {
          id: c,
          className: o.title,
          children: i.intl.string(i.t.PanA4O)
        }), (0, r.jsx)(s.R94, {
          type: s.geA.DESCRIPTION,
          children: i.intl.string(i.t["8Ql1Aw"])
        })]
      }), (0, r.jsx)("div", {
        className: o.errors,
        children: (0, r.jsx)(s.Ttm, {
          children: a.map(e => (0, r.jsx)(n.Z, {
            error: e
          }, e.filename))
        })
      }), (0, r.jsx)(s.zxk, {
        variant: "primary",
        text: i.intl.string(i.t["NX+WJC"]),
        onClick: d
      })]
    })]
  })
}