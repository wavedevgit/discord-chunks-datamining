/** Chunk was on web.js **/
/** chunk id: 200700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DisableCommunicationDuration: () => o,
  MO: () => c,
  Rv: () => d,
  aZ: () => f,
  getFriendlyDurationString: () => s,
  hl: () => p,
  hs: () => u,
  ny: () => l
});
var Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  o = function(e) {
    return e[e.DURATION_60_SEC = 60] = "DURATION_60_SEC", e[e.DURATION_5_MIN = 300] = "DURATION_5_MIN", e[e.DURATION_10_MIN = 600] = "DURATION_10_MIN", e[e.DURATION_1_HOUR = 3600] = "DURATION_1_HOUR", e[e.DURATION_1_DAY = 86400] = "DURATION_1_DAY", e[e.DURATION_1_WEEK = 604800] = "DURATION_1_WEEK", e
  }({});

function s(e) {
  switch (e) {
    case 60:
      return a.intl.formatToPlainString(a.t["4zv/jq"], {
        secs: 60
      });
    case 300:
      return a.intl.formatToPlainString(a.t.opVZ9q, {
        mins: 5
      });
    case 600:
      return a.intl.formatToPlainString(a.t.opVZ9q, {
        mins: 10
      });
    case 3600:
      return a.intl.formatToPlainString(a.t.xCjYxK, {
        hours: 1
      });
    case 86400:
      return a.intl.formatToPlainString(a.t["k2UNz+"], {
        days: 1
      });
    case 604800:
      return a.intl.formatToPlainString(a.t.EmoBD2, {
        weeks: 1
      });
    default:
      return
  }
}
let l = () => Object.keys(o).filter(e => isNaN(Number(e))).map(e => {
    var t;
    let n = null != (t = s(o[e])) ? t : "";
    return {
      id: e,
      label: n,
      value: o[e]
    }
  }),
  c = Chunk975571.A.getArticleURL(Chunk652215.MVz.DISABLE_GUILD_COMMUNICATION),
  u = "GuildCommunicationDisabledDismissedGuilds",
  d = "Set Communication Disabled Modal",
  f = "Clear Communication Disabled Modal",
  p = 512