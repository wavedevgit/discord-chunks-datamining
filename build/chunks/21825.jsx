/** Chunk was on web.js **/
/** chunk id: 21825, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk997638 = require("./997638.js"),
  Chunk113570 = require("./113570.js"),
  Chunk482641 = require("./482641.js"),
  Chunk613725 = require("./613725.js");
let l = Object.freeze({
    "voice-conversations": {
      popoutPosition: "right",
      highPriority: true,
      textAlign: Chunk997638.iu.CENTER,
      media: () => <Chunk482641.Z />
    },
    "writing-messages": {
      popoutPosition: "top",
      highPriority: true,
      textAlign: Chunk997638.iu.CENTER,
      spacing: 10,
      media: () => <Chunk613725.Z />
    },
    "direct-messages": {
      popoutPosition: "right"
    },
    "create-first-server": {
      popoutPosition: "right",
      highPriority: true
    },
    "organize-by-topic": {
      popoutPosition: "right",
      textAlign: Chunk997638.iu.CENTER,
      spacing: 8,
      media: () => <Chunk113570.Z />
    },
    "instant-invite": {
      popoutPosition: "right",
      spacing: 24,
      highPriority: true
    },
    "whos-online": {
      spacing: 16,
      popoutPosition: "left"
    },
    "server-settings": {
      popoutPosition: "bottom",
      spacing: 10
    },
    "friends-list": {
      spacing: 8,
      popoutPosition: "right"
    },
    "create-more-servers": {
      spacing: 8,
      popoutPosition: "right"
    }
  }),
  c = e => e in l ? l[e] : null