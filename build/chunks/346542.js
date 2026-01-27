/** Chunk was on web.js **/
/** chunk id: 346542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G4: () => c,
  On: () => f,
  Xd: () => a.Xd,
  d4: () => l,
  ly: () => s,
  oK: () => d
}), require("./107123.js");
var Chunk698441 = require("./698441.js"),
  Chunk95701 = require("./95701.js"),
  Chunk172799 = require("./172799.js");

function o(e) {
  return e.type === a.Xd.GROUP_DM || null != e.channel && (0, i.MK)(e.channel.type)
}

function s(e) {
  let t = e.guild_scheduled_event;
  return null != t && (0, r.d6)(t)
}

function l(e) {
  return e.target_type === a.yV.ROLE_SUBSCRIPTIONS_PURCHASE
}

function c(e) {
  return e.target_type === a.yV.STREAM && null != e.target_user
}

function u(e) {
  return e.type === a.Xd.FRIEND || null == e.guild && null != e.inviter
}

function d(e) {
  return e.target_type === a.yV.EMBEDDED_APPLICATION
}

function f(e) {
  return "number" == typeof e.type ? e.type : o(e) ? a.Xd.GROUP_DM : u(e) ? a.Xd.FRIEND : a.Xd.GUILD
}