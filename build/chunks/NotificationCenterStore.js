/** Chunk was on 67564 **/
/** chunk id: 810153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk187508 = require("./187508.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk322387 = require("./322387.js");

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

function p(e, t) {
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
let h = 90 * Chunk927813.A.Millis.DAY,
  f = {
    tab: null,
    localItemAcks: {},
    hasNewMentions: false,
    isDataStale: false,
    isRefreshing: false
  };
class g extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(s.Ay), null != e) {
      var t;
      (f = e).localItemAcks = function(e) {
        let t = {};
        for (let [n, r] of Object.entries(e)) Date.now() - r < h && (t[n] = r);
        return t
      }(null != (t = f.localItemAcks) ? t : {}), f.isDataStale = true
    }
  }
  getState() {
    return f
  }
  getTab() {
    var e;
    return null != (e = f.tab) ? e : c.$w.ForYou
  }
  isLocalItemAcked(e) {
    return null != e.local_id && (null != f.localItemAcks[e.local_id] || o.default.age(e.id) > h)
  }
  hasNewMentions() {
    return f.hasNewMentions
  }
  isDataStale() {
    return f.isDataStale
  }
  isRefreshing() {
    return f.isRefreshing
  }
  shouldReload() {
    return f.hasNewMentions || f.isDataStale || f.isRefreshing
  }
}

function m() {
  f.hasNewMentions = false, f.isDataStale = false, f.isRefreshing = false
}
u(g, "displayName", "NotificationCenterStore"), u(g, "persistKey", "NotificationCenterStore");
let b = new g(Chunk73153.h, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e
  },
  NOTIFICATION_CENTER_SET_TAB: function(e) {
    f = p(d({}, f), {
      tab: e.tab
    })
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
    let {
      localIds: t
    } = e;
    t.forEach(e => {
      f = p(d({}, f), {
        localItemAcks: p(d({}, f.localItemAcks), {
          [e]: Date.now()
        })
      })
    })
  },
  NOTIFICATION_CENTER_REFRESH: function() {
    f.isRefreshing = true
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: m,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: m
})