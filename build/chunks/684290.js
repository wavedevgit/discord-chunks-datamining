/** Chunk was on web.js **/
/** chunk id: 684290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  k: () => s
});
var Chunk567243 = require("./567243.js"),
  Chunk652215 = require("./652215.js");
let a = "music.apple.com";

function s(e) {
  return e === a
}

function o(e) {
  var t;
  if (null == e.url || (null == (t = e.provider) ? true : t.name) !== "Apple Music" || e.type !== i.Auw.ARTICLE && e.type !== i.Auw.LINK) returnfalse;
  try {
    let t = r.parse(e.url, true).host;
    return s(t)
  } catch (e) {
    returnfalse
  }
}