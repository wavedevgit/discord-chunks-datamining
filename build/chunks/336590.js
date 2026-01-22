/** Chunk was on 21738 **/
/** chunk id: 336590, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => u,
  r: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk724442 = require("./724442.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js"),
  Chunk411976 = require("./411976.js"),
  Chunk790499 = require("./790499.js");

function u() {
  let e = (0, o.W)(),
    t = r.useRef(e),
    n = (0, i.bG)([a.A], () => a.A.isReady()),
    s = r.useRef(n);
  return r.useEffect(() => {
    n && !s.current && (s.current = true, t.current = e)
  }, [n, e]), 1 >= (0, l.A)(t) && 1 === e
}

function d() {
  let e = (0, c.I)(),
    t = r.useRef(e),
    n = (0, i.bG)([s.A], () => s.A.isReady()),
    a = r.useRef(n);
  return r.useEffect(() => {
    n && !a.current && (a.current = true, t.current = e)
  }, [n, e]), 1 >= (0, l.A)(t) && 1 === e
}