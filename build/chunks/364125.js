/** Chunk was on 48615 **/
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
    canvas: b
  } = e, m = r.useRef(false), g = (0, i.e7)([l.Z], () => l.Z.getDrawMode()), v = (0, c.Z)((0, s.Z)(t.id, n, d), f), h = (0, c.Z)((0, u.Z)(t.id, n, d), f), E = r.useCallback((e, t, n) => {
    if (null == b) return;
    let {
      x: r,
      y: i
    } = (0, o.hn)(b, n);
    switch (t.type) {
      case a.W.LINE:
        return v[e](t, r, i);
      case a.W.EMOJI_HOSE:
        return h[e](t, r, i)
    }
  }, [b, v, h]), _ = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), m.current = true, E("handleMouseDown", g, e))
  }, [E, g, p]), y = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), m.current && E("handleMouseMove", g, e))
  }, [E, g, p]), S = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), m.current = false, E("handleMouseUp", g, e))
  }, [E, g, p]), O = r.useCallback(e => {
    m.current && null != g && E("handleMouseEnter", g, e)
  }, [E, g]);
  return r.useEffect(() => {
    let e = e => {
      null != g && (m.current = false, E("handleMouseUp", g, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [E, g]), {
    handleClick: r.useCallback(e => {
      p && null != g && e.stopPropagation()
    }, [g, p]),
    handleMouseDown: _,
    handleMouseEnter: O,
    handleMouseMove: y,
    handleMouseUp: S
  }
}