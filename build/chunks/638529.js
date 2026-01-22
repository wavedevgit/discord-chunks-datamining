/** Chunk was on 14691 **/
/** chunk id: 638529, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  b: () => d
}), require("./65821.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk665171 = require("./665171.js"),
  Chunk588591 = require("./588591.js"),
  Chunk513246 = require("./513246.js");

function d(e) {
  let t = (0, n.bG)([i.A], () => i.A.getRegionStateForPingUrl(e)),
    l = r.useRef(null),
    d = r.useCallback(async t => {
      if ("" === e) return;
      let r = [],
        n = false;
      try {
        if (await new Promise((e, l) => {
            let s = () => {
                t.readyState === WebSocket.OPEN && t.close()
              },
              i = setTimeout(() => {
                n || (n = true, s(), l(Error("WebSocket timeout")))
              }, 5e3);
            t.onopen = () => {
              if (t.readyState === WebSocket.OPEN)
                for (let e = 0; e < 3; e++) {
                  let e = performance.now();
                  t.send(e.toString())
                }
            }, t.onmessage = t => {
              if (n) return;
              let l = parseFloat(t.data);
              if (!isNaN(l)) {
                let t = performance.now(),
                  a = Math.round(t - l);
                r.push(a), !n && r.length >= 3 && (n = true, clearTimeout(i), s(), e())
              }
            }, t.onerror = () => {
              n || (n = true, clearTimeout(i), s(), l(Error("WebSocket error")))
            }, t.onclose = () => {
              n || (n = true, clearTimeout(i), l(Error("WebSocket closed")))
            }
          }), r.length > 0) {
          let t = Math.round(r.reduce((e, t) => e + t, 0) / r.length);
          (0, s.QK)(e, {
            rtt: t,
            loading: false,
            error: false
          })
        } else throw Error("No successful pings")
      } catch (t) {
        (0, s.QK)(e, {
          rtt: null,
          loading: false,
          error: true
        })
      } finally {
        l.current === t && (l.current = null)
      }
    }, [e, l]);
  r.useEffect(() => () => {
    null != l.current && (l.current.close(), l.current = null)
  }, []);
  let c = null != t;
  return r.useEffect(() => {
    if ("" === e || c) return;
    let t = i.A.getRegionStateForPingUrl(e);
    if ((null == t ? true : t.rtt) != null || (null == t ? true : t.loading) === true) return;
    (0, s.QK)(e, {
      rtt: null,
      loading: true,
      error: false
    });
    let r = new WebSocket("wss://".concat(e));
    l.current = r, d(r)
  }, [e, d, c]), {
    pingText: r.useMemo(() => null == t || t.loading ? "—" : t.error ? "Error" : null !== t.rtt ? "".concat(t.rtt, "ms") : "—", [t]),
    pingCircleStyle: r.useMemo(() => {
      if (null == t || t.loading) return a.N5;
      if (t.error) return a.ZK;
      if (null !== t.rtt)
        if (t.rtt < 50) return a.n5;
        else if (t.rtt < 100) return a.mM;
      else if (t.rtt < 200) return a.d9;
      else return a.Rg
    }, [t])
  }
}