/** Chunk was on web.js **/
/** chunk id: 33052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk383475 = require("./383475.js");

function f() {
  var e;
  let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
    {
      claimableRewards: n
    } = (0, s.wD)(),
    f = (0, l.Z)(),
    p = null == f ? true : f.planSelection;
  if (null == p || null == n || 0 === n.length) return null;
  let _ = (0, c.Yr)(null == (e = p.getBannerImageUrl) ? true : e.call(p)),
    m = (0, c.Tl)(p.gradientConfig, {
      defaultAngle: 180
    });
  return (0, r.jsxs)("div", {
    className: d.promotionalGiftMessage,
    style: null != _ ? _ : m,
    children: [(0, r.jsxs)("div", {
      className: d.promotionalTextSection,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: p.heading()
      }), null != p.subheading && (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: p.subheading(n.length)
      })]
    }), (0, r.jsx)("div", {
      className: d.avatar,
      children: (0, r.jsx)(u.Z, {
        maxRewardImageSrc: p.getImageUrl(true, t),
        claimableRewards: n,
        size: a.EFr.SIZE_80
      })
    })]
  })
}