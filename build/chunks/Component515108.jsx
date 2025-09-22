/** Chunk was on 76418 **/
/** chunk id: 515108, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk434717 = require("./434717.jsx"),
  Chunk782034 = require("./782034.js");

function l(e) {
  let {
    quest: a,
    transitionState: n,
    onClose: l,
    rewardContent: r
  } = e;
  return (0, t.jsxs)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    size: s.CgR.DYNAMIC,
    className: o.modal,
    parentComponent: "QuestRewardV2ModalBase",
    children: [(0, t.jsx)(s.olH, {
      "data-migration-pending": true,
      className: o.closeButton,
      onClick: l,
      withCircleBackground: true
    }), (0, t.jsxs)("div", {
      className: o.modalContent,
      children: [(0, t.jsx)("div", {
        className: o.leftPanel,
        children: r
      }), (0, t.jsx)("div", {
        className: o.rightPanel,
        children: (0, t.jsx)(i.Z, {
          quest: a
        })
      })]
    })]
  })
}