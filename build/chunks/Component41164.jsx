/** Chunk was on 18831 **/
/** chunk id: 41164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk181211 = require("./181211.js"),
  Chunk188879 = require("./188879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk22860 = require("./22860.js");
let p = e => {
  let {
    transitionState: t,
    onClose: n,
    classificationId: p,
    source: m
  } = e, f = (0, s.Z)(), h = () => {
    n(), (0, l.openUserSettings)(o.n.ACCOUNT_PANEL, {
      section: c.oAB.ACCOUNT,
      subsection: d.s6.PRIVACY_AND_SAFETY_STANDING
    })
  };
  return (0, i.jsxs)(a.Y0X, {
    className: u.modalRoot,
    transitionState: t,
    parentComponent: "ClassificationDetailModal",
    "data-migration-pending": true,
    children: [(0, i.jsx)("div", {
      className: u.modalHeader,
      children: (0, i.jsx)(a.olH, {
        "data-migration-pending": true,
        className: u.modalClose,
        onClick: n
      })
    }), (0, i.jsx)(a.hzk, {
      "data-migration-pending": true,
      className: u.modalContent,
      children: f ? (0, i.jsx)(a.$jN, {}) : (0, i.jsx)(r.Z, {
        classificationId: p,
        source: m,
        onError: h,
        onClose: h
      })
    })]
  })
}