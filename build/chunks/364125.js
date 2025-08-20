/** Chunk was on 24255 **/
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
  } = e, E = r.useRef(false), g = (0, l.e7)([i.Z], () => i.Z.getDrawMode()), v = (0, u.Z)((0, s.Z)(t.id, n, d), f), S = (0, u.Z)((0, c.Z)(t.id, n, d), f), h = r.useCallback((e, t, n) => {
    if (null == m) return;
    let {
      x: r,
      y: l
    } = (0, o.hn)(m, n);
    switch (t.type) {
      case a.W.LINE:
        return v[e](t, r, l);
      case a.W.EMOJI_HOSE:
        return S[e](t, r, l)
    }
  }, [m, v, S]), b = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), E.current = true, h("handleMouseDown", g, e))
  }, [h, g, p]), O = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), E.current && h("handleMouseMove", g, e))
  }, [h, g, p]), y = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), E.current = false, h("handleMouseUp", g, e))
  }, [h, g, p]), _ = r.useCallback(e => {
    E.current && null != g && h("handleMouseEnter", g, e)
  }, [h, g]);
  return r.useEffect(() => {
    let e = e => {
      null != g && (E.current = false, h("handleMouseUp", g, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [h, g]), {
    handleClick: r.useCallback(e => {
      p && null != g && e.stopPropagation()
    }, [g, p]),
    handleMouseDown: b,
    handleMouseEnter: _,
    handleMouseMove: O,
    handleMouseUp: y
  }
}