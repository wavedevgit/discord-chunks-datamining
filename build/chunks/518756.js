/** Chunk was on 91430 **/
/** chunk id: 518756, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e, n) {
  return (0, a.e7)([o.Z, r.ZP, c.Z], () => {
    let t = o.Z.getGuild(e);
    if (c.Z.can(l.Plq.ADMINISTRATOR, t) || c.Z.can(l.Plq.CREATE_EVENTS, t)) returntrue;
    for (let {
        channel: t
      }
      of r.ZP.getChannels(e)[r.Zb])
      if (null == n || t.type === n) {
        let [e] = (0, i.Ob)(t);
        if (c.Z.can(e, t)) returntrue
      } returnfalse
  }, [e, n])
}