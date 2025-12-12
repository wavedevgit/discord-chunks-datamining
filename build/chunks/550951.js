/** Chunk was on web.js **/
/** chunk id: 550951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => u
});
var Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk352981 = require("./352981.js"),
  Chunk496675 = require("./496675.js"),
  Chunk652515 = require("./652515.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  var n;
  let u = (0, l.yV)(t),
    d = (0, o.Nj)(i.z.SERVER_SHOP_PHANTOM_PREVIEW),
    f = (0, r.e7)([s.Z], () => null != e && s.Z.can(c.Plq.ADMINISTRATOR, e)),
    p = null != (n = null == e ? true : e.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && n,
    _ = (0, a.y)(null == e ? true : e.id, "useGuildShopPreviewVisible"),
    m = [c.GuildFeatures.CREATOR_MONETIZABLE, c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, c.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(t => null == e ? true : e.features.has(t));
  return null != e && f && !p && m && u && _ && !d
}