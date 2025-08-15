/** Chunk was on web.js **/
/** chunk id: 70300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk905128 = require("./905128.js"),
  Chunk535396 = require("./535396.js");
let s = new Set([...Array.from(Chunk535396.NL)]);

function l(e) {
  let t = (0, i.e7)([a.Z], () => {
    var t, n;
    return null == (n = a.Z.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? true : t[o.Us.PERK]
  });
  return r.useMemo(() => (null != t ? t : []).filter(e => !s.has(e.skuId)), [t])
}