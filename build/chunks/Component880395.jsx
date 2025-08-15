/** Chunk was on 85362 **/
/** chunk id: 880395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk239091 = require("./239091.js");

function l(e) {
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

function o(e, t) {
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

function a(e, t, a, s, c) {
  let u = a.getGuildId();
  return null != u ? (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("70274"), n.e("8982"), n.e("80125"), n.e("47817")]).then(n.bind(n, 357823));
    return n => (0, r.jsx)(e, o(l({}, n), {
      user: t,
      channel: a,
      guildId: u,
      onInteraction: e => c("GuildVoiceUserContextMenu", e)
    }))
  }, s) : (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("80125"), n.e("24509")]).then(n.bind(n, 238296));
    return n => (0, r.jsx)(e, o(l({}, n), {
      user: t,
      channel: a,
      onInteraction: e => c("BaseVoiceUserContextMenu", e)
    }))
  }, s)
}