/** Chunk was on web.js **/
/** chunk id: 182501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kr: () => s
});
var Chunk987170 = require("./987170.js"),
  Chunk722733 = require("./722733.js");
let o = (0, Chunk987170.Z)({
    id: "2025-07_gif_picker_delay",
    kind: "user",
    label: "GIF Picker Delay",
    defaultConfig: {
      enabled: false,
      delayMs: 0,
      inExperiment: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false,
        delayMs: 0,
        inExperiment: true
      }
    }, {
      id: 1,
      label: "Delay 100 ms",
      config: {
        enabled: true,
        delayMs: 100,
        inExperiment: true
      }
    }, {
      id: 2,
      label: "Delay 200 ms",
      config: {
        enabled: true,
        delayMs: 200,
        inExperiment: true
      }
    }, {
      id: 3,
      label: "Control (overlap)",
      config: {
        enabled: false,
        delayMs: 0,
        inExperiment: true
      }
    }, {
      id: 4,
      label: "Delay 100 ms (overlap)",
      config: {
        enabled: true,
        delayMs: 100,
        inExperiment: true
      }
    }, {
      id: 5,
      label: "Delay 200 ms (overlap)",
      config: {
        enabled: true,
        delayMs: 200,
        inExperiment: true
      }
    }]
  }),
  a = (0, Chunk722733.Z)({
    name: "2025-07-gif-picker-delay",
    kind: "user",
    defaultConfig: {
      enabled: false,
      delayMs: 0,
      inExperiment: false
    },
    variations: {
      0: {
        enabled: false,
        delayMs: 0,
        inExperiment: true
      },
      1: {
        enabled: true,
        delayMs: 100,
        inExperiment: true
      },
      2: {
        enabled: true,
        delayMs: 200,
        inExperiment: true
      },
      3: {
        enabled: false,
        delayMs: 0,
        inExperiment: true
      },
      4: {
        enabled: true,
        delayMs: 100,
        inExperiment: true
      },
      5: {
        enabled: true,
        delayMs: 200,
        inExperiment: true
      }
    }
  }),
  s = e => {
    let {
      enabled: t,
      delayMs: n,
      inExperiment: r
    } = o.getCurrentConfig({
      location: e
    }), {
      enabled: i,
      delayMs: s,
      inExperiment: l
    } = a.getConfig({
      location: e
    });
    return r ? {
      enabled: t,
      delayMs: n,
      inExperiment: true
    } : {
      enabled: i,
      delayMs: s,
      inExperiment: l
    }
  }