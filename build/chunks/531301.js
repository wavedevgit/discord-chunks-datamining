/** Chunk was on web.js **/
/** chunk id: 531301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./321073.js");
var Chunk7584 = require("./7584.js");

function i(e) {
  let t = [];
  return e.forEach(e => {
    let n = r.Ay.getByName(e);
    if (null != n && (t.push({
        src: n.url,
        colorize: false
      }), n.hasDiversity))
      for (let e in n.diversityChildren) {
        let r = n.diversityChildren[e];
        t.push({
          src: r.url,
          colorize: false
        })
      }
  }), t
}