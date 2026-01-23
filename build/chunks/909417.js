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
    canvas: g
  } = e, m = r.useRef(false), _ = (0, l.bG)([i.A], () => i.A.getDrawMode()), h = (0, s.A)((0, c.A)(t.id, n, d), f), y = (0, s.A)((0, u.A)(t.id, n, d), f), A = r.useCallback((e, t, n) => {
    if (null == g) return;
    let {
      x: r,
      y: l
    } = (0, o.av)(g, n);
    switch (t.type) {
      case a.Z.LINE:
        return h[e](t, r, l);
      case a.Z.EMOJI_HOSE:
        return y[e](t, r, l)
    }
  }, [g, h, y]), b = r.useCallback(e => {
    p && null != _ && (e.stopPropagation(), m.current = true, A("handleMouseDown", _, e))
  }, [A, _, p]), E = r.useCallback(e => {
    p && null != _ && (e.stopPropagation(), m.current && A("handleMouseMove", _, e))
  }, [A, _, p]), v = r.useCallback(e => {
    p && null != _ && (e.stopPropagation(), m.current = false, A("handleMouseUp", _, e))
  }, [A, _, p]), O = r.useCallback(e => {
    m.current && null != _ && A("handleMouseEnter", _, e)
  }, [A, _]);
  return r.useEffect(() => {
    let e = e => {
      null != _ && (m.current = false, A("handleMouseUp", _, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [A, _]), {
    handleClick: r.useCallback(e => {
      p && null != _ && e.stopPropagation()
    }, [_, p]),
    handleMouseDown: b,
    handleMouseEnter: O,
    handleMouseMove: E,
    handleMouseUp: v
  }
}