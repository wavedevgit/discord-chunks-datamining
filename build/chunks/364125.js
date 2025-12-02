/** Chunk was on 46931 **/
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
    canvas: m
  } = e, _ = r.useRef(false), g = (0, i.e7)([l.Z], () => l.Z.getDrawMode()), v = (0, c.Z)((0, s.Z)(t.id, n, d), f), b = (0, c.Z)((0, u.Z)(t.id, n, d), f), h = r.useCallback((e, t, n) => {
    if (null == m) return;
    let {
      x: r,
      y: i
    } = (0, o.hn)(m, n);
    switch (t.type) {
      case a.W.LINE:
        return v[e](t, r, i);
      case a.W.EMOJI_HOSE:
        return b[e](t, r, i)
    }
  }, [m, v, b]), E = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), _.current = true, h("handleMouseDown", g, e))
  }, [h, g, p]), y = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), _.current && h("handleMouseMove", g, e))
  }, [h, g, p]), S = r.useCallback(e => {
    p && null != g && (e.stopPropagation(), _.current = false, h("handleMouseUp", g, e))
  }, [h, g, p]), O = r.useCallback(e => {
    _.current && null != g && h("handleMouseEnter", g, e)
  }, [h, g]);
  return r.useEffect(() => {
    let e = e => {
      null != g && (_.current = false, h("handleMouseUp", g, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [h, g]), {
    handleClick: r.useCallback(e => {
      p && null != g && e.stopPropagation()
    }, [g, p]),
    handleMouseDown: E,
    handleMouseEnter: O,
    handleMouseMove: y,
    handleMouseUp: S
  }
}