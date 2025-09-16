/** Chunk was on web.js **/
/** chunk id: 102725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk374470 = require("./374470.js"),
  Chunk846519 = require("./846519.js");
let o = 0;

function s(e) {
  let {
    targetElementRef: t,
    shouldShow: n = true,
    delay: s,
    onTooltipShow: l,
    onTooltipHide: c,
    forceOpen: u = false,
    overflowOnly: d = false
  } = e, f = 150, _ = r.useRef(null), p = null != t ? t : _, [h, m] = r.useState(false), [g, E] = r.useState(false), b = r.useRef(null), y = r.useRef(null), O = r.useRef(false), v = r.useRef(false), I = r.useRef(false);
  r.useEffect(() => (b.current = new a.V7, y.current = new a.V7, () => {
    let e = b.current;
    null != e && e.stop();
    let t = y.current;
    null != t && t.stop()
  }), []);
  let T = null != p.current,
    S = false !== n && (h || u) && T && !I.current;
  r.useEffect(() => {
    S && E(true)
  }, [S]);
  let A = r.useCallback(() => {
      E(false)
    }, []),
    C = r.useCallback(() => {
      if (I.current) return;
      if (d && null != p.current) {
        let e = p.current;
        if ((0, i.kK)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
      }
      let e = null != s ? s : o,
        t = b.current;
      null != t && t.start(e, () => {
        m(true), null == l || l()
      }, false)
    }, [s, l, d, p]),
    N = r.useCallback(() => {
      var e, t;
      null == (e = b.current) || e.stop(), null == (t = y.current) || t.stop(), m(false), null == c || c()
    }, [c]),
    R = r.useCallback(() => {
      let e = y.current;
      null != e && e.start(f, () => {
        O.current || v.current || N()
      }, false)
    }, [N]),
    P = r.useCallback(e => {
      var t;
      null == p.current && (p.current = e.currentTarget), O.current = true, null == (t = y.current) || t.stop(), I.current = false, C()
    }, [C, p]),
    w = r.useCallback(e => {
      null == p.current && (p.current = e.currentTarget), I.current = false, C()
    }, [C, p]),
    D = r.useCallback(() => {
      O.current = false, v.current || R()
    }, [R]),
    x = r.useCallback(() => {
      var e;
      v.current = true, null == (e = y.current) || e.stop()
    }, []),
    L = r.useCallback(() => {
      v.current = false, O.current || R()
    }, [R]),
    j = r.useMemo(() => ({
      onMouseEnter: P,
      onMouseLeave: D,
      onFocus: w,
      onBlur: N,
      onContextMenu: N
    }), [P, D, w, N]);
  return r.useEffect(() => {
    var e, t;
    if (!S) return;
    let n = null != (t = null == (e = p.current) ? true : e.ownerDocument) ? t : document,
      r = e => {
        ("Escape" === e.key || "Esc" === e.key) && (I.current = true, N())
      };
    return n.addEventListener("keydown", r), () => {
      n.removeEventListener("keydown", r)
    }
  }, [S, N, p]), {
    isVisible: S,
    isRendered: g,
    triggerProps: j,
    handleExitComplete: A,
    onTooltipMouseEnter: x,
    onTooltipMouseLeave: L
  }
}