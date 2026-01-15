/** Chunk was on web.js **/
/** chunk id: 474706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk402550 = require("./402550.js");

function f() {
  var e;
  let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
    {
      claimableRewards: n
    } = (0, s.wD)(),
    f = (0, l.Z)(),
    p = null == f ? true : f.planSelection,
    _ = (0, c.Tl)(null == p ? true : p.gradientConfig, {
      reverse: true
    }),
    h = null == p || null == (e = p.getBannerImageUrl) ? true : e.call(p);
  return null == p || null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
    className: d.container,
    style: _,
    children: [null != h && (0, r.jsx)("div", {
      className: d.bannerImage,
      style: {
        backgroundImage: "url(".concat(h, ")")
      }
    }), (0, r.jsxs)("div", {
      className: d.textSection,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/bold",
        color: "always-white",
        children: p.heading()
      }), null != p.subheading && (0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "always-white",
        children: p.subheading(n.length)
      })]
    }), (0, r.jsx)("div", {
      className: d.avatar,
      children: (0, r.jsx)(u.Z, {
        maxRewardImageSrc: p.getImageUrl(true, t),
        claimableRewards: n,
        size: a.EFr.SIZE_48,
        imageScaling: t ? 1.9 : 2.4
      })
    })]
  })
}