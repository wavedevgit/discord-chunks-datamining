/** Chunk was on web.js **/
/** chunk id: 276506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk136015 = require("./136015.js"),
  Chunk91896 = require("./91896.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function c(e) {
  let {
    userId: t
  } = e, [n] = (0, r.e7)([a.Z, i.Z], () => {
    let e = i.Z.getRelationshipType(t),
      n = a.Z.getGameRelationshipsForUser(t),
      r = a.Z.getGameRelationshipsVersion();
    return e === s.OGo.PENDING_INCOMING ? [l.intl.string(l.t["wPI56+"]), r] : [n.length > 0 ? l.intl.string(l.t.LAcY7u) : l.intl.string(l.t.w5uwoK), r]
  }, [t], o.Q);
  return n
}