/** Chunk was on web.js **/
/** chunk id: 65679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
}), require("./388685.js");
var Chunk685816 = require("./685816.js"),
  Chunk52030 = require("./52030.js"),
  Chunk215023 = require("./215023.js");

function o() {
  for (let e of [a.AW.HOME, a.AW.ORBS, a.AW.CATALOG]) {
    let t = i.Z.getShopBlocks(e).find(e => e.type === r.z.WIDE_BANNER);
    if ((null == t ? true : t.dismissibleContentVersion) != null) return t.dismissibleContentVersion
  }
  return 0
}