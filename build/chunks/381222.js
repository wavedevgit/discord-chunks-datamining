/** Chunk was on web.js **/
/** chunk id: 381222, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => O
});
var Chunk835245 = require("./835245.js"),
  Chunk192308 = require("./192308.js"),
  Chunk73153 = require("./73153.js"),
  Chunk890615 = require("./890615.js"),
  Chunk51758 = require("./51758.js"),
  Chunk776781 = require("./776781.js"),
  Chunk96566 = require("./96566.js"),
  Chunk413339 = require("./413339.js"),
  Chunk513752 = require("./513752.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk834942 = require("./834942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk147036 = require("./147036.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
let O = function(e, t) {
  let y = arguments.length > 2 && true !== arguments[2] && arguments[2],
    O = arguments.length > 3 && true !== arguments[3] && arguments[3],
    {
      lockVoiceStateForResume: v = false
    } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {},
    A = f.A.getChannel(e),
    I = g.A.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
    S = null != A ? _.A.getCheck(A.guild_id) : null;
  if (!(null != t && (0, o.V)(t)) && (null == S || S.canChat || (0, l.pC)(A))) {
    if (null != A && !I) {
      let e = (0, E.Pd)(A, g.A, p.A);
      if (e && A.isGuildStageVoice() && (0, c.xn)(A.id)) return void(0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("21900").then(n.bind(n, 172231));
        return t => e(b({
          channel: A
        }, t))
      });
      if (e) return void(0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("54207").then(n.bind(n, 361698));
        return t => e(t)
      });
      if (!(0, s.A)(A, h.A)) return
    }
    y && (0, u.PX)(), (0, d.A)(T, e, O, y)
  }

  function T() {
    let n = (0, r.A)();
    a.h.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      guildId: t,
      channelId: e,
      currentVoiceChannelId: m.A.getVoiceChannelId(),
      video: y,
      stream: O,
      lockVoiceStateForResume: v,
      joinVoiceId: n
    })
  }
}