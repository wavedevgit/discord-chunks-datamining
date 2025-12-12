/** Chunk was on web.js **/
/** chunk id: 101578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk231429 = require("./231429.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk973616 = require("./973616.js"),
  Chunk789407 = require("./789407.js"),
  Chunk616922 = require("./616922.js");

function d(e) {
  return null != e.application ? l.ZP.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, u.Ps)(e.activity.party_id) ? c.r9 : true
}
let f = e => {
  var t;
  let {
    channel: n,
    message: l,
    hideParty: c
  } = e, {
    analyticsLocations: u
  } = (0, a.ZP)(o.Z.INVITE_EMBED), f = d(l), {
    data: p
  } = (0, s.IX)(null == (t = l.application) ? true : t.id), _ = null != p ? p : f;
  return null == _ ? null : (0, r.jsx)(i.c, {
    app: _,
    channel: n,
    message: l,
    hideParty: c,
    analyticsLocations: u
  })
}