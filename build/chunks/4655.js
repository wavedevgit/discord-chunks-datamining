/** Chunk was on web.js **/
/** chunk id: 4655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s,
  y: () => a
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk837921 = require("./837921.js");
let i = null;

function a() {
  return null == i && (i = o()), i
}

function o() {
  if (null == window.DiscordNative || true === window.Uint8Array || true === window.TextDecoder) returnfalse;
  try {
    let e = r.Ay.requireModule("discord_zstd");
    if (null == e) returnfalse;
    returntrue
  } catch (e) {
    if (e.message.includes("Cannot find")) return r.Ay.ensureModule("discord_zstd").catch(e => {}), false;
    throw e
  }
}

function s() {
  if (!a()) return;
  let {
    createContext: e
  } = r.Ay.requireModule("discord_zstd");
  return e()
}