/** Chunk was on 18831 **/
/** chunk id: 41164, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk181211 = require("./181211.js"),
  Chunk188879 = require("./188879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk699244 = require("./699244.js"),
  Chunk170143 = require("./170143.js");
let m = e => {
  let {
    transitionState: t,
    onClose: i,
    classificationId: m,
    source: p
  } = e, h = (0, o.Z)(), g = () => {
    i(), l.Z.open(r.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING)
  };
  return (0, n.jsxs)(a.Y0X, {
    className: u.modalRoot,
    transitionState: t,
    parentComponent: "ClassificationDetailModal",
    children: [(0, n.jsxs)("div", {
      className: u.modalHeader,
      children: [(0, n.jsx)("img", {
        className: u.image,
        src: f,
        alt: ""
      }), (0, n.jsx)(a.olH, {
        className: u.modalClose,
        onClick: i
      })]
    }), (0, n.jsx)(a.hzk, {
      className: u.modalContent,
      children: h ? (0, n.jsx)(a.$jN, {}) : (0, n.jsx)(s.Z, {
        classificationId: m,
        source: p,
        onError: g,
        onClose: g
      })
    }), (0, n.jsx)(a.mzw, {
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        children: (0, n.jsx)(a.zxk, {
          variant: "primary",
          text: d.intl.string(d.t.elrEjI),
          type: "button",
          onClick: g
        })
      })
    })]
  })
}