/** Chunk was on 93886 **/
/** chunk id: 120816, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js"), require("./388685.js");
var n, r, Chunk772848 = require("./772848.js"),
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
class b extends(n = Chunk442837.ZP.Store) {
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
}(r = "displayName") in b ? Object.defineProperty(b, r, {
  value: "AnalyticsLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[r] = "AnalyticsLogStore";
let f = new b(Chunk570140.Z, {
  TRACK: function(e) {
    let {
      event: t,
      properties: a,
      fingerprint: n
    } = e;
    d.Z.isDeveloper && (m.push({
      key: (u++).toString(),
      event: t,
      properties: a,
      fingerprint: null != n ? (0, i.s)(n) : c.default.getId(),
      timestamp: new Date
    }), x++, m.length > 500 && (m = m.slice(-Math.floor(250))))
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: a,
      exposureType: n,
      excluded: r,
      location: i,
      previouslyTracked: s
    } = e;
    d.Z.isDeveloper && p && (h = [...h, {
      key: (0, l.Z)(),
      experimentId: t,
      descriptor: a,
      exposureType: n,
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