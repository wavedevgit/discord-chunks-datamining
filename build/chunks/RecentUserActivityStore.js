/** Chunk was on web.js **/
/** chunk id: 761781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk890022 = require("./890022.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Set;

function c(e) {
  let {
    userActivities: t
  } = e;
  (0, a.uw)("RecentUserActivityStore") && null != t && (l = new Set(t.map(e => e.application_id)))
}
class u extends(r = Chunk442837.ZP.Store) {
  get currentUserApplicationIds() {
    return l
  }
}
s(u, "displayName", "RecentUserActivityStore");
let d = new u(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: c,
  CONNECTION_OPEN_STATE_UPDATE: c
})