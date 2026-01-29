/** Chunk was on web.js **/
/** chunk id: 134047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => r,
  T: () => i
});
let r = (0, require("./250105.js").Ay)({
  kind: "user",
  name: "2025-11-auto-open-tiv",
  defaultConfig: {
    collectAnalytics: false,
    autoOpenTIV: false,
    autoNavigateChannel: false
  },
  variations: {
    0: {
      collectAnalytics: true,
      autoOpenTIV: false,
      autoNavigateChannel: false
    },
    1: {
      collectAnalytics: true,
      autoOpenTIV: true,
      autoNavigateChannel: false
    },
    2: {
      collectAnalytics: true,
      autoOpenTIV: true,
      autoNavigateChannel: true
    },
    3: {
      collectAnalytics: true,
      autoOpenTIV: false,
      autoNavigateChannel: true
    }
  }
});

function i(e) {
  let {
    channel: t,
    location: n
  } = e, {
    autoOpenTIV: i
  } = r.useConfig({
    location: n
  });
  return null != t && !!t.isGuildVocal() && i
}