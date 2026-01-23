/** Chunk was on 87916 **/
/** chunk id: 248067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => l
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./65821.js");
var Chunk652215 = require("./652215.js");
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function l(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: n
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
  let l = "".concat(a.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(n).concat(l)
}