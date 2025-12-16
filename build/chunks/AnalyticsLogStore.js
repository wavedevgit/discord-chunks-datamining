/** Chunk was on 6043 **/
/** chunk id: 120816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./539854.js"), require("./388685.js");
var a, r, Chunk772848 = require("./772848.js"),
  Chunk756647 = require("./756647.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906467 = require("./906467.js");
let u = 0,
  m = [],
  p = 0,
  h = [],
  f = false;
class x extends(a = Chunk442837.ZP.Store) {
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
    return f
  }
}(r = "displayName") in x ? Object.defineProperty(x, r, {
  value: "AnalyticsLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : x[r] = "AnalyticsLogStore";
let b = new x(Chunk570140.Z, {
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
      fingerprint: null != a ? (0, l.s)(a) : c.default.getId(),
      timestamp: new Date
    }), p++, m.length > 500 && (m = m.slice(-Math.floor(250))))
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: r,
      location: l,
      previouslyTracked: s
    } = e;
    d.Z.isDeveloper && f && (h = [...h, {
      key: (0, i.Z)(),
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: r,
      location: l,
      previouslyTracked: s,
      timestamp: new Date
    }]).length > 500 && h.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    f = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    m = [], p++, h = []
  }
})