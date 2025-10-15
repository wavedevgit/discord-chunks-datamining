/** Chunk was on web.js **/
/** chunk id: 843880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk430824 = require("./430824.js"),
  Chunk267101 = require("./267101.js"),
  Chunk240864 = require("./240864.js"),
  Chunk57949 = require("./57949.jsx"),
  Chunk298243 = require("./298243.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: r
  } = e, f = (0, a.e7)([l.Z], () => l.Z.getGuildProduct(n)), _ = (0, a.e7)([o.Z], () => o.Z.getGuild(t), [t]), p = (0, u.Z)({
    guildId: t,
    productId: n
  });
  if (i()(null != _, "guild cannot be null"), i()(null != f, "guildProductListing cannot be null"), (0, s.SO)(_)) return {
    variant: "primary",
    text: d.intl.string(d.t.xUi3BL),
    disabled: true
  };
  if (f.has_entitlement) return null != f.attachments ? p : {
    variant: "secondary",
    text: d.intl.string(d.t.RcTOGF),
    disabled: true
  };
  {
    let e = () => (0, c.z)({
      guildProductListing: f,
      guildId: _.id,
      sourceAnalyticsLocations: r
    });
    return {
      variant: "primary",
      text: d.intl.string(d.t.xUi3BL),
      onClick: e
    }
  }
}