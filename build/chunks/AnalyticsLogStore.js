/** Chunk was on 28532 **/
/** chunk id: 120816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js"), require("./388685.js");
var a, i, Chunk772848 = require("./772848.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906467 = require("./906467.js");
let u = 0,
  m = [],
  p = 0,
  h = [],
  x = false;
class g extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk906467.Z)
  }
  get loggedEvents() {
    return m
  }
  get loggedEventsVersion() {
    return p
  }
  get loggedTriggers() {
    return h
  }
  get trackTriggers() {
    return x
  }
}(i = "displayName") in g ? Object.defineProperty(g, i, {
  value: "AnalyticsLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[i] = "AnalyticsLogStore";
let f = new g(Chunk570140.Z, {
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
      fingerprint: null != a ? (0, r.s)(a) : c.default.getId(),
      timestamp: new Date
    }), p++, m.length > 500 && (m = m.slice(-Math.floor(250))))
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: i,
      location: r,
      previouslyTracked: s
    } = e;
    d.Z.isDeveloper && x && (h = [...h, {
      key: (0, l.Z)(),
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: i,
      location: r,
      previouslyTracked: s,
      timestamp: new Date
    }]).length > 500 && h.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    x = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    m = [], p++, h = []
  }
})