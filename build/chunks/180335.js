/** Chunk was on web.js **/
/** chunk id: 180335, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AZ: () => u,
  RL: () => _,
  cN: () => f,
  gr: () => d,
  pB: () => p,
  vu: () => h
}), require("./388685.js");
var Chunk423875 = require("./423875.js"),
  Chunk394821 = require("./394821.js"),
  Chunk26033 = require("./26033.js"),
  Chunk561308 = require("./561308.js"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk728151 = require("./728151.js");

function u(e) {
  if ((0, a.dU)(e)) {
    var t, n;
    return (null == (n = e.extra.entries[0]) || null == (t = n.media) ? true : t.provider) === r.p.SPOTIFY
  }
  return !!(0, a.KF)(e) && e.extra.media.provider === r.p.SPOTIFY
}

function d(e) {
  return !!(0, a.y0)(e) && e.extra.application_id === c.sp
}

function f(e, t) {
  let n = e.extra;
  return null != n && ("application_id" in t && t.application_id === n.application_id || ("game_name" in n ? t.name === n.game_name : "activity_name" in n && t.name === n.activity_name))
}

function p(e, t) {
  if (u(e)) {
    var n;
    return (0, l.Ps)(null == (n = t.party) ? true : n.id)
  }
  returnfalse
}

function _(e, t) {
  return !!((0, i.Z)(t) && d(e)) && e.extra.media_title === t.details
}

function h(e, t) {
  let n = e.filter(o.kr);
  return t.type === s.IIU.PLAYING ? n.filter(a.dX).find(e => f(e, t)) : t.type === s.IIU.LISTENING ? n.filter(a.dU).find(e => p(e, t)) : t.type === s.IIU.WATCHING ? e.filter(a.y0).find(e => _(e, t)) : true
}