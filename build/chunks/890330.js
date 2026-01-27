/** Chunk was on web.js **/
/** chunk id: 890330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk140547 = require("./140547.js"),
  Chunk818348 = require("./818348.js");

function s(e, t) {
  let {
    enableHangStatus: n
  } = (0, a.$j)({
    guildId: null == t ? true : t.guild_id,
    location: e
  }), s = (0, r.bG)([i.A], () => i.A.can(o.xB.CONNECT, t));
  return n && s
}