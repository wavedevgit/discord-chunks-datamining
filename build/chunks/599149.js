/** Chunk was on web.js **/
/** chunk id: 599149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KM: () => o
});
var Chunk569504 = require("./569504.js");
let i = "⁨",
  a = "⁩";

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t && !r.Y.getConfig({
    location: "isolateForNotification"
  }).isolateMentionsInNotifications ? e : i + e + a
}