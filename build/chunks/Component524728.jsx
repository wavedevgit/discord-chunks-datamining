/** Chunk was on 90948 **/
/** chunk id: 524728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk341915 = require("./341915.js"),
  Chunk73473 = require("./73473.js"),
  Chunk240710 = require("./240710.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk476946 = require("./476946.js");

function m(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, i.jsx)(r.Modal, {
    size: "md",
    title: o.intl.string(o.t.Hd3D8W),
    actions: [{
      variant: "primary",
      text: o.intl.string(o.t.cpT0Cq),
      onClick: t
    }],
    onClose: t,
    transitionState: n,
    children: (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: o.intl.string(o.t.Ij97SL)
    })
  })
}

function x(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    transitionState: r,
    onClose: o,
    rewardContent: x,
    isRewardContentLoading: f,
    rewardContentHasError: g,
    location: v
  } = e, j = l.uF.REWARD_MODAL, [h, b] = a.useState(true);
  if (g) return (0, i.jsx)(m, {
    onClose: o,
    transitionState: r
  });
  let p = f || h;
  return (0, i.jsx)(d.R, {
    questOrQuests: t,
    questContent: j,
    sourceQuestContent: n,
    children: e => (0, i.jsxs)(i.Fragment, {
      children: [p ? (0, i.jsx)(s.y$y, {
        className: u.u1,
        type: s.y$y.Type.WANDERING_CUBES
      }) : null, (0, i.jsx)("div", {
        ref: e,
        style: {
          visibility: p ? "hidden" : "visible"
        },
        children: (0, i.jsxs)(s.EOs, {
          "data-migration-pending": true,
          transitionState: p ? s.ip4.HIDDEN : r,
          size: s.rIJ.DYNAMIC,
          className: u.yl,
          parentComponent: "QuestRewardModalBase",
          children: [(0, i.jsx)(s.s_y, {
            "data-migration-pending": true,
            className: u.b,
            onClick: o,
            withCircleBackground: true
          }), (0, i.jsxs)("div", {
            className: u.jE,
            children: [(0, i.jsx)("div", {
              className: u._H,
              children: x
            }), (0, i.jsx)("div", {
              className: u.xK,
              children: (0, i.jsx)(c.A, {
                quest: t,
                sourceQuestContent: n,
                onLoadComplete: () => b(false),
                location: v
              })
            })]
          })]
        })
      })]
    })
  })
}