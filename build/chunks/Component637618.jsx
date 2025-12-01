/** Chunk was on web.js **/
/** chunk id: 637618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk213609 = require("./213609.js"),
  Chunk914010 = require("./914010.js"),
  Chunk267101 = require("./267101.js"),
  Chunk675297 = require("./675297.jsx"),
  Chunk20281 = require("./20281.js");

function f(e) {
  let {
    code: t
  } = e, [n, f] = t.split("-"), p = (0, c.hO)(n, f), _ = (0, a.e7)([l.Z], () => l.Z.getGuildId());
  return ((0, s.Z)({
    type: d.n.VIEW,
    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: f,
      has_entitlement: (null == p ? true : p.has_entitlement) === true
    }
  }, {
    disableTrack: null == p
  }), null == p || _ !== n) ? null : (0, r.jsx)(u.H, {
    guildProductListing: p,
    guildId: n,
    location: o.Z.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}