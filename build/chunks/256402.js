/** Chunk was on web.js **/
/** chunk id: 256402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
});
var r, Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");
let a = null != (r = Chunk647438.useInsertionEffect) ? r : Chunk955817.b;

function s(e) {
  let t = (0, o.useRef)(null);
  return a(() => {
    t.current = e
  }, [e]), (0, o.useCallback)((...e) => {
    let n = t.current;
    return null == n ? true : n(...e)
  }, [])
}