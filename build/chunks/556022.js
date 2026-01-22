/** Chunk was on web.js **/
/** chunk id: 556022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => s
}), require("./896048.js"), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk998218 = require("./998218.js");
let i = new Set(require("./468983.js")),
  a = {
    "github.com": RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*"),
    "bitbucket.org": RegExp("/downloads\\S*/[^/]*"),
    "gitlab.com": RegExp("/downloads\\S*/[^/]*")
  };

function s(e) {
  var t, n;
  let {
    pathname: s,
    hostname: o
  } = null != (t = r.A.toURLSafe(e)) ? t : {};
  if (null == o) return null;
  let l = a[o];
  if (null != l && null != s && !l.test(s) || null == s) return null;
  let c = s;
  try {
    c = decodeURIComponent(s)
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
  let _ = null == (n = p.pop()) ? true : n.toLowerCase();
  return null != _ && i.has(_) ? _ : null
}