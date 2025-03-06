/** Chunk was on 28543 **/
r.d(t, {
  c: () => u
}), r(315314), r(309749), r(610138), r(216116), r(78328), r(815648), r(47120);
var n = r(192379),
  a = r(392711),
  c = r(823379),
  l = r(886118);
let s = new Worker(new URL("/assets/" + r.u("56558"), r.b));

function u(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    u = n.useRef(null),
    i = n.useRef(null),
    o = n.useRef(e),
    d = n.useRef(t);
  n.useEffect(() => {
    o.current = e
  }, [e]), n.useEffect(() => {
    d.current = t
  }, [t]);
  let m = n.useMemo(() => {
    let {
      throttleMs: e = 300,
      throttleLeading: t = !0,
      throttleTrailing: n = !0
    } = r;
    return i.current = (0, a.throttle)(async (e, t) => {
      if ("" === e) {
        d.current(t);
        return
      }
      u.current = (0, a.uniqueId)();
      let n = await
      function(e, t, r) {
        var n;
        let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = null !== (n = u.promiseUuid) && void 0 !== n ? n : (0, a.uniqueId)(),
          {
            searchType: o = l.S.FUZZY,
            sortType: d = l.E.NONE,
            jaroWinklerSearchThreshold: m = .85
          } = u;
        return new Promise(n => {
          let a = t => {
            let {
              data: {
                id: r,
                foundItemIndexes: l
              }
            } = t;
            i === r && (n(l.map(t => e[t]).filter(c.lm)), null == s || s.removeEventListener("message", a))
          };
          null == s || s.addEventListener("message", a);
          let l = {
            id: i,
            searchTerm: t,
            searchStrings: e.map(r),
            searchType: o,
            sortType: d,
            jaroWinklerSearchThreshold: m
          };
          null == s || s.postMessage(l)
        })
      }(t, e, o.current, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({
        promiseUuid: u.current
      }, r));
      null != u.current && d.current(n)
    }, e, {
      leading: t,
      trailing: n
    }), i.current
  }, [r]);
  return n.useEffect(() => () => {
    null != i.current && i.current.cancel(), i.current = null, u.current = null
  }, [e, t, r]), m
}