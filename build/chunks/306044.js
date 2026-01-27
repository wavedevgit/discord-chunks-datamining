/** Chunk was on web.js **/
/** chunk id: 306044, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => h,
  v: () => _
}), require("./747238.js"), require("./812715.js"), require("./321073.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk77729 = require("./77729.js"),
  Chunk626584 = require("./626584.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");
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
async function h() {
  if (null != r) return r;
  try {
    await c.Ay.ensureModule("discord_game_utils"), r = await c.Ay.requireModule("discord_game_utils")
  } catch (e) {
    new s.A("GamesActionCreators").error("could not load discord_game_utils", e)
  }
  if ((0, l.isWindows)()) {
    let e = o.A.process.env;
    p(e.LOCALAPPDATA), p(e["PROGRAMFILES(X86)"]), p(e.PROGRAMFILES), p(e.PROGRAMW6432), p(e.PROGRAMDATA), p("/games/"), p("/steamlibrary/steamapps/common/")
  } else(0, l.isMac)() ? p("/Applications") : (0, l.isLinux)() && (p("/app/bin"), p("/usr/bin"), p("/usr/local/bin"));
  let e = o.A.remoteApp.getPath;
  return p(await e("home")), p(await e("appData")), p(await e("desktop")), p(await e("documents")), p(await e("downloads")), (u = a().uniq(u)).sort((e, t) => t.length - e.length), r
}