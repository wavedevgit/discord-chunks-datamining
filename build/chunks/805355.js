/** Chunk was on web.js **/
/** chunk id: 805355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./457542.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk220082 = require("./220082.js"),
  Chunk55563 = require("./55563.js"),
  Chunk164670 = require("./164670.js");

function l(e, t) {
  let n = (0, i.e7)([o.Z], () => o.Z.get(e)),
    [l, c] = r.useState(false),
    [u, d] = r.useState(false),
    f = r.useMemo(() => (0, s.a7)(n), [n]),
    p = r.useMemo(() => (0, s.Do)(n), [n]);
  return r.useEffect(() => {
    if ((null == n ? true : n.id) == null || l || !t) return;
    if (null == p) return void c(true);
    let e = new Image;
    return e.src = p.toString(), e.onload = () => {
      c(true)
    }, e.onerror = () => {
      c(true)
    }, () => {
      e.onerror = null, e.onload = null, e.src = ""
    }
  }, [p, t, l, null == n ? true : n.id]), r.useEffect(() => {
    if ((null == n ? true : n.id) == null || u || !t) return;
    if (null == f) return void d(true);
    let e = true;
    return (0, a.vM)(f.toString()).finally(() => {
      e && d(true)
    }), () => {
      e = false
    }
  }, [u, f, t, null == n ? true : n.id]), r.useMemo(() => l && u, [l, u])
}