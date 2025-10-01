/** Chunk was on web.js **/
/** chunk id: 102725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
    hideOnClick: _ = true
  } = e, p = r.useRef(null), h = null != t ? t : p, [m, g] = r.useState(false), E = r.useRef(null), b = r.useRef(false);
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
    I = r.useCallback(() => {
      var e;
      null == (e = E.current) || e.stop(), g(false), null == u || u()
    }, [u]),
    T = r.useCallback(() => {
      _ && I()
    }, [I, _]),
    S = r.useCallback(e => {
      null == h.current && (h.current = e.currentTarget), b.current = false, v()
    }, [v, h]),
    A = r.useCallback(e => {
      o.Z.keyboardModeEnabled && (null == h.current && (h.current = e.currentTarget), b.current = false, v())
    }, [v, h]),
    C = r.useCallback(() => {
      var e;
      null == (e = E.current) || e.stop(), I()
    }, [I]),
    N = r.useMemo(() => ({
      onMouseEnter: S,
      onMouseLeave: C,
      onFocus: A,
      onBlur: I,
      onContextMenu: I,
      onClick: T
    }), [S, C, A, I, T]);
  return r.useEffect(() => {
    var e, t;
    if (!O) return;
    let n = null != (t = null == (e = h.current) ? true : e.ownerDocument) ? t : document,
      r = e => {
        ("Escape" === e.key || "Esc" === e.key) && (b.current = true, I())
      };
    return n.addEventListener("keydown", r), () => {
      n.removeEventListener("keydown", r)
    }
  }, [O, I, h]), r.useEffect(() => {
    var e, t;
    if (!O) return;
    let n = null != (t = null == (e = h.current) ? true : e.ownerDocument) ? t : document,
      r = () => {
        I()
      };
    return n.addEventListener("click", r), () => {
      n.removeEventListener("click", r)
    }
  }, [O, I, h]), {
    isVisible: O,
    triggerProps: N
  }
}