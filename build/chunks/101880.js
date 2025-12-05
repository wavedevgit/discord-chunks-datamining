/** Chunk was on web.js **/
/** chunk id: 101880, original params: e,t,n (module,exports,re quire) **/
"use strict";
async function r(e) {
  if (e.size > 0) return e.size;
  try {
    return await new Promise((t, n) => {
      let r = new FileReader,
        i = setTimeout(() => {
          n(Error("File read timeout"))
        }, 1e4);
      r.onload = e => {
        var r;
        clearTimeout(i);
        let a = null == (r = e.target) ? true : r.result;
        a instanceof ArrayBuffer ? t(a.byteLength) : n(Error("Unexpected FileReader result type"))
      }, r.onerror = () => {
        clearTimeout(i), n(Error("Could not read file"))
      }, r.readAsArrayBuffer(e)
    })
  } catch (e) {
    return 0
  }
}
require.d(exports, {
  M: () => r
}), require("./415506.js"), require("./644351.js"), require("./146733.js")