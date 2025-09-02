/** Chunk was on web.js **/
/** chunk id: 604151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => b
});
var Chunk772848 = require("./772848.js"),
  Chunk952265 = require("./952265.js"),
  Chunk570140 = require("./570140.js"),
  Chunk281956 = require("./281956.js"),
  Chunk200498 = require("./200498.js"),
  Chunk368442 = require("./368442.js"),
  Chunk672339 = require("./672339.js"),
  Chunk653175 = require("./653175.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk607744 = require("./607744.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
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
let b = function(e, t) {
  let g = arguments.length > 2 && true !== arguments[2] && arguments[2],
    b = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      lockVoiceStateForResume: y = false
    } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {},
    O = d.Z.getChannel(e),
    v = h.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
    I = null != O ? _.Z.getCheck(O.guild_id) : null;
  if (!(null != t && (0, o.n)(t)) && (null == I || I.canChat || (0, s.jU)(O))) {
    if (null != O && !v) {
      let e = (0, m.rY)(O, h.Z, f.Z);
      if (e && O.isGuildStageVoice() && (0, l.xJ)(O.id)) return void(0, i.ZD)(async () => {
        let {
          default: e
        } = await n.e("46398").then(n.bind(n, 523794));
        return t => e(E({
          channel: O
        }, t))
      });
      if (e) return void(0, i.ZD)(async () => {
        let {
          default: e
        } = await n.e("86465").then(n.bind(n, 997308));
        return t => e(t)
      })
    }
    g && (0, c.eH)(), (0, u.Z)(S, e, b, g)
  }

  function S() {
    let n = (0, r.Z)();
    a.Z.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      guildId: t,
      channelId: e,
      currentVoiceChannelId: p.Z.getVoiceChannelId(),
      video: g,
      stream: b,
      lockVoiceStateForResume: y,
      joinVoiceId: n
    })
  }
}