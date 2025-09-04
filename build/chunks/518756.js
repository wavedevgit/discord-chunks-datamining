/** Chunk was on 78728 **/
/** chunk id: 518756, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  return (0, i.e7)([r.Z, a.ZP, c.Z], () => {
    let n = r.Z.getGuild(e);
    if (c.Z.can(o.Plq.ADMINISTRATOR, n) || c.Z.can(o.Plq.CREATE_EVENTS, n)) returntrue;
    for (let {
        channel: n
      }
      of a.ZP.getChannels(e)[a.Zb])
      if (null == t || n.type === t) {
        let [e] = (0, l.Ob)(n);
        if (c.Z.can(e, n)) returntrue
      } returnfalse
  }, [e, t])
}