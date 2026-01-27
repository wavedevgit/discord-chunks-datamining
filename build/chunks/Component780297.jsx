/** Chunk was on 40396 **/
/** chunk id: 780297, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk567243 = require("./567243.js"),
  Chunk644119 = require("./644119.js"),
  Chunk272984 = require("./272984.js"),
  Chunk802571 = require("./802571.js");

function d(e) {
  let {
    className: l,
    embed: {
      url: t
    }
  } = e;
  if (null == t) return null;
  let n = null,
    d = null;
  try {
    let e = s.parse(t.replace(/intl-[^/]+\//, ""), true);
    n = e.host, d = e.pathname
  } catch (e) {
    return null
  }
  if (!(0, a.b)(n) || null == d) return null;
  let c = d.split("/"),
    h = null != c[1] ? c[1].toLowerCase() : null,
    p = null != c[3] ? c[3].toLowerCase() : null,
    m = c[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != h ? h : "") || "user" === h && "playlist" !== p) return null;
  "user" === h && "playlist" === p && null != m && (d = "/playlist/".concat(m));
  let g = 352;
  return "track" === h ? g = 80 : ("episode" === h || "show" === h) && (g = 232), (0, r.jsx)("iframe", {
    className: i()(u.IL, l),
    src: o.RQ.EMBED(d),
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