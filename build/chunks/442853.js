/** Chunk was on web.js **/
/** chunk id: 442853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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
let f = [],
  p = new Set;

function _(e) {
  let {
    entries: t,
    channelId: n
  } = e, _ = (0, a.e7)([s.Z], () => s.Z.getChannel(n)), h = null == _ ? true : _.guild_id, m = r.useRef(new Set), g = r.useMemo(() => {
    let e = new Set(null == t ? true : t.map(e => e.author_id));
    return (0, o.E)([...m.current], [...e]) || (m.current = e), m.current
  }, [t]);
  r.useEffect(() => {
    null != h && Array.from(g).forEach(e => {
      l.Z.requestMember(h, e)
    })
  }, [g, h]);
  let E = (0, a.Wu)([c.ZP], () => {
      if (null == h) return f;
      let e = [];
      for (let t of g) c.ZP.isMember(h, t) && e.push(t);
      return e
    }, [g, h]),
    b = r.useMemo(() => {
      if (null == _ || 0 === E.length) return p;
      let e = new Set;
      for (let t of E) {
        let n = u.uB({
          user: t,
          context: _
        });
        i.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [E, _]);
  return r.useMemo(() => null == t ? true : t.filter(e => b.has(e.author_id)), [t, b])
}