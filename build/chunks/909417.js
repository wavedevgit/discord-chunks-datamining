/** Chunk was on 31748 **/
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
    stream: f,
    focused: p,
    canvas: b
  } = e, g = l.useRef(false), m = (0, r.bG)([i.A], () => i.A.getDrawMode()), h = (0, o.A)((0, c.A)(t.id, n, d), f), A = (0, o.A)((0, u.A)(t.id, n, d), f), y = l.useCallback((e, t, n) => {
    if (null == b) return;
    let {
      x: l,
      y: r
    } = (0, s.av)(b, n);
    switch (t.type) {
      case a.Z.LINE:
        return h[e](t, l, r);
      case a.Z.EMOJI_HOSE:
        return A[e](t, l, r)
    }
  }, [b, h, A]), _ = l.useCallback(e => {
    p && null != m && (e.stopPropagation(), g.current = true, y("handleMouseDown", m, e))
  }, [y, m, p]), E = l.useCallback(e => {
    p && null != m && (e.stopPropagation(), g.current && y("handleMouseMove", m, e))
  }, [y, m, p]), v = l.useCallback(e => {
    p && null != m && (e.stopPropagation(), g.current = false, y("handleMouseUp", m, e))
  }, [y, m, p]), O = l.useCallback(e => {
    g.current && null != m && y("handleMouseEnter", m, e)
  }, [y, m]);
  return l.useEffect(() => {
    let e = e => {
      null != m && (g.current = false, y("handleMouseUp", m, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [y, m]), {
    handleClick: l.useCallback(e => {
      p && null != m && e.stopPropagation()
    }, [m, p]),
    handleMouseDown: _,
    handleMouseEnter: O,
    handleMouseMove: E,
    handleMouseUp: v
  }
}