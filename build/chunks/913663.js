/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => _
});
var r, i = n(442837),
  o = n(570140),
  a = n(703558);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
class p extends(r = i.ZP.Store) {
  getStickerPreview(e, t) {
    return (t === a.d.FirstThreadMessage ? c : l)[e]
  }
}
s(p, "displayName", "StickerMessagePreviewStore");
let _ = new p(o.Z, {
  ADD_STICKER_PREVIEW: u,
  CLEAR_STICKER_PREVIEW: d,
  LOGOUT: f
})