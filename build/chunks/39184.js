/** Chunk was on web.js **/
/** chunk id: 39184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk66455 = require("./66455.js"),
  Chunk348275 = require("./348275.js");

function o(e, t, n, o) {
  let s = r.useCallback(e => {
      null == e ? o(null) : "function" == typeof e.getBoundingClientRect && o(e)
    }, [o]),
    l = e.props.ref,
    c = (0, i.A)(l),
    u = r.useCallback(e => {
      (0, a.cZ)(c.current, e), s(e)
    }, [c, s]),
    d = r.useRef(l);
  r.useEffect(() => {
    d.current = l
  }, [l]);
  let f = e.props,
    p = f.buttonRef,
    _ = r.useCallback(e => {
      (0, a.cZ)(p, e), u(e)
    }, [p, u]),
    h = f.innerRef,
    m = r.useCallback(e => {
      (0, a.cZ)(h, e), u(e)
    }, [h, u]),
    g = {
      onMouseEnter: (0, a.cy)(f.onMouseEnter, t.onMouseEnter),
      onMouseLeave: (0, a.cy)(f.onMouseLeave, t.onMouseLeave),
      onFocus: (0, a.cy)(f.onFocus, t.onFocus),
      onBlur: (0, a.cy)(f.onBlur, t.onBlur),
      onContextMenu: (0, a.cy)(f.onContextMenu, t.onContextMenu),
      onClick: (0, a.cy)(f.onClick, t.onClick)
    };
  return null != n && "" !== n && (g["aria-describedby"] = (0, a.iO)(f["aria-describedby"], n)), "string" == typeof e.type ? g.ref = u : "buttonRef" in e.props ? (g.buttonRef = _, g.ref = u) : "innerRef" in e.props ? (g.innerRef = m, g.ref = u) : (g.ref = u, g.innerRef = u), r.cloneElement(e, g)
}