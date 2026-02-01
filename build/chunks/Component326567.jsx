/** Chunk was on 42402 **/
/** chunk id: 326567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk442433 = require("./442433.js");

function i(e) {
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
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function a(e, t, a, o, c) {
  let u = a.getGuildId();
  return null != u ? (0, l.L3)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("55296"), n.e("14075")]).then(n.bind(n, 335253));
    return n => (0, r.jsx)(e, s(i({}, n), {
      user: t,
      channel: a,
      guildId: u,
      onInteraction: e => c("GuildVoiceUserContextMenu", e)
    }))
  }, o) : (0, l.L3)(e, async () => {
    let {
      default: e
    } = await n.e("43076").then(n.bind(n, 661455));
    return n => (0, r.jsx)(e, s(i({}, n), {
      user: t,
      channel: a,
      onInteraction: e => c("BaseVoiceUserContextMenu", e)
    }))
  }, o)
}