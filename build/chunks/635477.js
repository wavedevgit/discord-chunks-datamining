/** Chunk was on web.js **/
/** chunk id: 635477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => o,
  Z: () => s
});
var Chunk729594 = require("./729594.js"),
  Chunk981631 = require("./981631.js");
let a = "music.apple.com";

function o(e) {
  return e === a
}

function s(e) {
  var t;
  if (null == e.url || (null == (t = e.provider) ? true : t.name) !== "Apple Music" || e.type !== i.hBH.ARTICLE && e.type !== i.hBH.LINK) returnfalse;
  try {
    let t = r.parse(e.url, true).host;
    return o(t)
  } catch (e) {
    returnfalse
  }
}