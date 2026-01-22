/** Chunk was on web.js **/
/** chunk id: 113783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E5: () => o,
  J2: () => c,
  uy: () => u,
  zy: () => l
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk996439 = require("./996439.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js");

function o(e, t) {
  let [n] = (0, r.bG)([a.A], () => [a.A.getMutableParticipants(e, t), a.A.getParticipantsVersion(e)], [e, t], i.D);
  return n
}

function l(e, t) {
  return (0, r.bG)([a.A], () => a.A.getParticipantCount(e, t), [e, t])
}

function c(e) {
  let [t] = (0, r.bG)([a.A], () => [a.A.getMutableRequestToSpeakParticipants(e), a.A.getRequestToSpeakParticipantsVersion(e)], [e], i.D);
  return t
}

function u(e) {
  return (0, r.bG)([a.A], () => a.A.getMutableParticipants(e, s.ip.SPEAKER).filter(e => e.type === s.wY.VOICE).length, [e])
}