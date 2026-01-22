/** Chunk was on 22477 **/
/** chunk id: 967954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./321073.js"), require("./896048.js");
var a, l, Chunk835245 = require("./835245.js"),
  Chunk80703 = require("./80703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk540999 = require("./540999.js");
let u = 0,
  m = [],
  p = 0,
  h = [],
  f = false;
class x extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default, d.A)
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
}(l = "displayName") in x ? Object.defineProperty(x, l, {
  value: "AnalyticsLogStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : x[l] = "AnalyticsLogStore";
let b = new x(Chunk73153.h, {
  TRACK: function(e) {
    let {
      event: t,
      properties: n,
      fingerprint: a
    } = e;
    d.A.isDeveloper && (m.push({
      key: (u++).toString(),
      event: t,
      properties: n,
      fingerprint: null != a ? (0, r.d)(a) : c.default.getId(),
      timestamp: new Date
    }), p++, m.length > 500 && (m = m.slice(-Math.floor(250))))
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: l,
      location: r,
      previouslyTracked: s
    } = e;
    !d.A.isDeveloper || f && (h = [...h, {
      key: (0, i.A)(),
      experimentId: t,
      descriptor: n,
      exposureType: a,
      excluded: l,
      location: r,
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