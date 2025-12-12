/** Chunk was on web.js **/
/** chunk id: 139212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk31775 = require("./31775.js"),
  o = require.n(Chunk31775),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 500,
  u = new(o())({
    max: c
  });

function d(e) {
  let {
    messageId: t,
    coverImageURL: n
  } = e;
  if (u.get(t) === n) returnfalse;
  u.set(t, n)
}
class f extends(r = Chunk442837.ZP.Store) {
  getCoverImageURL(e) {
    let {
      messageId: t
    } = e;
    return u.get(t)
  }
}
l(f, "displayName", "MessageActivityInviteCoverImageStore");
let p = new f(Chunk570140.Z, {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: d
})