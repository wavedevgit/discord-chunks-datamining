/** Chunk was on web.js **/
/** chunk id: 83971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CU: () => d,
  F3: () => u,
  SU: () => _,
  fp: () => f,
  nU: () => h,
  qb: () => p
}), require("./896048.js");
var Chunk205327 = require("./205327.js"),
  Chunk541806 = require("./541806.js"),
  Chunk20805 = require("./20805.js"),
  Chunk583846 = require("./583846.js"),
  Chunk652215 = require("./652215.js"),
  Chunk272984 = require("./272984.js"),
  Chunk278086 = require("./278086.js");

function u(e) {
  if ((0, a.Tq)(e)) {
    var t, n;
    return (null == (n = e.extra.entries[0]) || null == (t = n.media) ? true : t.provider) === r.X.SPOTIFY
  }
  return !!(0, a.p6)(e) && e.extra.media.provider === r.X.SPOTIFY
}

function d(e) {
  return !!(0, a.Lf)(e) && e.extra.application_id === c.ex
}

function f(e, t) {
  let n = e.extra;
  return null != n && ("application_id" in t && t.application_id === n.application_id || ("game_name" in n ? t.name === n.game_name : "activity_name" in n && t.name === n.activity_name))
}

function p(e, t) {
  if (u(e)) {
    var n;
    return (0, l.pH)(null == (n = t.party) ? true : n.id)
  }
  returnfalse
}

function _(e, t) {
  return !!((0, i.A)(t) && d(e)) && e.extra.media_title === t.details
}

function h(e, t) {
  let n = e.filter(o.JM);
  return t.type === s.$pd.PLAYING ? n.filter(a.zD).find(e => f(e, t)) : t.type === s.$pd.LISTENING ? n.filter(a.Tq).find(e => p(e, t)) : t.type === s.$pd.WATCHING ? e.filter(a.Lf).find(e => _(e, t)) : true
}