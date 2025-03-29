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
  } = e, h = r.useRef(!1), v = (0, i.e7)([l.Z], () => l.Z.getDrawMode()), b = (0, s.Z)((0, c.Z)(t.id, n, d), f), g = (0, s.Z)((0, u.Z)(t.id, n, d), f), E = r.useCallback((e, t, n) => {
    if (null == p) return;
    let {
      x: r,
      y: i
    } = (0, a.hn)(p, n);
    switch (t.type) {
      case o.W.LINE:
        return b[e](t, r, i);
      case o.W.EMOJI_HOSE:
        return g[e](t, r, i)
    }
  }, [p, b, g]), y = r.useCallback(e => {
    m && null != v && (e.stopPropagation(), h.current = !0, E("handleMouseDown", v, e))
  }, [E, v, m]), O = r.useCallback(e => {
    m && null != v && (e.stopPropagation(), h.current && E("handleMouseMove", v, e))
  }, [E, v, m]), S = r.useCallback(e => {
    m && null != v && (e.stopPropagation(), h.current = !1, E("handleMouseUp", v, e))
  }, [E, v, m]), x = r.useCallback(e => {
    h.current && null != v && E("handleMouseEnter", v, e)
  }, [E, v]);
  return r.useEffect(() => {
    let e = e => {
      null != v && (h.current = !1, E("handleMouseUp", v, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [E, v]), {
    handleClick: r.useCallback(e => {
      m && null != v && e.stopPropagation()
    }, [v, m]),
    handleMouseDown: y,
    handleMouseEnter: x,
    handleMouseMove: O,
    handleMouseUp: S
  }
}