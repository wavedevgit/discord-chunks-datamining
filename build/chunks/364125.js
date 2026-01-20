/** Chunk was on 11010 **/
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
  } = e, m = r.useRef(false), b = (0, i.e7)([l.Z], () => l.Z.getDrawMode()), h = (0, c.Z)((0, s.Z)(t.id, n, d), f), v = (0, c.Z)((0, u.Z)(t.id, n, d), f), E = r.useCallback((e, t, n) => {
    if (null == g) return;
    let {
      x: r,
      y: i
    } = (0, o.hn)(g, n);
    switch (t.type) {
      case a.W.LINE:
        return h[e](t, r, i);
      case a.W.EMOJI_HOSE:
        return v[e](t, r, i)
    }
  }, [g, h, v]), y = r.useCallback(e => {
    p && null != b && (e.stopPropagation(), m.current = true, E("handleMouseDown", b, e))
  }, [E, b, p]), _ = r.useCallback(e => {
    p && null != b && (e.stopPropagation(), m.current && E("handleMouseMove", b, e))
  }, [E, b, p]), O = r.useCallback(e => {
    p && null != b && (e.stopPropagation(), m.current = false, E("handleMouseUp", b, e))
  }, [E, b, p]), C = r.useCallback(e => {
    m.current && null != b && E("handleMouseEnter", b, e)
  }, [E, b]);
  return r.useEffect(() => {
    let e = e => {
      null != b && (m.current = false, E("handleMouseUp", b, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [E, b]), {
    handleClick: r.useCallback(e => {
      p && null != b && e.stopPropagation()
    }, [b, p]),
    handleMouseDown: y,
    handleMouseEnter: C,
    handleMouseMove: _,
    handleMouseUp: O
  }
}