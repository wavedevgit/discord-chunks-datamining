/** Chunk was on 47841 **/
/** chunk id: 84763, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk262828 = require("./262828.js"),
  Chunk555337 = require("./555337.js"),
  Chunk130978 = require("./130978.js"),
  Chunk831806 = require("./831806.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js");

function f() {
  let e = (0, i.bG)([a.A], () => a.A.getGuild()),
    t = (0, c.w)(null == e ? true : e.id, "guild_product_settings"),
    {
      application: n,
      loading: f
    } = (0, s.A)(null == e ? true : e.id, u.S7.GUILD_ROLE_SUBSCRIPTIONS),
    g = null != n && (null == e ? true : e.features.has(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === true;
  return (0, r.jsx)("main", {
    children: null == e || !t || f ? (0, r.jsx)(l.y$y, {}) : (0, r.jsx)(o.o, {
      guildId: e.id,
      hasValidApplication: g
    })
  })
}