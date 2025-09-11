/** Chunk was on web.js **/
/** chunk id: 685138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk427164 = require("./427164.js");
let a = new Date(Date.UTC(2025, 8, 6)),
  o = (0, Chunk427164.le)({
    name: "2025-09-quest-brand-color-removal-phase-2",
    kind: "user",
    defaultConfig: {
      enabled: false,
      status: true
    },
    variations: {
      0: {
        enabled: false,
        status: true
      },
      1: {
        enabled: true,
        status: {
          progressBlur: true,
          label1: false,
          label2: false,
          shineWipe: true
        }
      },
      2: {
        enabled: true,
        status: {
          progressBlur: false,
          label1: true,
          label2: false,
          shineWipe: false
        }
      },
      3: {
        enabled: true,
        status: {
          progressBlur: false,
          label1: false,
          label2: true,
          shineWipe: false
        }
      },
      4: {
        enabled: true,
        status: {
          progressBlur: false,
          label1: false,
          label2: false,
          shineWipe: true
        }
      }
    }
  });

function s(e) {
  let {
    questConfig: t,
    location: n
  } = e, i = r.useMemo(() => new Date(t.startsAt), [t.startsAt]) >= a, s = o.useConfig({
    location: i ? n : "NONE"
  });
  return s.enabled && i ? s : {
    enabled: false,
    status: true
  }
}