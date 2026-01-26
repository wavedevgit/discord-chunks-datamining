/** Chunk was on 81579 **/
/** chunk id: 770666, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk931991 = require("./931991.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function o(e, n) {
  return (0, i.bG)([a.A, r.Ay, s.A], () => {
    let t = a.A.getGuild(e);
    if (s.A.can(u.xBc.ADMINISTRATOR, t) || s.A.can(u.xBc.CREATE_EVENTS, t)) returntrue;
    for (let {
        channel: t
      }
      of r.Ay.getChannels(e)[r.vM])
      if (null == n || t.type === n) {
        let [e] = (0, l.p_)(t);
        if (s.A.can(e, t)) returntrue
      } returnfalse
  }, [e, n])
}