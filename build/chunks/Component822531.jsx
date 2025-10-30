/** Chunk was on 29679 **/
/** chunk id: 822531, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk725803 = require("./725803.js"),
  Chunk546221 = require("./546221.jsx"),
  Chunk489028 = require("./489028.jsx"),
  Chunk674563 = require("./674563.js");
let c = e => {
  let {
    guild: t
  } = e, {
    application: n,
    loading: c
  } = (0, l.Z)(t.id, o.wW.GUILD_ROLE_SUBSCRIPTIONS);
  return c ? (0, r.jsx)(i.$jN, {}) : null != n ? (0, r.jsx)(a.Z, {
    guildId: t.id,
    application: n
  }) : (0, r.jsx)(s.Z, {
    guild: t
  })
}