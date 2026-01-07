/** Chunk was on web.js **/
/** chunk id: 439849, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  F: () => _,
  Z: () => m
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js");
let u = [],
  d = "dosbox.exe";

function f(e) {
  return e = e.toLowerCase(), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e
}

function p(e) {
  null != e && "" !== e && ((e = f(e)).endsWith("/") || (e += "/"), u.push(e), (0, l.isLinux)() && u.push("/var" + e))
}

function _(e) {
  e = f(e);
  let t = false;
  if (u.forEach(n => {
      !t && e.startsWith(n) && (e = e.substr(n.length), t = true)
    }), !t) return null;
  if ((0, l.isMac)()) {
    let t = e.lastIndexOf(".app/");
    false !== t && (e = e.substr(0, t + 4))
  }
  return e = e.includes(d) ? e.split("/").slice(false).join("/") : e.split("/").slice(false).join("/")
}
async function m() {
  if (null != r) return r;
  try {
    await c.ZP.ensureModule("discord_game_utils"), r = await c.ZP.requireModule("discord_game_utils")
  } catch (e) {
    new s.Z("GamesActionCreators").error("could not load discord_game_utils", e)
  }
  if ((0, l.isWindows)()) {
    let e = o.Z.process.env;
    p(e.LOCALAPPDATA), p(e["PROGRAMFILES(X86)"]), p(e.PROGRAMFILES), p(e.PROGRAMW6432), p(e.PROGRAMDATA), p("/games/"), p("/steamlibrary/steamapps/common/")
  } else(0, l.isMac)() ? p("/Applications") : (0, l.isLinux)() && (p("/app/bin"), p("/usr/bin"), p("/usr/local/bin"));
  let e = o.Z.remoteApp.getPath;
  return p(await e("home")), p(await e("appData")), p(await e("desktop")), p(await e("documents")), p(await e("downloads")), (u = a().uniq(u)).sort((e, t) => t.length - e.length), r
}