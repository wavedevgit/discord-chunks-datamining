/** Chunk was on 18764 **/
/** chunk id: 837329, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  u: () => s
}), require("./415506.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk905551 = require("./905551.js"),
  Chunk802659 = require("./802659.js"),
  Chunk636401 = require("./636401.js");

function s(e) {
  let n = (0, i.e7)([a.Z], () => a.Z.getRegionStateForPingUrl(e)),
    t = r.useRef(null),
    s = r.useCallback(async n => {
      if ("" === e) return;
      let r = [],
        i = false;
      try {
        if (await new Promise((e, t) => {
            let l = () => {
                n.readyState === WebSocket.OPEN && n.close()
              },
              a = setTimeout(() => {
                i || (i = true, l(), t(Error("WebSocket timeout")))
              }, 5e3);
            n.onopen = () => {
              if (n.readyState === WebSocket.OPEN)
                for (let e = 0; e < 3; e++) {
                  let e = performance.now();
                  n.send(e.toString())
                }
            }, n.onmessage = n => {
              if (i) return;
              let t = parseFloat(n.data);
              if (!isNaN(t)) {
                let n = performance.now(),
                  o = Math.round(n - t);
                r.push(o), !i && r.length >= 3 && (i = true, clearTimeout(a), l(), e())
              }
            }, n.onerror = () => {
              i || (i = true, clearTimeout(a), l(), t(Error("WebSocket error")))
            }, n.onclose = () => {
              i || (i = true, clearTimeout(a), t(Error("WebSocket closed")))
            }
          }), r.length > 0) {
          let n = Math.round(r.reduce((e, n) => e + n, 0) / r.length);
          (0, l.hz)(e, {
            rtt: n,
            loading: false,
            error: false
          })
        } else throw Error("No successful pings")
      } catch (n) {
        (0, l.hz)(e, {
          rtt: null,
          loading: false,
          error: true
        })
      } finally {
        t.current === n && (t.current = null)
      }
    }, [e, t]);
  r.useEffect(() => () => {
    null != t.current && (t.current.close(), t.current = null)
  }, []);
  let d = null != n;
  return r.useEffect(() => {
    if ("" === e || d) return;
    let n = a.Z.getRegionStateForPingUrl(e);
    if ((null == n ? true : n.rtt) != null || (null == n ? true : n.loading) === true) return;
    (0, l.hz)(e, {
      rtt: null,
      loading: true,
      error: false
    });
    let r = new WebSocket("wss://".concat(e));
    t.current = r, s(r)
  }, [e, s, d]), {
    pingText: r.useMemo(() => null == n || n.loading ? "—" : n.error ? "Error" : null !== n.rtt ? "".concat(n.rtt, "ms") : "—", [n]),
    pingCircleStyle: r.useMemo(() => {
      if (null == n || n.loading) return o.pingCircleLoading;
      if (n.error) return o.pingCircleError;
      if (null !== n.rtt)
        if (n.rtt < 50) return o.pingCircleExcellent;
        else if (n.rtt < 100) return o.pingCircleGood;
      else if (n.rtt < 200) return o.pingCircleFair;
      else return o.pingCirclePoor
    }, [n])
  }
}