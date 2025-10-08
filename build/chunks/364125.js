/** Chunk was on 38319 **/
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
    stream: f,
    focused: p,
    canvas: _
  } = e, m = r.useRef(false), b = (0, i.e7)([l.Z], () => l.Z.getDrawMode()), E = (0, c.Z)((0, s.Z)(t.id, n, d), f), g = (0, c.Z)((0, u.Z)(t.id, n, d), f), v = r.useCallback((e, t, n) => {
    if (null == _) return;
    let {
      x: r,
      y: i
    } = (0, o.hn)(_, n);
    switch (t.type) {
      case a.W.LINE:
        return E[e](t, r, i);
      case a.W.EMOJI_HOSE:
        return g[e](t, r, i)
    }
  }, [_, E, g]), h = r.useCallback(e => {
    p && null != b && (e.stopPropagation(), m.current = true, v("handleMouseDown", b, e))
  }, [v, b, p]), S = r.useCallback(e => {
    p && null != b && (e.stopPropagation(), m.current && v("handleMouseMove", b, e))
  }, [v, b, p]), y = r.useCallback(e => {
    p && null != b && (e.stopPropagation(), m.current = false, v("handleMouseUp", b, e))
  }, [v, b, p]), O = r.useCallback(e => {
    m.current && null != b && v("handleMouseEnter", b, e)
  }, [v, b]);
  return r.useEffect(() => {
    let e = e => {
      null != b && (m.current = false, v("handleMouseUp", b, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [v, b]), {
    handleClick: r.useCallback(e => {
      p && null != b && e.stopPropagation()
    }, [b, p]),
    handleMouseDown: h,
    handleMouseEnter: O,
    handleMouseMove: S,
    handleMouseUp: y
  }
}