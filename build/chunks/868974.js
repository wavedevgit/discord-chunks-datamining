/** Chunk was on web.js **/
/** chunk id: 868974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  s: () => a
});
let r = (0, require("./945810.js").mj)({
  name: "2025-05-search-results-feedback",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    1: {
      enabled: true
    }
  }
});

function i(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.useConfig({
    location: t
  });
  return n
}

function a(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.getConfig({
    location: t
  });
  return n
}