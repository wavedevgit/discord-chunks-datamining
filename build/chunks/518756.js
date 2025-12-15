/** Chunk was on 97476 **/
/** chunk id: 518756, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function d(e, n) {
  return (0, a.e7)([l.Z, r.ZP, o.Z], () => {
    let t = l.Z.getGuild(e);
    if (o.Z.can(c.Plq.ADMINISTRATOR, t) || o.Z.can(c.Plq.CREATE_EVENTS, t)) returntrue;
    for (let {
        channel: t
      }
      of r.ZP.getChannels(e)[r.Zb])
      if (null == n || t.type === n) {
        let [e] = (0, i.Ob)(t);
        if (o.Z.can(e, t)) returntrue
      } returnfalse
  }, [e, n])
}