/** Chunk was on web.js **/
/** chunk id: 794760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
});
var r, Chunk782013 = require("./782013.js"),
  Chunk647438 = require("./647438.js");
let o = null != (r = Chunk647438.useInsertionEffect) ? r : Chunk782013.b;

function s(e) {
  let t = (0, a.useRef)(null);
  return o(() => {
    t.current = e
  }, [e]), (0, a.useCallback)((...e) => {
    let n = t.current;
    return null == n ? true : n(...e)
  }, [])
}