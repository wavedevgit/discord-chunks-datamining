/** Chunk was on 37220 **/
/** chunk id: 730954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./997841.js");
var Chunk904245 = require("./904245.js"),
  Chunk667204 = require("./667204.js"),
  Chunk959517 = require("./959517.js");

function o(e, t, n) {
  var o, a;
  let s = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (r.Z.deleteMessage(e.id, t.id, true), t.isCommandType()) {
    null != t.interactionData && null != s.applicationId && (0, i.d)(t, e, s);
    return
  }
  let {
    content: c,
    tts: u,
    messageReference: d,
    flags: f,
    nonce: g
  } = t;
  r.Z.sendMessage(e.id, {
    content: c,
    tts: u,
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
    messageReference: null != d ? d : true
  }, s), a = a = {
    location: l.dy.RETRY
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