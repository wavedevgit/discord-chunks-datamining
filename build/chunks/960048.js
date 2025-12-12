/** Chunk was on web.js **/
/** chunk id: 960048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./415506.js");
var Chunk464847 = require("./464847.js"),
  Chunk289182 = require("./289182.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
  var e, t, n, r, i, s;
  let l = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  Chunk358085.isPlatformEmbedded && Chunk998502.ZP.updateCrashReporter({
    user_id: null != (e = l.id) ? module : "",
    username: null != (t = l.username) ? exports : "",
    email: null != (n = l.email) ? require : "",
    sentry: {
      user: {
        id: null != (r = l.id) ? Chunk464847 : "",
        username: null != (i = l.username) ? Chunk289182 : "",
        email: null != (s = l.email) ? s : ""
      }
    }
  })
}
let f = {
  setUser(e, t, n, r) {
    var i;
    let o = {
      id: e,
      username: t,
      email: n,
      staff: r
    };
    null == (i = window.DiscordSentry) || i.getCurrentScope().setUser(o), d(o)
  },
  clearUser() {
    var e;
    null == (e = window.DiscordSentry) || module.getCurrentScope().setUser(null), d()
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
    let r = (0, i.v)(t);
    null == (n = window.DiscordSentry) || n.withScope(t => {
      var n;
      null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null == (n = window.DiscordSentry) || n.captureException(e)
    })
  },
  captureCrash(e, t) {
    var n;
    let r, o = (0, i.v)(t);
    return null == (n = window.DiscordSentry) || n.withScope(t => {
      var n;
      t.setExtras(o.extra), t.setTag("crash", "true"), t.setLevel("fatal"), t.addEventProcessor(e => {
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
    let r = (0, i.v)(t);
    null == (n = window.DiscordSentry) || n.withScope(t => {
      var n;
      null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null == (n = window.DiscordSentry) || n.captureMessage(e)
    })
  },
  addBreadcrumb(e) {
    (0, r.Z)(e)
  },
  profiledRootComponent: e => e,
  crash() {
    throw Error("crash")
  },
  markCrashHandled(e) {},
  getLastCrashReport: () => Promise.resolve(null)
}