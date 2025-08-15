/** Chunk was on 18831 **/
/** chunk id: 41164, original params: e,t,n (module,exports,require) **/
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
  Chunk22860 = require("./22860.js"),
  Chunk170143 = require("./170143.js");
let m = e => {
  let {
    transitionState: t,
    onClose: n,
    classificationId: m,
    source: f
  } = e, h = (0, r.Z)(), g = () => {
    n(), l.Z.open(s.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING)
  };
  return (0, i.jsxs)(a.Y0X, {
    className: u.modalRoot,
    transitionState: t,
    parentComponent: "ClassificationDetailModal",
    children: [(0, i.jsxs)("div", {
      className: u.modalHeader,
      children: [(0, i.jsx)("img", {
        className: u.image,
        src: p,
        alt: ""
      }), (0, i.jsx)(a.olH, {
        className: u.modalClose,
        onClick: n
      })]
    }), (0, i.jsx)(a.hzk, {
      className: u.modalContent,
      children: h ? (0, i.jsx)(a.$jN, {}) : (0, i.jsx)(o.Z, {
        classificationId: m,
        source: f,
        onError: g,
        onClose: g
      })
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        children: (0, i.jsx)(a.zxk, {
          variant: "primary",
          text: d.intl.string(d.t.elrEjI),
          type: "button",
          onClick: g
        })
      })
    })]
  })
}