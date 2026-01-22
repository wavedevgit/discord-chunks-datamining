/** Chunk was on web.js **/
/** chunk id: 216184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 500,
  u = new(a())({
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
class f extends(r = Chunk311907.Ay.Store) {
  getCoverImageURL(e) {
    let {
      messageId: t
    } = e;
    return u.get(t)
  }
}
l(f, "displayName", "MessageActivityInviteCoverImageStore");
let p = new f(Chunk73153.h, {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: d
})