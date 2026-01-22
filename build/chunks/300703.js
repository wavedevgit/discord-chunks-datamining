/** Chunk was on web.js **/
/** chunk id: 300703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  V: () => l
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk838677 = require("./838677.js"),
  Chunk486020 = require("./486020.js"),
  Chunk998304 = require("./998304.js"),
  Chunk515718 = require("./515718.js"),
  Chunk791059 = require("./791059.js");
let l = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

function c(e) {
  if (l.has(e)) return "";
  try {
    let t = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
    return n(256628)("./".concat(r.A.convert.toCodePoint(t), ".svg"))
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
  t = null != n ? i.Ay.getEmojiURL({
    id: n,
    size: 32,
    animated: false
  }) : c(r);
  let o = await (0, s.S4)(t);
  return null == o ? true : o.map(e => {
    let [t, n, r] = e;
    return (0, a.Ob)(t, n, r)
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
  getURL: Chunk791059.A.makeMemoizer(c),
  filterUnsupportedEmojis: u,
  applyPlatformToThemedEmojiColorPalette: d,
  getEmojiColors: f,
  triggerFullscreenAnimation: p
}