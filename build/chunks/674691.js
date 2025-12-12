/** Chunk was on web.js **/
/** chunk id: 674691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a
});
var Chunk911969 = require("./911969.js"),
  Chunk812206 = require("./812206.js");

function a(e, t) {
  if (null === e.id || true === e.id) returnfalse;
  let n = i.Z.getApplication(e.id);
  return null != n && null != n.linkedGames && n.linkedGames.length > 0 && true !== n.linkedGames.find(e => e.type === r.tE.LINKED && o(e.id, t))
}

function o(e, t) {
  return null != t.find(t => t.application_id === e)
}