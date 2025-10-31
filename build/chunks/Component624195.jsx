/** Chunk was on web.js **/
/** chunk id: 624195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk781452 = require("./781452.js");
let l = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)"),
  c = 500,
  u = 400;

function d(e) {
  let t = null,
    n = null,
    r = null;
  try {
    t = (r = o.parse(e, true)).host, n = r.pathname
  } catch (e) {
    return null
  }
  return null != r && l.test(null != t ? t : "") && null != n ? r : null
}

function f(e) {
  let {
    className: t,
    embed: {
      url: n,
      thumbnail: i
    }
  } = e;
  if (null == n || null == i) return null;
  let o = d(n);
  if (null == o) return null;
  let l = o.query.iframe_url;
  if (null == l || Array.isArray(l) || null == d(l)) return null;
  let {
    width: f,
    height: _
  } = i, p = f, h = _;
  return (f > c || _ > u) && (f > _ ? (p = c, h = c * _ / f) : (p = u * f / _, h = u)), (0, r.jsx)("iframe", {
    className: a()(s.embedAmazonMusic, t),
    src: l,
    style: {
      width: p,
      height: h
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}