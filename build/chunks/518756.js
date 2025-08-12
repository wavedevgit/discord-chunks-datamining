/** Chunk was on 84479 **/
/** chunk id: 518756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  return (0, i.e7)([a.Z, o.ZP, l.Z], () => {
    let n = a.Z.getGuild(e);
    if (l.Z.can(c.Plq.ADMINISTRATOR, n) || l.Z.can(c.Plq.CREATE_EVENTS, n)) returntrue;
    for (let {
        channel: n
      }
      of o.ZP.getChannels(e)[o.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, r.Ob)(n);
        if (l.Z.can(e, n)) returntrue
      } returnfalse
  }, [e, t])
}