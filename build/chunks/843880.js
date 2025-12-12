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
  } = e, f = (0, o.e7)([l.Z], () => l.Z.getGuildProduct(n)), p = (0, o.e7)([a.Z], () => a.Z.getGuild(t), [t]), _ = (0, u.Z)({
    guildId: t,
    productId: n
  });
  if (i()(null != p, "guild cannot be null"), i()(null != f, "guildProductListing cannot be null"), (0, s.SO)(p)) return {
    variant: "primary",
    text: d.intl.string(d.t.xUi3BL),
    disabled: true
  };
  if (f.has_entitlement) return null != f.attachments ? _ : {
    variant: "secondary",
    text: d.intl.string(d.t.RcTOGF),
    disabled: true
  };
  {
    let e = () => (0, c.z)({
      guildProductListing: f,
      guildId: p.id,
      sourceAnalyticsLocations: r
    });
    return {
      variant: "primary",
      text: d.intl.string(d.t.xUi3BL),
      onClick: e
    }
  }
}