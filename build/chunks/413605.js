/** Chunk was on web.js **/
/** chunk id: 413605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P1: () => d,
  TY: () => c,
  Tx: () => s,
  VR: () => f,
  W6: () => l,
  wx: () => a.wx
}), require("./997431.js");
var Chunk924301 = require("./924301.js"),
  Chunk131704 = require("./131704.js"),
  Chunk245335 = require("./245335.js");

function o(e) {
  return e.type === a.wx.GROUP_DM || null != e.channel && (0, i.bc)(e.channel.type)
}

function s(e) {
  let t = e.guild_scheduled_event;
  return null != t && (0, r.Ld)(t)
}

function l(e) {
  return e.target_type === a.Iq.ROLE_SUBSCRIPTIONS_PURCHASE
}

function c(e) {
  return e.target_type === a.Iq.STREAM && null != e.target_user
}

function u(e) {
  return e.type === a.wx.FRIEND || null == e.guild && null != e.inviter
}

function d(e) {
  return e.target_type === a.Iq.EMBEDDED_APPLICATION
}

function f(e) {
  return "number" == typeof e.type ? e.type : o(e) ? a.wx.GROUP_DM : u(e) ? a.wx.FRIEND : a.wx.GUILD
}