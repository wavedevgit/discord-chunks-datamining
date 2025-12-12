/** Chunk was on web.js **/
/** chunk id: 994746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk177267 = require("./177267.js"),
  Chunk750154 = require("./750154.js"),
  Chunk90712 = require("./90712.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let t = (0, a.Z)(e),
    n = null == t ? true : t.icon;
  return e.type === o.IIU.PLAYING && (null == t ? true : t.type) === o.ABu.XBOX ? {
    text: s.intl.formatToPlainString(s.t.A17aM8, {
      platform: s.intl.string(s.t.Nfvo72)
    }),
    platformIcon: n
  } : e.type === o.IIU.PLAYING && (null == t ? true : t.type) === o.ABu.PLAYSTATION ? {
    text: s.intl.formatToPlainString(s.t.A17aM8, {
      platform: s.intl.string(s.t.fFl4jo)
    }),
    platformIcon: n
  } : e.type === o.IIU.PLAYING && (null == t ? true : t.type) === o.ABu.META_QUEST_OR_HORIZON ? {
    text: s.intl.formatToPlainString(s.t.A17aM8, {
      platform: (0, r.Z)(e) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e)
    }),
    platformIcon: n
  } : e.type === o.IIU.WATCHING && (null == t ? true : t.type) === o.ABu.META_QUEST_OR_HORIZON ? {
    text: s.intl.formatToPlainString(s.t.ENbTKQ, {
      platform: (0, r.Z)(e) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e)
    }),
    platformIcon: n
  } : e.type === o.IIU.STREAMING && (null == t ? true : t.type) === o.ABu.TWITCH ? {
    text: s.intl.formatToPlainString(s.t["4CQq9Q"], {
      name: s.intl.string(s.t.q4pBG3)
    }),
    platformIcon: n
  } : e.type === o.IIU.STREAMING && (null == t ? true : t.type) === o.ABu.YOUTUBE ? {
    text: s.intl.formatToPlainString(s.t["4CQq9Q"], {
      name: s.intl.string(s.t.aS6cK4)
    }),
    platformIcon: n
  } : e.type === o.IIU.PLAYING ? {
    text: s.intl.string(s.t.BMTj28),
    platformIcon: n
  } : e.type === o.IIU.STREAMING ? {
    text: s.intl.string(s.t["Jpkr/q"]),
    platformIcon: n
  } : (0, i.dS)(e) ? {
    text: s.intl.formatToPlainString(s.t.pW3Ip3, {
      name: e.name
    })
  } : e.type === o.IIU.LISTENING && null != e.details ? {
    text: s.intl.formatToPlainString(s.t["b+lA5+"], {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.IIU.LISTENING ? {
    text: s.intl.string(s.t.dBISa6),
    platformIcon: n
  } : e.type === o.IIU.WATCHING && null != e.details ? {
    text: s.intl.formatToPlainString(s.t.mqdfDc, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.IIU.WATCHING ? {
    text: s.intl.string(s.t.GpNXjC),
    platformIcon: n
  } : e.type === o.IIU.COMPETING && null != e.details ? {
    text: s.intl.formatToPlainString(s.t.oHF7Ch, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.IIU.COMPETING ? {
    text: s.intl.string(s.t.OzCsIA),
    platformIcon: n
  } : e.type === o.IIU.HANG_STATUS ? {
    text: s.intl.string(s.t.Hi4tob),
    platformIcon: n
  } : {
    text: true,
    platformIcon: n
  }
}