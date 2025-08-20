/** Chunk was on 5665 **/
/** chunk id: 442853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
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
  } = e, f = (0, l.e7)([o.Z], () => o.Z.getChannel(n)), m = null == f ? true : f.guild_id, g = r.useRef(new Set), b = r.useMemo(() => {
    let e = new Set(null == t ? true : t.map(e => e.author_id));
    return (0, a.E)([...g.current], [...e]) || (g.current = e), g.current
  }, [t]);
  r.useEffect(() => {
    null != m && Array.from(b).forEach(e => {
      s.Z.requestMember(m, e)
    })
  }, [b, m]);
  let y = (0, l.Wu)([c.ZP], () => {
      if (null == m) return p;
      let e = [];
      for (let t of b) c.ZP.isMember(m, t) && e.push(t);
      return e
    }, [b, m]),
    _ = r.useMemo(() => {
      if (null == f || 0 === y.length) return h;
      let e = new Set;
      for (let t of y) {
        let n = u.uB({
          user: t,
          context: f
        });
        i.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [y, f]);
  return r.useMemo(() => null == t ? true : t.filter(e => _.has(e.author_id)), [t, _])
}