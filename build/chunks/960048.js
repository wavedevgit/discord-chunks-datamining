/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => f
}), n(47120), n(411104);
var r = n(464847),
  i = n(289182),
  o = n(358085),
  a = n(998502);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  o.isPlatformEmbedded && a.ZP.updateCrashReporter({
    user_id: null !== (e = l.id) && void 0 !== e ? e : "",
    username: null !== (t = l.username) && void 0 !== t ? t : "",
    email: null !== (n = l.email) && void 0 !== n ? n : "",
    sentry: {
      user: {
        id: null !== (r = l.id) && void 0 !== r ? r : "",
        username: null !== (i = l.username) && void 0 !== i ? i : "",
        email: null !== (s = l.email) && void 0 !== s ? s : ""
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
    null === (i = window.DiscordSentry) || void 0 === i || i.getCurrentScope().setUser(o), d(o)
  },
  clearUser() {
    var e;
    null === (e = window.DiscordSentry) || void 0 === e || e.getCurrentScope().setUser(null), d()
  },
  setTags(e) {
    var t;
    null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setTags(e)
  },
  setExtra(e) {
    var t;
    null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setExtras(e)
  },
  captureException(e, t) {
    var n;
    let r = (0, i.v)(t);
    null === (n = window.DiscordSentry) || void 0 === n || n.withScope(t => {
      var n;
      null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureException(e)
    })
  },
  captureCrash(e, t) {
    var n;
    let r;
    let o = (0, i.v)(t);
    return null === (n = window.DiscordSentry) || void 0 === n || n.withScope(t => {
      var n;
      t.setExtras(o.extra), t.setTag("crash", "true"), t.setLevel("fatal"), t.addEventProcessor(e => {
        var t, n;
        let r = null === (n = e.exception) || void 0 === n ? void 0 : null === (t = n.values) || void 0 === t ? void 0 : t[0];
        return null != r && (r.mechanism = u(l({}, r.mechanism), {
          handled: !1
        })), e
      }), r = null === (n = window.DiscordSentry) || void 0 === n ? void 0 : n.captureException(e)
    }), r
  },
  captureMessage(e, t) {
    var n;
    let r = (0, i.v)(t);
    null === (n = window.DiscordSentry) || void 0 === n || n.withScope(t => {
      var n;
      null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureMessage(e)
    })
  },
  addBreadcrumb(e) {
    (0, r.Z)(e)
  },
  profiledRootComponent: e => e,
  crash() {
    throw Error("crash")
  }
}