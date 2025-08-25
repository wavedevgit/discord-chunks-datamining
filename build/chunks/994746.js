/** Chunk was on web.js **/
/** chunk id: 994746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk750154 = require("./750154.js"),
  Chunk90712 = require("./90712.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t = (0, i.Z)(e),
    n = null == t ? true : t.icon;
  return e.type === o.IIU.PLAYING && (null == t ? true : t.type) === o.ABu.XBOX ? {
    text: a.intl.formatToPlainString(a.t.Sq9xJy, {
      game: a.intl.string(a.t["Nfvo7+"])
    }),
    platformIcon: n
  } : e.type === o.IIU.PLAYING && (null == t ? true : t.type) === o.ABu.PLAYSTATION ? {
    text: a.intl.formatToPlainString(a.t.Sq9xJy, {
      game: a.intl.string(a.t.fFl4jo)
    }),
    platformIcon: n
  } : e.type === o.IIU.STREAMING && (null == t ? true : t.type) === o.ABu.TWITCH ? {
    text: a.intl.formatToPlainString(a.t["4CQq9f"], {
      name: a.intl.string(a.t.q4pBGx)
    }),
    platformIcon: n
  } : e.type === o.IIU.STREAMING && (null == t ? true : t.type) === o.ABu.YOUTUBE ? {
    text: a.intl.formatToPlainString(a.t["4CQq9f"], {
      name: a.intl.string(a.t.aS6cKy)
    }),
    platformIcon: n
  } : e.type === o.IIU.PLAYING ? {
    text: a.intl.string(a.t.BMTj29),
    platformIcon: n
  } : e.type === o.IIU.STREAMING ? {
    text: a.intl.string(a.t["Jpkr/v"]),
    platformIcon: n
  } : (0, r.dS)(e) ? {
    text: a.intl.formatToPlainString(a.t.pW3Ip6, {
      name: e.name
    })
  } : e.type === o.IIU.LISTENING && null != e.details ? {
    text: a.intl.formatToPlainString(a.t["b+lA5+"], {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.IIU.LISTENING ? {
    text: a.intl.string(a.t.dBISa2),
    platformIcon: n
  } : e.type === o.IIU.WATCHING && null != e.details ? {
    text: a.intl.formatToPlainString(a.t.mqdfDQ, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.IIU.WATCHING ? {
    text: a.intl.string(a.t.GpNXjI),
    platformIcon: n
  } : e.type === o.IIU.COMPETING && null != e.details ? {
    text: a.intl.formatToPlainString(a.t.oHF7Cg, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.IIU.COMPETING ? {
    text: a.intl.string(a.t.OzCsIC),
    platformIcon: n
  } : e.type === o.IIU.HANG_STATUS ? {
    text: a.intl.string(a.t["04B8fH"]),
    platformIcon: n
  } : {
    text: true,
    platformIcon: n
  }
}