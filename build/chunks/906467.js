/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120);
var r, i = n(442837),
  o = n(570140),
  a = n(168232),
  s = n(430824),
  l = n(594174),
  c = n(987338),
  u = n(48541);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = "production" === u.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === u.C.STAGING;

function _() {
  f = (0, a.QI)(l.default.getCurrentUser())
}
class p extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(l.default, s.Z), Object.defineProperties(this, {
      isDeveloper: {
        configurable: !1,
        get: () => f,
        set: () => {}
      }
    }), _(), setTimeout(() => Object.freeze(this))
  }
  getExperimentDescriptor() {
    return f ? {
      type: "developer",
      name: "discord_dev_testing",
      revision: 1,
      override: !0,
      bucket: c.NZ.TREATMENT_1
    } : null
  }
  constructor(...e) {
    super(...e), d(this, "isDeveloper", !1)
  }
}
d(p, "displayName", "DeveloperExperimentStore");
let h = new p(o.Z, {
  CONNECTION_OPEN: _,
  OVERLAY_INITIALIZE: _,
  CURRENT_USER_UPDATE: _
})