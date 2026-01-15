/** Chunk was on web.js **/
/** chunk id: 897942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk821982 = require("./821982.js"),
  Chunk594174 = require("./594174.js"),
  Chunk349792 = require("./349792.js"),
  Chunk328756 = require("./328756.js"),
  Chunk131812 = require("./131812.js");
let f = 1.5,
  p = .321;

function _(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: n,
    size: _,
    imageScaling: h = f
  } = e, m = (0, i.e7)([l.default], () => l.default.getCurrentUser()), g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), E = (0, a.dcp)(_), b = {
    height: E * h
  };
  return n.length > 0 ? (0, r.jsx)("img", {
    alt: "",
    src: t,
    style: b
  }) : (0, r.jsxs)("div", {
    className: c.container,
    children: [(1 === n.length || 2 === n.length) && (0, r.jsx)(a.Xo$, {
      "aria-label": null == m ? true : m.username,
      size: _,
      className: c.firstPromotionalAvatar,
      src: 1 === n.length ? null == m ? true : m.getAvatarURL(true, (0, a.dcp)(_), !g) : d,
      avatarDecoration: (0, s.Z)(n[0].assetId, _, !g)
    }), 2 === n.length && (0, r.jsx)("div", {
      style: {
        marginRight: -Math.round(E * p)
      },
      children: (0, r.jsx)(a.Xo$, {
        "aria-label": null == m ? true : m.username,
        size: _,
        src: u,
        avatarDecoration: (0, s.Z)(n[1].assetId, _, !g)
      })
    })]
  })
}