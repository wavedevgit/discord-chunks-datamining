/** Chunk was on web.js **/
/** chunk id: 661543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => i
});
var Chunk570140 = require("./570140.js");

function i(e) {
  let {
    image: t,
    file: n,
    uploadType: i,
    guildId: a,
    analyticsSource: o,
    isTryItOut: s = false
  } = e;
  r.Z.dispatch({
    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
    image: t,
    file: n,
    uploadType: i,
    guildId: a,
    analyticsSource: o,
    isTryItOut: s
  })
}