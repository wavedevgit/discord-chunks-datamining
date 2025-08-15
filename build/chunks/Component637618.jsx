/** Chunk was on 66866 **/
/** chunk id: 637618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk213609 = require("./213609.js"),
  Chunk914010 = require("./914010.js"),
  Chunk267101 = require("./267101.js"),
  Chunk675297 = require("./675297.jsx"),
  Chunk20281 = require("./20281.js");

function p(e) {
  let {
    code: t
  } = e, [n, p] = t.split("-"), m = (0, c.hO)(n, p), f = (0, l.e7)([s.Z], () => s.Z.getGuildId());
  return ((0, o.Z)({
    type: d.n.VIEW,
    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: p,
      has_entitlement: (null == m ? true : m.has_entitlement) === true
    }
  }, {
    disableTrack: null == m
  }), null == m || f !== n) ? null : (0, r.jsx)(u.H, {
    guildProductListing: m,
    guildId: n,
    location: a.Z.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}