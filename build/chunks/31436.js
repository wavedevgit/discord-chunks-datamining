/** Chunk was on web.js **/
/** chunk id: 31436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  Bf: () => o,
  vZ: () => c
}), require("./65821.js");
var Chunk841117 = require("./841117.js");

function i(e) {
  console.warn("[libdiscore] ".concat(e))
}
async function a() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 3,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 500,
    a = null,
    o = e;
  for (;;) try {
    await Promise.resolve().then(n.bind(n, 5426));
    return
  } catch (e) {
    if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError) throw s(true), i("Unsupported browser, skipping libdiscore, error: [".concat(e.name, "] ").concat(e.message)), e;
    if (a = e, delete n.c[5426], 0 == --o) throw a;
    i("Failed to import libdiscore-wasm, retrying... (".concat(o, " attempts left), ").concat(a.name, ": ").concat(a.message)), await (0, r.eU)(t)
  }
}

function o() {
  let e = u();
  if (null != e) return e;
  {
    let e = (async () => {
      await a(), l(await (0, r.sq)({
        createPromise: () => n.e("14575").then(n.bind(n, 811059)),
        webpackId: 811059
      }))
    })();
    return d(e), e
  }
}

function s(e) {
  window._libdiscoreUnsupportedBrowser = e
}

function l(e) {
  window._libdiscoreWasm = e
}

function c() {
  if (true !== window._libdiscoreWasm) return window._libdiscoreWasm;
  throw Error("libdiscoreWasm is not initialized")
}

function u() {
  var e;
  return null != (e = window._libdiscoreInitPromise) ? e : null
}

function d(e) {
  window._libdiscoreInitPromise = e
}
let f = c