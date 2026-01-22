/** Chunk was on 2824 **/
/** chunk id: 364876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => f
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

function f() {
  var e, t;
  let n = (0, r.bG)([o.A], () => o.A.useReducedMotion),
    f = (0, a.Ay)(),
    g = (0, i.Mw)(f),
    j = (0, c.A)(),
    y = null == j ? true : j.planSelectionBanner,
    {
      claimableRewards: h
    } = (0, u.Pv)();
  if (null == y || null == h) return null;
  let v = null == (e = y.getBackgroundImageUrl) ? true : e.call(y, g),
    b = (0, d.gc)(v),
    O = null == (t = y.gradientConfig) ? true : t.call(y, {
      isDarkMode: g,
      isAndroid: false
    }),
    x = (0, d.K5)(O, {
      colorStops: [0, 12, 100]
    }),
    P = (0, d.x)(b, x, {
      backgroundSize: "cover, auto",
      backgroundPosition: "right center, 0% 0%"
    });
  return (0, l.jsxs)("div", {
    className: m.qD,
    style: P,
    children: [(0, l.jsx)("div", {
      className: m.my,
      children: (0, l.jsx)(p.A, {
        claimableRewards: h,
        maxRewardImageSrc: y.getImageUrl(g, n),
        size: s._3J.SIZE_40,
        imageScaling: 1.25
      })
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/medium",
      className: m._M,
      color: "always-white",
      children: y.desktopBannerText(h.length)
    })]
  })
}