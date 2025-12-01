/** Chunk was on web.js **/
/** chunk id: 715697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk210887 = require("./210887.js"),
  Chunk635477 = require("./635477.js"),
  Chunk902692 = require("./902692.js"),
  Chunk781452 = require("./781452.js");

function p(e) {
  var t, n;
  let {
    className: i,
    embed: {
      url: p
    }
  } = e, _ = (0, s.e7)([c.Z], () => (0, l.wj)(c.Z.theme));
  if (null == p) return null;
  let m = null,
    h = null,
    g = null;
  try {
    let e = o.parse(p, true);
    m = e.host, h = e.pathname, g = null != (n = e.query.i) ? n : null, Array.isArray(g) && (g = g[0])
  } catch (e) {
    return null
  }
  if (!(0, u.L)(m) || null == h) return null;
  let E = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(h) ? 2 : 1,
    b = null == (t = h.split("/")[E]) ? true : t.toLowerCase();
  null != g && (b = "song");
  let y = 450;
  "song" === b ? y = 175 : "music-video" === b && (y = 371), h = h.substr(1);
  let O = _ ? "dark" : "light";
  return (0, r.jsx)("iframe", {
    className: a()(f.embedAppleMusic, i),
    src: d.P.EMBED(h, O, g),
    style: {
      maxWidth: 660,
      minWidth: 300,
      width: "100%",
      height: y
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
    allow: "encrypted-media *; fullscreen *; clipboard-write"
  })
}