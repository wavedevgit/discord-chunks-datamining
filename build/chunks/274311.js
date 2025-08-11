/** Chunk was on 22347 **/
/** chunk id: 274311, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => c,
  T: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk700785 = require("./700785.js"),
  Chunk924301 = require("./924301.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");

function c(t, e) {
  return r.Uu(u.Plq.VIEW_CHANNEL, t) || e === a.WX.EXTERNAL
}

function o(t, e) {
  return (0, l.e7)([i.Z, s.ZP], () => {
    let n = i.Z.getChannel(t),
      l = s.ZP.getGuildScheduledEvent(e);
    return c(n, null == l ? true : l.entity_type)
  }, [t, e])
}