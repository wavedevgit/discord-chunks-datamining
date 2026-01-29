/** Chunk was on 90948 **/
/** chunk id: 524728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
    title: c.intl.string(c.t.Hd3D8W),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t.cpT0Cq),
      onClick: t
    }],
    onClose: t,
    transitionState: n,
    children: (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: c.intl.string(c.t.Ij97SL)
    })
  })
}

function f(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    transitionState: r,
    onClose: c,
    rewardContent: f,
    isRewardContentLoading: x,
    rewardContentHasError: _,
    location: g
  } = e, v = l.uF.REWARD_MODAL, [h, j] = a.useState(true);
  if (_) return (0, i.jsx)(m, {
    onClose: c,
    transitionState: r
  });
  let p = x || h;
  return (0, i.jsx)(o.R, {
    questOrQuests: t,
    questContent: v,
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
            onClick: c,
            withCircleBackground: true
          }), (0, i.jsxs)("div", {
            className: u.jE,
            children: [(0, i.jsx)("div", {
              className: u._H,
              children: f
            }), (0, i.jsx)("div", {
              className: u.xK,
              children: (0, i.jsx)(d.A, {
                quest: t,
                sourceQuestContent: n,
                onLoadComplete: () => j(false),
                location: g
              })
            })]
          })]
        })
      })]
    })
  })
}