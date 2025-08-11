/** Chunk was on 45620 **/
/** chunk id: 306092, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk409116 = require("./409116.js"),
  Chunk755007 = require("./755007.js"),
  Chunk231338 = require("./231338.js"),
  Chunk858022 = require("./858022.js");

function s(e) {
  let {
    price: t,
    isPremiumUser: n,
    discount: s,
    hasSufficientOrbs: c,
    discountOfferAmount: u
  } = e;
  return t.currency === i.pK.DISCORD_ORB ? <a.Z orbAmount={t.amount} className={c ? true : o.disabled} /> : <l.F price={t} discount={s} nitroIconType={n ? "default" : true} nitroIconSize={"md"} discountOfferAmount={u} />
}

function c(e) {
  let {
    displayPrices: t,
    isPremiumUser: n,
    discount: l,
    hasSufficientOrbs: a,
    discountOfferAmount: i
  } = e;
  return <div className={o.priceLine}>{t.map((e, t) => (0, r.jsx)(s, {
      price: e,
      isPremiumUser: n,
      discount: l,
      hasSufficientOrbs: a,
      discountOfferAmount: i
    }, t))}</div>
}