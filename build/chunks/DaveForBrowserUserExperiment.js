/** Chunk was on web.js **/
/** chunk id: 529558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a,
  m: () => i
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2023-08_secure_frames_encryption",
    label: "Allowing testing DAVE protocol for voice/video",
    defaultConfig: {
      protocolVersionFloor: 0,
      canSupportDaveProtocol: false
    },
    treatments: [{
      id: 11,
      label: "Can support DAVE protocol version 1 and above",
      config: {
        protocolVersionFloor: 1,
        canSupportDaveProtocol: true
      }
    }]
  }),
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_dave_for_browser",
    label: "Allowing testing DAVE protocol for browser",
    defaultConfig: {
      loadWasmModule: false,
      useWasmModule: false
    },
    treatments: [{
      id: 1,
      label: "Load only",
      config: {
        loadWasmModule: true,
        useWasmModule: false
      }
    }, {
      id: 2,
      label: "Enable",
      config: {
        loadWasmModule: true,
        useWasmModule: true
      }
    }]
  })