/** Chunk was on 96861 **/
/** chunk id: 515108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk434717 = require("./434717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782034 = require("./782034.js");

function m(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, r.jsx)(i.Modal, {
    size: "md",
    title: u.intl.string(u.t.Hd3D8W),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.cpT0Cq),
      onClick: t
    }],
    onClose: t,
    transitionState: n,
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-secondary",
      children: u.intl.string(u.t.Ij97SL)
    })
  })
}

function p(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    transitionState: i,
    onClose: u,
    rewardContent: p,
    isRewardContentLoading: C,
    rewardContentHasError: f,
    location: h
  } = e, j = s.jn.REWARD_MODAL, [x, y] = a.useState(true);
  if (f) return (0, r.jsx)(m, {
    onClose: u,
    transitionState: i
  });
  let g = C || x;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: j,
    sourceQuestContent: n,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [g ? (0, r.jsx)(o.$jN, {
        className: d.spinner,
        type: o.$jN.Type.WANDERING_CUBES
      }) : null, (0, r.jsx)("div", {
        ref: e,
        style: {
          visibility: g ? "hidden" : "visible"
        },
        children: (0, r.jsxs)(o.Y0X, {
          "data-migration-pending": true,
          transitionState: g ? o.Dvm.HIDDEN : i,
          size: o.CgR.DYNAMIC,
          className: d.modal,
          parentComponent: "QuestRewardV2ModalBase",
          children: [(0, r.jsx)(o.olH, {
            "data-migration-pending": true,
            className: d.closeButton,
            onClick: u,
            withCircleBackground: true
          }), (0, r.jsxs)("div", {
            className: d.modalContent,
            children: [(0, r.jsx)("div", {
              className: d.leftPanel,
              children: p
            }), (0, r.jsx)("div", {
              className: d.rightPanel,
              children: (0, r.jsx)(c.Z, {
                quest: t,
                sourceQuestContent: n,
                onLoadComplete: () => y(false),
                location: h
              })
            })]
          })]
        })
      })]
    })
  })
}