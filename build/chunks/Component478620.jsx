/** Chunk was on 40396 **/
/** chunk id: 478620, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk567243 = require("./567243.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk544028 = require("./544028.js"),
  Chunk684290 = require("./684290.js"),
  Chunk278727 = require("./278727.js"),
  Chunk802571 = require("./802571.js");

function p(e) {
  var l, t;
  let {
    className: n,
    embed: {
      url: p
    }
  } = e, m = (0, a.bG)([u.A], () => (0, o.Mw)(u.A.theme));
  if (null == p) return null;
  let g = null,
    f = null,
    y = null;
  try {
    let e = s.parse(p, true);
    g = e.host, f = e.pathname, y = null != (t = e.query.i) ? t : null, Array.isArray(y) && (y = y[0])
  } catch (e) {
    return null
  }
  if (!(0, d.k)(g) || null == f) return null;
  let b = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(f) ? 2 : 1,
    v = null == (l = f.split("/")[b]) ? true : l.toLowerCase();
  null != y && (v = "song");
  let w = 450;
  return "song" === v ? w = 175 : "music-video" === v && (w = 371), f = f.substr(1), (0, r.jsx)("iframe", {
    className: i()(h.li, n),
    src: c.q.EMBED(f, m ? "dark" : "light", y),
    style: {
      maxWidth: 660,
      minWidth: 300,
      width: "100%",
      height: w
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
    allow: "encrypted-media *; fullscreen *; clipboard-write"
  })
}