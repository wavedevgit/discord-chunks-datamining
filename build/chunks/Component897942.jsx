/** Chunk was on 94136 **/
/** chunk id: 897942, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk821982 = require("./821982.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk967282 = require("./967282.js"),
  Chunk328756 = require("./328756.js"),
  Chunk131812 = require("./131812.js");

function C(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: i,
    size: C
  } = e, p = (0, r.e7)([c.default], () => c.default.getCurrentUser()), g = (0, r.e7)([a.Z], () => a.Z.useReducedMotion), x = (0, l.pxk)(C);
  return i.length > 2 ? (0, n.jsx)(o.Z, {
    style: {
      height: 1.2 * x
    },
    src: t,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true
  }) : (0, n.jsxs)("div", {
    className: u.container,
    children: [(1 === i.length || 2 === i.length) && (0, n.jsx)(l.Xo$, {
      "aria-label": null == p ? true : p.username,
      size: C,
      className: u.firstPromotionalAvatar,
      src: 1 === i.length ? null == p ? true : p.getAvatarURL(true, (0, l.pxk)(C), !g) : m,
      avatarDecoration: (0, s.Z)(i[0].assetId, C, !g)
    }), 2 === i.length && (0, n.jsx)("div", {
      style: {
        marginRight: -Math.round(.321 * x)
      },
      children: (0, n.jsx)(l.Xo$, {
        "aria-label": null == p ? true : p.username,
        size: C,
        src: d,
        avatarDecoration: (0, s.Z)(i[1].assetId, C, !g)
      })
    })]
  })
}