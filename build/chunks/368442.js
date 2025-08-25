/** Chunk was on web.js **/
/** chunk id: 368442, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PK: () => l,
  tu: () => f,
  xJ: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979651 = require("./979651.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js");

function l(e) {
  let t = c(e);
  return (0, r.e7)([o.Z], () => o.Z.hasVideo(e), [e]) || t
}

function c(e) {
  return (0, r.e7)([a.Z], () => null != a.Z.getMutableParticipants(e, s.pV.SPEAKER).find(e => e.type === s.Ui.STREAM), [e])
}

function u(e) {
  return d(e) || o.Z.hasVideo(e)
}

function d(e) {
  return null != a.Z.getMutableParticipants(e, s.pV.SPEAKER).find(e => e.type === s.Ui.STREAM)
}

function f(e) {
  var t;
  let n = i.Z.getGuild(e);
  return null != n && (null != (t = null == n ? true : n.maxStageVideoChannelUsers) ? t : 0) > 0
}