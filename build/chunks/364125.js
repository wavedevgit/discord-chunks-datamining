/** Chunk was on 88647 **/
/** chunk id: 364125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk647438 = require("./647438.js"),
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
    stream: p,
    focused: f,
    canvas: h
  } = e, m = r.useRef(false), g = (0, i.e7)([l.Z], () => l.Z.getDrawMode()), b = (0, s.Z)((0, c.Z)(t.id, n, d), p), _ = (0, s.Z)((0, u.Z)(t.id, n, d), p), y = r.useCallback((e, t, n) => {
    if (null == h) return;
    let {
      x: r,
      y: i
    } = (0, o.hn)(h, n);
    switch (t.type) {
      case a.W.LINE:
        return b[e](t, r, i);
      case a.W.EMOJI_HOSE:
        return _[e](t, r, i)
    }
  }, [h, b, _]), C = r.useCallback(e => {
    f && null != g && (e.stopPropagation(), m.current = true, y("handleMouseDown", g, e))
  }, [y, g, f]), v = r.useCallback(e => {
    f && null != g && (e.stopPropagation(), m.current && y("handleMouseMove", g, e))
  }, [y, g, f]), O = r.useCallback(e => {
    f && null != g && (e.stopPropagation(), m.current = false, y("handleMouseUp", g, e))
  }, [y, g, f]), x = r.useCallback(e => {
    m.current && null != g && y("handleMouseEnter", g, e)
  }, [y, g]);
  return r.useEffect(() => {
    let e = e => {
      null != g && (m.current = false, y("handleMouseUp", g, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [y, g]), {
    handleClick: r.useCallback(e => {
      f && null != g && e.stopPropagation()
    }, [g, f]),
    handleMouseDown: C,
    handleMouseEnter: x,
    handleMouseMove: v,
    handleMouseUp: O
  }
}