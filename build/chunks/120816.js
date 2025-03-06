/** Chunk was on 93886 **/
n.d(t, {
  Z: () => _
}), n(653041), n(47120);
var r, a, i, l = n(772848),
  o = n(756647),
  s = n(442837),
  c = n(570140),
  d = n(314897),
  u = n(906467);
let m = 0,
  h = [],
  p = 0,
  f = [],
  x = !1;
class b extends(r = s.ZP.Store) {
  initialize() {
    this.waitFor(u.Z)
  }
  get loggedEvents() {
    return h
  }
  get loggedEventsVersion() {
    return p
  }
  get loggedTriggers() {
    return f
  }
  get trackTriggers() {
    return x
  }
}
i = "AnalyticsLogStore", (a = "displayName") in b ? Object.defineProperty(b, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : b[a] = i;
let _ = new b(c.Z, {
  TRACK: function(e) {
    let {
      event: t,
      properties: n,
      fingerprint: r
    } = e;
    if (u.Z.isDeveloper) h.push({
      key: (m++).toString(),
      event: t,
      properties: n,
      fingerprint: null != r ? (0, o.s)(r) : d.default.getId(),
      timestamp: new Date
    }), p++, h.length > 500 && (h = h.slice(-Math.floor(250)))
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: n,
      exposureType: r,
      excluded: a,
      location: i,
      previouslyTracked: o
    } = e;
    u.Z.isDeveloper && x && (f = [...f, {
      key: (0, l.Z)(),
      experimentId: t,
      descriptor: n,
      exposureType: r,
      excluded: a,
      location: i,
      previouslyTracked: o,
      timestamp: new Date
    }]).length > 500 && f.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    x = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    h = [], p++, f = []
  }
})