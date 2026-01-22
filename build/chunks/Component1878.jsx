/** Chunk was on web.js **/
/** chunk id: 1878, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk810498 = require("./810498.js"),
  Chunk298305 = require("./298305.jsx"),
  Chunk733724 = require("./733724.js");

function f() {
  var e;
  let t = (0, i.bG)([s.A], () => s.A.useReducedMotion),
    {
      claimableRewards: n
    } = (0, o.Pv)(),
    f = (0, l.A)(),
    p = null == f ? true : f.planSelection;
  if (null == p || null == n || 0 === n.length) return null;
  let _ = (0, c.gc)(null == (e = p.getBannerImageUrl) ? true : e.call(p)),
    h = (0, c.K5)(p.gradientConfig, {
      defaultAngle: 180
    });
  return (0, r.jsxs)("div", {
    className: d.us,
    style: null != _ ? _ : h,
    children: [(0, r.jsxs)("div", {
      className: d.ZR,
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
      className: d.my,
      children: (0, r.jsx)(u.A, {
        maxRewardImageSrc: p.getImageUrl(true, t),
        claimableRewards: n,
        size: a._3J.SIZE_80
      })
    })]
  })
}