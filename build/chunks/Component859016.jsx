/** Chunk was on 47841 **/
/** chunk id: 859016, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk262828 = require("./262828.js"),
  Chunk327427 = require("./327427.jsx"),
  Chunk857802 = require("./857802.jsx"),
  Chunk705751 = require("./705751.js");
let o = e => {
  let {
    guild: t
  } = e, {
    application: n,
    loading: o
  } = (0, l.A)(t.id, c.S7.GUILD_ROLE_SUBSCRIPTIONS);
  return o ? (0, r.jsx)(i.y$y, {}) : null != n ? (0, r.jsx)(s.A, {
    guildId: t.id,
    application: n
  }) : (0, r.jsx)(a.A, {
    guild: t
  })
}