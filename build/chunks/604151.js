/** Chunk was on web.js **/
"use strict";
n.d(t, {
  h: () => E
});
var r = n(952265),
  i = n(570140),
  o = n(281956),
  a = n(200498),
  s = n(368442),
  l = n(672339),
  c = n(653175),
  u = n(592125),
  d = n(430824),
  f = n(607744),
  _ = n(944486),
  p = n(979651),
  h = n(934415);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let E = function(e, t) {
  let g = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    v = u.Z.getChannel(e),
    b = p.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
    y = null != v ? f.Z.getCheck(v.guild_id) : null;
  if (!(null != t && (0, o.n)(t)) && (null == y || y.canChat || (0, a.jU)(v))) {
    if (null != v && !b) {
      let e = (0, h.rY)(v, p.Z, d.Z);
      if (e && v.isGuildStageVoice() && (0, s.xJ)(v.id)) {
        (0, r.ZD)(async () => {
          let {
            default: e
          } = await n.e("46398").then(n.bind(n, 523794));
          return t => e(m({
            channel: v
          }, t))
        });
        return
      }
      if (e) {
        (0, r.ZD)(async () => {
          let {
            default: e
          } = await n.e("86465").then(n.bind(n, 997308));
          return t => e(t)
        });
        return
      }
    }
    g && (0, l.eH)(), (0, c.Z)(O, e, E, g)
  }

  function O() {
    i.Z.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      guildId: t,
      channelId: e,
      currentVoiceChannelId: _.Z.getVoiceChannelId(),
      video: g,
      stream: E
    })
  }
}