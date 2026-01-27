/** Chunk was on web.js **/
/** chunk id: 87664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk616356 = require("./616356.js"),
  Chunk994500 = require("./994500.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let t = (0, r.bG)([a.A], () => null != e ? a.A.getRelationshipType(e) : o.eA$.NONE),
    n = (0, r.bG)([i.A], () => null == e ? null : i.A.getAnyDiscoverableStreamForUser(e), [e]);
  return t === o.eA$.BLOCKED ? null : n
}