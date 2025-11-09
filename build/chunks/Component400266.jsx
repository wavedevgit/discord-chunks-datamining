/** Chunk was on web.js **/
/** chunk id: 400266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk785992 = require("./785992.js"),
  Chunk616922 = require("./616922.js"),
  Chunk111925 = require("./111925.js");

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
    let e = o.parse(u(n), true);
    i = e.host, d = e.pathname
  } catch (e) {
    return null
  }
  if (!(0, s.E)(i) || null == d) return null;
  let f = d.split("/"),
    _ = null != f[1] ? f[1].toLowerCase() : null,
    p = null != f[3] ? f[3].toLowerCase() : null,
    h = f[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != _ ? _ : "") || "user" === _ && "playlist" !== p) return null;
  "user" === _ && "playlist" === p && null != h && (d = "/playlist/".concat(h));
  let m = 352;
  return "track" === _ ? m = 80 : ("episode" === _ || "show" === _) && (m = 232), (0, r.jsx)("iframe", {
    className: a()(c.embedSpotify, t),
    src: l.C7.EMBED(d),
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