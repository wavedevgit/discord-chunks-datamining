/** Chunk was on web.js **/
/** chunk id: 88658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $6: () => m,
  Aj: () => g,
  QB: () => h,
  YK: () => u,
  _o: () => f,
  bL: () => _,
  gl: () => d,
  rr: () => p
}), require("./388685.js");
var Chunk367907 = require("./367907.js"),
  Chunk695346 = require("./695346.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
require("./388032.jsx");
let c = 864e5 * Chunk981631.eBq;

function u() {
  let e = i.h2.getSetting();
  return 0 === a.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function d() {
  let e = i.zA.getSetting();
  return 0 === a.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function f() {
  let e = i.SE.getSetting();
  return 0 === a.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function p() {
  let e = i.iH.getSetting();
  return 0 === a.Z.totalUnavailableGuilds && (e = e.filter(e => null != o.Z.getGuild(e))), new Set(e)
}

function _(e) {
  return (e & l.HGf) === l.HGf ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS
  }
}

function m(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}

function h(e) {
  let {
    destinationPane: t,
    originPane: n,
    source: i,
    subsection: a,
    locationStack: o,
    applicationId: s
  } = e;
  r.ZP.trackWithMetadata(l.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "user",
    origin_pane: n,
    destination_pane: t,
    location_stack: o,
    source: i,
    subsection: a,
    application_id: s
  })
}

function g(e) {
  s.S.dispatch(l.CkL.SHAKE_SETTINGS_MODAL, e)
}