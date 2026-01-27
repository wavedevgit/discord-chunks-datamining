/** Chunk was on 40396 **/
/** chunk id: 124786, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk567243 = require("./567243.js"),
  Chunk802571 = require("./802571.js");
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function u(e) {
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

function d(e) {
  let {
    className: l,
    embed: {
      url: t,
      thumbnail: n
    }
  } = e;
  if (null == t || null == n) return null;
  let s = u(t);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == u(o)) return null;
  let {
    width: d,
    height: c
  } = n, h = d, p = c;
  return (d > 500 || c > 400) && (d > c ? (h = 500, p = 500 * c / d) : (h = 400 * d / c, p = 400)), (0, r.jsx)("iframe", {
    className: i()(a.FS, l),
    src: o,
    style: {
      width: h,
      height: p
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}