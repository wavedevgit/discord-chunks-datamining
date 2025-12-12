/** Chunk was on web.js **/
/** chunk id: 113544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q5: () => a,
  QW: () => s,
  z5: () => o,
  zb: () => i
});
let r = (0, require("./663042.js").U)(e => ({}));

function i(e) {
  r.setState({
    getVisibleGuildIds: e
  })
}

function o() {
  return r.getState().getVisibleGuildIds
}

function a(e) {
  r.setState({
    getVisibleChannelIds: e
  })
}

function s() {
  return r.getState().getVisibleChannelIds
}