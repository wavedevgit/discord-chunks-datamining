/** Chunk was on web.js **/
/** chunk id: 890330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk140547 = require("./140547.js"),
  Chunk818348 = require("./818348.js");

function o(e, t) {
  let {
    enableHangStatus: n
  } = (0, a.$j)({
    guildId: null == t ? true : t.guild_id,
    location: e
  }), o = (0, r.bG)([i.A], () => i.A.can(s.xB.CONNECT, t));
  return n && o
}