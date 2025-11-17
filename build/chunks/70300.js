/** Chunk was on web.js **/
/** chunk id: 70300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk905128 = require("./905128.js"),
  Chunk535396 = require("./535396.js");
let l = new Set([...Array.from(Chunk535396.NL), Chunk494497.A$]);

function c(e) {
  let t = (0, a.e7)([o.Z], () => {
    var t, n;
    return null == (n = o.Z.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? true : t[s.Us.PERK]
  });
  return r.useMemo(() => (null != t ? t : []).filter(e => !l.has(e.skuId)), [t])
}