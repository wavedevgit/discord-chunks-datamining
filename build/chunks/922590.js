/** Chunk was on web.js **/
/** chunk id: 922590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KL: () => u,
  f1: () => l,
  fi: () => c
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk996439 = require("./996439.js"),
  Chunk800828 = require("./800828.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  let [n] = (0, r.bG)([a.A], () => [a.A.getGameRelationshipsForUserByType(e, t), a.A.getGameRelationshipsVersion()], [t, e], i.D);
  return n
}

function l(e) {
  return o(e, s.eA$.FRIEND)
}

function c(e) {
  return o(e, s.eA$.PENDING_INCOMING)
}

function u(e, t) {
  let [n] = (0, r.bG)([a.A], () => {
    let n = a.A.getGameRelationshipsForUserByType(e, t),
      r = a.A.getGameRelationshipsVersion();
    return [n.length > 0, r]
  }, [t, e], i.D);
  return n
}