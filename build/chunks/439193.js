/** Chunk was on 87916 **/
/** chunk id: 439193, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  s: () => l
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./65821.js");
var Chunk652215 = require("./652215.js");
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
  c = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
  o = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
  r = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
  s = new Set(["static.klipy.com"]);

function l(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: a
    } = window.GLOBAL_ENV;
  if (r.has(t.hostname)) {
    if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
    let e = "".concat(n.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
    return "".concat(location.protocol).concat(a).concat(e)
  }
  if (function(e) {
      let {
        hostname: t
      } = e;
      return "giphy.com" === t || t.endsWith(".giphy.com")
    }(t)) {
    if (null == t.pathname.match(c)) throw Error("Unexpected Giphy GIF path.");
    let e = "".concat(n.Rsh.GIPHY_ASSET_PATH).concat(t.pathname);
    return "".concat(location.protocol).concat(a).concat(e)
  }
  if (s.has(t.hostname)) {
    if (null == t.pathname.match(o)) throw Error("Unexpected Klipy GIF path.");
    let e = "".concat(n.Rsh.KLIPY_ASSET_PATH).concat(t.pathname);
    return "".concat(location.protocol).concat(a).concat(e)
  }
  return "https://".concat(t.hostname).concat(t.pathname).concat(t.search)
}