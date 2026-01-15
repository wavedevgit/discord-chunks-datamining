/** Chunk was on 97158 **/
/** chunk id: 285910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk602667 = require("./602667.js"),
  Chunk110410 = require("./110410.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk303304 = require("./303304.js");

function m(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, a.jsx)(i.Modal, {
    size: "md",
    title: d.intl.string(d.t.Hd3D8W),
    actions: [{
      variant: "primary",
      text: d.intl.string(d.t.cpT0Cq),
      onClick: t
    }],
    onClose: t,
    transitionState: n,
    children: (0, a.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: d.intl.string(d.t.Ij97SL)
    })
  })
}

function f(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    transitionState: i,
    onClose: d,
    rewardContent: f,
    isRewardContentLoading: x,
    rewardContentHasError: p,
    location: C
  } = e, g = o.jn.REWARD_MODAL, [h, j] = r.useState(true);
  if (p) return (0, a.jsx)(m, {
    onClose: d,
    transitionState: i
  });
  let b = x || h;
  return (0, a.jsx)(l.A, {
    questOrQuests: t,
    questContent: g,
    sourceQuestContent: n,
    children: e => (0, a.jsxs)(a.Fragment, {
      children: [b ? (0, a.jsx)(s.$jN, {
        className: u.spinner,
        type: s.$jN.Type.WANDERING_CUBES
      }) : null, (0, a.jsx)("div", {
        ref: e,
        style: {
          visibility: b ? "hidden" : "visible"
        },
        children: (0, a.jsxs)(s.Y0X, {
          "data-migration-pending": true,
          transitionState: b ? s.Dvm.HIDDEN : i,
          size: s.CgR.DYNAMIC,
          className: u.modal,
          parentComponent: "QuestRewardModalBase",
          children: [(0, a.jsx)(s.olH, {
            "data-migration-pending": true,
            className: u.closeButton,
            onClick: d,
            withCircleBackground: true
          }), (0, a.jsxs)("div", {
            className: u.modalContent,
            children: [(0, a.jsx)("div", {
              className: u.leftPanel,
              children: f
            }), (0, a.jsx)("div", {
              className: u.rightPanel,
              children: (0, a.jsx)(c.Z, {
                quest: t,
                sourceQuestContent: n,
                onLoadComplete: () => j(false),
                location: C
              })
            })]
          })]
        })
      })]
    })
  })
}