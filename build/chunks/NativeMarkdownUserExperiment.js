/** Chunk was on web.js **/
/** chunk id: 536048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => i
});
let r = (0, require("./600975.js").C)({
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

function i(e) {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  })
}