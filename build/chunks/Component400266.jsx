/** Chunk was on 53937 **/
/** chunk id: 400266, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk785992 = require("./785992.js"),
  Chunk616922 = require("./616922.js"),
  Chunk781452 = require("./781452.js");

function u(e) {
  let {
    className: l,
    embed: {
      url: t
    }
  } = e;
  if (null == t) return null;
  let n = null,
    u = null;
  try {
    let e = s.parse(t.replace(/intl-[^/]+\//, ""), true);
    n = e.host, u = e.pathname
  } catch (e) {
    return null
  }
  if (!(0, a.E)(n) || null == u) return null;
  let h = u.split("/"),
    c = null != h[1] ? h[1].toLowerCase() : null,
    m = null != h[3] ? h[3].toLowerCase() : null,
    p = h[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != c ? c : "") || "user" === c && "playlist" !== m) return null;
  "user" === c && "playlist" === m && null != p && (u = "/playlist/".concat(p));
  let g = 352;
  return "track" === c ? g = 80 : ("episode" === c || "show" === c) && (g = 232), (0, r.jsx)("iframe", {
    className: i()(d.embedSpotify, l),
    src: o.C7.EMBED(u),
    style: {
      maxWidth: 400,
      minWidth: 300,
      width: "100%",
      height: g
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
    allow: "clipboard-write"
  })
}