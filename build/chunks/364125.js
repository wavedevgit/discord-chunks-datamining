/** Chunk was on 12416 **/
n.d(t, {
  Z: () => d
});
var r = n(192379),
  l = n(399606),
  i = n(673125),
  o = n(984063),
  a = n(88315),
  s = n(179295),
  c = n(370663),
  u = n(743597);

function d(e) {
  let {
    user: t,
    channelId: n,
    streamerId: d,
    stream: f,
    focused: m,
    canvas: p
  } = e, h = r.useRef(!1), v = (0, l.e7)([i.Z], () => i.Z.getDrawMode()), b = (0, s.Z)((0, c.Z)(t.id, n, d), f), g = (0, s.Z)((0, u.Z)(t.id, n, d), f), y = r.useCallback((e, t, n) => {
    if (null == p) return;
    let {
      x: r,
      y: l
    } = (0, a.hn)(p, n);
    switch (t.type) {
      case o.W.LINE:
        return b[e](t, r, l);
      case o.W.EMOJI_HOSE:
        return g[e](t, r, l)
    }
  }, [p, b, g]), E = r.useCallback(e => {
    m && null != v && (e.stopPropagation(), h.current = !0, y("handleMouseDown", v, e))
  }, [y, v, m]), O = r.useCallback(e => {
    m && null != v && (e.stopPropagation(), h.current && y("handleMouseMove", v, e))
  }, [y, v, m]), S = r.useCallback(e => {
    m && null != v && (e.stopPropagation(), h.current = !1, y("handleMouseUp", v, e))
  }, [y, v, m]), x = r.useCallback(e => {
    h.current && null != v && y("handleMouseEnter", v, e)
  }, [y, v]);
  return r.useEffect(() => {
    let e = e => {
      null != v && (h.current = !1, y("handleMouseUp", v, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [y, v]), {
    handleClick: r.useCallback(e => {
      m && null != v && e.stopPropagation()
    }, [v, m]),
    handleMouseDown: E,
    handleMouseEnter: x,
    handleMouseMove: O,
    handleMouseUp: S
  }
}