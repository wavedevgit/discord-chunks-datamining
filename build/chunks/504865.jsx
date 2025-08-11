/** Chunk was on 94136 **/
/** chunk id: 504865, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk106112 = require("./106112.js");
let p = function(e) {
  let {
    subscriptionTier: t,
    interval: i = m.rV.MONTH,
    className: r,
    isGift: p = false,
    variant: g,
    priceOptions: x,
    isApplicationHome: f,
    enablePremiumBrandRefresh: h
  } = e, v = (0, a.e7)([u.Z], () => u.Z.isLoadedForSKUs([t])), I = (0, s.ap)((0, c.ZP)());
  if (!v) return <o.$jN type={o.$jN.Type.PULSING_ELLIPSIS} className={C.priceSpinner} />;
  let T = u.Z.getForSkuAndInterval((0, d.Wz)(t), i),
    j = null != T ? (0, d.gy)(T, x, false, p) : null;
  if (h) {
    let e = i === m.rV.YEAR;
    return <div>{<o.Text variant={e ? "heading-md/semibold" : "heading-xxl/extrabold"} color={e ? "text-muted" : I ? "header-primary" : "always-white"} tag={"span"}><span>{j}</span></o.Text>}{<o.Text variant={"text-xs/medium"} tag={"span"} color={"text-muted"}>{"/"}{(0, d.eP)(i)}</o.Text>}</div>
  }
  return <o.X6q color={f ? "none" : "always-white"} variant={null != g ? g : "heading-md/medium"} className={l()(C.pricePerInterval, r)}><n.Fragment>{<span className={f ? true : C.price}>{j}</span>}{" / "}{(0, d.eP)(i)}</n.Fragment></o.X6q>
}