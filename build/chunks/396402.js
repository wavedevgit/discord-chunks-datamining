/** Chunk was on web.js **/
/** chunk id: 396402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk731722 = require("./731722.js");

function s() {
  return (0, r.Wu)([a.Z, i.ZP], () => a.Z.getGuildsArray().filter(e => {
    var t, n;
    return (0, o.up)(e) && (null == (t = i.ZP.getSelfMember(e.id)) ? true : t.joinedAt) != null && (null == (n = e.profile) ? true : n.tag) != null
  }))
}