/** Chunk was on 1636 **/
/** chunk id: 249700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./938796.js");
var Chunk843472 = require("./843472.js"),
  Chunk545152 = require("./545152.js"),
  Chunk381941 = require("./381941.js");

function o(e, t, n) {
  var o, a;
  let c = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (r.A.deleteMessage(e.id, t.id, true), t.isCommandType()) {
    null != t.interactionData && null != c.applicationId && (0, l.x)(t, e, c);
    return
  }
  let {
    content: s,
    tts: d,
    messageReference: u,
    flags: f,
    nonce: g
  } = t;
  r.A.sendMessage(e.id, {
    content: s,
    tts: d,
    invalidEmojis: [],
    validNonShortcutEmojis: []
  }, true, (o = function(e) {
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
  }({
    nonce: g,
    flags: f,
    messageReference: null != u ? u : true
  }, c), a = a = {
    location: i.Hx.RETRY
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
  }), o))
}