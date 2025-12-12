/** Chunk was on web.js **/
/** chunk id: 911284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk70956 = require("./70956.js"),
  Chunk564990 = require("./564990.js"),
  Chunk353647 = require("./353647.js");
let o = Chunk70956.Z.Millis.MINUTE;

function s(e, t) {
  var n, r;
  if (a.Z.isFetchingUserOutbox(e)) return;
  let s = null != (r = null == (n = a.Z.getUserOutbox(e)) ? true : n.lastFetched) ? r : 0;
  if (!(Date.now() - s < o)) return (0, i.JX)(e, t)
}