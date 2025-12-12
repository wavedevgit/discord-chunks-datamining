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
  Chunk602667 = require("./602667.jsx"),
  Chunk110410 = require("./110410.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400049 = require("./400049.js");

function m(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, r.jsx)(a.Modal, {
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
      color: "text-subtle",
      children: d.intl.string(d.t.Ij97SL)
    })
  })
}

function f(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    transitionState: a,
    onClose: d,
    rewardContent: f,
    isRewardContentLoading: x,
    rewardContentHasError: p,
    location: C
  } = e, g = s.jn.REWARD_MODAL, [h, _] = i.useState(true);
  if (p) return (0, r.jsx)(m, {
    onClose: d,
    transitionState: a
  });
  let j = x || h;
  return (0, r.jsx)(l.A, {
    questOrQuests: t,
    questContent: g,
    sourceQuestContent: n,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [j ? (0, r.jsx)(o.$jN, {
        className: u.spinner,
        type: o.$jN.Type.WANDERING_CUBES
      }) : null, (0, r.jsx)("div", {
        ref: e,
        style: {
          visibility: j ? "hidden" : "visible"
        },
        children: (0, r.jsxs)(o.Y0X, {
          "data-migration-pending": true,
          transitionState: j ? o.Dvm.HIDDEN : a,
          size: o.CgR.DYNAMIC,
          className: u.modal,
          parentComponent: "QuestRewardModalBase",
          children: [(0, r.jsx)(o.olH, {
            "data-migration-pending": true,
            className: u.closeButton,
            onClick: d,
            withCircleBackground: true
          }), (0, r.jsxs)("div", {
            className: u.modalContent,
            children: [(0, r.jsx)("div", {
              className: u.leftPanel,
              children: f
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