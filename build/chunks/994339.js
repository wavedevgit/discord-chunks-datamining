/** Chunk was on web.js **/
/** chunk id: 994339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js");
let o = 2 * Chunk70956.Z.Millis.HOUR;

function a(e, t, n) {
  var r;
  if (null == e) returnfalse;
  let a = null != t.activity ? t.activity.party_id : null,
    s = null != a && (null == (r = e.party) ? true : r.id) !== a,
    l = i.default.extractTimestamp(t.id) + o < Date.now(),
    c = null != e.application_id && e.application_id !== n;
  return !s && !l && !c
}