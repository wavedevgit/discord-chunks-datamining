/** Chunk was on web.js **/
/** chunk id: 604151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => E
});
var Chunk952265 = require("./952265.js"),
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let E = function(e, t) {
  let m = arguments.length > 2 && true !== arguments[2] && arguments[2],
    E = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      lockVoiceStateForResume: b = false
    } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {},
    y = u.Z.getChannel(e),
    O = p.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
    v = null != y ? f.Z.getCheck(y.guild_id) : null;
  if (!(null != t && (0, o.n)(t)) && (null == v || v.canChat || (0, a.jU)(y))) {
    if (null != y && !O) {
      let e = (0, h.rY)(y, p.Z, d.Z);
      if (e && y.isGuildStageVoice() && (0, s.xJ)(y.id)) return void(0, r.ZD)(async () => {
        let {
          default: e
        } = await n.e("46398").then(n.bind(n, 523794));
        return t => e(g({
          channel: y
        }, t))
      });
      if (e) return void(0, r.ZD)(async () => {
        let {
          default: e
        } = await n.e("86465").then(n.bind(n, 997308));
        return t => e(t)
      })
    }
    m && (0, l.eH)(), (0, c.Z)(I, e, E, m)
  }

  function I() {
    i.Z.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      guildId: t,
      channelId: e,
      currentVoiceChannelId: _.Z.getVoiceChannelId(),
      video: m,
      stream: E,
      lockVoiceStateForResume: b
    })
  }
}