/** Chunk was on web.js **/
/** chunk id: 113544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q5: () => o,
  QW: () => s,
  z5: () => a,
  zb: () => i
});
let r = (0, require("./121168.js").U)(e => ({}));

function i(e) {
  r.setState({
    getVisibleGuildIds: e
  })
}

function a() {
  return r.getState().getVisibleGuildIds
}

function o(e) {
  r.setState({
    getVisibleChannelIds: e
  })
}

function s() {
  return r.getState().getVisibleChannelIds
}