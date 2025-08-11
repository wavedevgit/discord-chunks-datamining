/** Chunk was on 94136 **/
/** chunk id: 897942, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk821982 = require("./821982.js"),
  Chunk594174 = require("./594174.js"),
  Chunk484027 = require("./484027.js"),
  Chunk328756 = require("./328756.js"),
  Chunk131812 = require("./131812.js");

function m(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: i,
    size: m
  } = e, C = (0, r.e7)([o.default], () => o.default.getCurrentUser()), p = (0, r.e7)([a.Z], () => a.Z.useReducedMotion), g = (0, l.pxk)(m);
  return i.length > 2 ? (0, n.jsx)("img", {
    alt: "",
    src: t,
    style: {
      height: 1.2 * g
    }
  }) : (0, n.jsxs)("div", {
    className: c.container,
    children: [(1 === i.length || 2 === i.length) && (0, n.jsx)(l.Xo$, {
      "aria-label": null == C ? true : C.username,
      size: m,
      className: c.firstPromotionalAvatar,
      src: 1 === i.length ? null == C ? true : C.getAvatarURL(true, (0, l.pxk)(m), !p) : d,
      avatarDecoration: (0, s.Z)(i[0].assetId, m, !p)
    }), 2 === i.length && (0, n.jsx)("div", {
      style: {
        marginRight: -Math.round(.321 * g)
      },
      children: (0, n.jsx)(l.Xo$, {
        "aria-label": null == C ? true : C.username,
        size: m,
        src: u,
        avatarDecoration: (0, s.Z)(i[1].assetId, m, !p)
      })
    })]
  })
}