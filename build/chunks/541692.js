/** Chunk was on 56782 **/
let n;
r.d(t, {
  Z: () => h
});
var s, i = r(442837),
  l = r(570140),
  a = r(133080);

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let c = (0, a.K4)();

function u(e) {
  var t;
  let {
    countryCode: r
  } = e;
  null != r && (c = null != (t = (0, a.Zz)(r)) ? t : (0, a.K4)())
}
class d extends(s = i.ZP.DeviceSettingsStore) {
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
let h = new d(l.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    n = t
  },
  CONNECTION_OPEN: u,
  SET_LOCATION_METADATA: u
})