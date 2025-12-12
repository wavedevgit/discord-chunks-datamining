/** Chunk was on 69844 **/
/** chunk id: 881294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  nu: () => p,
  qF: () => h,
  rf: () => m,
  zZ: () => u
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk860911 = require("./860911.js"),
  Chunk442837 = require("./442837.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk258971 = require("./258971.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  var n, r, i;
  let a = c.z8.getField("sessionId"),
    l = c.z8.getField("guildId"),
    d = null == (n = c.z8.getField("entrypoint")) ? true : n.name,
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
    }({}, t), i = i = {
      guild_id: l,
      directory_session_id: a,
      source: d,
      user_id: null == u ? true : u.id
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
    }), r);
  return o.default.track(e, p)
}

function p() {
  return (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.isAuthenticated())
}

function m() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    t = new URL(location.href);
  for (let n in module) {
    let r = module[require];
    exports.searchParams.set(require, Chunk860911)
  }
  let n = exports.pathname + exports.search,
    i = (0, Chunk860911.Ui)(require, false);
  (0, Chunk703656.uL)(Chunk442837)
}

function h() {
  let e = new URL(location.href),
    t = "?redirect_to=".concat(encodeURIComponent(module.pathname + module.search));
  (0, Chunk703656.uL)(Chunk981631.Z5c.REGISTER + exports)
}