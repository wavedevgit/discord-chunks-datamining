/** Chunk was on web.js **/
/** chunk id: 511495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => p,
  e: () => f
});
var Chunk579092 = require("./579092.js"),
  Chunk128813 = require("./128813.js");
let a = null,
  o = new Chunk579092.Yd("libdiscore");

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
    await i.mX();
    let e = i.Qw();
    e.installLogCallback(s, l, c, u, d), await e.initLibdiscore()
  })()), a
}

function p() {
  return true !== window._libdiscoreWasm
}