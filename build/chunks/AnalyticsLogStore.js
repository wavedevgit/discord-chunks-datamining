/** Chunk was on 93886 **/
/** chunk id: 120816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var a, r, Chunk772848 = require("./772848.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906467 = require("./906467.js");
let u = 0,
  m = [],
  x = 0,
  h = [],
  p = false;
class f extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk906467.Z)
  }
  get loggedEvents() {
    return m
  }
  get loggedEventsVersion() {
    return x
  }
  get loggedTriggers() {
    return h
  }
  get trackTriggers() {
    return p
  }
}(r = "displayName") in f ? Object.defineProperty(f, r, {
  value: "AnalyticsLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[r] = "AnalyticsLogStore";
let v = new f(Chunk570140.Z, {
  TRACK: function(e) {
    let {
      event: t,
      properties: n,
      fingerprint: a
    } = e;
    d.Z.isDeveloper && (m.push({
      key: (u++).toString(),
      event: t,
      properties: n,
      fingerprint: null != a ? (0, i.s)(a) : c.default.getId(),
      timestamp: new Date
    }), x++, m.length > 500 && (m = m.slice(-Math.floor(250))))
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: r,
      location: i,
      previouslyTracked: s
    } = e;
    d.Z.isDeveloper && p && (h = [...h, {
      key: (0, l.Z)(),
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: r,
      location: i,
      previouslyTracked: s,
      timestamp: new Date
    }]).length > 500 && h.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    p = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    m = [], x++, h = []
  }
})