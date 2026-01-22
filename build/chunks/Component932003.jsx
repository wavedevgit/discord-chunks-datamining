/** Chunk was on web.js **/
/** chunk id: 932003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk810498 = require("./810498.js"),
  Chunk298305 = require("./298305.jsx"),
  Chunk708611 = require("./708611.js");

function f() {
  var e;
  let t = (0, i.bG)([s.A], () => s.A.useReducedMotion),
    {
      claimableRewards: n
    } = (0, o.Pv)(),
    f = (0, l.A)(),
    p = null == f ? true : f.planSelection,
    _ = (0, c.K5)(null == p ? true : p.gradientConfig, {
      reverse: true
    }),
    h = null == p || null == (e = p.getBannerImageUrl) ? true : e.call(p);
  return null == p || null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
    className: d.kL,
    style: _,
    children: [null != h && (0, r.jsx)("div", {
      className: d._e,
      style: {
        backgroundImage: "url(".concat(h, ")")
      }
    }), (0, r.jsxs)("div", {
      className: d.V_,
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
      className: d.my,
      children: (0, r.jsx)(u.A, {
        maxRewardImageSrc: p.getImageUrl(true, t),
        claimableRewards: n,
        size: a._3J.SIZE_48,
        imageScaling: t ? 1.9 : 2.4
      })
    })]
  })
}