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
  var n, r, l;
  let i = c.h.getField("sessionId"),
    a = c.h.getField("guildId"),
    d = null == (n = c.h.getField("entrypoint")) ? true : n.name,
    u = s.default.getCurrentUser(),
    p = (r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, t), l = l = {
      guild_id: a,
      directory_session_id: i,
      source: d,
      user_id: null == u ? true : u.id
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
    }), r);
  return o.default.track(e, p)
}

function p() {
  return (0, l.bG)([a.default], () => a.default.isAuthenticated())
}

function h() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = new URL(location.href);
  for (let n in e) {
    let r = e[n];
    t.searchParams.set(n, r)
  }
  let n = t.pathname + t.search,
    l = (0, r.T2)(n, false);
  (0, i.pX)(l)
}

function m() {
  let e = new URL(location.href),
    t = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
  (0, i.pX)(d.BVt.REGISTER + t)
}