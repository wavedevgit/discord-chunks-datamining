/** Chunk was on 79589 **/
/** chunk id: 518756, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function l(e, n) {
  return (0, i.e7)([a.Z, c.ZP, r.Z], () => {
    let t = a.Z.getGuild(e);
    if (r.Z.can(_.Plq.ADMINISTRATOR, t) || r.Z.can(_.Plq.CREATE_EVENTS, t)) returntrue;
    for (let {
        channel: t
      }
      of c.ZP.getChannels(e)[c.Zb])
      if (null == n || t.type === n) {
        let [e] = (0, o.Ob)(t);
        if (r.Z.can(e, t)) returntrue
      } returnfalse
  }, [e, n])
}