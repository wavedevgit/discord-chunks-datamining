/** Chunk was on web.js **/
/** chunk id: 112469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tx: () => o,
  q9: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk612025 = require("./612025.js"),
  Chunk652215 = require("./652215.js");
let o = () => (0, a.xk)().selectedGuildId,
  l = () => {
    var e;
    let t = o(),
      n = (0, r.bG)([i.A], () => i.A.getGuild(t));
    return null != (e = null == n ? true : n.features.has(s.GuildFeatures.HUB)) && e
  }