/** Chunk was on web.js **/
/** chunk id: 863908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk458725 = require("./458725.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n, s) {
  if (e.state === a.jm8.RECONNECTING) {
    var l;
    let e = null == (l = (0, r.hp)(r.u.STREAM_RECONNECTING)) ? true : l.errorCode;
    return {
      mainText: o.intl.string(o.t["pdFFK+"]),
      supportingText: o.intl.string(o.t["+PuO2N"]),
      errorCodeText: o.intl.formatToPlainString(o.t.ejOT95, {
        errorCode: e
      })
    }
  }
  return e.state === a.jm8.PAUSED ? n ? {
    mainText: o.intl.string(o.t["5q17w5"]),
    supportingText: o.intl.string(o.t.LV1NSN)
  } : {
    mainText: o.intl.string(o.t["5q17w5"]),
    supportingText: o.intl.formatToPlainString(o.t.meVVlb, {
      username: i.ZP.getName(e.guildId, e.channelId, t)
    })
  } : s ? {
    mainText: o.intl.string(o.t.JmaKtK),
    supportingText: o.intl.string(o.t["hC3+BD"])
  } : null
}