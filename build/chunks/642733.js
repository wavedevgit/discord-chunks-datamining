/** Chunk was on web.js **/
/** chunk id: 642733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk451988 = require("./451988.js"),
  Chunk775602 = require("./775602.js");
let o = 0;

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
  r.useEffect(() => (E.current = new a.Ep, () => {
    let e = E.current;
    null != e && e.stop()
  }), []);
  let y = null != h.current,
    O = false !== n && (m || d) && y && !b.current,
    A = r.useCallback(() => {
      if (b.current || f && null == h.current) return;
      if (f && null != h.current) {
        let e = h.current;
        if ((0, i.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
      }
      let e = null != l ? l : o,
        t = E.current;
      null != t && t.start(e, () => {
        g(true), null == c || c()
      }, false)
    }, [l, c, f, h]),
    v = r.useCallback(() => {
      var e;
      null == (e = E.current) || e.stop(), g(false), null == u || u()
    }, [u]),
    S = r.useCallback(() => {
      p && v()
    }, [v, p]),
    I = r.useCallback(e => {
      null == h.current && (h.current = e.currentTarget), b.current = false, A()
    }, [A, h]),
    T = r.useCallback(e => {
      s.A.keyboardModeEnabled && (null == h.current && (h.current = e.currentTarget), b.current = false, A())
    }, [A, h]),
    C = r.useCallback(() => {
      var e;
      null == (e = E.current) || e.stop(), v()
    }, [v]),
    N = r.useMemo(() => ({
      onMouseEnter: I,
      onMouseLeave: C,
      onFocus: T,
      onBlur: v,
      onContextMenu: v,
      onClick: S
    }), [I, C, T, v, S]);
  return r.useEffect(() => {
    var e, t;
    if (!O) return;
    let n = null != (e = null == (t = h.current) ? true : t.ownerDocument) ? e : document,
      r = e => {
        ("Escape" === e.key || "Esc" === e.key) && (b.current = true, v())
      };
    return n.addEventListener("keydown", r), () => {
      n.removeEventListener("keydown", r)
    }
  }, [O, v, h]), r.useEffect(() => {
    var e, t;
    if (!O) return;
    let n = null != (e = null == (t = h.current) ? true : t.ownerDocument) ? e : document,
      r = () => {
        v()
      };
    return n.addEventListener("click", r), () => {
      n.removeEventListener("click", r)
    }
  }, [O, v, h]), {
    isVisible: O,
    triggerProps: N
  }
}