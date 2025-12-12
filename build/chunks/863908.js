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
  if (e.state === o.jm8.RECONNECTING) {
    var l;
    let e = null == (l = (0, r.hp)(r.u.STREAM_RECONNECTING)) ? true : l.errorCode;
    return {
      mainText: a.intl.string(a.t["pdFFK+"]),
      supportingText: a.intl.string(a.t["+PuO2N"]),
      errorCodeText: a.intl.formatToPlainString(a.t.ejOT95, {
        errorCode: e
      })
    }
  }
  return e.state === o.jm8.PAUSED ? n ? {
    mainText: a.intl.string(a.t["5q17w5"]),
    supportingText: a.intl.string(a.t.LV1NSN)
  } : {
    mainText: a.intl.string(a.t["5q17w5"]),
    supportingText: a.intl.formatToPlainString(a.t.meVVlb, {
      username: i.ZP.getName(e.guildId, e.channelId, t)
    })
  } : s ? {
    mainText: a.intl.string(a.t.JmaKtK),
    supportingText: a.intl.string(a.t["hC3+BD"])
  } : null
}