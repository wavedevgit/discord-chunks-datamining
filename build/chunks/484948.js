/** Chunk was on web.js **/
/** chunk id: 484948, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
});
var r, Chunk159447 = require("./159447.js"),
  Chunk473749 = require("./473749.js");
let o = null != (r = Chunk473749.useInsertionEffect) ? r : Chunk159447.b;

function s(e) {
  let t = (0, a.useRef)(null);
  return o(() => {
    t.current = e
  }, [e]), (0, a.useCallback)((...e) => {
    let n = t.current;
    return null == n ? true : n(...e)
  }, [])
}