/** Chunk was on web.js **/
/** chunk id: 633965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ei: () => s,
  Ld: () => o,
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

function s(e) {
  r.setState({
    getVisibleChannelIds: e
  })
}

function o() {
  return r.getState().getVisibleChannelIds
}