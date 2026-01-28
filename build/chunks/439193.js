/** Chunk was on 87916 **/
/** chunk id: 439193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => l
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./65821.js");
var Chunk652215 = require("./652215.js");
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
  s = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
  r = new Set(["static.klipy.com"]);

function l(e) {
  let t = new URL("".concat(window.location.protocol).concat(e));
  if (s.has(t.hostname)) {
    let {
      ASSET_ENDPOINT: e
    } = window.GLOBAL_ENV;
    if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
    let n = "".concat(a.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
    return "".concat(location.protocol).concat(e).concat(n)
  }
  return function(e) {
    let {
      hostname: t
    } = e;
    return "giphy.com" === t || t.endsWith(".giphy.com")
  }(t) || r.has(t.hostname), "https://".concat(t.hostname).concat(t.pathname).concat(t.search)
}