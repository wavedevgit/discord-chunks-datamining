/** Chunk was on web.js **/
/** chunk id: 670470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2023-10_viewer_clipping",
  label: "Test viewer side clipping",
  defaultConfig: {
    enableViewerClipping: false,
    ignoreSenderPreference: false
  },
  treatments: [{
    id: 1,
    label: "Viewer Clipping enabled",
    config: {
      enableViewerClipping: true,
      ignoreSenderPreference: false
    }
  }, {
    id: 2,
    label: "Viewer Clipping enabled; For developer testing",
    config: {
      enableViewerClipping: true,
      ignoreSenderPreference: true
    }
  }]
})