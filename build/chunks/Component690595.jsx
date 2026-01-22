/** Chunk was on web.js **/
/** chunk id: 690595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  o: () => _
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk567243 = require("./567243.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk61663 = require("./61663.js");
let c = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
  u = (e, t, n) => "https://".concat(e, "/embed/").concat(t, "?locale=").concat(n),
  d = 400,
  f = 300,
  p = 6,
  _ = ["PlayStation"],
  h = (e, t) => {
    let {
      host: n,
      pathname: r
    } = t, i = [];
    if (null != r && (i = r.split("/")), "PlayStation" === e) {
      if (null == n || !c.includes(n) || 2 !== i.length) return null;
      let e = i[1];
      return {
        embedUrl: u(n, e, o.intl.currentLocale),
        style: {
          width: d,
          height: f,
          borderRadius: p
        }
      }
    }
    return null
  };

function m(e) {
  var t;
  let n = e.embed.url,
    i = null == (t = e.embed.provider) ? true : t.name;
  if (null == n || null == i) return null;
  let o = null;
  try {
    o = s.parse(n, true)
  } catch (e) {
    return null
  }
  let c = h(i, o);
  return null == c ? null : (0, r.jsx)("iframe", {
    src: c.embedUrl,
    className: a()(l.u, e.className),
    style: c.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}