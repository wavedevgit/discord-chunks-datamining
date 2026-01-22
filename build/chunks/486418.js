/** Chunk was on web.js **/
/** chunk id: 486418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => u
});
var Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk826673 = require("./826673.js"),
  Chunk130978 = require("./130978.js"),
  Chunk576705 = require("./576705.js"),
  Chunk491026 = require("./491026.js"),
  Chunk652215 = require("./652215.js");

function u(e, t) {
  var n;
  let u = (0, l.NS)(t),
    d = (0, a.JZ)(i.M.SERVER_SHOP_PHANTOM_PREVIEW),
    f = (0, r.bG)([o.A], () => null != e && o.A.can(c.xBc.ADMINISTRATOR, e)),
    p = null != (n = null == e ? true : e.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && n,
    _ = (0, s.w)(null == e ? true : e.id, "useGuildShopPreviewVisible"),
    h = [c.GuildFeatures.CREATOR_MONETIZABLE, c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, c.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(t => null == e ? true : e.features.has(t));
  return null != e && f && !p && h && u && _ && !d
}