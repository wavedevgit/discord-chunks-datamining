/** Chunk was on web.js **/
/** chunk id: 994339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js");
let a = 2 * Chunk70956.Z.Millis.HOUR;

function o(e, t, n) {
  var r;
  if (null == e) returnfalse;
  let o = null != t.activity ? t.activity.party_id : null,
    s = null != o && (null == (r = e.party) ? true : r.id) !== o,
    l = i.default.extractTimestamp(t.id) + a < Date.now(),
    c = null != e.application_id && e.application_id !== n;
  return !s && !l && !c
}