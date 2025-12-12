/** Chunk was on web.js **/
/** chunk id: 563114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => l,
  Z: () => _
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk336317 = require("./336317.js"),
  Chunk768581 = require("./768581.js"),
  Chunk302221 = require("./302221.js"),
  Chunk956664 = require("./956664.js"),
  Chunk753090 = require("./753090.js");
let l = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

function c(e) {
  if (l.has(e)) return "";
  try {
    let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
    return n(723080)("./".concat(r.Z.convert.toCodePoint(t), ".svg"))
  } catch (t) {
    return console.warn(t, "no emoji for", e), ""
  }
}

function u(e) {
  return e
}

function d(e) {
  let {
    palette: t,
    shouldProcessMobileColors: n = false
  } = e;
  return t
}
async function f(e) {
  let t, {
    id: n,
    name: r
  } = e;
  t = null != n ? i.ZP.getEmojiURL({
    id: n,
    size: 32,
    animated: false
  }) : c(r);
  let s = await (0, o.OF)(t);
  return null == s ? true : s.map(e => {
    let [t, n, r] = e;
    return (0, a.vq)(t, n, r)
  })
}

function p(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: r
  } = e
}
let _ = {
  getURL: Chunk753090.Z.makeMemoizer(c),
  filterUnsupportedEmojis: u,
  applyPlatformToThemedEmojiColorPalette: d,
  getEmojiColors: f,
  triggerFullscreenAnimation: p
}