/** Chunk was on 6377 **/
/** chunk id: 224068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./314940.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk351768 = require("./351768.js");

function d(e) {
  var t, n, i;
  let {
    product: d,
    isDarkText: m = false,
    isOrbExclusive: p = false,
    rentalDuration: f
  } = e, v = (t = d.type, n = p, null != (i = f) ? 3 === i ? c.intl.string(c.t["52UXCo"]) : 7 === i ? c.intl.string(c.t.FRR2s2) : c.intl.string(c.t.VgsFa1) : n ? c.intl.string(c.t["0TmQRG"]) : (0, l.EQ)(t).with(o.Z.AVATAR_DECORATION, () => c.intl.string(c.t["7v0T9P"])).with(o.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOo)).otherwise(() => null));
  return null === v ? null : (0, r.jsx)(s.Text, {
    variant: "text-xxs/normal",
    className: a()([u.container, m ? u.darkText : u.lightText]),
    children: v
  })
}