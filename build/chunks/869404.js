/** Chunk was on web.js **/
/** chunk id: 869404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IO: () => d,
  h3: () => u,
  k1: () => a,
  tU: () => c
}), require("./388685.js");
var Chunk709054 = require("./709054.js"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js");

function a(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.Z, o.Z];
  return l(s(e).filter(e => {
    let [, r] = e;
    return !t.isMessageRequest(r.id) && !n.isSpam(r.id)
  }))
}

function s(e) {
  return r.default.keys(e).map(t => [t, e[t]])
}

function l(e) {
  return Array.from(e).reduce((e, t) => {
    let [n, r] = t;
    return Object.assign(e, {
      [n]: r
    })
  }, {})
}

function c(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.Z, o.Z];
  return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
}

function u(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.Z, o.Z];
  return t.isMessageRequest(e) || n.isSpam(e)
}

function d() {
  let [e, t] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [Chunk355298.Z, Chunk333984.Z], n = exports.getSpamChannelsCount();
  return module.getMessageRequestsCount() > 0 || require > 0
}