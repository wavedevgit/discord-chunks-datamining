/** Chunk was on 72853 **/
/** chunk id: 301801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BO: () => u
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./781311.js");
var Chunk647438 = require("./647438.js"),
  Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  Chunk823379 = require("./823379.js"),
  Chunk886118 = require("./886118.js");
let s = new Worker(new URL("/assets/" + require.u("56558"), require.b));

function u(e, t, n, i) {
  let u = arguments.length > 4 && true !== arguments[4] ? arguments[4] : [],
    d = r.useRef(null),
    f = r.useRef(null),
    p = r.useRef(n),
    {
      searchStringGenerator: m
    } = i,
    h = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [n, i] = r.useState(e),
        l = r.useRef(e);
      return r.useEffect(() => {
        l.current = e
      }, [e]), r.useEffect(() => {
        i(e => {
          let t = l.current;
          return a()(e, t) ? e : t
        })
      }, t), n
    }(t.map(m), [t, m, ...u]),
    y = function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [n, i] = r.useState(e),
        l = r.useRef(e);
      return r.useEffect(() => {
        l.current = e
      }, [e]), r.useEffect(() => {
        i(e => {
          let t = l.current;
          return a()(e, t) ? e : t
        })
      }, t), n
    }(t, [t]);
  r.useEffect(() => {
    p.current = n
  }, [n]);
  let g = r.useMemo(() => {
    let {
      throttleMs: e = 200,
      throttleLeading: t = true,
      throttleTrailing: n = true
    } = i;
    return f.current = (0, l.throttle)(async (e, t, n) => {
      if ("" === e.trim()) return void p.current(t);
      d.current = (0, l.uniqueId)();
      let r = await
      function(e, t, n, r) {
        var i;
        let a = null != (i = r.promiseUuid) ? i : (0, l.uniqueId)(),
          {
            searchType: u = c.S.FUZZY,
            sortType: d = c.E.NONE,
            jaroWinklerSearchThreshold: f = .85
          } = r;
        return new Promise(r => {
          let i = t => {
            let {
              data: {
                id: n,
                foundItemIndexes: l
              }
            } = t;
            a === n && (r(l.map(t => e[t]).filter(o.lm)), null == s || s.removeEventListener("message", i))
          };
          null == s || s.addEventListener("message", i), null == s || s.postMessage({
            id: a,
            searchTerm: t,
            searchStrings: n,
            searchType: u,
            sortType: d,
            jaroWinklerSearchThreshold: f
          })
        })
      }(t, e, n, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        promiseUuid: d.current
      }, i));
      null != d.current && p.current(r)
    }, e, {
      leading: t,
      trailing: n
    }), f.current
  }, [i]);
  return r.useEffect(() => {
    g(e, y, h)
  }, [g, e, y, h, ...u]), r.useEffect(() => () => {
    null != f.current && f.current.cancel(), f.current = null, d.current = null
  }, [h, n, i]), g
}