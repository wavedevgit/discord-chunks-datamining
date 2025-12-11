/** Chunk was on 193 **/
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
  let c = a.useRef(new Map),
    [, d] = a.useState(null),
    [u, m] = a.useState(null),
    f = a.useMemo(() => r.debounce((e, n) => {
      if (null == n || e || 0 === t) return;
      let a = n.match(l.Z.URL_REGEX);
      if (null == a || 0 === a.length) {
        c.current = new Map, m(null);
        return
      }
      m(r.uniq(a).slice(0, o.Yh))
    }, 1e3), [t, c, m]);
  a.useEffect(() => {
    f(e, n)
  }, [f, n, e]), a.useEffect(() => {
    !async function(e, t) {
      if (null == t) return;
      let n = e.current,
        a = new Set(n.keys()),
        r = t.filter(e => !(null == a ? true : a.has(e)));
      if (0 !== r.length) try {
        var i, l, o;
        let t = await s.V6(r);
        i = new Map(n), l = r, o = null == t ? true : t.embeds, null == o || o.forEach(e => {
          var t, n;
          let a = (t = l, n = e, t.find(e => (null == n ? true : n.url) != null && e.startsWith(n.url)));
          if (null == a) return;
          let r = i.get(a);
          null == r ? i.set(a, [e]) : r.push(e)
        }), e.current = i, d({})
      } catch (e) {}
    }(c, u)
  }, [u]);
  let h = (0, i.Z)(c),
    g = a.useMemo(() => {
      let e = [];
      return null == u || u.forEach(t => {
        let n = h.get(t);
        null != n && e.push(...n)
      }), e.length > 0 ? e : null
    }, [u, h]);
  return {
    embeds: e ? null : g
  }
}