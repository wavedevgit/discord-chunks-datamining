/** Chunk was on web.js **/
/** chunk id: 959462, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s
});
var r, Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");
let o = null != (r = Chunk64700.useInsertionEffect) ? r : Chunk3388.N;

function s(e) {
  let t = (0, a.useRef)(null);
  return o(() => {
    t.current = e
  }, [e]), (0, a.useCallback)((...e) => {
    let n = t.current;
    return null == n ? true : n(...e)
  }, [])
}