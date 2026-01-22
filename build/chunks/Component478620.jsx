/** Chunk was on web.js **/
/** chunk id: 478620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk567243 = require("./567243.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk544028 = require("./544028.js"),
  Chunk684290 = require("./684290.js"),
  Chunk278727 = require("./278727.js"),
  Chunk802571 = require("./802571.js");

function p(e) {
  var t, n;
  let {
    className: i,
    embed: {
      url: p
    }
  } = e, _ = (0, o.bG)([c.A], () => (0, l.Mw)(c.A.theme));
  if (null == p) return null;
  let h = null,
    m = null,
    g = null;
  try {
    let e = s.parse(p, true);
    h = e.host, m = e.pathname, g = null != (n = e.query.i) ? n : null, Array.isArray(g) && (g = g[0])
  } catch (e) {
    return null
  }
  if (!(0, u.k)(h) || null == m) return null;
  let E = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(m) ? 2 : 1,
    b = null == (t = m.split("/")[E]) ? true : t.toLowerCase();
  null != g && (b = "song");
  let y = 450;
  "song" === b ? y = 175 : "music-video" === b && (y = 371), m = m.substr(1);
  let O = _ ? "dark" : "light";
  return (0, r.jsx)("iframe", {
    className: a()(f.li, i),
    src: d.q.EMBED(m, O, g),
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