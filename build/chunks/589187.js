/** Chunk was on web.js **/
/** chunk id: 589187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => a
});
var Chunk155718 = require("./155718.js"),
  Chunk587895 = require("./587895.js");

function a(e, t) {
  if (null === e.id || true === e.id) returnfalse;
  let n = i.A.getApplication(e.id);
  return null != n && null != n.linkedGames && n.linkedGames.length > 0 && true !== n.linkedGames.find(e => e.type === r.Mh.LINKED && o(e.id, t))
}

function o(e, t) {
  return null != t.find(t => t.application_id === e)
}