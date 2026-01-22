/** Chunk was on web.js **/
/** chunk id: 730846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk360345 = require("./360345.js");
let i = RegExp(`^\\s*(${Chunk360345.fp})`, "i"),
  a = 1;
class s {
  refine(e, t) {
    return t.forEach(function(t) {
      if (!t.start.isDateWithUnknownYear()) return;
      let n = e.text.substring(t.index + t.text.length),
        s = i.exec(n);
      if (!s || s[0].trim().length <= 3) return;
      e.debug(() => {
        console.log(`Extracting year: '${s[0]}' into : ${t}`)
      });
      let o = (0, r.zL)(s[a]);
      null != t.end && t.end.assign("year", o), t.start.assign("year", o), t.text += s[0]
    }), t
  }
}