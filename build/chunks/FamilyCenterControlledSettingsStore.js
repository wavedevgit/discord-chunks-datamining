/** Chunk was on 45586 **/
/** chunk id: 842144, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var i, l, Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk73153 = require("./73153.js"),
  Chunk761821 = require("./761821.js");
let s = false,
  d = {},
  E = {};
class _ extends(l = Chunk311907.Ay.Store) {
  getSettings(t) {
    return d[t]
  }
  getControlledSettings(t) {
    return d[t]
  }
  hasSettingsForUser(t) {
    return null != d[t]
  }
  getConsents(t) {
    return E[t]
  }
  hasConsented(t, e) {
    if (null == t) returnfalse;
    let n = E[t];
    return null != n && null != n[e] && n[e].consented
  }
  get isLoading() {
    return s
  }
}(i = "displayName") in _ ? Object.defineProperty(_, i, {
  value: "FamilyCenterControlledSettingsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : _[i] = "FamilyCenterControlledSettingsStore";
let c = new _(Chunk73153.h, {
  FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function() {
    s = true
  },
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function(t) {
    let {
      userId: e,
      settings: n,
      consents: i
    } = t;
    null != n && (d[e] = (0, u.Gd)(n)), null != i && (E[e] = i), s = false
  },
  FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function(t) {
    let {
      userId: e,
      consents: n
    } = t;
    E[e] = n
  },
  FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function(t) {
    let {
      userId: e,
      settings: n
    } = t, i = (0, u.Gd)(n);
    d[e] = (0, u.RK)(a.nT, d[e], i)
  },
  LOGOUT: function() {
    d = {}, E = {}, s = false
  }
})