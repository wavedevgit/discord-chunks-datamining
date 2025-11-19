/** Chunk was on web.js **/
/** chunk id: 401419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  j: () => p
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk729594 = require("./729594.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk126425 = require("./126425.js");
let c = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
  u = (e, t, n) => "https://".concat(e, "/embed/").concat(t, "?locale=").concat(n),
  d = 400,
  f = 300,
  _ = 6,
  p = ["PlayStation"],
  h = (e, t) => {
    let {
      host: n,
      pathname: r
    } = t, i = [];
    if (null != r && (i = r.split("/")), "PlayStation" === e) {
      if (null == n || !c.includes(n) || 2 !== i.length) return null;
      let e = i[1];
      return {
        embedUrl: u(n, e, s.intl.currentLocale),
        style: {
          width: d,
          height: f,
          borderRadius: _
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
  let s = null;
  try {
    s = o.parse(n, true)
  } catch (e) {
    return null
  }
  let c = h(i, s);
  return null == c ? null : (0, r.jsx)("iframe", {
    src: c.embedUrl,
    className: a()(l.embedIFrame, e.className),
    style: c.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}