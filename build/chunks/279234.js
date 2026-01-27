/** Chunk was on web.js **/
/** chunk id: 279234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => f,
  x: () => p
});
var Chunk118356 = require("./118356.js"),
  Chunk31436 = require("./31436.js");
let a = null,
  o = new Chunk118356.Vy("libdiscore");

function s(e) {
  o.error(e)
}

function l(e) {
  o.warn(e)
}

function c(e) {
  o.info(e)
}

function u(e) {
  o.verbose(e)
}

function d(e) {
  o.trace(e)
}

function f() {
  return null == a && (a = (async () => {
    await i.Bf();
    let e = i.vZ();
    e.installLogCallback(s, l, c, u, d), await e.initLibdiscore(), window._libdiscoreInitialized = true
  })()), a
}

function p() {
  returntrue === window._libdiscoreInitialized
}