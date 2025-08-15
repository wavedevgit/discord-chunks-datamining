/** Chunk was on 9456 **/
/** chunk id: 337077, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => c
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk990169 = require("./990169.js"),
  Chunk591759 = require("./591759.js"),
  Chunk158222 = require("./158222.js"),
  Chunk154135 = require("./154135.js");

function c(e, t, n) {
  let c = r.useRef(new Map),
    [, d] = r.useState(null),
    [u, m] = r.useState(null),
    h = r.useMemo(() => i.debounce((e, n) => {
      if (null == n || e || 0 === t) return;
      let r = n.match(l.Z.URL_REGEX);
      if (null == r || 0 === r.length) {
        c.current = new Map, m(null);
        return
      }
      m(i.uniq(r).slice(0, o.Yh))
    }, 1e3), [t, c, m]);
  r.useEffect(() => {
    h(e, n)
  }, [h, n, e]), r.useEffect(() => {
    !async function(e, t) {
      if (null == t) return;
      let n = e.current,
        r = new Set(n.keys()),
        i = t.filter(e => !(null == r ? true : r.has(e)));
      if (0 !== i.length) try {
        var a, l, o;
        let t = await s.V6(i);
        a = new Map(n), l = i, o = null == t ? true : t.embeds, null == o || o.forEach(e => {
          var t, n;
          let r = (t = l, n = e, t.find(e => (null == n ? true : n.url) != null && e.startsWith(n.url)));
          if (null == r) return;
          let i = a.get(r);
          null == i ? a.set(r, [e]) : i.push(e)
        }), e.current = a, d({})
      } catch (e) {}
    }(c, u)
  }, [u]);
  let g = (0, a.Z)(c),
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