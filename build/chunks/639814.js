/** Chunk was on web.js **/
/** chunk id: 639814, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c_: () => l,
  is: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk997950 = require("./997950.js"),
  Chunk981631 = require("./981631.js");
let s = () => (0, a.xu)().selectedGuildId,
  l = () => {
    var e;
    let t = s(),
      n = (0, r.e7)([i.Z], () => i.Z.getGuild(t));
    return null != (e = null == n ? true : n.features.has(o.GuildFeatures.HUB)) && e
  }