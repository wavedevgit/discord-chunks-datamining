/** Chunk was on web.js **/
/** chunk id: 751823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a,
  L: () => i
});
var Chunk987170 = require("./987170.js");
let i = (0, Chunk987170.Z)({
    kind: "user",
    id: "2025-07_avholdout",
    label: "AV Holdout - H2 2025",
    defaultConfig: {
      isInHoldout: false
    },
    treatments: [{
      id: 1,
      label: "Enables the holdout experiment",
      config: {
        isInHoldout: true
      }
    }]
  }),
  a = (0, Chunk987170.Z)({
    kind: "user",
    id: "2025-12_avholdout__mirror",
    label: "AV Holdout - H2 2025",
    defaultConfig: {
      isInHoldout: false
    },
    treatments: [{
      id: 1,
      label: "Enables the holdout experiment",
      config: {
        isInHoldout: true
      }
    }]
  })