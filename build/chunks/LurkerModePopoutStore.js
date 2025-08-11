/** Chunk was on web.js **/
/** chunk id: 652730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk41776 = require("./41776.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null,
  c = null;

function u() {
  let e = Chunk41776.Z.mostRecentLurkedGuildId();
  null != module ? (l = module, c = null) : (c = null != l ? l : null, l = null)
}
class d extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk41776.Z], u)
  }
  shouldShowPopout(e) {
    return c === e
  }
}
s(d, "displayName", "LurkerModePopoutStore");
let f = new d(Chunk570140.Z)