/** Chunk was on web.js **/
/** chunk id: 931664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk31717 = require("./31717.js");

function o(e, t, n) {
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
  (r === s.C.FirstThreadMessage ? c : l)[t] = [n]
}

function d(e) {
  let {
    channelId: t,
    draftType: n
  } = e, r = n === s.C.FirstThreadMessage ? c : l;
  null != r[t] && delete r[t]
}

function f() {
  l = {}, c = {}
}
class p extends(r = Chunk311907.Ay.Store) {
  getStickerPreview(e, t) {
    return (t === s.C.FirstThreadMessage ? c : l)[e]
  }
}
o(p, "displayName", "StickerMessagePreviewStore");
let _ = new p(Chunk73153.h, {
  ADD_STICKER_PREVIEW: u,
  CLEAR_STICKER_PREVIEW: d,
  LOGOUT: f
})