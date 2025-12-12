/** Chunk was on web.js **/
/** chunk id: 510990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jf: () => s,
  V_: () => l,
  fr: () => c
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk476326 = require("./476326.js"),
  Chunk861990 = require("./861990.js");

function s(e, t) {
  var n;
  i()(e.item.platform === o.ow.WEB, "Upload must be in the Web format");
  let r = (0, a.B)(e, t);
  return Promise.resolve({
    file: e.item.file,
    name: null != (n = r.filename) ? n : ""
  })
}
async function l(e) {}

function c(e) {
  returnfalse
}