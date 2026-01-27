/** Chunk was on web.js **/
/** chunk id: 638480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk487329 = require("./487329.js"),
  Chunk562153 = require("./562153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n, s) {
  if (e.state === a.XYD.RECONNECTING) {
    var l;
    let e = null == (l = (0, r.B1)(r.iy.STREAM_RECONNECTING)) ? true : l.errorCode;
    return {
      mainText: o.intl.string(o.t["pdFFK+"]),
      supportingText: o.intl.string(o.t["+PuO2N"]),
      errorCodeText: o.intl.formatToPlainString(o.t.ejOT95, {
        errorCode: e
      })
    }
  }
  return e.state === a.XYD.PAUSED ? n ? {
    mainText: o.intl.string(o.t["5q17w5"]),
    supportingText: o.intl.string(o.t.LV1NSN)
  } : {
    mainText: o.intl.string(o.t["5q17w5"]),
    supportingText: o.intl.formatToPlainString(o.t.meVVlb, {
      username: i.Ay.getName(e.guildId, e.channelId, t)
    })
  } : s ? {
    mainText: o.intl.string(o.t.JmaKtK),
    supportingText: o.intl.string(o.t["hC3+BD"])
  } : null
}