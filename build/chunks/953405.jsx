/** Chunk was on 16476 **/
/** chunk id: 953405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk794231 = require("./794231.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk755007 = require("./755007.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk651726 = require("./651726.js");

function f(e) {
  var t;
  let {
    orbPrice: n,
    isProductDisabled: o,
    hasSufficientOrbs: s
  } = e, {
    showBetaTag: u
  } = l.Z.useExperiment({
    location: "shop_orb_full_price_line"
  }), f = o ? d.intl.string(d.t.wu4gyc) : d.intl.string(d.t.eFNRzc), p = o || !s;
  return <div className={m.priceLine}>{<div className={m.orbText}>{<i.Text variant={"text-xs/normal"} className={p ? m.disabled : true}>{f}</i.Text>}{u && <a.Z />}</div>}{<c.Z orbAmount={null != (t = null == n ? true : n.amount) ? t : 1 / 0} className={p ? m.disabled : true} />}</div>
}

function p(e) {
  var t;
  let {
    prices: n,
    isPremiumUser: i,
    discount: a,
    product: l,
    hasSufficientOrbs: d,
    isProductDisabled: p,
    discountOfferAmount: v
  } = e, h = null != v;
  return 0 === n.length ? null : n[0].currency === u.pK.DISCORD_ORB ? <f orbPrice={n[0]} isProductDisabled={p} hasSufficientOrbs={d} /> : <div className={m.priceLine}>{<div className={m.priceTagContainer}>{<o.Z product={l} discount={a} isPremiumUser={i} hideStrikethroughPrice={!i || h} nitroIconType={"tooltip"} nitroIconSize={"xs"} discountOfferAmount={v} />}{i || h ? null : <s.Z product={l} />}</div>}{n.length > 1 && n[1].currency === u.pK.DISCORD_ORB && <c.Z orbAmount={null != (t = n[1].amount) ? t : 1 / 0} className={p || !d ? m.disabled : true} />}</div>
}