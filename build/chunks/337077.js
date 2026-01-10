/** Chunk was on 49131 **/
/** chunk id: 337077, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => c
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk990169 = require("./990169.js"),
  Chunk591759 = require("./591759.js"),
  Chunk158222 = require("./158222.js"),
  Chunk154135 = require("./154135.js");

function c(e, t, n) {
  let c = r.useRef(new Map),
    [, d] = r.useState(null),
    [u, m] = r.useState(null),
    h = r.useMemo(() => a.debounce((e, n) => {
      if (null == n || e || 0 === t) return;
      let r = n.match(l.Z.URL_REGEX);
      if (null == r || 0 === r.length) {
        c.current = new Map, m(null);
        return
      }
      m(a.uniq(r).slice(0, o.Yh))
    }, 1e3), [t, c, m]);
  r.useEffect(() => {
    h(e, n)
  }, [h, n, e]), r.useEffect(() => {
    !async function(e, t) {
      if (null == t) return;
      let n = e.current,
        r = new Set(n.keys()),
        a = t.filter(e => !(null == r ? true : r.has(e)));
      if (0 !== a.length) try {
        var i, l, o;
        let t = await s.V6(a);
        i = new Map(n), l = a, o = null == t ? true : t.embeds, null == o || o.forEach(e => {
          var t, n;
          let r = (t = l, n = e, t.find(e => (null == n ? true : n.url) != null && e.startsWith(n.url)));
          if (null == r) return;
          let a = i.get(r);
          null == a ? i.set(r, [e]) : a.push(e)
        }), e.current = i, d({})
      } catch (e) {}
    }(c, u)
  }, [u]);
  let f = (0, i.Z)(c),
    g = r.useMemo(() => {
      let e = [];
      return null == u || u.forEach(t => {
        let n = f.get(t);
        null != n && e.push(...n)
      }), e.length > 0 ? e : null
    }, [u, f]);
  return {
    embeds: e ? null : g
  }
}