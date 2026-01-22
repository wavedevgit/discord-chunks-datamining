/** Chunk was on web.js **/
/** chunk id: 96566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bw: () => f,
  qT: () => l,
  xn: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk977997 = require("./977997.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js");

function l(e) {
  let t = c(e);
  return (0, r.bG)([a.A], () => a.A.hasVideo(e), [e]) || t
}

function c(e) {
  return (0, r.bG)([s.A], () => null != s.A.getMutableParticipants(e, o.ip.SPEAKER).find(e => e.type === o.wY.STREAM), [e])
}

function u(e) {
  return d(e) || a.A.hasVideo(e)
}

function d(e) {
  return null != s.A.getMutableParticipants(e, o.ip.SPEAKER).find(e => e.type === o.wY.STREAM)
}

function f(e) {
  var t;
  let n = i.A.getGuild(e);
  return null != n && (null != (t = null == n ? true : n.maxStageVideoChannelUsers) ? t : 0) > 0
}