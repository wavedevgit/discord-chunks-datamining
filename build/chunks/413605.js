/** Chunk was on web.js **/
/** chunk id: 413605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $P: () => c,
  P1: () => f,
  TY: () => u,
  Tx: () => s,
  VR: () => _,
  W6: () => l,
  wx: () => Chunk245335.wx
}), require("./749958.js"), require("./997431.js");
var Chunk924301 = require("./924301.js"),
  Chunk131704 = require("./131704.js"),
  Chunk245335 = require("./245335.js");

function a(e) {
  return e.type === o.wx.GROUP_DM || null != e.channel && (0, i.bc)(e.channel.type)
}

function s(e) {
  let t = e.guild_scheduled_event;
  return null != t && (0, r.Ld)(t)
}

function l(e) {
  return e.target_type === o.Iq.ROLE_SUBSCRIPTIONS_PURCHASE
}

function c(e) {
  return null != e.channel && null != e.stage_instance
}

function u(e) {
  return e.target_type === o.Iq.STREAM && null != e.target_user
}

function d(e) {
  return e.type === o.wx.FRIEND || null == e.guild && null != e.inviter
}

function f(e) {
  return e.target_type === o.Iq.EMBEDDED_APPLICATION
}

function _(e) {
  return "number" == typeof e.type ? e.type : a(e) ? o.wx.GROUP_DM : d(e) ? o.wx.FRIEND : o.wx.GUILD
}