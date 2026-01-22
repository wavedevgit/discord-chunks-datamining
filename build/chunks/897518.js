/** Chunk was on web.js **/
/** chunk id: 897518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk71393 = require("./71393.js"),
  Chunk250627 = require("./250627.js"),
  Chunk871109 = require("./871109.js"),
  Chunk935453 = require("./935453.jsx"),
  Chunk179499 = require("./179499.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: r
  } = e, f = (0, a.bG)([l.A], () => l.A.getGuildProduct(n)), p = (0, a.bG)([s.A], () => s.A.getGuild(t), [t]), _ = (0, u.A)({
    guildId: t,
    productId: n
  });
  if (i()(null != p, "guild cannot be null"), i()(null != f, "guildProductListing cannot be null"), (0, o.BB)(p)) return {
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
    let e = () => (0, c.N)({
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