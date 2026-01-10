/** Chunk was on 76246 **/
/** chunk id: 274311, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => s,
  T: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk700785 = require("./700785.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");

function s(e, n) {
  return r.Uu(c.Plq.VIEW_CHANNEL, e) || n === o.WX.EXTERNAL
}

function d(e, n) {
  return (0, a.e7)([i.Z, l.ZP], () => {
    let t = i.Z.getChannel(e),
      a = l.ZP.getGuildScheduledEvent(n);
    return s(t, null == a ? true : a.entity_type)
  }, [e, n])
}