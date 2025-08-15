/** Chunk was on web.js **/
/** chunk id: 863908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n, l) {
  if (e.state === o.jm8.RECONNECTING) {
    var c;
    let e = (0, i.tc)({
        location: "getScreenMessageForStream"
      }),
      t = null == (c = (0, r.hp)(r.u.STREAM_RECONNECTING)) ? true : c.errorCode;
    return {
      mainText: s.intl.string(s.t.pdFFKy),
      supportingText: s.intl.string(s.t["+PuO2N"]),
      errorCodeText: e ? s.intl.formatToPlainString(s.t["ejOT9/"], {
        errorCode: t
      }) : true
    }
  }
  return e.state === o.jm8.PAUSED ? n ? {
    mainText: s.intl.string(s.t["5q17w8"]),
    supportingText: s.intl.string(s.t.LV1NSE)
  } : {
    mainText: s.intl.string(s.t["5q17w8"]),
    supportingText: s.intl.formatToPlainString(s.t.meVVlZ, {
      username: a.ZP.getName(e.guildId, e.channelId, t)
    })
  } : l ? {
    mainText: s.intl.string(s.t.JmaKtL),
    supportingText: s.intl.string(s.t["hC3+BA"])
  } : null
}