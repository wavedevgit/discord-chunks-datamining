/** Chunk was on web.js **/
/** chunk id: 483942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => O,
  De: () => d,
  Eo: () => h,
  Fe: () => I,
  I1: () => m,
  J9: () => c,
  Jg: () => T,
  L$: () => s,
  OP: () => R,
  Pv: () => f,
  Qj: () => p,
  d3: () => C,
  f5: () => u,
  f7: () => v,
  kF: () => E,
  kS: () => b,
  l2: () => o,
  lE: () => g,
  mq: () => l,
  nS: () => N,
  oK: () => P,
  ur: () => _,
  xs: () => A,
  yR: () => y,
  zk: () => S
});
var Chunk722733 = require("./722733.js"),
  Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__connectionopen__simple",
    kind: "user",
    label: "Apex AA Validation Connection Open Simple",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  s = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__connectionopen__hqdtesters",
    kind: "user",
    label: "Apex AA Validation Connection Open HQDTesters",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  l = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__connectionopen__android",
    kind: "user",
    label: "Apex AA Validation Connection Open Android Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  c = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__connectionopen__ios",
    kind: "user",
    label: "Apex AA Validation Connection Open iOS Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  u = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__connectionopen__userlocale",
    kind: "user",
    label: "Apex AA Validation Connection Open User Locale",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  d = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__connectionopen__usercountry",
    kind: "user",
    label: "Apex AA Validation Connection Open User Country",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
  }),
  f = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__voicecall__simple",
    kind: "user",
    label: "Apex AA Validation Voice Call Simple",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL
  }),
  _ = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__voicecall__hqdtesters",
    kind: "user",
    label: "Apex AA Validation Voice Call HQDTesters",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL
  }),
  p = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__voicecall__android",
    kind: "user",
    label: "Apex AA Validation Voice Call Android Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL
  }),
  h = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__voicecall__ios",
    kind: "user",
    label: "Apex AA Validation Voice Call iOS Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL
  }),
  m = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__voicecall__userlocale",
    kind: "user",
    label: "Apex AA Validation Voice Call User Locale",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL
  }),
  g = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__voicecall__usercountry",
    kind: "user",
    label: "Apex AA Validation Voice Call User Country",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL
  }),
  E = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__paymentflowstarted__simple",
    kind: "user",
    label: "Apex AA Validation Payment Flow Started Simple",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.PAYMENT_FLOW_STARTED
  }),
  b = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__paymentflowstarted__hqdtesters",
    kind: "user",
    label: "Apex AA Validation Payment Flow Started HQDTesters",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.PAYMENT_FLOW_STARTED
  }),
  y = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__paymentflowstarted__android",
    kind: "user",
    label: "Apex AA Validation Payment Flow Started Android Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.PAYMENT_FLOW_STARTED
  }),
  O = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__paymentflowstarted__ios",
    kind: "user",
    label: "Apex AA Validation Payment Flow Started iOS Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.PAYMENT_FLOW_STARTED
  }),
  v = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__paymentflowstarted__userlocale",
    kind: "user",
    label: "Apex AA Validation Payment Flow Started User Locale",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.PAYMENT_FLOW_STARTED
  }),
  I = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__paymentflowstarted__usercountry",
    kind: "user",
    label: "Apex AA Validation Payment Flow Started User Country",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.PAYMENT_FLOW_STARTED
  }),
  T = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__collectiblesshopopen__simple",
    kind: "user",
    label: "Apex AA Validation Collectibles Shop Open Simple",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
  }),
  S = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__collectiblesshopopen__hqdtesters",
    kind: "user",
    label: "Apex AA Validation Collectibles Shop Open HQDTesters",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
  }),
  A = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__collectiblesshopopen__android",
    kind: "user",
    label: "Apex AA Validation Collectibles Shop Open Android Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
  }),
  C = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__collectiblesshopopen__ios",
    kind: "user",
    label: "Apex AA Validation Collectibles Shop Open iOS Only",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
  }),
  N = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__collectiblesshopopen__userlocale",
    kind: "user",
    label: "Apex AA Validation Collectibles Shop Open User Locale",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
  }),
  R = (0, Chunk987170.Z)({
    id: "2025-07_apex_aa_validation__clientside__collectiblesshopopen__usercountry",
    kind: "user",
    label: "Apex AA Validation Collectibles Shop Open User Country",
    defaultConfig: {
      isEnabled: false
    },
    treatments: [{
      id: 1,
      label: "AA test enabled. Noop on UI effect.",
      config: {
        isEnabled: true
      }
    }],
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
  });
(0, Chunk722733.Z)({
  name: "2025-07-apex-aa-validation--clientside--simple",
  kind: "user",
  defaultConfig: {
    isEnabled: false
  },
  variations: {
    0: {
      isEnabled: true
    }
  }
}), (0, Chunk722733.Z)({
  name: "2025-07-apex-aa-validation--clientside--hqdtesters",
  kind: "user",
  defaultConfig: {
    isEnabled: false
  },
  variations: {
    0: {
      isEnabled: true
    }
  }
}), (0, Chunk722733.Z)({
  name: "2025-07-apex-aa-validation--clientside--android",
  kind: "user",
  defaultConfig: {
    isEnabled: false
  },
  variations: {
    0: {
      isEnabled: true
    }
  }
}), (0, Chunk722733.Z)({
  name: "2025-07-apex-aa-validation--clientside--ios",
  kind: "user",
  defaultConfig: {
    isEnabled: false
  },
  variations: {
    0: {
      isEnabled: true
    }
  }
}), (0, Chunk722733.Z)({
  name: "2025-07-apex-aa-validation--clientside--userlocale",
  kind: "user",
  defaultConfig: {
    isEnabled: false
  },
  variations: {
    0: {
      isEnabled: true
    }
  }
}), (0, Chunk722733.Z)({
  name: "2025-07-apex-aa-validation--clientside--usercountry",
  kind: "user",
  defaultConfig: {
    isEnabled: false
  },
  variations: {
    0: {
      isEnabled: true
    }
  }
});
let P = (0, Chunk987170.Z)({
  id: "2025-07_apex_cluster_randomization_aa",
  kind: "user",
  label: "Apex Cluster Randomization AA",
  defaultConfig: {
    isEnabled: false
  },
  treatments: [{
    id: 1,
    label: "AA test enabled. Noop on UI effect.",
    config: {
      isEnabled: true
    }
  }],
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
})