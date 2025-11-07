/** Chunk was on 86642 **/
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
  } = e, m = i.useRef(false), g = (0, r.e7)([l.Z], () => l.Z.getDrawMode()), b = (0, s.Z)((0, c.Z)(t.id, n, d), p), y = (0, s.Z)((0, u.Z)(t.id, n, d), p), C = i.useCallback((e, t, n) => {
    if (null == h) return;
    let {
      x: i,
      y: r
    } = (0, o.hn)(h, n);
    switch (t.type) {
      case a.W.LINE:
        return b[e](t, i, r);
      case a.W.EMOJI_HOSE:
        return y[e](t, i, r)
    }
  }, [h, b, y]), _ = i.useCallback(e => {
    f && null != g && (e.stopPropagation(), m.current = true, C("handleMouseDown", g, e))
  }, [C, g, f]), v = i.useCallback(e => {
    f && null != g && (e.stopPropagation(), m.current && C("handleMouseMove", g, e))
  }, [C, g, f]), x = i.useCallback(e => {
    f && null != g && (e.stopPropagation(), m.current = false, C("handleMouseUp", g, e))
  }, [C, g, f]), O = i.useCallback(e => {
    m.current && null != g && C("handleMouseEnter", g, e)
  }, [C, g]);
  return i.useEffect(() => {
    let e = e => {
      null != g && (m.current = false, C("handleMouseUp", g, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [C, g]), {
    handleClick: i.useCallback(e => {
      f && null != g && e.stopPropagation()
    }, [g, f]),
    handleMouseDown: _,
    handleMouseEnter: O,
    handleMouseMove: v,
    handleMouseUp: x
  }
}