/** Chunk was on 41700 **/
/** chunk id: 442853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk720202 = require("./720202.js"),
  Chunk271383 = require("./271383.js"),
  Chunk700785 = require("./700785.js"),
  Chunk231338 = require("./231338.js");
let p = [],
  h = new Set;

function f(e) {
  let {
    entries: t,
    channelId: n
  } = e, f = (0, l.e7)([s.Z], () => s.Z.getChannel(n)), g = null == f ? true : f.guild_id, m = r.useRef(new Set), b = r.useMemo(() => {
    let e = new Set(null == t ? true : t.map(e => e.author_id));
    return (0, a.E)([...m.current], [...e]) || (m.current = e), m.current
  }, [t]);
  r.useEffect(() => {
    null != g && Array.from(b).forEach(e => {
      o.Z.requestMember(g, e)
    })
  }, [b, g]);
  let y = (0, l.Wu)([c.ZP], () => {
      if (null == g) return p;
      let e = [];
      for (let t of b) c.ZP.isMember(g, t) && e.push(t);
      return e
    }, [b, g]),
    O = r.useMemo(() => {
      if (null == f || 0 === y.length) return h;
      let e = new Set;
      for (let t of y) {
        let n = d.uB({
          user: t,
          context: f
        });
        i.e$(n, u.Pl.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [y, f]);
  return r.useMemo(() => null == t ? true : t.filter(e => O.has(e.author_id)), [t, O])
}