/** Chunk was on web.js **/
/** chunk id: 257683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => i
});
var Chunk570140 = require("./570140.js");

function i(e) {
  let {
    messageId: t,
    coverImageURL: n
  } = e;
  r.Z.dispatch({
    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
    messageId: t,
    coverImageURL: n
  })
}