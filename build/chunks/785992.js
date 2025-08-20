/** Chunk was on web.js **/
/** chunk id: 785992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => o,
  Z: () => s
});
var Chunk729594 = require("./729594.js"),
  Chunk981631 = require("./981631.js");
let a = "open.spotify.com";

function o(e) {
  return null != e && e === a
}

function s(e) {
  var t;
  if (null == e.url || (null == (t = e.provider) ? true : t.name) !== "Spotify" || e.type !== i.hBH.LINK) returnfalse;
  try {
    let t = r.parse(e.url, true).host;
    return o(t)
  } catch (e) {
    returnfalse
  }
}