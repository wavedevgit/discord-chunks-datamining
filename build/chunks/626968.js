/** Chunk was on web.js **/
/** chunk id: 626968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a
});
var Chunk924557 = require("./924557.js"),
  Chunk597796 = require("./597796.js");

function a() {
  return [{
    type: "voiceChannel",
    name: "ml-audio-classification",
    isEnabled: Chunk924557.NS,
    importHandler: () => require.e("87955").then(require.bind(require, 230304))
  }, {
    type: "voiceChannel",
    name: "distributed-clipping",
    isEnabled: Chunk924557.NS,
    importHandler: () => require.e("7279").then(require.bind(require, 549379))
  }, {
    type: "application",
    name: "steam-timeline",
    isEnabled: Chunk924557.NS,
    importHandler: () => require.e("49947").then(require.bind(require, 656791))
  }, {
    type: "application",
    name: "league-of-legends",
    applicationId: Chunk597796.D,
    isEnabled: Chunk924557.NS,
    importHandler: () => require.e("92521").then(require.bind(require, 33806))
  }]
}