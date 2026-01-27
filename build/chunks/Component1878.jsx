/** Chunk was on 2292 **/
/** chunk id: 1878, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  K: () => m
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

function m() {
  var e;
  let t = (0, i.bG)([a.A], () => a.A.useReducedMotion),
    {
      claimableRewards: r
    } = (0, s.Pv)(),
    m = (0, o.A)(),
    p = null == m ? true : m.planSelection;
  if (null == p || null == r || 0 === r.length) return null;
  let g = (0, c.gc)(null == (e = p.getBannerImageUrl) ? true : e.call(p)),
    x = (0, c.K5)(p.gradientConfig, {
      defaultAngle: 180
    });
  return (0, n.jsxs)("div", {
    className: d.us,
    style: null != g ? g : x,
    children: [(0, n.jsxs)("div", {
      className: d.ZR,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: p.heading()
      }), null != p.subheading && (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: p.subheading(r.length)
      })]
    }), (0, n.jsx)("div", {
      className: d.my,
      children: (0, n.jsx)(u.A, {
        maxRewardImageSrc: p.getImageUrl(true, t),
        claimableRewards: r,
        size: l._3J.SIZE_80
      })
    })]
  })
}