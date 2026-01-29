/** Chunk was on 1113 **/
/** chunk id: 87401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk988794 = require("./988794.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let c = {};
class u extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t;
      c = null != (t = e.dismissedEventIds) ? t : {}
    }
  }
  isEventDismissed(e) {
    return null != c[e]
  }
  getState() {
    return {
      dismissedEventIds: c
    }
  }
}
a(u, "displayName", "EventBannerStore"), a(u, "persistKey", "EventBanner");
let d = new u(Chunk73153.h, {
  EVENT_BANNER_DISMISS: function(e) {
    var t, n;
    let {
      eventId: r
    } = e;
    t = o({}, c), n = n = {
      [r]: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), c = t
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (t.status !== s.XG.CANCELED && t.status !== s.XG.COMPLETED || null == c[t.id]) returnfalse;
    let n = o({}, c);
    delete n[t.id], c = n
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (null == c[t.id]) returnfalse;
    let n = o({}, c);
    delete n[t.id], c = n
  }
})