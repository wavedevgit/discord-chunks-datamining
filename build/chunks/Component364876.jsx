/** Chunk was on 2824 **/
/** chunk id: 364876, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  _: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk807098 = require("./807098.js"),
  Chunk412260 = require("./412260.js"),
  Chunk810498 = require("./810498.js"),
  Chunk298305 = require("./298305.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk686046 = require("./686046.js");

function f() {
  var e;
  let n = (0, s.bG)([c.A], () => {
      let e = c.A.getMarketingComponentByType(i.C.GIFT_CUSTOMIZATION_BANNER);
      return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftCustomizationBanner
    }),
    {
      claimableRewards: t
    } = (0, o.Pv)(),
    f = (0, u.T)(null == n ? true : n.asset),
    j = (0, u.T)(null == n ? true : n.backgroundAsset),
    E = null == n ? true : n.gradient,
    x = null != E && null != E.colors && E.colors.length >= 2 ? (0, d.K5)({
      gradient: E.colors,
      angle: null != (e = E.angle) ? e : true
    }, {
      colorStops: [0, 12, 100]
    }) : true,
    h = r.useMemo(() => (0, d.gc)(null != j ? j : true), [j]),
    T = r.useMemo(() => (0, d.x)(h, x, {
      backgroundSize: "cover, auto",
      backgroundPosition: "right center, 0% 0%"
    }), [h, x]);
  return null == n || null == t ? null : (0, l.jsxs)("div", {
    className: g.qD,
    style: T,
    children: [(0, l.jsx)("div", {
      className: g.my,
      children: (0, l.jsx)(p.A, {
        claimableRewards: t,
        maxRewardImageSrc: null != f ? f : "",
        size: a._3J.SIZE_40,
        imageScaling: 1.25
      })
    }), (0, l.jsx)(a.Text, {
      variant: "text-md/medium",
      className: g._M,
      color: "always-white",
      children: m.intl.string(m.t.Abiuci)
    })]
  })
}