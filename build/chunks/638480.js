/** Chunk was on web.js **/
/** chunk id: 638480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk487329 = require("./487329.js"),
  Chunk562153 = require("./562153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n, o) {
  if (e.state === a.XYD.RECONNECTING) {
    var l;
    let e = null == (l = (0, r.B1)(r.iy.STREAM_RECONNECTING)) ? true : l.errorCode;
    return {
      mainText: s.intl.string(s.t["pdFFK+"]),
      supportingText: s.intl.string(s.t["+PuO2N"]),
      errorCodeText: s.intl.formatToPlainString(s.t.ejOT95, {
        errorCode: e
      })
    }
  }
  return e.state === a.XYD.PAUSED ? n ? {
    mainText: s.intl.string(s.t["5q17w5"]),
    supportingText: s.intl.string(s.t.LV1NSN)
  } : {
    mainText: s.intl.string(s.t["5q17w5"]),
    supportingText: s.intl.formatToPlainString(s.t.meVVlb, {
      username: i.Ay.getName(e.guildId, e.channelId, t)
    })
  } : o ? {
    mainText: s.intl.string(s.t.JmaKtK),
    supportingText: s.intl.string(s.t["hC3+BD"])
  } : null
}