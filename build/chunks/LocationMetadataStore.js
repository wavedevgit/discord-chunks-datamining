/** Chunk was on web.js **/
/** chunk id: 121780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk518977 = require("./518977.js");

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
  null != n && (l = null != (t = (0, o.XF)(n)) ? t : (0, o.rE)())
}
class u extends(r = Chunk311907.Ay.Store) {
  getCountryCode() {
    return l
  }
}
s(u, "displayName", "LocationMetadataStore");
let d = new u(Chunk73153.h, {
  CONNECTION_OPEN: c,
  SET_LOCATION_METADATA: c
})