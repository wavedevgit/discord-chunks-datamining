/** Chunk was on web.js **/
/** chunk id: 88658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $6: () => p,
  QB: () => h,
  YK: () => c,
  _o: () => d,
  bL: () => _,
  gl: () => u,
  rr: () => f
}), require("./388685.js");
var Chunk367907 = require("./367907.js"),
  Chunk695346 = require("./695346.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");
require("./388032.jsx");
let l = 864e5 * Chunk981631.eBq;

function c() {
  let e = Chunk695346.h2.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != o.Z.getGuild(e))), new Set(module)
}

function u() {
  let e = Chunk695346.zA.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != o.Z.getGuild(e))), new Set(module)
}

function d() {
  let e = Chunk695346.SE.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != o.Z.getGuild(e))), new Set(module)
}

function f() {
  let e = Chunk695346.iH.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != o.Z.getGuild(e))), new Set(module)
}

function _(e) {
  return (e & s.HGf) === s.HGf ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS
  }
}

function p(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && l > Date.now() - new Date(e.created_at).getTime()
}

function h(e) {
  let {
    destinationPane: t,
    originPane: n,
    source: i,
    subsection: a,
    locationStack: o,
    applicationId: l
  } = e;
  r.ZP.trackWithMetadata(s.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "user",
    origin_pane: n,
    destination_pane: t,
    location_stack: o,
    source: i,
    subsection: a,
    application_id: l
  })
}