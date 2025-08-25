/** Chunk was on web.js **/
/** chunk id: 897942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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
let _ = 1.3,
  p = .321;

function h(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: n,
    size: h,
    imageScaling: m = _
  } = e, g = (0, i.e7)([c.default], () => c.default.getCurrentUser()), E = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), b = (0, o.pxk)(h), y = {
    height: b * m
  };
  return n.length > 2 ? (0, r.jsx)(l.Z, {
    style: y,
    src: t,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true
  }) : (0, r.jsxs)("div", {
    className: u.container,
    children: [(1 === n.length || 2 === n.length) && (0, r.jsx)(o.Xo$, {
      "aria-label": null == g ? true : g.username,
      size: h,
      className: u.firstPromotionalAvatar,
      src: 1 === n.length ? null == g ? true : g.getAvatarURL(true, (0, o.pxk)(h), !E) : f,
      avatarDecoration: (0, s.Z)(n[0].assetId, h, !E)
    }), 2 === n.length && (0, r.jsx)("div", {
      style: {
        marginRight: -Math.round(b * p)
      },
      children: (0, r.jsx)(o.Xo$, {
        "aria-label": null == g ? true : g.username,
        size: h,
        src: d,
        avatarDecoration: (0, s.Z)(n[1].assetId, h, !E)
      })
    })]
  })
}