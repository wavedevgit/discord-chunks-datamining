/** Chunk was on 82875 **/
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
  return (0, r.e7)([a.Z, i.ZP, l.Z], () => {
    let t = a.Z.getGuild(e);
    if (l.Z.can(c.Plq.ADMINISTRATOR, t) || l.Z.can(c.Plq.CREATE_EVENTS, t)) returntrue;
    for (let {
        channel: t
      }
      of i.ZP.getChannels(e)[i.Zb])
      if (null == n || t.type === n) {
        let [e] = (0, o.Ob)(t);
        if (l.Z.can(e, t)) returntrue
      } returnfalse
  }, [e, n])
}