/** Chunk was on 87916 **/
/** chunk id: 248067, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  g: () => i
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./65821.js");
var Chunk652215 = require("./652215.js");
let s = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function i(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: a
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(s)) throw Error("Unexpected Tenor GIF path.");
  let i = "".concat(n.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(a).concat(i)
}