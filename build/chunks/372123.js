/** Chunk was on web.js **/
/** chunk id: 372123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./415506.js");
var Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk209492 = require("./209492.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Chunk710845.Z("CloudSync");
class c {
  constructor(e) {
    s(this, "message", true), this.message = e
  }
}
async function u(e, t) {
  let n, i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  r.Z.dispatch({
    type: "GAME_CLOUD_SYNC_START",
    applicationId: e,
    branchId: t
  });
  try {
    if ((n = await o.j(e, t, i)).type === a.QCD.CONFLICT) throw r.Z.dispatch({
      type: "GAME_CLOUD_SYNC_CONFLICT",
      applicationId: e,
      branchId: t,
      next: n.next,
      remote: n.remote
    }), new c("Conflict in cloud sync.");
    (n.type === a.QCD.PULL || n.type === a.QCD.PUSH) && l.info("Sync complete", n)
  } catch (n) {
    if (n instanceof c) throw n;
    throw r.Z.dispatch({
      type: "GAME_CLOUD_SYNC_ERROR",
      applicationId: e,
      branchId: t
    }), l.error("Failed to cloud sync:", n), Error("Failed to cloud sync.")
  }
  return r.Z.dispatch({
    type: "GAME_CLOUD_SYNC_COMPLETE",
    applicationId: e,
    branchId: t
  }), n
}