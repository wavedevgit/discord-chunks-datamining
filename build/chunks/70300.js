/** Chunk was on web.js **/
/** chunk id: 70300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk483039 = require("./483039.js"),
  Chunk905128 = require("./905128.js"),
  Chunk535396 = require("./535396.js");
let c = new Set([...Array.from(Chunk535396.NL), Chunk494497.A$]);

function u(e) {
  let t = (0, o.e7)([s.Z], () => {
      var t, n;
      return null == (n = s.Z.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? true : t[l.Us.PERK]
    }),
    n = (0, a.Z)(e);
  return r.useMemo(() => {
    let e = [...null != t ? t : []];
    return null != n && e.push(n), e.filter(e => !c.has(e.skuId))
  }, [t, n])
}