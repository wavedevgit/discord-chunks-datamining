/** Chunk was on 76418 **/
/** chunk id: 515108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk434717 = require("./434717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk955082 = require("./955082.js");

function m(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, r.jsx)(i.Modal, {
    size: "md",
    title: d.intl.string(d.t.Hd3D8W),
    actions: [{
      variant: "primary",
      text: d.intl.string(d.t.cpT0Cq),
      onClick: t
    }],
    onClose: t,
    transitionState: n,
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-secondary",
      children: d.intl.string(d.t.Ij97SL)
    })
  })
}

function p(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    transitionState: i,
    onClose: d,
    rewardContent: p,
    isRewardContentLoading: f,
    rewardContentHasError: x,
    location: C
  } = e, g = o.jn.REWARD_MODAL, [h, _] = a.useState(true);
  if (x) return (0, r.jsx)(m, {
    onClose: d,
    transitionState: i
  });
  let j = f || h;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: g,
    sourceQuestContent: n,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [j ? (0, r.jsx)(s.$jN, {
        className: u.spinner,
        type: s.$jN.Type.WANDERING_CUBES
      }) : null, (0, r.jsx)("div", {
        ref: e,
        style: {
          visibility: j ? "hidden" : "visible"
        },
        children: (0, r.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          transitionState: j ? s.Dvm.HIDDEN : i,
          size: s.CgR.DYNAMIC,
          className: u.modal,
          parentComponent: "QuestRewardV2ModalBase",
          children: [(0, r.jsx)(s.olH, {
            "data-migration-pending": true,
            className: u.closeButton,
            onClick: d,
            withCircleBackground: true
          }), (0, r.jsxs)("div", {
            className: u.modalContent,
            children: [(0, r.jsx)("div", {
              className: u.leftPanel,
              children: p
            }), (0, r.jsx)("div", {
              className: u.rightPanel,
              children: (0, r.jsx)(c.Z, {
                quest: t,
                sourceQuestContent: n,
                onLoadComplete: () => _(false),
                location: C
              })
            })]
          })]
        })
      })]
    })
  })
}