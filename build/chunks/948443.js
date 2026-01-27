/** Chunk was on web.js **/
/** chunk id: 948443, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk290863 = require("./290863.js"),
  Chunk583846 = require("./583846.js"),
  Chunk818348 = require("./818348.js");

function c(e) {
  let t = r.useRef(new Set),
    n = r.useMemo(() => {
      let n = new Set(null == e ? true : e.map(e => e.author_id));
      return (0, a.v)([...t.current], [...n]) || (t.current = n), t.current
    }, [e]),
    c = (0, i.yK)([o.A], () => Array.from(n).filter(e => {
      let t = o.A.getStatus(e);
      return null !== t && [l.cl.OFFLINE, l.cl.INVISIBLE].includes(t)
    }));
  return r.useMemo(() => {
    let t = new Set(c);
    return null == e ? true : e.filter(e => !(0, s.JM)(e) || !t.has(e.author_id))
  }, [e, c])
}