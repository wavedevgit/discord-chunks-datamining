/** Chunk was on 56782 **/
let r;
n.d(t, {
  Z: () => h
});
var s, i = n(442837),
  l = n(570140),
  a = n(133080);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = (0, a.K4)();

function u(e) {
  var t;
  let {
    countryCode: n
  } = e;
  null != n && (c = null != (t = (0, a.Zz)(n)) ? t : (0, a.K4)())
}
class d extends(s = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (r = e.selectedCountryCode)
  }
  getUserAgnosticState() {
    return {
      selectedCountryCode: r
    }
  }
  getCountryCode() {
    return null != r ? r : c
  }
}
o(d, "displayName", "PhoneStore"), o(d, "persistKey", "PhoneStore");
let h = new d(l.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    r = t
  },
  CONNECTION_OPEN: u,
  SET_LOCATION_METADATA: u
})