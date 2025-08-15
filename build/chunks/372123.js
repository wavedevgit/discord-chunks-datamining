/** Chunk was on 6380 **/
/** chunk id: 372123, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./415506.js");
var Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk209492 = require("./209492.js"),
  Chunk981631 = require("./981631.js");
let a = new Chunk710845.Z("CloudSync");
class c {
  constructor(t) {
    ! function(t, e, n) {
      e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    }(this, "message", true), this.message = t
  }
}
async function s(t, e) {
  let n, r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
  i.Z.dispatch({
    type: "GAME_CLOUD_SYNC_START",
    applicationId: t,
    branchId: e
  });
  try {
    if ((n = await l.j(t, e, r)).type === o.QCD.CONFLICT) throw i.Z.dispatch({
      type: "GAME_CLOUD_SYNC_CONFLICT",
      applicationId: t,
      branchId: e,
      next: n.next,
      remote: n.remote
    }), new c("Conflict in cloud sync.");
    (n.type === o.QCD.PULL || n.type === o.QCD.PUSH) && a.info("Sync complete", n)
  } catch (n) {
    if (n instanceof c) throw n;
    throw i.Z.dispatch({
      type: "GAME_CLOUD_SYNC_ERROR",
      applicationId: t,
      branchId: e
    }), a.error("Failed to cloud sync:", n), Error("Failed to cloud sync.")
  }
  return i.Z.dispatch({
    type: "GAME_CLOUD_SYNC_COMPLETE",
    applicationId: t,
    branchId: e
  }), n
}