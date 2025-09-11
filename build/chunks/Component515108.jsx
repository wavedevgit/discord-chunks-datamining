/** Chunk was on 96861 **/
/** chunk id: 515108, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk434717 = require("./434717.jsx"),
  Chunk955082 = require("./955082.js");

function i(e) {
  let {
    quest: a,
    transitionState: n,
    onClose: i,
    rewardContent: r
  } = e;
  return (0, t.jsxs)(s.Y0X, {
    transitionState: n,
    size: s.CgR.DYNAMIC,
    className: l.modal,
    parentComponent: "QuestRewardV2ModalBase",
    children: [(0, t.jsx)(s.olH, {
      className: l.closeButton,
      onClick: i,
      withCircleBackground: true
    }), (0, t.jsxs)("div", {
      className: l.modalContent,
      children: [(0, t.jsx)("div", {
        className: l.leftPanel,
        children: r
      }), (0, t.jsx)("div", {
        className: l.rightPanel,
        children: (0, t.jsx)(o.Z, {
          quest: a
        })
      })]
    })]
  })
}