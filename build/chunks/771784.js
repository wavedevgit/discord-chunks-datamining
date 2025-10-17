/** Chunk was on web.js **/
/** chunk id: 771784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cI: () => o,
  q3: () => a,
  sI: () => s
});
let r = (0, require("./722733.js").Z)({
  name: "2025-10-soundboard-xp-3",
  kind: "user",
  defaultConfig: {
    sortingStrategy: "control"
  },
  variations: {
    0: {
      sortingStrategy: "control"
    },
    1: {
      sortingStrategy: "top_sounds"
    },
    2: {
      sortingStrategy: "newest_creation_date"
    },
    3: {
      sortingStrategy: "recently_used_by_user"
    },
    4: {
      sortingStrategy: "metrics_capture"
    }
  }
});

function i(e) {
  return r.getConfig({
    location: e
  })
}

function a(e) {
  return r.useConfig({
    location: e
  })
}

function o(e) {
  return "top_sounds" === i(e).sortingStrategy
}

function s(e) {
  return "metrics_capture" === i(e).sortingStrategy
}