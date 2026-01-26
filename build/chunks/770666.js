/** Chunk was on 97887 **/
/** chunk id: 770666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk931991 = require("./931991.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  return (0, r.bG)([s.A, i.Ay, a.A], () => {
    let n = s.A.getGuild(e);
    if (a.A.can(o.xBc.ADMINISTRATOR, n) || a.A.can(o.xBc.CREATE_EVENTS, n)) returntrue;
    for (let {
        channel: n
      }
      of i.Ay.getChannels(e)[i.vM])
      if (null == t || n.type === t) {
        let [e] = (0, l.p_)(n);
        if (a.A.can(e, n)) returntrue
      } returnfalse
  }, [e, t])
}