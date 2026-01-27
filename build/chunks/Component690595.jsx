/** Chunk was on 40396 **/
/** chunk id: 690595, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => c,
  o: () => d
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk567243 = require("./567243.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk61663 = require("./61663.js");
let u = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
  d = ["PlayStation"];

function c(e) {
  var l;
  let t = e.embed.url,
    n = null == (l = e.embed.provider) ? true : l.name;
  if (null == t || null == n) return null;
  let d = null;
  try {
    d = s.parse(t, true)
  } catch (e) {
    return null
  }
  let c = ((e, l) => {
    let {
      host: t,
      pathname: r
    } = l, n = [];
    if (null != r && (n = r.split("/")), "PlayStation" === e) {
      let e;
      if (null == t || !u.includes(t) || 2 !== n.length) return null;
      let l = n[1];
      return {
        embedUrl: (e = a.intl.currentLocale, "https://".concat(t, "/embed/").concat(l, "?locale=").concat(e)),
        style: {
          width: 400,
          height: 300,
          borderRadius: 6
        }
      }
    }
    return null
  })(n, d);
  return null == c ? null : (0, r.jsx)("iframe", {
    src: c.embedUrl,
    className: i()(o.u, e.className),
    style: c.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}