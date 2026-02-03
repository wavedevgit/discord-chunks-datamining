/** Chunk was on web.js **/
/** chunk id: 621963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => i
});
let r = (0, require("./945810.js").mj)({
  name: "2026-02-go-live-hdr",
  kind: "user",
  defaultConfig: {
    hdrCaptureMode: "never"
  },
  variations: {
    1: {
      hdrCaptureMode: "always"
    },
    2: {
      hdrCaptureMode: "permittedDevicesOnly"
    }
  }
});

function i(e) {
  let {
    location: t
  } = e;
  return r.getConfig({
    location: t
  })
}