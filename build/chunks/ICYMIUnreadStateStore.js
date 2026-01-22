/** Chunk was on 21738 **/
/** chunk id: 449000, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk596720 = require("./596720.js"),
  Chunk859524 = require("./859524.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 7 * Chunk927813.A.Millis.DAY,
  d = {
    readIdToTimestampMap: {}
  };
class p extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    d = null != e && null != e.readIdToTimestampMap ? {
      readIdToTimestampMap: e.readIdToTimestampMap
    } : {
      readIdToTimestampMap: {}
    };
    let t = Date.now() - u;
    for (let e of Object.keys(d.readIdToTimestampMap).filter(e => d.readIdToTimestampMap[e] < t)) delete d.readIdToTimestampMap[e]
  }
  getReadTimestamp(e) {
    return d.readIdToTimestampMap[e]
  }
  getState() {
    return d
  }
  getUserAgnosticState() {
    return d
  }
}
c(p, "displayName", "ICYMIUnreadStateStore"), c(p, "persistKey", "ICYMIUnreadStateStore");
let f = new p(Chunk73153.h, {
  ICYMI_ACK_ITEMS: function(e) {
    let {
      items: t,
      override: n
    } = e;
    t.forEach(e => {
      null != e && (null == d.readIdToTimestampMap[e.id] || n) && (d.readIdToTimestampMap[e.id] = e.timestamp)
    })
  },
  LOAD_ICYMI_DEHYDRATED: function(e) {
    let {
      items: t
    } = e;
    for (let e of t)
      if (e.type === s.Mm.MESSAGE) {
        var n;
        null != d.readIdToTimestampMap[e.id] || (null == (n = e.data.message_context) ? true : n.external_content_application_id) != null || (0, o.$r)(e.data.channel_id, e.data.message_id) || (d.readIdToTimestampMap[e.id] = 0)
      }
  },
  CLEAR_ICYMI_READ_STATES: function() {
    d.readIdToTimestampMap = {}
  }
})