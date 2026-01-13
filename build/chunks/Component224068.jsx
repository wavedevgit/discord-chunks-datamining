/** Chunk was on 8087 **/
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
  Chunk436943 = require("./436943.js");

function d(e) {
  var t, n, i;
  let {
    product: d,
    isDarkText: m = false,
    isOrbExclusive: f = false,
    rentalDuration: p
  } = e, b = (t = d.type, n = f, null != (i = p) ? 3 === i ? s.intl.string(s.t["52UXCo"]) : 7 === i ? s.intl.string(s.t.FRR2s2) : s.intl.string(s.t.VgsFa1) : n ? s.intl.string(s.t["0TmQRG"]) : (0, l.EQ)(t).with(o.Z.AVATAR_DECORATION, () => s.intl.string(s.t["7v0T9P"])).with(o.Z.PROFILE_EFFECT, () => s.intl.string(s.t.wR5wOo)).otherwise(() => null));
  return null === b ? null : (0, r.jsx)(c.Text, {
    variant: "text-xxs/normal",
    className: a()([u.container, m ? u.darkText : u.lightText]),
    children: b
  })
}