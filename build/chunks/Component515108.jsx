/** Chunk was on 96861 **/
/** chunk id: 515108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk434717 = require("./434717.jsx"),
  Chunk782034 = require("./782034.js");

function s(e) {
  let {
    quest: t,
    transitionState: n,
    onClose: s,
    rewardContent: l
  } = e;
  return (0, r.jsxs)(a.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    size: a.CgR.DYNAMIC,
    className: o.modal,
    parentComponent: "QuestRewardV2ModalBase",
    children: [(0, r.jsx)(a.olH, {
      "data-migration-pending": true,
      className: o.closeButton,
      onClick: s,
      withCircleBackground: true
    }), (0, r.jsxs)("div", {
      className: o.modalContent,
      children: [(0, r.jsx)("div", {
        className: o.leftPanel,
        children: l
      }), (0, r.jsx)("div", {
        className: o.rightPanel,
        children: (0, r.jsx)(i.Z, {
          quest: t
        })
      })]
    })]
  })
}