/** Chunk was on web.js **/
/** chunk id: 509929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Si: () => s,
  a$: () => c,
  sm: () => l
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk565150 = require("./565150.js"),
  Chunk292348 = require("./292348.js");

function s(e, t) {
  var n;
  i()(e.item.platform === a.xz.WEB, "Upload must be in the Web format");
  let r = (0, o.OW)(e, t);
  return Promise.resolve({
    file: e.item.file,
    name: null != (n = r.filename) ? n : ""
  })
}
async function l(e) {}

function c(e) {
  returnfalse
}