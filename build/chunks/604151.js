/** Chunk was on web.js **/
/** chunk id: 604151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => O
});
var Chunk772848 = require("./772848.js"),
  Chunk952265 = require("./952265.js"),
  Chunk570140 = require("./570140.js"),
  Chunk387343 = require("./387343.js"),
  Chunk281956 = require("./281956.js"),
  Chunk200498 = require("./200498.js"),
  Chunk368442 = require("./368442.js"),
  Chunk672339 = require("./672339.js"),
  Chunk653175 = require("./653175.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk607744 = require("./607744.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let O = function(e, t) {
  let b = arguments.length > 2 && true !== arguments[2] && arguments[2],
    O = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      lockVoiceStateForResume: v = false
    } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {},
    S = f.Z.getChannel(e),
    I = g.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
    T = null != S ? _.Z.getCheck(S.guild_id) : null;
  if (!(null != t && (0, s.n)(t)) && (null == T || T.canChat || (0, l.jU)(S))) {
    if (null != S && !I) {
      let e = (0, E.rY)(S, g.Z, p.Z);
      if (e && S.isGuildStageVoice() && (0, c.xJ)(S.id)) return void(0, i.ZD)(async () => {
        let {
          default: e
        } = await n.e("46398").then(n.bind(n, 523794));
        return t => e(y({
          channel: S
        }, t))
      });
      if (e) return void(0, i.ZD)(async () => {
        let {
          default: e
        } = await n.e("86465").then(n.bind(n, 997308));
        return t => e(t)
      });
      if (!(0, o.Z)(S, m.Z)) return
    }
    b && (0, u.eH)(), (0, d.Z)(A, e, O, b)
  }

  function A() {
    let n = (0, r.Z)();
    a.Z.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      guildId: t,
      channelId: e,
      currentVoiceChannelId: h.Z.getVoiceChannelId(),
      video: b,
      stream: O,
      lockVoiceStateForResume: v,
      joinVoiceId: n
    })
  }
}