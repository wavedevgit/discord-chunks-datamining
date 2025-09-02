/** Chunk was on web.js **/
/** chunk id: 387332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y0: () => i
});
let r = (0, require("./427164.js").le)({
  kind: "user",
  name: "2025-08-sleepy-panda",
  defaultConfig: {
    isEnabled: true
  },
  variations: {
    1: {
      isEnabled: false
    }
  }
});

function i(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  }).isEnabled
}