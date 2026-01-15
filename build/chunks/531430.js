/** Chunk was on web.js **/
/** chunk id: 531430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk846519 = require("./846519.js"),
  Chunk607070 = require("./607070.js");
let s = 0;

function l(e) {
  let {
    targetElementRef: t,
    shouldShow: n = true,
    delay: l,
    onTooltipShow: c,
    onTooltipHide: u,
    forceOpen: d = false,
    overflowOnly: f = false,
    hideOnClick: p = true
  } = e, _ = r.useRef(null), h = null != t ? t : _, [m, g] = r.useState(false), E = r.useRef(null), b = r.useRef(false);
  r.useEffect(() => (E.current = new a.V7, () => {
    let e = E.current;
    null != e && e.stop()
  }), []);
  let y = null != h.current,
    O = false !== n && (m || d) && y && !b.current,
    v = r.useCallback(() => {
      if (b.current || f && null == h.current) return;
      if (f && null != h.current) {
        let e = h.current;
        if ((0, i.kK)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
      }
      let e = null != l ? l : s,
        t = E.current;
      null != t && t.start(e, () => {
        g(true), null == c || c()
      }, false)
    }, [l, c, f, h]),
    S = r.useCallback(() => {
      var e;
      null == (e = E.current) || e.stop(), g(false), null == u || u()
    }, [u]),
    I = r.useCallback(() => {
      p && S()
    }, [S, p]),
    T = r.useCallback(e => {
      null == h.current && (h.current = e.currentTarget), b.current = false, v()
    }, [v, h]),
    C = r.useCallback(e => {
      o.Z.keyboardModeEnabled && (null == h.current && (h.current = e.currentTarget), b.current = false, v())
    }, [v, h]),
    A = r.useCallback(() => {
      var e;
      null == (e = E.current) || e.stop(), S()
    }, [S]),
    N = r.useMemo(() => ({
      onMouseEnter: T,
      onMouseLeave: A,
      onFocus: C,
      onBlur: S,
      onContextMenu: S,
      onClick: I
    }), [T, A, C, S, I]);
  return r.useEffect(() => {
    var e, t;
    if (!O) return;
    let n = null != (t = null == (e = h.current) ? true : e.ownerDocument) ? t : document,
      r = e => {
        ("Escape" === e.key || "Esc" === e.key) && (b.current = true, S())
      };
    return n.addEventListener("keydown", r), () => {
      n.removeEventListener("keydown", r)
    }
  }, [O, S, h]), r.useEffect(() => {
    var e, t;
    if (!O) return;
    let n = null != (t = null == (e = h.current) ? true : e.ownerDocument) ? t : document,
      r = () => {
        S()
      };
    return n.addEventListener("click", r), () => {
      n.removeEventListener("click", r)
    }
  }, [O, S, h]), {
    isVisible: O,
    triggerProps: N
  }
}