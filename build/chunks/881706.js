/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  v: () => a
}), n(47120), n(474991), n(398202), n(301563);
var r = n(591759);
let i = new Set(n(821445)),
  o = {
    "github.com": RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*"),
    "bitbucket.org": RegExp("/downloads\\S*/[^/]*"),
    "gitlab.com": RegExp("/downloads\\S*/[^/]*")
  };

function a(e) {
  var t, n;
  let {
    pathname: a,
    hostname: s
  } = null !== (n = r.Z.toURLSafe(e)) && void 0 !== n ? n : {};
  if (null == s) return null;
  let l = o[s];
  if (null != l && null != a && !l.test(a) || null == a) return null;
  let c = a;
  try {
    c = decodeURIComponent(a)
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
  let _ = null === (t = p.pop()) || void 0 === t ? void 0 : t.toLowerCase();
  return null != _ && i.has(_) ? _ : null
}