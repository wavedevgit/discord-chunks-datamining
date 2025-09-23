/** Chunk was on 47387 **/
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
    canvas: m
  } = e, E = r.useRef(false), g = (0, l.e7)([i.Z], () => i.Z.getDrawMode()), b = (0, u.Z)((0, s.Z)(t.id, n, d), f), S = (0, u.Z)((0, c.Z)(t.id, n, d), f), v = r.useCallback((e, t, n) => {
    if (null == m) return;
    let {
      x: r,
      y: l
    } = (0, o.hn)(m, n);
    switch (t.type) {
      case a.W.LINE:
        return b[e](t, r, l);
      case a.W.EMOJI_HOSE:
        return S[e](t, r, l)
    }
  }, [m, b, S]), O = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), E.current = true, v("handleMouseDown", g, e))
  }, [v, g, p]), h = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), E.current && v("handleMouseMove", g, e))
  }, [v, g, p]), y = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), E.current = false, v("handleMouseUp", g, e))
  }, [v, g, p]), _ = r.useCallback(e => {
    E.current && null != g && v("handleMouseEnter", g, e)
  }, [v, g]);
  return r.useEffect(() => {
    let e = e => {
      null != g && (E.current = false, v("handleMouseUp", g, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [v, g]), {
    handleClick: r.useCallback(e => {
      p && null != g && e.stopPropagation()
    }, [g, p]),
    handleMouseDown: O,
    handleMouseEnter: _,
    handleMouseMove: h,
    handleMouseUp: y
  }
}