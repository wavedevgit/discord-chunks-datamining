/** Chunk was on web.js **/
/** chunk id: 54613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk133080 = require("./133080.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null;

function c(e) {
  var t;
  let {
    countryCode: n
  } = e;
  null != n && (l = null != (t = (0, o.Zz)(n)) ? t : (0, o.K4)())
}
class u extends(r = Chunk442837.ZP.Store) {
  getCountryCode() {
    return l
  }
}
s(u, "displayName", "LocationMetadataStore");
let d = new u(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  SET_LOCATION_METADATA: c
})