/** Chunk was on web.js **/
/** chunk id: 994339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk915553 = require("./915553.js");
let s = 2 * Chunk70956.Z.Millis.HOUR;

function l(e, t, n) {
  var r, l;
  if (null == e) returnfalse;
  let c = null != t.activity ? t.activity.party_id : null,
    u = null != c && (null == (r = e.party) ? true : r.id) !== c,
    d = (null == (l = t.activity) ? true : l.type) === o.mFx.STREAM_REQUEST ? a.e : s,
    f = i.default.extractTimestamp(t.id) + d < Date.now(),
    _ = null != e.application_id && e.application_id !== n;
  return !u && !f && !_
}