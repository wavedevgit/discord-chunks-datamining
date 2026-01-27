/** Chunk was on web.js **/
/** chunk id: 766864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X9: () => i,
  YK: () => u,
  aY: () => c,
  vB: () => l,
  zZ: () => s
});
var Chunk250105 = require("./250105.js"),
  i = function(e) {
    return e.OLDEST_CREATION_DATE = "oldest_creation_date", e.TOP_SOUNDS = "top_sounds", e.NEWEST_CREATION_DATE = "newest_creation_date", e.RECENTLY_USED_BY_USER = "recently_used_by_user", e.METRICS_CAPTURE = "metrics_capture", e
  }({});
let a = (0, Chunk250105.Ay)({
  name: "2025-10-soundboard-xp-3",
  kind: "user",
  defaultConfig: {
    sortingStrategy: "oldest_creation_date"
  },
  variations: {
    0: {
      sortingStrategy: "oldest_creation_date"
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

function o(e) {
  return a.getConfig({
    location: e
  })
}

function s(e) {
  return a.useConfig({
    location: e
  })
}

function l(e) {
  return "top_sounds" === o(e).sortingStrategy
}

function c(e) {
  return "metrics_capture" === o(e).sortingStrategy
}

function u(e) {
  return "recently_used_by_user" === o(e).sortingStrategy
}