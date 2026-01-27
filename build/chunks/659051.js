/** Chunk was on 92917 **/
/** chunk id: 659051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js");
let l = 2 * Chunk927813.A.Millis.HOUR;

function a(e, t, n) {
  var r;
  if (null == e) returnfalse;
  let a = null != t.activity ? t.activity.party_id : null,
    s = null != a && (null == (r = e.party) ? true : r.id) !== a,
    o = i.default.extractTimestamp(t.id) + l < Date.now(),
    c = null != e.application_id && e.application_id !== n;
  return !s && !o && !c
}