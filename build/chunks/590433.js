/** Chunk was on web.js **/
/** chunk id: 590433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cl: () => f,
  DisableCommunicationDuration: () => o,
  GN: () => p,
  av: () => d,
  cu: () => c,
  getFriendlyDurationString: () => s,
  hL: () => u,
  tr: () => l
});
var Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
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
    return {
      label: null != (t = s(o[e])) ? t : "",
      value: o[e]
    }
  }),
  c = Chunk63063.Z.getArticleURL(Chunk981631.BhN.DISABLE_GUILD_COMMUNICATION),
  u = "GuildCommunicationDisabledDismissedGuilds",
  d = "Set Communication Disabled Modal",
  f = "Clear Communication Disabled Modal",
  p = 512