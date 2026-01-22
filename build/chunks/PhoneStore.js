/** Chunk was on 34078 **/
/** chunk id: 148864, original params: e,t,r (module,exports,require) **/
let n;
require.d(exports, {
  A: () => h
});
var s, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk518977 = require("./518977.js");

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let c = (0, Chunk518977.rE)();

function u(e) {
  var t;
  let {
    countryCode: r
  } = e;
  null != r && (c = null != (t = (0, l.XF)(r)) ? t : (0, l.rE)())
}
class d extends(s = Chunk311907.Ay.DeviceSettingsStore) {
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
o(d, "displayName", "PhoneStore"), o(d, "persistKey", "PhoneStore");
let h = new d(Chunk73153.h, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    n = t
  },
  CONNECTION_OPEN: u,
  SET_LOCATION_METADATA: u
})