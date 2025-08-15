/** Chunk was on 31978 **/
/** chunk id: 479398, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  o: () => l
});
let r = (0, require("./818083.js").B)({
  id: "2025-04_native_markdown",
  kind: "user",
  label: "Native Markdown",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 0,
    label: "Disabled",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function l(e) {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  })
}