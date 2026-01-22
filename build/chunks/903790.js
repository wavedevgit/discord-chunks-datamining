/** Chunk was on web.js **/
/** chunk id: 903790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk734057 = require("./734057.js"),
  Chunk256587 = require("./256587.js"),
  Chunk696451 = require("./696451.js"),
  Chunk488926 = require("./488926.js"),
  Chunk818348 = require("./818348.js");
let f = [],
  p = new Set;

function _(e) {
  let {
    entries: t,
    channelId: n
  } = e, _ = (0, a.bG)([o.A], () => o.A.getChannel(n)), h = null == _ ? true : _.guild_id, m = r.useRef(new Set), g = r.useMemo(() => {
    let e = new Set(null == t ? true : t.map(e => e.author_id));
    return (0, s.v)([...m.current], [...e]) || (m.current = e), m.current
  }, [t]);
  r.useEffect(() => {
    null != h && Array.from(g).forEach(e => {
      l.A.requestMember(h, e)
    })
  }, [g, h]);
  let E = (0, a.yK)([c.Ay], () => {
      if (null == h) return f;
      let e = [];
      for (let t of g) c.Ay.isMember(h, t) && e.push(t);
      return e
    }, [g, h]),
    b = r.useMemo(() => {
      if (null == _ || 0 === E.length) return p;
      let e = new Set;
      for (let t of E) {
        let n = u.cc({
          user: t,
          context: _
        });
        i.zy(n, d.xB.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [E, _]);
  return r.useMemo(() => null == t ? true : t.filter(e => b.has(e.author_id)), [t, b])
}