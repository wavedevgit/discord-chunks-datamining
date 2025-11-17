/** Chunk was on 83243 **/
/** chunk id: 301801, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BO: () => i
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  c = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  Chunk823379 = require("./823379.js"),
  Chunk886118 = require("./886118.js");
let o = new Worker(new URL("/assets/" + require.u("56558"), require.b));

function i(e, t, r, a) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : [],
    d = n.useRef(null),
    f = n.useRef(null),
    m = n.useRef(r),
    {
      searchStringGenerator: x
    } = a,
    h = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [r, a] = n.useState(e),
        l = n.useRef(e);
      return n.useEffect(() => {
        l.current = e
      }, [e]), n.useEffect(() => {
        a(e => {
          let t = l.current;
          return c()(e, t) ? e : t
        })
      }, t), r
    }(t.map(x), [t, x, ...i]),
    p = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [r, a] = n.useState(e),
        l = n.useRef(e);
      return n.useEffect(() => {
        l.current = e
      }, [e]), n.useEffect(() => {
        a(e => {
          let t = l.current;
          return c()(e, t) ? e : t
        })
      }, t), r
    }(t, [t]);
  n.useEffect(() => {
    m.current = r
  }, [r]);
  let g = n.useMemo(() => {
    let {
      throttleMs: e = 200,
      throttleLeading: t = true,
      throttleTrailing: r = true
    } = a;
    return f.current = (0, l.throttle)(async (e, t, r) => {
      if ("" === e.trim()) return void m.current(t);
      d.current = (0, l.uniqueId)();
      let n = await
      function(e, t, r, n) {
        var a;
        let c = null != (a = n.promiseUuid) ? a : (0, l.uniqueId)(),
          {
            searchType: i = s.S.FUZZY,
            sortType: d = s.E.NONE,
            jaroWinklerSearchThreshold: f = .85
          } = n;
        return new Promise(n => {
          let a = t => {
            let {
              data: {
                id: r,
                foundItemIndexes: l
              }
            } = t;
            c === r && (n(l.map(t => e[t]).filter(u.lm)), null == o || o.removeEventListener("message", a))
          };
          null == o || o.addEventListener("message", a), null == o || o.postMessage({
            id: c,
            searchTerm: t,
            searchStrings: r,
            searchType: i,
            sortType: d,
            jaroWinklerSearchThreshold: f
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
      }, a));
      null != d.current && m.current(n)
    }, e, {
      leading: t,
      trailing: r
    }), f.current
  }, [a]);
  return n.useEffect(() => {
    g(e, p, h)
  }, [g, e, p, h, ...i]), n.useEffect(() => () => {
    null != f.current && f.current.cancel(), f.current = null, d.current = null
  }, [h, r, a]), g
}