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
  return e.type === a.IIU.PLAYING && (null == t ? true : t.type) === a.ABu.XBOX ? {
    text: o.intl.formatToPlainString(o.t.A17aM8, {
      platform: o.intl.string(o.t.Nfvo72)
    }),
    platformIcon: n
  } : e.type === a.IIU.PLAYING && (null == t ? true : t.type) === a.ABu.PLAYSTATION ? {
    text: o.intl.formatToPlainString(o.t.A17aM8, {
      platform: o.intl.string(o.t.fFl4jo)
    }),
    platformIcon: n
  } : e.type === a.IIU.PLAYING && (null == t ? true : t.type) === a.ABu.META_QUEST ? {
    text: o.intl.formatToPlainString(o.t.A17aM8, {
      platform: o.intl.string(o.t.p6vL0e)
    }),
    platformIcon: n
  } : e.type === a.IIU.WATCHING && (null == t ? true : t.type) === a.ABu.META_QUEST ? {
    text: o.intl.formatToPlainString(o.t.ENbTKQ, {
      platform: o.intl.string(o.t.p6vL0e)
    }),
    platformIcon: n
  } : e.type === a.IIU.STREAMING && (null == t ? true : t.type) === a.ABu.TWITCH ? {
    text: o.intl.formatToPlainString(o.t["4CQq9Q"], {
      name: o.intl.string(o.t.q4pBG3)
    }),
    platformIcon: n
  } : e.type === a.IIU.STREAMING && (null == t ? true : t.type) === a.ABu.YOUTUBE ? {
    text: o.intl.formatToPlainString(o.t["4CQq9Q"], {
      name: o.intl.string(o.t.aS6cK4)
    }),
    platformIcon: n
  } : e.type === a.IIU.PLAYING ? {
    text: o.intl.string(o.t.BMTj28),
    platformIcon: n
  } : e.type === a.IIU.STREAMING ? {
    text: o.intl.string(o.t["Jpkr/q"]),
    platformIcon: n
  } : (0, r.dS)(e) ? {
    text: o.intl.formatToPlainString(o.t.pW3Ip3, {
      name: e.name
    })
  } : e.type === a.IIU.LISTENING && null != e.details ? {
    text: o.intl.formatToPlainString(o.t["b+lA5+"], {
      name: e.name
    }),
    platformIcon: n
  } : e.type === a.IIU.LISTENING ? {
    text: o.intl.string(o.t.dBISa6),
    platformIcon: n
  } : e.type === a.IIU.WATCHING && null != e.details ? {
    text: o.intl.formatToPlainString(o.t.mqdfDc, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === a.IIU.WATCHING ? {
    text: o.intl.string(o.t.GpNXjC),
    platformIcon: n
  } : e.type === a.IIU.COMPETING && null != e.details ? {
    text: o.intl.formatToPlainString(o.t.oHF7Ch, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === a.IIU.COMPETING ? {
    text: o.intl.string(o.t.OzCsIA),
    platformIcon: n
  } : e.type === a.IIU.HANG_STATUS ? {
    text: o.intl.string(o.t.Hi4tob),
    platformIcon: n
  } : {
    text: true,
    platformIcon: n
  }
}