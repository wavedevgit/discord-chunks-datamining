/** Chunk was on web.js **/
/** chunk id: 126382, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => i,
  D: () => o
});
var Chunk427164 = require("./427164.js"),
  i = function(e) {
    return e.Control = "control", e.NoSoftwareDecode = "no_software_decode", e.Disabled = "disabled", e
  }({});
let a = (0, Chunk427164.le)({
  name: "2025-11-h265-no-software",
  kind: "user",
  defaultConfig: {
    treatment: "control"
  },
  variations: {
    1: {
      treatment: "no_software_decode"
    },
    2: {
      treatment: "disabled"
    }
  }
});

function o(e) {
  let {
    location: t
  } = e;
  return a.getConfig({
    location: t
  })
}