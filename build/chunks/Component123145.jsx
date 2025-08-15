/** Chunk was on 28467 **/
/** chunk id: 123145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk739566 = require("./739566.js"),
  Chunk421399 = require("./421399.jsx"),
  Chunk47930 = require("./47930.jsx");

function i(e) {
  var t, n, i, o;
  let c = (0, a.ZP)(e.message),
    u = (0, l.x)({
      message: e.message,
      channel: e.channel,
      user: null != (n = null == (t = e.message) ? true : t.author) ? n : e.userOverride,
      compact: !!e.compact,
      isRepliedMessage: !!e.isRepliedMessage
    }),
    m = {};
  return null != u && (m[r.a.SYSTEM_TAG] = u), (0, s.jsx)(r.Z, (i = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        s = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), s.forEach(function(t) {
        var s;
        s = n[t], t in e ? Object.defineProperty(e, t, {
          value: s,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = s
      })
    }
    return e
  }({}, e), o = o = {
    author: c,
    decorations: m
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      n.push.apply(n, s)
    }
    return n
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
  }), i))
}