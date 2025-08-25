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
    overflowOnly: f = false
  } = e, _ = r.useRef(null), p = null != t ? t : _, [h, m] = r.useState(false), [g, E] = r.useState(false), b = r.useRef(null);
  r.useEffect(() => (b.current = new o.V7, () => {
    let e = b.current;
    null != e && e.stop()
  }), []);
  let y = null != p.current,
    O = false !== n && (h || d) && y;
  r.useEffect(() => {
    O && E(true)
  }, [O]);
  let v = r.useCallback(() => {
      E(false)
    }, []),
    I = r.useCallback(() => {
      if (f && null != p.current) {
        let e = p.current;
        if ((0, i.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
      }
      let e = null != l ? l : s,
        t = b.current;
      null != t && t.start(e, () => {
        m(true), null == c || c()
      }, false)
    }, [l, c, f, p]),
    T = r.useCallback(() => {
      let e = b.current;
      null != e && e.stop(), m(false), null == u || u()
    }, [u]),
    S = r.useCallback(e => {
      null == p.current && (p.current = e.currentTarget), I()
    }, [I, p]),
    A = r.useCallback(e => {
      null == p.current && (p.current = e.currentTarget), a.Z.keyboardModeEnabled && I()
    }, [I, p]);
  return {
    isVisible: O,
    isRendered: g,
    triggerProps: r.useMemo(() => ({
      onMouseEnter: S,
      onMouseLeave: T,
      onFocus: A,
      onBlur: T,
      onContextMenu: T
    }), [S, A, T]),
    handleExitComplete: v
  }
}