/** Chunk was on web.js **/
/** chunk id: 883794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => c
});
var Chunk427164 = require("./427164.js"),
  Chunk751823 = require("./751823.js");
let a = {
    useAGC2: true,
    enableAnalog: false,
    enableDigital: true,
    headroom_db: 5,
    max_gain_db: 50,
    initial_gain_db: 15,
    max_gain_change_db_per_second: 6,
    max_output_noise_level_dbfs: false,
    fixed_gain_db: 0
  },
  o = (0, Chunk427164.le)({
    kind: "user",
    name: "2025-09-agc2-v2",
    defaultConfig: {
      noiseCancellationDuringProcessing: false,
      noiseCancellationConfig: {
        useAGC2: false
      }
    },
    variations: {
      1: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: {
          useAGC2: false
        }
      },
      2: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .5
      },
      3: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .7
      },
      4: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .8
      },
      5: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .9
      },
      6: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .95
      }
    }
  }),
  s = (0, Chunk427164.le)({
    kind: "user",
    name: "2025-12-agc2-v2--mirror",
    defaultConfig: {
      noiseCancellationDuringProcessing: false,
      noiseCancellationConfig: {
        useAGC2: false
      }
    },
    variations: {
      1: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: {
          useAGC2: false
        }
      },
      2: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .5
      },
      3: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .7
      },
      4: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .8
      },
      5: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .9
      },
      6: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .95
      }
    }
  }),
  l = (0, Chunk427164.le)({
    kind: "user",
    name: "2025-12-agc2-v2--shadow",
    defaultConfig: {
      noiseCancellationDuringProcessing: false,
      noiseCancellationConfig: {
        useAGC2: false
      }
    },
    variations: {
      1: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: {
          useAGC2: false
        }
      },
      2: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .5
      },
      3: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .7
      },
      4: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .8
      },
      5: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .9
      },
      6: {
        noiseCancellationDuringProcessing: true,
        noiseCancellationConfig: a,
        vadKrispActivationThreshold: .95
      }
    }
  });

function c(e) {
  let {
    location: t,
    disable: n = false
  } = e;
  u({
    location: t,
    disable: n
  });
  let {
    isInHoldout: r
  } = i.L.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  return r || n ? o.definition.defaultConfig : o.getConfig({
    location: t
  })
}

function u(e) {
  let {
    location: t,
    disable: n = false
  } = e, {
    isInHoldout: r
  } = i.C.getCurrentConfig({
    location: t
  }, {
    disable: n,
    autoTrackExposure: true
  });
  l.getConfig({
    location: t
  }), r || n || s.getConfig({
    location: t
  })
}