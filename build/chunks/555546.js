/** Chunk was on 39159 **/
/** chunk id: 555546, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  i: () => s
}), require("./415506.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk744993 = require("./744993.js"),
  Chunk166098 = require("./166098.js"),
  Chunk557787 = require("./557787.js");

function s(e) {
  let n = (0, r.e7)([l.Z], () => l.Z.getLocationStateForPingUrl(e)),
    t = i.useRef(null),
    s = i.useCallback(async n => {
      if (null == e) return;
      let i = [],
        r = false;
      try {
        if (await new Promise((e, t) => {
            let a = () => {
                n.readyState === WebSocket.OPEN && n.close()
              },
              l = setTimeout(() => {
                r || (r = true, a(), t(Error("WebSocket timeout")))
              }, 5e3);
            n.onopen = () => {
              if (n.readyState === WebSocket.OPEN)
                for (let e = 0; e < 3; e++) {
                  let e = performance.now();
                  n.send(e.toString())
                }
            }, n.onmessage = n => {
              if (r) return;
              let t = parseFloat(n.data);
              if (!isNaN(t)) {
                let n = performance.now(),
                  o = Math.round(n - t);
                i.push(o), !r && i.length >= 3 && (r = true, clearTimeout(l), a(), e())
              }
            }, n.onerror = () => {
              r || (r = true, clearTimeout(l), a(), t(Error("WebSocket error")))
            }, n.onclose = () => {
              r || (r = true, clearTimeout(l), t(Error("WebSocket closed")))
            }
          }), i.length > 0) {
          let n = Math.round(i.reduce((e, n) => e + n, 0) / i.length);
          (0, a.LG)(e, {
            rtt: n,
            loading: false,
            error: false
          })
        } else throw Error("No successful pings")
      } catch (n) {
        (0, a.LG)(e, {
          rtt: null,
          loading: false,
          error: true
        })
      } finally {
        t.current === n && (t.current = null)
      }
    }, [e, t]);
  return i.useEffect(() => () => {
    null != t.current && (t.current.close(), t.current = null)
  }, []), i.useEffect(() => {
    if ((null == n ? true : n.rtt) != null || (null == n ? true : n.loading) === true || null == e) return;
    (0, a.LG)(e, {
      rtt: null,
      loading: true,
      error: false
    });
    let i = new WebSocket(e);
    t.current = i, s(i)
  }, [e, s, n]), {
    pingText: i.useMemo(() => null == n ? "—" : n.loading ? "..." : n.error ? "Error" : null !== n.rtt ? "".concat(n.rtt, "ms") : "—", [n]),
    pingCircleStyle: i.useMemo(() => {
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