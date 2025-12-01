/** Chunk was on web.js **/
/** chunk id: 881706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => o
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk591759 = require("./591759.js");
let i = new Set(require("./821445.js")),
  a = {
    "github.com": RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*"),
    "bitbucket.org": RegExp("/downloads\\S*/[^/]*"),
    "gitlab.com": RegExp("/downloads\\S*/[^/]*")
  };

function o(e) {
  var t, n;
  let {
    pathname: o,
    hostname: s
  } = null != (n = r.Z.toURLSafe(e)) ? n : {};
  if (null == s) return null;
  let l = a[s];
  if (null != l && null != o && !l.test(o) || null == o) return null;
  let c = o;
  try {
    c = decodeURIComponent(o)
  } catch (e) {}
  let u = c.split("/"),
    d = null,
    f = 0;
  for (let e = u.length - 1; e >= 0; e--) {
    let t = u[e];
    if ("" !== t && "." !== t) {
      if (".." === t) {
        f++;
        continue
      }
      if (f > e) break;
      d = u[e - f];
      break
    }
  }
  if (null == d) return null;
  let p = d.split(".");
  if (p.length < 2) return null;
  let _ = null == (t = p.pop()) ? true : t.toLowerCase();
  return null != _ && i.has(_) ? _ : null
}