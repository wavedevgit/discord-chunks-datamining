/** Chunk was on web.js **/
/** chunk id: 859126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk19467 = require("./19467.js");
class i extends Chunk19467.w {
  constructor() {
    super()
  }
  isValid(e, t) {
    let n = t.text.trim();
    return n === e.text.trim() || ("may" !== n.toLowerCase() || e.text.substring(0, t.index).trim().match(/\b(in)$/i) ? !n.toLowerCase().endsWith("the second") || (e.text.substring(t.index + t.text.length).trim().length > 0 && e.debug(() => {
      console.log(`Removing unlikely result: ${t}`)
    }), false) : (e.debug(() => {
      console.log(`Removing unlikely result: ${t}`)
    }), false))
  }
}