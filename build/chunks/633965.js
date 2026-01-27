/** Chunk was on web.js **/
/** chunk id: 633965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ei: () => o,
  Ld: () => s,
  pc: () => a,
  u9: () => i
});
let r = (0, require("./353640.js").v)(e => ({}));

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