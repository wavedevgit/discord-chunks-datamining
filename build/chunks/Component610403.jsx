/** Chunk was on 9536 **/
/** chunk id: 610403, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725803 = require("./725803.js"),
  Chunk999382 = require("./999382.js"),
  Chunk352981 = require("./352981.js"),
  Chunk469351 = require("./469351.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js");

function g() {
  let e = (0, i.e7)([s.Z], () => s.Z.getGuild()),
    t = (0, o.y)(null == e ? true : e.id, "guild_product_settings"),
    {
      application: n,
      loading: g
    } = (0, a.Z)(null == e ? true : e.id, u.wW.GUILD_ROLE_SUBSCRIPTIONS),
    m = null != n && (null == e ? true : e.features.has(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === true;
  return (0, r.jsx)("main", {
    children: null == e || !t || g ? (0, r.jsx)(l.$jN, {}) : (0, r.jsx)(c.t, {
      guildId: e.id,
      hasValidApplication: m
    })
  })
}