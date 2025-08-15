/** Chunk was on 53937 **/
/** chunk id: 624195, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk781452 = require("./781452.js");
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function d(e) {
  let l = null,
    t = null,
    r = null;
  try {
    l = (r = s.parse(e, true)).host, t = r.pathname
  } catch (e) {
    return null
  }
  return null != r && o.test(null != l ? l : "") && null != t ? r : null
}

function u(e) {
  let {
    className: l,
    embed: {
      url: t,
      thumbnail: n
    }
  } = e;
  if (null == t || null == n) return null;
  let s = d(t);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == d(o)) return null;
  let {
    width: u,
    height: h
  } = n, c = u, m = h;
  return (u > 500 || h > 400) && (u > h ? (c = 500, m = 500 * h / u) : (c = 400 * u / h, m = 400)), (0, r.jsx)("iframe", {
    className: i()(a.embedAmazonMusic, l),
    src: o,
    style: {
      width: c,
      height: m
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}