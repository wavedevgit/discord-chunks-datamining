/** Chunk was on 94709 **/
/** chunk id: 518756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  return (0, r.e7)([o.Z, l.ZP, a.Z], () => {
    let n = o.Z.getGuild(e);
    if (a.Z.can(s.Plq.ADMINISTRATOR, n) || a.Z.can(s.Plq.CREATE_EVENTS, n)) returntrue;
    for (let {
        channel: n
      }
      of l.ZP.getChannels(e)[l.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, i.Ob)(n);
        if (a.Z.can(e, n)) returntrue
      } returnfalse
  }, [e, t])
}