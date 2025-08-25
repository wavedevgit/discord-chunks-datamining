/** Chunk was on web.js **/
/** chunk id: 988348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => s,
  N: () => o
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk998502 = require("./998502.js");
let i = null;

function o() {
  return null == i && (i = a()), i
}

function a() {
  if (null == window.DiscordNative || true === window.Uint8Array || true === window.TextDecoder) returnfalse;
  try {
    let e = Chunk998502.ZP.requireModule("discord_zstd");
    if (null == module) returnfalse;
    returntrue
  } catch (e) {
    if (module.message.includes("Cannot find")) return Chunk998502.ZP.ensureModule("discord_zstd").catch(e => {}), false;
    throw module
  }
}

function s() {
  if (!o()) return;
  let {
    createContext: e
  } = Chunk998502.ZP.requireModule("discord_zstd");
  return module()
}