/** Chunk was on 97887 **/
/** chunk id: 947580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cf: () => s
});
var Chunk403362 = require("./403362.js"),
  Chunk51082 = require("./51082.js"),
  Chunk806931 = require("./806931.js");

function s(e, t, n) {
  return null == t || t.type === i.lp.ACTIVITY ? [] : [t.type === i.lp.STREAM ? e.find(e => e.type === i.lp.USER && e.id === (null == t ? true : t.user.id) && e.id !== n && (0, l.Ay)(e)) : null, t.type === i.lp.USER ? e.find(e => e.type === i.lp.STREAM && e.user.id === (null == t ? true : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find(e => e.type === i.lp.USER && e.id === n && (0, l.Ay)(e)) : null].filter(r.Vq)
}