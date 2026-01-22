/** Chunk was on web.js **/
/** chunk id: 994322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  F: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk87001 = require("./87001.js"),
  Chunk641376 = require("./641376.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let {
    location: t,
    options: n
  } = e, r = l(), {
    showKeybindIndicators: i
  } = a.A.useExperiment({
    location: t
  }, n);
  return i && r
}

function l() {
  return !(0, r.bG)([i.A], () => i.A.getWindowVisible(s.MLl.ACTIVITY_POPOUT))
}