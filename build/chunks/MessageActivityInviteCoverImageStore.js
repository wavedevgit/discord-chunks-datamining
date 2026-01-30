/** Chunk was on 64935 **/
/** chunk id: 216184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var r, i, Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let c = new(a())({
  max: 500
});
class u extends(i = Chunk311907.Ay.Store) {
  getCoverImageURL(e) {
    let {
      messageId: t
    } = e;
    return c.get(t)
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "MessageActivityInviteCoverImageStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "MessageActivityInviteCoverImageStore";
let d = new u(Chunk73153.h, {
  SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function(e) {
    let {
      messageId: t,
      coverImageURL: n
    } = e;
    if (c.get(t) === n) returnfalse;
    c.set(t, n)
  }
})