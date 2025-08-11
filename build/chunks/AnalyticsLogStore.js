/** Chunk was on 93886 **/
/** chunk id: 120816, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var n, r, l, Chunk772848 = require("./772848.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906467 = require("./906467.js");
let m = 0,
  x = [],
  h = 0,
  p = [],
  b = false;
class f extends(n = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk906467.Z)
  }
  get loggedEvents() {
    return x
  }
  get loggedEventsVersion() {
    return h
  }
  get loggedTriggers() {
    return p
  }
  get trackTriggers() {
    return b
  }
}
l = "AnalyticsLogStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : f[r] = l;
let v = new f(Chunk570140.Z, {
  TRACK: function(e) {
    let {
      event: t,
      properties: a,
      fingerprint: n
    } = e;
    u.Z.isDeveloper && (x.push({
      key: (m++).toString(),
      event: t,
      properties: a,
      fingerprint: null != n ? (0, s.s)(n) : d.default.getId(),
      timestamp: new Date
    }), h++, x.length > 500 && (x = x.slice(-Math.floor(250))))
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: a,
      exposureType: n,
      excluded: r,
      location: l,
      previouslyTracked: s
    } = e;
    u.Z.isDeveloper && b && (p = [...p, {
      key: (0, i.Z)(),
      experimentId: t,
      descriptor: a,
      exposureType: n,
      excluded: r,
      location: l,
      previouslyTracked: s,
      timestamp: new Date
    }]).length > 500 && p.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    b = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    x = [], h++, p = []
  }
})