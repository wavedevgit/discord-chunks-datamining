/** Chunk was on web.js **/
/** chunk id: 913663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk703558 = require("./703558.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {},
  c = {};

function u(e) {
  let {
    channelId: t,
    sticker: n,
    draftType: r
  } = e;
  (r === a.d.FirstThreadMessage ? c : l)[t] = [n]
}

function d(e) {
  let {
    channelId: t,
    draftType: n
  } = e, r = n === a.d.FirstThreadMessage ? c : l;
  null != r[t] && delete r[t]
}

function f() {
  l = {}, c = {}
}
class p extends(r = Chunk442837.ZP.Store) {
  getStickerPreview(e, t) {
    return (t === a.d.FirstThreadMessage ? c : l)[e]
  }
}
s(p, "displayName", "StickerMessagePreviewStore");
let _ = new p(Chunk570140.Z, {
  ADD_STICKER_PREVIEW: u,
  CLEAR_STICKER_PREVIEW: d,
  LOGOUT: f
})