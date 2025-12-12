/** Chunk was on 3298 **/
/** chunk id: 531508, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk660815 = require("./660815.js");
let i = new Set([Chunk660815.V.SLEEPING, Chunk660815.V.OFFLINE, Chunk660815.V.ONLINE]);

function a(e) {
  return null == e || null != e.status && i.has(e.status)
}