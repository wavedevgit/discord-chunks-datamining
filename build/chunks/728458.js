/** Chunk was on web.js **/
/** chunk id: 728458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./65821.js");
var Chunk668279 = require("./668279.js"),
  Chunk761296 = require("./761296.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d() {
  var e, t, n, r, i, o;
  let l = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  a.isPlatformEmbedded && s.Ay.updateCrashReporter({
    user_id: null != (e = l.id) ? e : "",
    username: null != (t = l.username) ? t : "",
    email: null != (n = l.email) ? n : "",
    sentry: {
      user: {
        id: null != (r = l.id) ? r : "",
        username: null != (i = l.username) ? i : "",
        email: null != (o = l.email) ? o : ""
      }
    }
  })
}
let f = {
  setUser(e, t, n, r) {
    var i;
    let a = {
      id: e,
      username: t,
      email: n,
      staff: r
    };
    null == (i = window.DiscordSentry) || i.getCurrentScope().setUser(a), d(a)
  },
  clearUser() {
    var e;
    null == (e = window.DiscordSentry) || e.getCurrentScope().setUser(null), d()
  },
  setTags(e) {
    var t;
    null == (t = window.DiscordSentry) || t.getCurrentScope().setTags(e)
  },
  setExtra(e) {
    var t;
    null == (t = window.DiscordSentry) || t.getCurrentScope().setExtras(e)
  },
  captureException(e, t) {
    var n;
    let r = (0, i.Q)(t);
    null == (n = window.DiscordSentry) || n.withScope(t => {
      var n;
      null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null == (n = window.DiscordSentry) || n.captureException(e)
    })
  },
  captureCrash(e, t) {
    var n;
    let r, a = (0, i.Q)(t);
    return null == (n = window.DiscordSentry) || n.withScope(t => {
      var n;
      t.setExtras(a.extra), t.setTag("crash", "true"), t.setLevel("fatal"), t.addEventProcessor(e => {
        var t, n;
        let r = null == (n = e.exception) || null == (t = n.values) ? true : t[0];
        return null != r && (r.mechanism = u(l({}, r.mechanism), {
          handled: false
        })), e
      }), r = null == (n = window.DiscordSentry) ? true : n.captureException(e)
    }), r
  },
  captureMessage(e, t) {
    var n;
    let r = (0, i.Q)(t);
    null == (n = window.DiscordSentry) || n.withScope(t => {
      var n;
      null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null == (n = window.DiscordSentry) || n.captureMessage(e)
    })
  },
  addBreadcrumb(e) {
    (0, r.A)(e)
  },
  profiledRootComponent: e => e,
  crash() {
    throw Error("crash")
  },
  markCrashHandled(e) {},
  getLastCrashReport: () => Promise.resolve(null)
}