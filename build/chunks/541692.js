/** Chunk was on 74941 **/
let n;
r.d(t, {
  Z: () => d
});
var s, i = r(442837),
  l = r(570140),
  o = r(133080);

function a(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let c = (0, o.K4)();

function u(e) {
  var t;
  let {
    countryCode: r
  } = e;
  null != r && (c = null != (t = (0, o.Zz)(r)) ? t : (0, o.K4)())
}
class h extends(s = i.ZP.DeviceSettingsStore) {
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
a(h, "displayName", "PhoneStore"), a(h, "persistKey", "PhoneStore");
let d = new h(l.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    n = t
  },
  CONNECTION_OPEN: u,
  SET_LOCATION_METADATA: u
})