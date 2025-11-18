/** Chunk was on 63933 **/
/** chunk id: 518756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  return (0, r.e7)([c.Z, i.ZP, o.Z], () => {
    let n = c.Z.getGuild(e);
    if (o.Z.can(a.Plq.ADMINISTRATOR, n) || o.Z.can(a.Plq.CREATE_EVENTS, n)) returntrue;
    for (let {
        channel: n
      }
      of i.ZP.getChannels(e)[i.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, l.Ob)(n);
        if (o.Z.can(e, n)) returntrue
      } returnfalse
  }, [e, t])
}