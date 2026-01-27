/** Chunk was on web.js **/
/** chunk id: 752636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk143413 = require("./143413.js"),
  Chunk643204 = require("./643204.jsx");
let s = Chunk64700.memo(Chunk643204.Ay);

function l(e) {
  let {
    message: t,
    channel: n,
    author: i,
    compact: o,
    animateAvatar: l,
    guildId: c,
    isGroupStart: u = true,
    roleIcon: d,
    hideTimestamp: f,
    hideGuildTag: p,
    preview: _
  } = e;
  return !(0, a.A)(t) && (u || o) ? (0, r.jsx)(s, {
    message: t,
    channel: n,
    author: i,
    guildId: c,
    compact: o,
    animate: l,
    roleIcon: d,
    hideTimestamp: f,
    hideGuildTag: p,
    preview: _
  }) : true
}