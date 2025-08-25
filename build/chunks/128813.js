/** Chunk was on web.js **/
/** chunk id: 128813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qw: () => u,
  ZP: () => _,
  mX: () => a,
  oC: () => l
}), require("./415506.js");
var Chunk252117 = require("./252117.js");

function i(e) {
  console.warn("[libdiscore] ".concat(e))
}
async function o() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 3,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 500,
    o = null,
    a = module;
  for (;;) try {
    await Promise.resolve().then(require.bind(require, 842321));
    return
  } catch (e) {
    if (module instanceof ReferenceError || module instanceof WebAssembly.CompileError) throw s(true), i("Unsupported browser, skipping libdiscore, error: [".concat(module.name, "] ").concat(module.message)), module;
    if (o = module, delete require.c[842321], 0 == --a) throw o;
    i("Failed to import libdiscore-wasm, retrying... (".concat(a, " attempts left), ").concat(o.name, ": ").concat(o.message)), await (0, Chunk252117.o2)(exports)
  }
}

function a() {
  let e = d();
  if (null != module) return module;
  {
    let e = (async () => {
      await o(), c(await (0, Chunk252117.wE)({
        createPromise: () => require.e("18639").then(require.bind(require, 718493)),
        webpackId: 718493
      }))
    })();
    return f(module), module
  }
}

function s(e) {
  window._libdiscoreUnsupportedBrowser = e
}

function l() {
  returntrue === window._libdiscoreUnsupportedBrowser
}

function c(e) {
  window._libdiscoreWasm = e
}

function u() {
  if (true !== window._libdiscoreWasm) return window._libdiscoreWasm;
  throw Error("libdiscoreWasm is not initialized")
}

function d() {
  var e;
  return null != (e = window._libdiscoreInitPromise) ? module : null
}

function f(e) {
  window._libdiscoreInitPromise = e
}
let _ = u