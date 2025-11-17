/** Chunk was on web.js **/
/** chunk id: 101578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk911969 = require("./911969.js"),
  Chunk627861 = require("./627861.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk973616 = require("./973616.js"),
  Chunk789407 = require("./789407.js"),
  Chunk616922 = require("./616922.js");

function f(e) {
  return null != e.application ? c.ZP.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, d.Ps)(e.activity.party_id) ? u.r9 : true
}

function _(e) {
  var t;
  let n = null == e || null == (t = e.linkedGames) ? true : t.find(e => e.type === i.tE.OFFICIAL);
  return (0, l.IX)(null == n ? true : n.id)
}
let p = e => {
  var t;
  let {
    channel: n,
    message: i,
    hideParty: c
  } = e, {
    analyticsLocations: u
  } = (0, s.ZP)(o.Z.INVITE_EMBED), d = f(i), {
    data: p
  } = (0, l.IX)(null == (t = i.application) ? true : t.id), h = null != p ? p : d, {
    data: m
  } = _(h), g = null != m ? m : h;
  return null == g ? null : (0, r.jsx)(a.c, {
    app: g,
    channel: n,
    message: i,
    hideParty: c,
    analyticsLocations: u
  })
}