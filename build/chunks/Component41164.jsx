/** Chunk was on 18831 **/
/** chunk id: 41164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk181211 = require("./181211.js"),
  Chunk188879 = require("./188879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk699244 = require("./699244.js");
let u = e => {
  let {
    transitionState: t,
    onClose: n,
    classificationId: u,
    source: m
  } = e, p = (0, o.Z)(), f = () => {
    n(), l.Z.open(s.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING)
  };
  return (0, i.jsxs)(a.Y0X, {
    className: d.modalRoot,
    transitionState: t,
    parentComponent: "ClassificationDetailModal",
    "data-migration-pending": true,
    children: [(0, i.jsx)("div", {
      className: d.modalHeader,
      children: (0, i.jsx)(a.olH, {
        "data-migration-pending": true,
        className: d.modalClose,
        onClick: n
      })
    }), (0, i.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: d.modalContent,
      children: p ? (0, i.jsx)(a.$jN, {}) : (0, i.jsx)(r.Z, {
        classificationId: u,
        source: m,
        onError: f,
        onClose: f
      })
    })]
  })
}