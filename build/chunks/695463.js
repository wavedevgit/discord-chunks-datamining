/** Chunk was on web.js **/
/** chunk id: 695463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-08-data-usage-3p-toggle",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false
    },
    1: {
      enabled: true
    }
  }
});

function i(e) {
  let {
    enabled: t
  } = r.useConfig({
    location: e
  });
  return t
}