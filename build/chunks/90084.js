/** Chunk was on web.js **/
/** chunk id: 90084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk250527 = require("./250527.js"),
  Chunk837011 = require("./837011.js");

function o(e) {
  let t = (0, i.bG)([s.A], () => s.A.getProfile(e)),
    n = (0, i.bG)([s.A], () => s.A.getFetchStatus(e));
  return {
    guildProfile: t,
    fetchGuildProfile: r.useCallback(async function() {
      let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return await (0, a.L4)(e, t)
    }, [e]),
    fetchStatus: n
  }
}