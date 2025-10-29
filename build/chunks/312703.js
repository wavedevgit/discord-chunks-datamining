/** Chunk was on 88647 **/
/** chunk id: 312703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n3: () => a
});
var Chunk823379 = require("./823379.js"),
  Chunk44136 = require("./44136.js"),
  Chunk354459 = require("./354459.js");

function a(e, t, n) {
  return null == t || t.type === l.fO.ACTIVITY ? [] : [t.type === l.fO.STREAM ? e.find(e => e.type === l.fO.USER && e.id === (null == t ? true : t.user.id) && e.id !== n && (0, i.ZP)(e)) : null, t.type === l.fO.USER ? e.find(e => e.type === l.fO.STREAM && e.user.id === (null == t ? true : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find(e => e.type === l.fO.USER && e.id === n && (0, i.ZP)(e)) : null].filter(r.lm)
}