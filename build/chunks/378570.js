/** Chunk was on web.js **/
/** chunk id: 378570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N9: () => _,
  ci: () => h,
  iN: () => p
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk308528 = require("./308528.js"),
  Chunk367513 = require("./367513.js"),
  Chunk584682 = require("./584682.js"),
  Chunk734057 = require("./734057.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  let n = l.A.getChannel(e);
  if (null == n) return;
  let r = (0, o.j)(n);
  a.A.preload(n.guild_id, n.id), (0, c.pX)(u.BVt.CHANNEL(r, n.id), f({
    openChannel: true
  }, t)), (null == t ? true : t.openTextInVoiceIfVoiceChannel) && n.isGuildVocal() && s.A.updateChatOpen(n.id, true)
}

function _(e, t) {
  i()(null != e.parent_id, "Thread must have a parent ID.");
  let n = (0, o.j)(e);
  (0, c.pX)(u.BVt.CHANNEL(n, e.id), f({
    openChannel: true
  }, t))
}

function h(e, t, n) {
  let r = l.A.getChannel(e);
  if (null == r) return;
  let i = (0, o.j)(r);
  (0, c.pX)(u.BVt.CHANNEL(i, r.id, t), f({
    openChannel: true
  }, n))
}