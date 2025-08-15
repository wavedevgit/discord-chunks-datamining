/** Chunk was on 53937 **/
/** chunk id: 401419, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  j: () => u
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk126425 = require("./126425.js");
let d = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
  u = ["PlayStation"];

function h(e) {
  var l;
  let t = e.embed.url,
    n = null == (l = e.embed.provider) ? true : l.name;
  if (null == t || null == n) return null;
  let u = null;
  try {
    u = s.parse(t, true)
  } catch (e) {
    return null
  }
  let h = ((e, l) => {
    let {
      host: t,
      pathname: r
    } = l, n = [];
    if (null != r && (n = r.split("/")), "PlayStation" === e) {
      let e;
      if (null == t || !d.includes(t) || 2 !== n.length) return null;
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
  })(n, u);
  return null == h ? null : (0, r.jsx)("iframe", {
    src: h.embedUrl,
    className: i()(o.embedIFrame, e.className),
    style: h.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}