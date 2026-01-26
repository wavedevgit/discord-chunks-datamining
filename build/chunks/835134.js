/** Chunk was on 46875 **/
/** chunk id: 835134, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  w: () => c
}), require("./747238.js"), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk724442 = require("./724442.js"),
  Chunk998218 = require("./998218.js"),
  Chunk36491 = require("./36491.js"),
  Chunk304162 = require("./304162.js");

function c(e, t, n) {
  let c = r.useRef(new Map),
    [, d] = r.useState(null),
    [u, m] = r.useState(null),
    h = r.useMemo(() => l.debounce((e, n) => {
      if (null == n || e || 0 === t) return;
      let r = n.match(a.A.URL_REGEX);
      if (null == r || 0 === r.length) {
        c.current = new Map, m(null);
        return
      }
      m(l.uniq(r).slice(0, o.A8))
    }, 1e3), [t, c, m]);
  r.useEffect(() => {
    h(e, n)
  }, [h, n, e]), r.useEffect(() => {
    !async function(e, t) {
      if (null == t) return;
      let n = e.current,
        r = new Set(n.keys()),
        l = t.filter(e => !(null == r ? true : r.has(e)));
      if (0 !== l.length) try {
        var i, a, o;
        let t = await s.L4(l);
        i = new Map(n), a = l, o = null == t ? true : t.embeds, null == o || o.forEach(e => {
          var t, n;
          let r = (t = a, n = e, t.find(e => (null == n ? true : n.url) != null && e.startsWith(n.url)));
          if (null == r) return;
          let l = i.get(r);
          null == l ? i.set(r, [e]) : l.push(e)
        }), e.current = i, d({})
      } catch (e) {}
    }(c, u)
  }, [u]);
  let g = (0, i.A)(c),
    f = r.useMemo(() => {
      let e = [];
      return null == u || u.forEach(t => {
        let n = g.get(t);
        null != n && e.push(...n)
      }), e.length > 0 ? e : null
    }, [u, g]);
  return {
    embeds: e ? null : f
  }
}