/** Chunk was on web.js **/
/** chunk id: 263215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk897418 = require("./897418.js"),
  Chunk645619 = require("./645619.js"),
  Chunk568065 = require("./568065.js");
let c = new Set([...Array.from(Chunk568065.aH), Chunk512750.FB]);

function u(e) {
  let t = (0, a.bG)([o.A], () => {
      var t, n;
      return null == (n = o.A.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? true : t[l.o9.PERK]
    }),
    n = (0, s.A)(e);
  return r.useMemo(() => {
    let e = [...null != t ? t : []];
    return null != n && e.push(n), e.filter(e => !c.has(e.skuId))
  }, [t, n])
}