/** Chunk was on web.js **/
/** chunk id: 431328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fd: () => c,
  Io: () => u,
  Rk: () => l,
  w8: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk136015 = require("./136015.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js");

function s(e, t) {
  let [n] = (0, r.e7)([o.Z], () => [o.Z.getMutableParticipants(e, t), o.Z.getParticipantsVersion(e)], [e, t], i.Q);
  return n
}

function l(e, t) {
  return (0, r.e7)([o.Z], () => o.Z.getParticipantCount(e, t), [e, t])
}

function c(e) {
  let [t] = (0, r.e7)([o.Z], () => [o.Z.getMutableRequestToSpeakParticipants(e), o.Z.getRequestToSpeakParticipantsVersion(e)], [e], i.Q);
  return t
}

function u(e) {
  return (0, r.e7)([o.Z], () => o.Z.getMutableParticipants(e, a.pV.SPEAKER).filter(e => e.type === a.Ui.VOICE).length, [e])
}