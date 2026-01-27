/** Chunk was on web.js **/
/** chunk id: 723906, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Bi: () => u,
  Tw: () => d,
  X1: () => f
});
var Chunk3388 = require("./3388.js"),
  Chunk538047 = require("./538047.js"),
  Chunk64700 = require("./64700.js"),
  Chunk341221 = require("./341221.js");
let l = !!("u" > typeof window && window.document && window.document.createElement),
  c = new Map;

function u(e) {
  let [t, n] = (0, o.useState)(e), a = (0, o.useRef)(null), u = (0, s.Cc)(t), d = (0, o.useRef)(null);
  if (r && r.register(d, u), l) {
    let e = c.get(u);
    e && !e.includes(a) ? e.push(a) : c.set(u, [a])
  }
  return (0, i.N)(() => {
    let e = u;
    return () => {
      r && r.unregister(d), c.delete(e)
    }
  }, [u]), (0, o.useEffect)(() => {
    let e = a.current;
    return e && n(e), () => {
      e && (a.current = null)
    }
  }), u
}

function d(e, t) {
  if (e === t) return e;
  let n = c.get(e);
  if (n) return n.forEach(e => e.current = t), t;
  let r = c.get(t);
  return r ? (r.forEach(t => t.current = e), e) : t
}

function f(e = []) {
  let t = u(),
    [n, r] = (0, a.y)(t),
    s = (0, o.useCallback)(() => {
      r(function*() {
        yield t, yield document.getElementById(t) ? t : true
      })
    }, [t, r]);
  return (0, i.N)(s, [t, s, ...e]), n
}
"u" > typeof FinalizationRegistry && (r = new FinalizationRegistry(e => {
  c.delete(e)
}))