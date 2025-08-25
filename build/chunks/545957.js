/** Chunk was on web.js **/
/** chunk id: 545957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk199902 = require("./199902.js"),
  Chunk699516 = require("./699516.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = (0, r.e7)([o.Z], () => null != e ? o.Z.getRelationshipType(e) : a.OGo.NONE),
    n = (0, r.e7)([i.Z], () => null == e ? null : i.Z.getAnyDiscoverableStreamForUser(e), [e]);
  return t === a.OGo.BLOCKED ? null : n
}