/** Chunk was on web.js **/
/** chunk id: 198435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk684758 = require("./684758.js");
let i = RegExp(`^\\s*(${Chunk684758.H6})`, "i"),
  a = 1;
class o {
  refine(e, t) {
    return t.forEach(function(t) {
      if (!t.start.isDateWithUnknownYear()) return;
      let n = e.text.substring(t.index + t.text.length),
        o = i.exec(n);
      if (!o || o[0].trim().length <= 3) return;
      e.debug(() => {
        console.log(`Extracting year: '${o[0]}' into : ${t}`)
      });
      let s = (0, r.SH)(o[a]);
      null != t.end && t.end.assign("year", s), t.start.assign("year", s), t.text += o[0]
    }), t
  }
}