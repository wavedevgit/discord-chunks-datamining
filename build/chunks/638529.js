/** Chunk was on 14691 **/
/** chunk id: 638529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => d
}), require("./65821.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk665171 = require("./665171.js"),
  Chunk588591 = require("./588591.js"),
  Chunk513246 = require("./513246.js");

function d(e) {
  let t = (0, l.bG)([s.A], () => s.A.getRegionStateForPingUrl(e)),
    n = r.useRef(null),
    d = r.useCallback(async t => {
      if ("" === e) return;
      let r = [],
        l = false;
      try {
        if (await new Promise((e, n) => {
            let i = () => {
                t.readyState === WebSocket.OPEN && t.close()
              },
              s = setTimeout(() => {
                l || (l = true, i(), n(Error("WebSocket timeout")))
              }, 5e3);
            t.onopen = () => {
              if (t.readyState === WebSocket.OPEN)
                for (let e = 0; e < 3; e++) {
                  let e = performance.now();
                  t.send(e.toString())
                }
            }, t.onmessage = t => {
              if (l) return;
              let n = parseFloat(t.data);
              if (!isNaN(n)) {
                let t = performance.now(),
                  a = Math.round(t - n);
                r.push(a), !l && r.length >= 3 && (l = true, clearTimeout(s), i(), e())
              }
            }, t.onerror = () => {
              l || (l = true, clearTimeout(s), i(), n(Error("WebSocket error")))
            }, t.onclose = () => {
              l || (l = true, clearTimeout(s), n(Error("WebSocket closed")))
            }
          }), r.length > 0) {
          let t = Math.round(r.reduce((e, t) => e + t, 0) / r.length);
          (0, i.QK)(e, {
            rtt: t,
            loading: false,
            error: false
          })
        } else throw Error("No successful pings")
      } catch (t) {
        (0, i.QK)(e, {
          rtt: null,
          loading: false,
          error: true
        })
      } finally {
        n.current === t && (n.current = null)
      }
    }, [e, n]);
  r.useEffect(() => () => {
    null != n.current && (n.current.close(), n.current = null)
  }, []);
  let o = null != t;
  return r.useEffect(() => {
    if ("" === e || o) return;
    let t = s.A.getRegionStateForPingUrl(e);
    if ((null == t ? true : t.rtt) != null || (null == t ? true : t.loading) === true) return;
    (0, i.QK)(e, {
      rtt: null,
      loading: true,
      error: false
    });
    let r = new WebSocket("wss://".concat(e));
    n.current = r, d(r)
  }, [e, d, o]), {
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