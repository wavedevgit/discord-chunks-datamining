/** Chunk was on web.js **/
/** chunk id: 65361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js");

function s(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.getProfile(e)),
    n = (0, i.e7)([o.Z], () => o.Z.getFetchStatus(e));
  return {
    guildProfile: t,
    fetchGuildProfile: r.useCallback(async function() {
      let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return await (0, a.CR)(e, t)
    }, [e]),
    fetchStatus: n
  }
}