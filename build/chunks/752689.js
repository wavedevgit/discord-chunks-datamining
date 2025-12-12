/** Chunk was on web.js **/
/** chunk id: 752689, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Me: () => u,
  mp: () => f,
  ur: () => d
});
var Chunk159447 = require("./159447.js"),
  Chunk408437 = require("./408437.js"),
  Chunk473749 = require("./473749.js"),
  Chunk112683 = require("./112683.js");
let l = !!("undefined" != typeof window && window.document && window.document.createElement),
  c = new Map;

function u(e) {
  let [t, n] = (0, a.useState)(e), o = (0, a.useRef)(null), u = (0, s.gP)(t), d = (0, a.useRef)(null);
  if (r && r.register(d, u), l) {
    let e = c.get(u);
    e && !e.includes(o) ? e.push(o) : c.set(u, [o])
  }
  return (0, i.b)(() => {
    let e = u;
    return () => {
      r && r.unregister(d), c.delete(e)
    }
  }, [u]), (0, a.useEffect)(() => {
    let e = o.current;
    return e && n(e), () => {
      e && (o.current = null)
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
    [n, r] = (0, o.p)(t),
    s = (0, a.useCallback)(() => {
      r(function*() {
        yield t, yield document.getElementById(t) ? t : true
      })
    }, [t, r]);
  return (0, i.b)(s, [t, s, ...e]), n
}
"undefined" != typeof FinalizationRegistry && (r = new FinalizationRegistry(e => {
  c.delete(e)
}))