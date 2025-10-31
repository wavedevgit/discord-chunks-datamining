/** Chunk was on 94512 **/
/** chunk id: 518756, original params: e,t,n (module,exports,require) **/
"use strict";
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
  return (0, i.e7)([o.Z, l.ZP, c.Z], () => {
    let n = o.Z.getGuild(e);
    if (c.Z.can(r.Plq.ADMINISTRATOR, n) || c.Z.can(r.Plq.CREATE_EVENTS, n)) returntrue;
    for (let {
        channel: n
      }
      of l.ZP.getChannels(e)[l.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, a.Ob)(n);
        if (c.Z.can(e, n)) returntrue
      } returnfalse
  }, [e, t])
}