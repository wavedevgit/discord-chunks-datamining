/** Chunk was on web.js **/
/** chunk id: 746877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => p
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk941028 = require("./941028.js"),
  Chunk509848 = require("./509848.js"),
  Chunk849522 = require("./849522.js"),
  Chunk439170 = require("./439170.js");
let u = "@here";

function d(e) {
  return e.length > 1 || 1 !== e.length || "GROUP" !== e[0].type || "unknown" !== e[0].id
}

function f(e, t, n, r) {
  return !!d(c.ZP.getProps(n, r).groups) || !(e.length < u.length) && !(e.length > t) && false !== e.indexOf(u) && ((0, o.b8)(n, r, s.KV), true)
}

function p(e, t, n) {
  let i = (0, l.Z)(),
    [o, s] = r.useState(false),
    u = r.useMemo(() => a().debounce(e => {
      f(e, i, t, n) && s(true)
    }, 200, {
      maxWait: 500
    }), [i, t, n]);
  r.useEffect(() => {
    let r = c.ZP.getProps(t, n).groups;
    if (null != t && !d(r) && !o) return e.addListener("text-changed", u), () => {
      e.removeListener("text-changed", u), u.cancel()
    }
  }, [o, u, e, t, n])
}