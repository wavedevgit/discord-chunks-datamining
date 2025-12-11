/** Chunk was on 72891 **/
/** chunk id: 58384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => o
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./415506.js");
var Chunk981631 = require("./981631.js");
let a = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function o(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: n
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(a)) throw Error("Unexpected Tenor GIF path.");
  let o = "".concat(i.ANM.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(n).concat(o)
}