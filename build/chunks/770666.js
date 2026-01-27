/** Chunk was on 93631 **/
/** chunk id: 770666, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk931991 = require("./931991.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function s(e, n) {
  return (0, a.bG)([l.A, i.Ay, o.A], () => {
    let t = l.A.getGuild(e);
    if (o.A.can(c.xBc.ADMINISTRATOR, t) || o.A.can(c.xBc.CREATE_EVENTS, t)) returntrue;
    for (let {
        channel: t
      }
      of i.Ay.getChannels(e)[i.vM])
      if (null == n || t.type === n) {
        let [e] = (0, r.p_)(t);
        if (o.A.can(e, t)) returntrue
      } returnfalse
  }, [e, n])
}