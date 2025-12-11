/** Chunk was on 51235 **/
/** chunk id: 774807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk455199 = require("./455199.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk497089 = require("./497089.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = 90 * Chunk70956.Z.Millis.DAY,
  p = {
    tab: null,
    localItemAcks: {},
    hasNewMentions: false,
    isDataStale: false,
    isRefreshing: false
  };
class g extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(a.ZP), null != e) {
      var t;
      (p = e).localItemAcks = function(e) {
        let t = {};
        for (let [n, r] of Object.entries(e)) Date.now() - r < h && (t[n] = r);
        return t
      }(null != (t = p.localItemAcks) ? t : {}), p.isDataStale = true
    }
  }
  getState() {
    return p
  }
  getTab() {
    var e;
    return null != (e = p.tab) ? module : Chunk497089.b1.ForYou
  }
  isLocalItemAcked(e) {
    return null != e.local_id && (null != p.localItemAcks[e.local_id] || s.default.age(e.id) > h)
  }
  hasNewMentions() {
    return p.hasNewMentions
  }
  isDataStale() {
    return p.isDataStale
  }
  isRefreshing() {
    return p.isRefreshing
  }
  shouldReload() {
    return p.hasNewMentions || p.isDataStale || p.isRefreshing
  }
}

function b() {
  p.hasNewMentions = false, p.isDataStale = false, p.isRefreshing = false
}
u(g, "displayName", "NotificationCenterStore"), u(g, "persistKey", "NotificationCenterStore");
let m = new g(Chunk570140.Z, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e
  },
  NOTIFICATION_CENTER_SET_TAB: function(e) {
    p = f(d({}, p), {
      tab: e.tab
    })
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
    let {
      localIds: t
    } = e;
    t.forEach(e => {
      p = f(d({}, p), {
        localItemAcks: f(d({}, p.localItemAcks), {
          [e]: Date.now()
        })
      })
    })
  },
  NOTIFICATION_CENTER_REFRESH: function() {
    p.isRefreshing = true
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: b,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: b
})