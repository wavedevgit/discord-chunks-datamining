/** Chunk was on 69813 **/
/** chunk id: 364125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk88315 = require("./88315.js"),
  Chunk179295 = require("./179295.js"),
  Chunk370663 = require("./370663.js"),
  Chunk743597 = require("./743597.js");

function d(e) {
  let {
    user: t,
    channelId: n,
    streamerId: d,
    stream: f,
    focused: p,
    canvas: g
  } = e, b = r.useRef(false), m = (0, l.e7)([i.Z], () => i.Z.getDrawMode()), h = (0, c.Z)((0, s.Z)(t.id, n, d), f), E = (0, c.Z)((0, u.Z)(t.id, n, d), f), v = r.useCallback((e, t, n) => {
    if (null == g) return;
    let {
      x: r,
      y: l
    } = (0, o.hn)(g, n);
    switch (t.type) {
      case a.W.LINE:
        return h[e](t, r, l);
      case a.W.EMOJI_HOSE:
        return E[e](t, r, l)
    }
  }, [g, h, E]), _ = r.useCallback(e => {
    p && null != m && (e.stopPropagation(), b.current = true, v("handleMouseDown", m, e))
  }, [v, m, p]), y = r.useCallback(e => {
    p && null != m && (e.stopPropagation(), b.current && v("handleMouseMove", m, e))
  }, [v, m, p]), O = r.useCallback(e => {
    p && null != m && (e.stopPropagation(), b.current = false, v("handleMouseUp", m, e))
  }, [v, m, p]), S = r.useCallback(e => {
    b.current && null != m && v("handleMouseEnter", m, e)
  }, [v, m]);
  return r.useEffect(() => {
    let e = e => {
      null != m && (b.current = false, v("handleMouseUp", m, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [v, m]), {
    handleClick: r.useCallback(e => {
      p && null != m && e.stopPropagation()
    }, [m, p]),
    handleMouseDown: _,
    handleMouseEnter: S,
    handleMouseMove: y,
    handleMouseUp: O
  }
}