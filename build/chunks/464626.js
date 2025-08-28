/** Chunk was on web.js **/
/** chunk id: 464626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => o
});
var Chunk427164 = require("./427164.js");
let i = {
    enabled: false
  },
  a = (0, Chunk427164.le)({
    name: "2025-08-search-autocomplete-fetch-frecency",
    kind: "user",
    defaultConfig: i,
    variations: {
      1: {
        enabled: true
      }
    }
  });

function o(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = a.getConfig({
    location: t
  });
  return n
}