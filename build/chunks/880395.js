/** Chunk was on 46906 **/
"use strict";
n.d(t, {
  D: () => o
});
var r = n(200651);
n(192379);
var l = n(239091);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function a(e, t) {
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

function o(e, t, o, s, c) {
  let u = o.getGuildId();
  return null != u ? (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("97589"), n.e("80125"), n.e("87168")]).then(n.bind(n, 357823));
    return n => (0, r.jsx)(e, a(i({}, n), {
      user: t,
      channel: o,
      guildId: u,
      onInteraction: e => c("GuildVoiceUserContextMenu", e)
    }))
  }, s) : (0, l.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("80125"), n.e("66067")]).then(n.bind(n, 238296));
    return n => (0, r.jsx)(e, a(i({}, n), {
      user: t,
      channel: o,
      onInteraction: e => c("BaseVoiceUserContextMenu", e)
    }))
  }, s)
}