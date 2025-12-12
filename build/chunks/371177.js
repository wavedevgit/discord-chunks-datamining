/** Chunk was on web.js **/
/** chunk id: 371177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk158776 = require("./158776.js"),
  Chunk561308 = require("./561308.js"),
  Chunk231338 = require("./231338.js");

function c(e) {
  let t = r.useRef(new Set),
    n = r.useMemo(() => {
      let n = new Set(null == e ? true : e.map(e => e.author_id));
      return (0, a.E)([...t.current], [...n]) || (t.current = n), t.current
    }, [e]),
    c = (0, i.Wu)([o.Z], () => Array.from(n).filter(e => {
      let t = o.Z.getStatus(e);
      return null !== t && [l.Sk.OFFLINE, l.Sk.INVISIBLE].includes(t)
    }));
  return r.useMemo(() => {
    let t = new Set(c);
    return null == e ? true : e.filter(e => !(0, s.kr)(e) || !t.has(e.author_id))
  }, [e, c])
}