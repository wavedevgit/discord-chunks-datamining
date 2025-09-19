/** Chunk was on 96861 **/
/** chunk id: 515108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk434717 = require("./434717.jsx"),
  Chunk782034 = require("./782034.js");

function o(e) {
  let {
    quest: t,
    transitionState: n,
    onClose: o,
    rewardContent: l
  } = e;
  return (0, a.jsxs)(r.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    size: r.CgR.DYNAMIC,
    className: s.modal,
    parentComponent: "QuestRewardV2ModalBase",
    children: [(0, a.jsx)(r.olH, {
      "data-migration-pending": true,
      className: s.closeButton,
      onClick: o,
      withCircleBackground: true
    }), (0, a.jsxs)("div", {
      className: s.modalContent,
      children: [(0, a.jsx)("div", {
        className: s.leftPanel,
        children: l
      }), (0, a.jsx)("div", {
        className: s.rightPanel,
        children: (0, a.jsx)(i.Z, {
          quest: t
        })
      })]
    })]
  })
}