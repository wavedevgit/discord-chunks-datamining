/** Chunk was on web.js **/
/** chunk id: 364125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk73800 = require("./73800.js"),
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
    focused: _,
    canvas: p
  } = e, h = r.useRef(false), m = (0, i.e7)([o.Z], () => o.Z.getDrawMode()), g = (0, l.Z)((0, c.Z)(t.id, n, d), f), E = (0, l.Z)((0, u.Z)(t.id, n, d), f), b = r.useCallback((e, t, n) => {
    if (null == p) return;
    let {
      x: r,
      y: i
    } = (0, s.hn)(p, n);
    switch (t.type) {
      case a.W.LINE:
        return g[e](t, r, i);
      case a.W.EMOJI_HOSE:
        return E[e](t, r, i)
    }
  }, [p, g, E]), y = r.useCallback(e => {
    _ && null != m && (e.stopPropagation(), h.current = true, b("handleMouseDown", m, e))
  }, [b, m, _]), O = r.useCallback(e => {
    _ && null != m && (e.stopPropagation(), h.current && b("handleMouseMove", m, e))
  }, [b, m, _]), v = r.useCallback(e => {
    _ && null != m && (e.stopPropagation(), h.current = false, b("handleMouseUp", m, e))
  }, [b, m, _]), I = r.useCallback(e => {
    h.current && null != m && b("handleMouseEnter", m, e)
  }, [b, m]);
  return r.useEffect(() => {
    let e = e => {
      null != m && (h.current = false, b("handleMouseUp", m, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [b, m]), {
    handleClick: r.useCallback(e => {
      _ && null != m && e.stopPropagation()
    }, [m, _]),
    handleMouseDown: y,
    handleMouseEnter: I,
    handleMouseMove: O,
    handleMouseUp: v
  }
}