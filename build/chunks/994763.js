/** Chunk was on 9207 **/
/** chunk id: 994763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a,
  z: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function s(e, t, n) {
  let s = (0, i.bG)([l.A], () => l.A.useReducedMotion),
    a = r.useRef(false);
  r.useEffect(() => {
    if (!t || a.current) return;
    let n = e();
    if (null != n && n.offsetHeight > 0) {
      a.current = true, n.scrollIntoView({
        behavior: s ? "auto" : "smooth"
      });
      return
    }
    let r = false,
      i = null,
      l = new ResizeObserver(e => {
        let t = e[0];
        null == t || !(t.contentRect.height > 0) || a.current || r || (a.current = true, l.disconnect(), t.target.scrollIntoView({
          behavior: s ? "auto" : "smooth"
        }))
      }),
      o = () => {
        if (r) return;
        let t = e();
        null != t ? t.offsetHeight > 0 ? (a.current = true, t.scrollIntoView({
          behavior: s ? "auto" : "smooth"
        })) : l.observe(t) : i = requestAnimationFrame(o)
      };
    return o(), () => {
      r = true, null != i && cancelAnimationFrame(i), l.disconnect()
    }
  }, [t, s, ...n]), r.useEffect(() => {
    t || (a.current = false)
  }, [t])
}

function a(e, t) {
  s(() => e.current, t, [e])
}

function o(e, t) {
  s(() => document.getElementById(e), t, [e])
}