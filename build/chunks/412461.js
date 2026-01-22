/** Chunk was on 28636 **/
/** chunk id: 412461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DB: () => p,
  TR: () => u,
  dG: () => m,
  jL: () => h
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk323125 = require("./323125.js"),
  Chunk311907 = require("./311907.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk310419 = require("./310419.js"),
  Chunk652215 = require("./652215.js");

function u(e, t) {
  var n, l, a;
  let r = o.h.getField("sessionId"),
    i = o.h.getField("guildId"),
    d = null == (n = o.h.getField("entrypoint")) ? true : n.name,
    u = s.default.getCurrentUser(),
    p = (l = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({}, t), a = a = {
      guild_id: i,
      directory_session_id: r,
      source: d,
      user_id: null == u ? true : u.id
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
    }), l);
  return c.default.track(e, p)
}

function p() {
  return (0, a.bG)([i.default], () => i.default.isAuthenticated())
}

function h() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = new URL(location.href);
  for (let n in e) {
    let l = e[n];
    t.searchParams.set(n, l)
  }
  let n = t.pathname + t.search,
    a = (0, l.T2)(n, false);
  (0, r.pX)(a)
}

function m() {
  let e = new URL(location.href),
    t = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
  (0, r.pX)(d.BVt.REGISTER + t)
}