/** Chunk was on web.js **/
/** chunk id: 198435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk684758 = require("./684758.js");
let i = RegExp(`^\\s*(${Chunk684758.H6})`, "i"),
  o = 1;
class a {
  refine(e, t) {
    return t.forEach(function(t) {
      if (!t.start.isDateWithUnknownYear()) return;
      let n = e.text.substring(t.index + t.text.length),
        a = i.exec(n);
      if (!a || a[0].trim().length <= 3) return;
      e.debug(() => {
        console.log(`Extracting year: '${a[0]}' into : ${t}`)
      });
      let s = (0, r.SH)(a[o]);
      null != t.end && t.end.assign("year", s), t.start.assign("year", s), t.text += a[0]
    }), t
  }
}