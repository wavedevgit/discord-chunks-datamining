/** Chunk was on web.js **/
/** chunk id: 317572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk788733 = require("./788733.js"),
  Chunk82149 = require("./82149.js"),
  Chunk129894 = require("./129894.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let t = (0, a.A)(e),
    n = null == t ? true : t.icon;
  return e.type === o.$pd.PLAYING && (null == t ? true : t.type) === o.fg2.XBOX ? {
    text: s.intl.formatToPlainString(s.t.A17aM8, {
      platform: s.intl.string(s.t.Nfvo72)
    }),
    platformIcon: n
  } : e.type === o.$pd.PLAYING && (null == t ? true : t.type) === o.fg2.PLAYSTATION ? {
    text: s.intl.formatToPlainString(s.t.A17aM8, {
      platform: s.intl.string(s.t.fFl4jo)
    }),
    platformIcon: n
  } : e.type === o.$pd.PLAYING && (null == t ? true : t.type) === o.fg2.META_QUEST_OR_HORIZON ? {
    text: s.intl.formatToPlainString(s.t.A17aM8, {
      platform: (0, r.A)(e) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e)
    }),
    platformIcon: n
  } : e.type === o.$pd.WATCHING && (null == t ? true : t.type) === o.fg2.META_QUEST_OR_HORIZON ? {
    text: s.intl.formatToPlainString(s.t.ENbTKQ, {
      platform: (0, r.A)(e) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e)
    }),
    platformIcon: n
  } : e.type === o.$pd.STREAMING && (null == t ? true : t.type) === o.fg2.TWITCH ? {
    text: s.intl.formatToPlainString(s.t["4CQq9Q"], {
      name: s.intl.string(s.t.q4pBG3)
    }),
    platformIcon: n
  } : e.type === o.$pd.STREAMING && (null == t ? true : t.type) === o.fg2.YOUTUBE ? {
    text: s.intl.formatToPlainString(s.t["4CQq9Q"], {
      name: s.intl.string(s.t.aS6cK4)
    }),
    platformIcon: n
  } : e.type === o.$pd.PLAYING ? {
    text: s.intl.string(s.t.BMTj28),
    platformIcon: n
  } : e.type === o.$pd.STREAMING ? {
    text: s.intl.string(s.t["Jpkr/q"]),
    platformIcon: n
  } : (0, i.Cy)(e) ? {
    text: s.intl.formatToPlainString(s.t.pW3Ip3, {
      name: e.name
    })
  } : e.type === o.$pd.LISTENING && null != e.details ? {
    text: s.intl.formatToPlainString(s.t["b+lA5+"], {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.$pd.LISTENING ? {
    text: s.intl.string(s.t.dBISa6),
    platformIcon: n
  } : e.type === o.$pd.WATCHING && null != e.details ? {
    text: s.intl.formatToPlainString(s.t.mqdfDc, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.$pd.WATCHING ? {
    text: s.intl.string(s.t.GpNXjC),
    platformIcon: n
  } : e.type === o.$pd.COMPETING && null != e.details ? {
    text: s.intl.formatToPlainString(s.t.oHF7Ch, {
      name: e.name
    }),
    platformIcon: n
  } : e.type === o.$pd.COMPETING ? {
    text: s.intl.string(s.t.OzCsIA),
    platformIcon: n
  } : e.type === o.$pd.HANG_STATUS ? {
    text: s.intl.string(s.t.Hi4tob),
    platformIcon: n
  } : {
    text: true,
    platformIcon: n
  }
}