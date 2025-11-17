/** Chunk was on 96861 **/
/** chunk id: 515108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
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
    title: d.intl.string(d.t.Hd3D8W),
    actions: [{
      variant: "primary",
      text: d.intl.string(d.t.cpT0Cq),
      onClick: t
    }],
    onClose: t,
    transitionState: n,
    children: (0, r.jsx)(o.Text, {
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
    isRewardContentLoading: C,
    rewardContentHasError: f,
    location: h
  } = e, j = s.jn.REWARD_MODAL, [x, y] = a.useState(true);
  if (f) return (0, r.jsx)(m, {
    onClose: d,
    transitionState: i
  });
  let g = C || x;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: j,
    sourceQuestContent: n,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [g ? (0, r.jsx)(o.$jN, {
        className: u.spinner,
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
          className: u.modal,
          parentComponent: "QuestRewardV2ModalBase",
          children: [(0, r.jsx)(o.olH, {
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