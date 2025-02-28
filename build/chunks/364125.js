/** Chunk was on 12416 **/
n.d(t, {
  Z: () => d
});
var r = n(192379),
  i = n(399606),
  l = n(673125),
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
  } = e, h = r.useRef(!1), b = (0, i.e7)([l.Z], () => l.Z.getDrawMode()), v = (0, s.Z)((0, c.Z)(t.id, n, d), f), g = (0, s.Z)((0, u.Z)(t.id, n, d), f), y = r.useCallback((e, t, n) => {
    if (null == p) return;
    let {
      x: r,
      y: i
    } = (0, a.hn)(p, n);
    switch (t.type) {
      case o.W.LINE:
        return v[e](t, r, i);
      case o.W.EMOJI_HOSE:
        return g[e](t, r, i)
    }
  }, [p, v, g]), E = r.useCallback(e => {
    m && null != b && (e.stopPropagation(), h.current = !0, y("handleMouseDown", b, e))
  }, [y, b, m]), O = r.useCallback(e => {
    m && null != b && (e.stopPropagation(), h.current && y("handleMouseMove", b, e))
  }, [y, b, m]), S = r.useCallback(e => {
    m && null != b && (e.stopPropagation(), h.current = !1, y("handleMouseUp", b, e))
  }, [y, b, m]), j = r.useCallback(e => {
    h.current && null != b && y("handleMouseEnter", b, e)
  }, [y, b]);
  return r.useEffect(() => {
    let e = e => {
      null != b && (h.current = !1, y("handleMouseUp", b, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [y, b]), {
    handleClick: r.useCallback(e => {
      m && null != b && e.stopPropagation()
    }, [b, m]),
    handleMouseDown: E,
    handleMouseEnter: j,
    handleMouseMove: O,
    handleMouseUp: S
  }
}