/** Chunk was on 96861 **/
/** chunk id: 515108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk434717 = require("./434717.jsx"),
  Chunk955082 = require("./955082.js");

function c(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    transitionState: c,
    onClose: u,
    rewardContent: d
  } = e, m = i.jn.REWARD_MODAL;
  return (0, r.jsx)(o.A, {
    questOrQuests: t,
    questContent: m,
    sourceQuestContent: n,
    children: e => (0, r.jsx)("div", {
      ref: e,
      children: (0, r.jsxs)(a.Y0X, {
        "data-migration-pending": true,
        transitionState: c,
        size: a.CgR.DYNAMIC,
        className: l.modal,
        parentComponent: "QuestRewardV2ModalBase",
        children: [(0, r.jsx)(a.olH, {
          "data-migration-pending": true,
          className: l.closeButton,
          onClick: u,
          withCircleBackground: true
        }), (0, r.jsxs)("div", {
          className: l.modalContent,
          children: [(0, r.jsx)("div", {
            className: l.leftPanel,
            children: d
          }), (0, r.jsx)("div", {
            className: l.rightPanel,
            children: (0, r.jsx)(s.Z, {
              quest: t,
              sourceQuestContent: n
            })
          })]
        })]
      })
    })
  })
}