/** Chunk was on web.js **/
/** chunk id: 674985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = null;

function u() {
  let e = Chunk594174.default.getCurrentUser();
  null != module && (module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? c = Chunk981631.gkr.HOUSE_1 : module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? c = Chunk981631.gkr.HOUSE_2 : module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (c = Chunk981631.gkr.HOUSE_3))
}

function d() {
  c = null
}

function f(e) {
  c = e.houseID
}
class _ extends(r = Chunk442837.ZP.Store) {
  getHouseMembership() {
    return c
  }
}
l(_, "displayName", "HypeSquadStore");
let p = new _(Chunk570140.Z, {
  CONNECTION_OPEN: u,
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: d,
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: f
})