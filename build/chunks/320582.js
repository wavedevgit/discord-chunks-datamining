/** Chunk was on web.js **/
/** chunk id: 320582, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ML: () => l,
  N8: () => u,
  vh: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk136015 = require("./136015.js"),
  Chunk91896 = require("./91896.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  let [n] = (0, r.e7)([o.Z], () => [o.Z.getGameRelationshipsForUserByType(e, t), o.Z.getGameRelationshipsVersion()], [t, e], i.Q);
  return n
}

function l(e) {
  return s(e, a.OGo.FRIEND)
}

function c(e) {
  return s(e, a.OGo.PENDING_INCOMING)
}

function u(e, t) {
  let [n] = (0, r.e7)([o.Z], () => {
    let n = o.Z.getGameRelationshipsForUserByType(e, t),
      r = o.Z.getGameRelationshipsVersion();
    return [n.length > 0, r]
  }, [t, e], i.Q);
  return n
}