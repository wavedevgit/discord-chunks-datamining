/** Chunk was on web.js **/
/** chunk id: 659051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js");
let a = 2 * Chunk927813.A.Millis.HOUR;

function s(e, t, n) {
  var r;
  if (null == e) returnfalse;
  let s = null != t.activity ? t.activity.party_id : null,
    o = null != s && (null == (r = e.party) ? true : r.id) !== s,
    l = i.default.extractTimestamp(t.id) + a < Date.now(),
    c = null != e.application_id && e.application_id !== n;
  return !o && !l && !c
}