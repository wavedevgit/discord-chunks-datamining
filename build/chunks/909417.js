/** Chunk was on 17869 **/
/** chunk id: 909417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk533117 = require("./533117.js"),
  Chunk134753 = require("./134753.js"),
  Chunk666717 = require("./666717.js"),
  Chunk245704 = require("./245704.js"),
  Chunk254970 = require("./254970.js"),
  Chunk975501 = require("./975501.js");

function d(e) {
  let {
    user: t,
    channelId: n,
    streamerId: d,
    stream: h,
    focused: p,
    canvas: f
  } = e, m = l.useRef(false), g = (0, r.bG)([i.A], () => i.A.getDrawMode()), A = (0, o.A)((0, c.A)(t.id, n, d), h), b = (0, o.A)((0, u.A)(t.id, n, d), h), _ = l.useCallback((e, t, n) => {
    if (null == f) return;
    let {
      x: l,
      y: r
    } = (0, s.av)(f, n);
    switch (t.type) {
      case a.Z.LINE:
        return A[e](t, l, r);
      case a.Z.EMOJI_HOSE:
        return b[e](t, l, r)
    }
  }, [f, A, b]), y = l.useCallback(e => {
    p && null != g && (e.stopPropagation(), m.current = true, _("handleMouseDown", g, e))
  }, [_, g, p]), E = l.useCallback(e => {
    p && null != g && (e.stopPropagation(), m.current && _("handleMouseMove", g, e))
  }, [_, g, p]), v = l.useCallback(e => {
    p && null != g && (e.stopPropagation(), m.current = false, _("handleMouseUp", g, e))
  }, [_, g, p]), O = l.useCallback(e => {
    m.current && null != g && _("handleMouseEnter", g, e)
  }, [_, g]);
  return l.useEffect(() => {
    let e = e => {
      null != g && (m.current = false, _("handleMouseUp", g, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [_, g]), {
    handleClick: l.useCallback(e => {
      p && null != g && e.stopPropagation()
    }, [g, p]),
    handleMouseDown: y,
    handleMouseEnter: O,
    handleMouseMove: E,
    handleMouseUp: v
  }
}