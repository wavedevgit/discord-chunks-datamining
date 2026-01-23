/** Chunk was on 2824 **/
/** chunk id: 364876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk810498 = require("./810498.js"),
  Chunk298305 = require("./298305.jsx"),
  Chunk686046 = require("./686046.js");

function g() {
  var e, t;
  let n = (0, l.bG)([o.A], () => o.A.useReducedMotion),
    g = (0, a.Ay)(),
    f = (0, i.Mw)(g),
    y = (0, c.A)(),
    j = null == y ? true : y.planSelectionBanner,
    {
      claimableRewards: b
    } = (0, u.Pv)();
  if (null == j || null == b) return null;
  let h = null == (e = j.getBackgroundImageUrl) ? true : e.call(j, f),
    v = (0, d.gc)(h),
    O = null == (t = j.gradientConfig) ? true : t.call(j, {
      isDarkMode: f,
      isAndroid: false
    }),
    P = (0, d.K5)(O, {
      colorStops: [0, 12, 100]
    }),
    x = (0, d.x)(v, P, {
      backgroundSize: "cover, auto",
      backgroundPosition: "right center, 0% 0%"
    });
  return (0, r.jsxs)("div", {
    className: m.qD,
    style: x,
    children: [(0, r.jsx)("div", {
      className: m.my,
      children: (0, r.jsx)(p.A, {
        claimableRewards: b,
        maxRewardImageSrc: j.getImageUrl(f, n),
        size: s._3J.SIZE_40,
        imageScaling: 1.25
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: m._M,
      color: "always-white",
      children: j.desktopBannerText(b.length)
    })]
  })
}