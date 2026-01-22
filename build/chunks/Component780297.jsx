/** Chunk was on web.js **/
/** chunk id: 780297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk567243 = require("./567243.js"),
  Chunk644119 = require("./644119.js"),
  Chunk272984 = require("./272984.js"),
  Chunk802571 = require("./802571.js");

function u(e) {
  let t = /intl-[^/]+\//;
  return e.replace(t, "")
}

function d(e) {
  let {
    className: t,
    embed: {
      url: n
    }
  } = e;
  if (null == n) return null;
  let i = null,
    d = null;
  try {
    let e = s.parse(u(n), true);
    i = e.host, d = e.pathname
  } catch (e) {
    return null
  }
  if (!(0, o.b)(i) || null == d) return null;
  let f = d.split("/"),
    p = null != f[1] ? f[1].toLowerCase() : null,
    _ = null != f[3] ? f[3].toLowerCase() : null,
    h = f[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != p ? p : "") || "user" === p && "playlist" !== _) return null;
  "user" === p && "playlist" === _ && null != h && (d = "/playlist/".concat(h));
  let m = 352;
  return "track" === p ? m = 80 : ("episode" === p || "show" === p) && (m = 232), (0, r.jsx)("iframe", {
    className: a()(c.IL, t),
    src: l.RQ.EMBED(d),
    style: {
      maxWidth: 400,
      minWidth: 300,
      width: "100%",
      height: m
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
    allow: "clipboard-write"
  })
}