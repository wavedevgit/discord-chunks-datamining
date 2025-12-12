/** Chunk was on web.js **/
/** chunk id: 359110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kh: () => p,
  ad: () => _,
  jd: () => m
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk727429 = require("./727429.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

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
  let n = l.Z.getChannel(e);
  if (null == n) return;
  let r = (0, s.e)(n);
  o.Z.preload(n.guild_id, n.id), (0, c.uL)(u.Z5c.CHANNEL(r, n.id), f({
    openChannel: true
  }, t)), (null == t ? true : t.openTextInVoiceIfVoiceChannel) && n.isGuildVocal() && a.Z.updateChatOpen(n.id, true)
}

function _(e, t) {
  i()(null != e.parent_id, "Thread must have a parent ID.");
  let n = (0, s.e)(e);
  (0, c.uL)(u.Z5c.CHANNEL(n, e.id), f({
    openChannel: true
  }, t))
}

function m(e, t, n) {
  let r = l.Z.getChannel(e);
  if (null == r) return;
  let i = (0, s.e)(r);
  (0, c.uL)(u.Z5c.CHANNEL(i, r.id, t), f({
    openChannel: true
  }, n))
}