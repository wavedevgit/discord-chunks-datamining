/** Chunk was on 92917 **/
/** chunk id: 897518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: r
  } = e, p = (0, l.bG)([o.A], () => o.A.getGuildProduct(n)), m = (0, l.bG)([a.A], () => a.A.getGuild(t), [t]), f = (0, u.A)({
    guildId: t,
    productId: n
  });
  return (i()(null != m, "guild cannot be null"), i()(null != p, "guildProductListing cannot be null"), (0, s.BB)(m)) ? {
    variant: "primary",
    text: d.intl.string(d.t.xUi3BL),
    disabled: true
  } : p.has_entitlement ? null != p.attachments ? f : {
    variant: "secondary",
    text: d.intl.string(d.t.RcTOGF),
    disabled: true
  } : {
    variant: "primary",
    text: d.intl.string(d.t.xUi3BL),
    onClick: () => (0, c.N)({
      guildProductListing: p,
      guildId: m.id,
      sourceAnalyticsLocations: r
    })
  }
}