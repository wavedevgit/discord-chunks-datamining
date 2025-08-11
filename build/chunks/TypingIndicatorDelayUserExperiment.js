/** Chunk was on web.js **/
/** chunk id: 384278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M1: () => c,
  NM: () => l
});
var Chunk70956 = require("./70956.js"),
  Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk427164.le)({
    kind: "user",
    name: "2025-07-typing-indicator-delay",
    defaultConfig: {
      delayMs: 1.5 * Chunk70956.Z.Millis.SECOND,
      inExperiment: false
    },
    variations: {
      0: {
        delayMs: 1.5 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      },
      1: {
        delayMs: 2 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      },
      2: {
        delayMs: 3 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      },
      3: {
        delayMs: 1.5 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      },
      4: {
        delayMs: 2 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      },
      5: {
        delayMs: 3 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      }
    }
  }),
  l = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_typing_indicator_delay",
    label: "Typing Indicator Delay",
    defaultConfig: {
      delayMs: 1.5 * Chunk70956.Z.Millis.SECOND,
      inExperiment: false
    },
    treatments: [{
      id: 0,
      label: "1.5 second delay",
      config: {
        delayMs: 1.5 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      }
    }, {
      id: 1,
      label: "2 second delay",
      config: {
        delayMs: 2 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      }
    }, {
      id: 2,
      label: "3 second delay",
      config: {
        delayMs: 3 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      }
    }, {
      id: 3,
      label: "1.5 second delay (overlap)",
      config: {
        delayMs: 1.5 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      }
    }, {
      id: 4,
      label: "2 second delay (overlap)",
      config: {
        delayMs: 2 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      }
    }, {
      id: 5,
      label: "3 second delay (overlap)",
      config: {
        delayMs: 3 * Chunk70956.Z.Millis.SECOND,
        inExperiment: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  c = e => {
    let {
      delayMs: t,
      inExperiment: n
    } = l.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: true
    }), {
      delayMs: r,
      inExperiment: i
    } = s.getConfig({
      location: e
    });
    return n ? {
      delayMs: t,
      inExperiment: true
    } : {
      delayMs: r,
      inExperiment: i
    }
  }