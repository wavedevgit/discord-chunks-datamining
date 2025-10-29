/** Chunk was on 41619 **/
/** chunk id: 541692, original params: e,t,r (module,exports,require) **/
let n;
require.d(exports, {
  Z: () => h
});
var s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk133080 = require("./133080.js");

function l(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let c = (0, Chunk133080.K4)();

function u(e) {
  var t;
  let {
    countryCode: r
  } = e;
  null != r && (c = null != (t = (0, o.Zz)(r)) ? t : (0, o.K4)())
}
class d extends(s = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (n = e.selectedCountryCode)
  }
  getUserAgnosticState() {
    return {
      selectedCountryCode: n
    }
  }
  getCountryCode() {
    return null != n ? n : c
  }
}
l(d, "displayName", "PhoneStore"), l(d, "persistKey", "PhoneStore");
let h = new d(Chunk570140.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    n = t
  },
  CONNECTION_OPEN: u,
  SET_LOCATION_METADATA: u
})