/** Chunk was on web.js **/
/** chunk id: 267378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o,
  ex: () => a,
  f1: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk945810 = require("./945810.js");
let a = (0, Chunk600975.C)({
    kind: "user",
    id: "2023-08_secure_frames_encryption",
    label: "Allowing testing DAVE protocol for voice/video",
    defaultConfig: {
      protocolVersionFloor: 1,
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
  s = (0, Chunk600975.C)({
    kind: "user",
    id: "2025-06_dave_for_browser",
    label: "Allowing testing DAVE protocol for browser",
    defaultConfig: {
      loadWasmModule: false,
      useWasmModule: false,
      preload: false
    },
    treatments: [{
      id: 1,
      label: "Load only",
      config: {
        loadWasmModule: true,
        useWasmModule: false,
        preload: false
      }
    }, {
      id: 2,
      label: "Enable",
      config: {
        loadWasmModule: true,
        useWasmModule: true,
        preload: false
      }
    }, {
      id: 3,
      label: "Preload",
      config: {
        loadWasmModule: true,
        useWasmModule: true,
        preload: true
      }
    }]
  }),
  o = (0, Chunk945810.mj)({
    kind: "user",
    name: "2025-11-dave-opt-in",
    defaultConfig: {
      allowOptIn: false
    },
    variations: {
      1: {
        allowOptIn: true
      }
    }
  })