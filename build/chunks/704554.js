/** Chunk was on 79692 **/
/** chunk id: 704554, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  RT: () => a
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk812729 = require("./812729.js"),
  c = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  Chunk403362 = require("./403362.js"),
  Chunk379078 = require("./379078.js");
let f = new Worker(new URL("/assets/" + require.u("83450"), require.b));

function a(e, r, t, u) {
  let a = arguments.length > 4 && true !== arguments[4] ? arguments[4] : [],
    o = n.useRef(null),
    d = n.useRef(null),
    b = n.useRef(t),
    {
      searchStringGenerator: p
    } = u,
    E = function(e) {
      let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [t, u] = n.useState(e),
        l = n.useRef(e);
      return n.useEffect(() => {
        l.current = e
      }, [e]), n.useEffect(() => {
        u(e => {
          let r = l.current;
          return c()(e, r) ? e : r
        })
      }, r), t
    }(r.map(p), [r, p, ...a]),
    g = function(e) {
      let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
        [t, u] = n.useState(e),
        l = n.useRef(e);
      return n.useEffect(() => {
        l.current = e
      }, [e]), n.useEffect(() => {
        u(e => {
          let r = l.current;
          return c()(e, r) ? e : r
        })
      }, r), t
    }(r, [r]);
  n.useEffect(() => {
    b.current = t
  }, [t]);
  let m = n.useMemo(() => {
    let {
      throttleMs: e = 200,
      throttleLeading: r = true,
      throttleTrailing: t = true,
      maxSearchResults: n = false
    } = u;
    return d.current = (0, l.throttle)(async (e, r, t) => {
      if ("" === e.trim()) return void(n > 0 ? b.current(r.slice(0, n)) : b.current(r));
      o.current = (0, l.uniqueId)();
      let c = await
      function(e, r, t, n) {
        var u;
        let c = null != (u = n.promiseUuid) ? u : (0, l.uniqueId)(),
          {
            searchType: a = i.n.FUZZY,
            sortType: o = i.r.NONE,
            jaroWinklerSearchThreshold: d = .85,
            maxSearchResults: b = false
          } = n;
        return new Promise(n => {
          let u = r => {
            let {
              data: {
                id: t,
                foundItemIndexes: l
              }
            } = r;
            c === t && (n(l.map(r => e[r]).filter(s.Vq)), null == f || f.removeEventListener("message", u))
          };
          null == f || f.addEventListener("message", u), null == f || f.postMessage({
            id: c,
            searchTerm: r,
            searchStrings: t,
            searchType: a,
            sortType: o,
            jaroWinklerSearchThreshold: d,
            maxSearchResults: b
          })
        })
      }(r, e, t, function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.forEach(function(r) {
            var n;
            n = t[r], r in e ? Object.defineProperty(e, r, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[r] = n
          })
        }
        return e
      }({
        promiseUuid: o.current
      }, u));
      null != o.current && b.current(c)
    }, e, {
      leading: r,
      trailing: t
    }), d.current
  }, [u]);
  return n.useEffect(() => {
    m(e, g, E)
  }, [m, e, g, E, ...a]), n.useEffect(() => () => {
    null != d.current && d.current.cancel(), d.current = null, o.current = null
  }, [E, t, u]), m
}