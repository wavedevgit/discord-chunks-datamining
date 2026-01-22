/** Chunk was on web.js **/
/** chunk id: 161666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk530560 = require("./530560.js");
class i extends Chunk530560.d {
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