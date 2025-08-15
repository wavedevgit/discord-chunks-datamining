/** Chunk was on 89311 **/
/** chunk id: 371177, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk158776 = require("./158776.js"),
  Chunk561308 = require("./561308.js"),
  Chunk231338 = require("./231338.js");

function c(e) {
  let t = n.useRef(new Set),
    r = n.useMemo(() => {
      let r = new Set(null == e ? true : e.map(e => e.author_id));
      return (0, i.E)([...t.current], [...r]) || (t.current = r), t.current
    }, [e]),
    c = (0, a.Wu)([l.Z], () => Array.from(r).filter(e => {
      let t = l.Z.getStatus(e);
      return null !== t && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(t)
    }));
  return n.useMemo(() => {
    let t = new Set(c);
    return null == e ? true : e.filter(e => !(0, o.kr)(e) || !t.has(e.author_id))
  }, [e, c])
}