/** Chunk was on web.js **/
/** chunk id: 486319, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => p
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk361610 = require("./361610.js"),
  Chunk36124 = require("./36124.js"),
  Chunk135621 = require("./135621.js"),
  Chunk963307 = require("./963307.js");
let u = "@here";

function d(e) {
  return e.length > 1 || 1 !== e.length || "GROUP" !== e[0].type || "unknown" !== e[0].id
}

function f(e, t, n, r) {
  return !!d(c.Ay.getProps(n, r).groups) || !(e.length < u.length) && !(e.length > t) && false !== e.indexOf(u) && ((0, s.Ey)(n, r, o.LD), true)
}

function p(e, t, n) {
  let i = (0, l.A)(),
    [s, o] = r.useState(false),
    u = r.useMemo(() => a().debounce(e => {
      f(e, i, t, n) && o(true)
    }, 200, {
      maxWait: 500
    }), [i, t, n]);
  r.useEffect(() => {
    let r = c.Ay.getProps(t, n).groups;
    if (null != t && !d(r) && !s) return e.addListener("text-changed", u), () => {
      e.removeListener("text-changed", u), u.cancel()
    }
  }, [s, u, e, t, n])
}