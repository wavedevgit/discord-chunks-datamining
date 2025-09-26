/** Chunk was on 76418 **/
/** chunk id: 515108, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk434717 = require("./434717.jsx"),
  Chunk782034 = require("./782034.js");

function c(e) {
  let {
    quest: n,
    sourceQuestContent: t,
    transitionState: c,
    onClose: d,
    rewardContent: u
  } = e, m = i.jn.REWARD_MODAL;
  return (0, a.jsx)(s.A, {
    questOrQuests: n,
    questContent: m,
    sourceQuestContent: t,
    children: e => (0, a.jsx)("div", {
      ref: e,
      children: (0, a.jsxs)(r.Y0X, {
        "data-migration-pending": true,
        transitionState: c,
        size: r.CgR.DYNAMIC,
        className: l.modal,
        parentComponent: "QuestRewardV2ModalBase",
        children: [(0, a.jsx)(r.olH, {
          "data-migration-pending": true,
          className: l.closeButton,
          onClick: d,
          withCircleBackground: true
        }), (0, a.jsxs)("div", {
          className: l.modalContent,
          children: [(0, a.jsx)("div", {
            className: l.leftPanel,
            children: u
          }), (0, a.jsx)("div", {
            className: l.rightPanel,
            children: (0, a.jsx)(o.Z, {
              quest: n,
              sourceQuestContent: t
            })
          })]
        })]
      })
    })
  })
}