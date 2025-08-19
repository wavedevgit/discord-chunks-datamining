/** Chunk was on 64099 **/
/** chunk id: 518756, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(t, n) {
  return (0, i.e7)([l.Z, a.ZP, _.Z], () => {
    let e = l.Z.getGuild(t);
    if (_.Z.can(r.Plq.ADMINISTRATOR, e) || _.Z.can(r.Plq.CREATE_EVENTS, e)) returntrue;
    for (let {
        channel: e
      }
      of a.ZP.getChannels(t)[a.Zb])
      if (null == n || e.type === n) {
        let [t] = (0, d.Ob)(e);
        if (_.Z.can(t, e)) returntrue
      } returnfalse
  }, [t, n])
}