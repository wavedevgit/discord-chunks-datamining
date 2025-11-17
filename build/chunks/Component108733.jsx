/** Chunk was on 89311 **/
/** chunk id: 108733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk705338 = require("./705338.js"),
  Chunk810568 = require("./810568.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  var t;
  let {
    invite: n,
    trackClick: d,
    closeModal: u
  } = e, m = l.useCallback(() => {
    (null == n ? true : n.guild) != null && ((0, a.Z)({
      invite: n
    }), u(), d(s.as.GameShop))
  }, [u, n, d]);
  return new Set(null == n || null == (t = n.guild) ? true : t.features).has(o.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, i.jsx)(r.zxk, {
    variant: "primary",
    text: c.intl.string(c.t.v8UpgE),
    icon: r.EOn,
    onClick: m,
    fullWidth: true
  }) : null
}