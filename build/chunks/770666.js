/** Chunk was on 71020 **/
/** chunk id: 770666, original params: e,t,n (module,exports,require) **/
"use strict";
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
  return (0, i.bG)([a.A, l.Ay, o.A], () => {
    let n = a.A.getGuild(e);
    if (o.A.can(s.xBc.ADMINISTRATOR, n) || o.A.can(s.xBc.CREATE_EVENTS, n)) returntrue;
    for (let {
        channel: n
      }
      of l.Ay.getChannels(e)[l.vM])
      if (null == t || n.type === t) {
        let [e] = (0, r.p_)(n);
        if (o.A.can(e, n)) returntrue
      } returnfalse
  }, [e, t])
}