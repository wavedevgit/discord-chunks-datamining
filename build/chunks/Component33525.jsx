/** Chunk was on web.js **/
/** chunk id: 33525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk793574 = require("./793574.js"),
  Chunk139286 = require("./139286.js"),
  Chunk967198 = require("./967198.js"),
  Chunk250627 = require("./250627.js"),
  Chunk284605 = require("./284605.jsx"),
  Chunk412728 = require("./412728.js");

function f(e) {
  let {
    code: t
  } = e, [n, f] = t.split("-"), p = (0, c.Qi)(n, f), _ = (0, a.bG)([l.A], () => l.A.getGuildId());
  return ((0, o.A)({
    type: d.z.VIEW,
    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: f,
      has_entitlement: (null == p ? true : p.has_entitlement) === true
    }
  }, {
    disableTrack: null == p
  }), null == p || _ !== n) ? null : (0, r.jsx)(u.i, {
    guildProductListing: p,
    guildId: n,
    location: s.A.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}