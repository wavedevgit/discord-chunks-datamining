/** Chunk was on 1272 **/
/** chunk id: 634773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk797394 = require("./797394.js"),
  Chunk613928 = require("./613928.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 7 * Chunk70956.Z.Millis.DAY,
  d = {
    readIdToTimestampMap: {}
  };
class p extends(r = Chunk442837.ZP.DeviceSettingsStore) {
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
let f = new p(Chunk570140.Z, {
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
      if (e.type === o.Ni.MESSAGE) {
        var n;
        null != d.readIdToTimestampMap[e.id] || (null == (n = e.data.message_context) ? true : n.external_content_application_id) != null || (0, s.$U)(e.data.channel_id, e.data.message_id) || (d.readIdToTimestampMap[e.id] = 0)
      } else e.type !== o.Ni.SUMMARY || null != d.readIdToTimestampMap[e.id] || (0, s.$U)(e.data.channel_id, e.data.summary_id) || (d.readIdToTimestampMap[e.id] = 0)
  },
  CLEAR_ICYMI_READ_STATES: function() {
    d.readIdToTimestampMap = {}
  }
})