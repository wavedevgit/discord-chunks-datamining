/** Chunk was on 13140 **/
/** chunk id: 21825, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk113570 = require("./113570.jsx"),
  Chunk482641 = require("./482641.jsx"),
  Chunk613725 = require("./613725.jsx"),
  Chunk350707 = require("./350707.jsx");
let s = Object.freeze({
    "voice-conversations": {
      popoutPosition: "right",
      highPriority: true,
      textAlign: Chunk350707.iu.CENTER,
      media: () => (0, Chunk951288.jsx)(Chunk482641.Z, {})
    },
    "writing-messages": {
      popoutPosition: "top",
      highPriority: true,
      textAlign: Chunk350707.iu.CENTER,
      spacing: 10,
      media: () => (0, Chunk951288.jsx)(Chunk613725.Z, {})
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
      textAlign: Chunk350707.iu.CENTER,
      spacing: 8,
      media: () => (0, Chunk951288.jsx)(Chunk113570.Z, {})
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
  c = e => e in s ? s[e] : null