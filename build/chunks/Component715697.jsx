/** Chunk was on 53937 **/
/** chunk id: 715697, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk210887 = require("./210887.js"),
  Chunk635477 = require("./635477.js"),
  Chunk902692 = require("./902692.js"),
  Chunk781452 = require("./781452.js");

function m(e) {
  var l, t;
  let {
    className: n,
    embed: {
      url: m
    }
  } = e, p = (0, a.e7)([d.Z], () => (0, o.wj)(d.Z.theme));
  if (null == m) return null;
  let g = null,
    b = null,
    f = null;
  try {
    let e = s.parse(m, true);
    g = e.host, b = e.pathname, f = null != (t = e.query.i) ? t : null, Array.isArray(f) && (f = f[0])
  } catch (e) {
    return null
  }
  if (!(0, u.L)(g) || null == b) return null;
  let v = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(b) ? 2 : 1,
    y = null == (l = b.split("/")[v]) ? true : l.toLowerCase();
  null != f && (y = "song");
  let x = 450;
  return "song" === y ? x = 175 : "music-video" === y && (x = 371), b = b.substr(1), (0, r.jsx)("iframe", {
    className: i()(c.embedAppleMusic, n),
    src: h.P.EMBED(b, p ? "dark" : "light", f),
    style: {
      maxWidth: 660,
      minWidth: 300,
      width: "100%",
      height: x
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
    allow: "encrypted-media *; fullscreen *; clipboard-write"
  })
}