/** Chunk was on web.js **/
/** chunk id: 988348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => s,
  N: () => a
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk998502 = require("./998502.js");
let i = null;

function a() {
  return null == i && (i = o()), i
}

function o() {
  if (null == window.DiscordNative || true === window.Uint8Array || true === window.TextDecoder) returnfalse;
  try {
    let e = r.ZP.requireModule("discord_zstd");
    if (null == e) returnfalse;
    returntrue
  } catch (e) {
    if (e.message.includes("Cannot find")) return r.ZP.ensureModule("discord_zstd").catch(e => {}), false;
    throw e
  }
}

function s() {
  if (!a()) return;
  let {
    createContext: e
  } = r.ZP.requireModule("discord_zstd");
  return e()
}