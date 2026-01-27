/** Chunk was on web.js **/
/** chunk id: 54827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => u
}), require("./65821.js");
var Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk986120 = require("./986120.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Chunk626584.A("CloudSync");
class c {
  constructor(e) {
    s(this, "message", true), this.message = e
  }
}
async function u(e, t) {
  let n, i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  r.h.dispatch({
    type: "GAME_CLOUD_SYNC_START",
    applicationId: e,
    branchId: t
  });
  try {
    if ((n = await a.E(e, t, i)).type === o.R_U.CONFLICT) throw r.h.dispatch({
      type: "GAME_CLOUD_SYNC_CONFLICT",
      applicationId: e,
      branchId: t,
      next: n.next,
      remote: n.remote
    }), new c("Conflict in cloud sync.");
    (n.type === o.R_U.PULL || n.type === o.R_U.PUSH) && l.info("Sync complete", n)
  } catch (n) {
    if (n instanceof c) throw n;
    throw r.h.dispatch({
      type: "GAME_CLOUD_SYNC_ERROR",
      applicationId: e,
      branchId: t
    }), l.error("Failed to cloud sync:", n), Error("Failed to cloud sync.")
  }
  return r.h.dispatch({
    type: "GAME_CLOUD_SYNC_COMPLETE",
    applicationId: e,
    branchId: t
  }), n
}