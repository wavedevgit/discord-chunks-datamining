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
  let c = l.useRef(new Map),
    [, d] = l.useState(null),
    [u, m] = l.useState(null),
    h = l.useMemo(() => r.debounce((e, n) => {
      if (null == n || e || 0 === t) return;
      let l = n.match(a.A.URL_REGEX);
      if (null == l || 0 === l.length) {
        c.current = new Map, m(null);
        return
      }
      m(r.uniq(l).slice(0, o.A8))
    }, 1e3), [t, c, m]);
  l.useEffect(() => {
    h(e, n)
  }, [h, n, e]), l.useEffect(() => {
    !async function(e, t) {
      if (null == t) return;
      let n = e.current,
        l = new Set(n.keys()),
        r = t.filter(e => !(null == l ? true : l.has(e)));
      if (0 !== r.length) try {
        var i, a, o;
        let t = await s.L4(r);
        i = new Map(n), a = r, o = null == t ? true : t.embeds, null == o || o.forEach(e => {
          var t, n;
          let l = (t = a, n = e, t.find(e => (null == n ? true : n.url) != null && e.startsWith(n.url)));
          if (null == l) return;
          let r = i.get(l);
          null == r ? i.set(l, [e]) : r.push(e)
        }), e.current = i, d({})
      } catch (e) {}
    }(c, u)
  }, [u]);
  let g = (0, i.A)(c),
    x = l.useMemo(() => {
      let e = [];
      return null == u || u.forEach(t => {
        let n = g.get(t);
        null != n && e.push(...n)
      }), e.length > 0 ? e : null
    }, [u, g]);
  return {
    embeds: e ? null : x
  }
}