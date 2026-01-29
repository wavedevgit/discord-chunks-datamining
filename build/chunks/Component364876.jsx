/** Chunk was on 2824 **/
/** chunk id: 364876, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  _: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk807098 = require("./807098.js"),
  Chunk412260 = require("./412260.js"),
  Chunk810498 = require("./810498.js"),
  Chunk298305 = require("./298305.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk686046 = require("./686046.js");

function g() {
  var e;
  let n = (0, i.bG)([u.A], () => {
      let e = u.A.getMarketingComponentByType(l.C.GIFT_CUSTOMIZATION_BANNER);
      return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftCustomizationBanner
    }),
    {
      claimableRewards: t
    } = (0, a.Pv)(),
    g = (0, o.T)(null == n ? true : n.asset),
    f = (0, o.T)(null == n ? true : n.backgroundAsset),
    E = null == n ? true : n.gradient,
    j = null != E && null != E.colors && E.colors.length >= 2 ? (0, c.K5)({
      gradient: E.colors,
      angle: null != (e = E.angle) ? e : true
    }, {
      colorStops: [0, 12, 100]
    }) : true,
    x = (0, c.gc)(null != f ? f : true);
  null != x && (x.backgroundSize = "cover, auto", x.backgroundPosition = "right center, 0% 0%");
  let h = (0, c.x)(x, j);
  return null == n || null == t ? null : (0, r.jsxs)("div", {
    className: m.qD,
    style: h,
    children: [(0, r.jsx)("div", {
      className: m.my,
      children: (0, r.jsx)(d.A, {
        claimableRewards: t,
        maxRewardImageSrc: null != g ? g : "",
        size: s._3J.SIZE_40,
        imageScaling: 1.9
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: m._M,
      color: "always-white",
      children: p.intl.string(p.t.Abiuci)
    })]
  })
}