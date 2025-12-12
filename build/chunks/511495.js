/** Chunk was on web.js **/
/** chunk id: 511495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => p,
  e: () => f
});
var Chunk579092 = require("./579092.js"),
  Chunk128813 = require("./128813.js");
let o = null,
  a = new Chunk579092.Yd("libdiscore");

function s(e) {
  a.error(e)
}

function l(e) {
  a.warn(e)
}

function c(e) {
  a.info(e)
}

function u(e) {
  a.verbose(e)
}

function d(e) {
  a.trace(e)
}

function f() {
  return null == o && (o = (async () => {
    await Chunk128813.mX();
    let e = Chunk128813.Qw();
    module.installLogCallback(s, l, c, u, d), await module.initLibdiscore()
  })()), o
}

function p() {
  return true !== window._libdiscoreWasm
}