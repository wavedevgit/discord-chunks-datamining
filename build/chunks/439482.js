/** Chunk was on web.js **/
/** chunk id: 439482, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => i
});
var Chunk304910 = require("./304910.js");

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 4e3;
  return new Promise(t => {
    let n = setTimeout(() => {
      t()
    }, e);
    (0, r.f)(() => {
      clearTimeout(n), t()
    })
  })
}