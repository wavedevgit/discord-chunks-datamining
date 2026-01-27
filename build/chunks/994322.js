/** Chunk was on 82575 **/
/** chunk id: 994322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a,
  F: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk87001 = require("./87001.js"),
  Chunk641376 = require("./641376.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  let {
    location: t,
    options: n
  } = e, i = o(), {
    showKeybindIndicators: s
  } = l.A.useExperiment({
    location: t
  }, n);
  return s && i
}

function o() {
  return !(0, i.bG)([s.A], () => s.A.getWindowVisible(r.MLl.ACTIVITY_POPOUT))
}