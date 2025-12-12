/** Chunk was on 87087 **/
/** chunk id: 301801, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BO: () => s
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  c = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  Chunk823379 = require("./823379.js"),
  Chunk886118 = require("./886118.js");
let i = new Worker(new URL("/assets/" + require.u("56558"), require.b));

function s(e, t, r, u) {
  let s = arguments.length > 4 && true !== arguments[4] ? arguments[4] : [],
    d = n.useRef(null),
    f = n.useRef(null),
    m = n.useRef(r),
    {
      searchStringGenerator: g
    } = u,
    p = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [r, u] = n.useState(e),
        l = n.useRef(e);
      return n.useEffect(() => {
        l.current = e
      }, [e]), n.useEffect(() => {
        u(e => {
          let t = l.current;
          return c()(e, t) ? e : t
        })
      }, t), r
    }(t.map(g), [t, g, ...s]),
    E = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [r, u] = n.useState(e),
        l = n.useRef(e);
      return n.useEffect(() => {
        l.current = e
      }, [e]), n.useEffect(() => {
        u(e => {
          let t = l.current;
          return c()(e, t) ? e : t
        })
      }, t), r
    }(t, [t]);
  n.useEffect(() => {
    m.current = r
  }, [r]);
  let h = n.useMemo(() => {
    let {
      throttleMs: e = 200,
      throttleLeading: t = true,
      throttleTrailing: r = true,
      maxSearchResults: n = false
    } = u;
    return f.current = (0, l.throttle)(async (e, t, r) => {
      if ("" === e.trim()) return void(n > 0 ? m.current(t.slice(0, n)) : m.current(t));
      d.current = (0, l.uniqueId)();
      let c = await
      function(e, t, r, n) {
        var u;
        let c = null != (u = n.promiseUuid) ? u : (0, l.uniqueId)(),
          {
            searchType: s = a.S.FUZZY,
            sortType: d = a.E.NONE,
            jaroWinklerSearchThreshold: f = .85,
            maxSearchResults: m = false
          } = n;
        return new Promise(n => {
          let u = t => {
            let {
              data: {
                id: r,
                foundItemIndexes: l
              }
            } = t;
            c === r && (n(l.map(t => e[t]).filter(o.lm)), null == i || i.removeEventListener("message", u))
          };
          null == i || i.addEventListener("message", u), null == i || i.postMessage({
            id: c,
            searchTerm: t,
            searchStrings: r,
            searchType: s,
            sortType: d,
            jaroWinklerSearchThreshold: f,
            maxSearchResults: m
          })
        })
      }(t, e, r, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        promiseUuid: d.current
      }, u));
      null != d.current && m.current(c)
    }, e, {
      leading: t,
      trailing: r
    }), f.current
  }, [u]);
  return n.useEffect(() => {
    h(e, E, p)
  }, [h, e, E, p, ...s]), n.useEffect(() => () => {
    null != f.current && f.current.cancel(), f.current = null, d.current = null
  }, [p, r, u]), h
}