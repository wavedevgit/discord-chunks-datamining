/** Chunk was on web.js **/
/** chunk id: 31456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk234096 = require("./234096.jsx"),
  Chunk540604 = require("./540604.jsx"),
  Chunk369790 = require("./369790.jsx"),
  Chunk244083 = require("./244083.jsx");
let l = Object.freeze({
    "voice-conversations": {
      popoutPosition: "right",
      highPriority: true,
      textAlign: Chunk244083.YL.CENTER,
      media: () => (0, r.jsx)(a.A, {})
    },
    "writing-messages": {
      popoutPosition: "top",
      highPriority: true,
      textAlign: Chunk244083.YL.CENTER,
      spacing: 10,
      media: () => (0, r.jsx)(o.A, {})
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
      textAlign: Chunk244083.YL.CENTER,
      spacing: 8,
      media: () => (0, r.jsx)(i.A, {})
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