/** Chunk was on 54082 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(433517),
  c = n(519938),
  u = n(241915),
  d = n(366050),
  p = n(27457),
  h = n(981631),
  f = n(354459),
  m = n(862102),
  g = n(423308);
let b = "CameraPreviewPosition";

function _(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: l,
    channel: _,
    participants: C
  } = e, [v, y] = function() {
    let [e, t] = i.useState(() => s.K.get(b, h.VD2.BOTTOM_RIGHT));
    return [e, i.useCallback(e => {
      s.K.set(b, e), t(e)
    }, [])]
  }(), x = i.useRef(null), j = null == _.getGuildId() ? 70 : 50, O = (0, a.e7)([d.Z], () => d.Z.pipWidth(f.cL.CAMERA_PREVIEW)), E = C.length, N = O * E + 8 * (E - 1), I = i.useMemo(() => ({
    minWidth: f.Rv[f.cL.CAMERA_PREVIEW] * E + 8 * (E - 1),
    maxWidth: f.$i[f.cL.CAMERA_PREVIEW] * E + 8 * (E - 1)
  }), [E]);
  i.useLayoutEffect(() => {
    var e;
    null === (e = x.current) || void 0 === e || e.ensureIsInPosition()
  }, [C.length]);
  let P = i.useCallback(e => {
      let t = 0 === E ? e : (e - 8 * (E - 1)) / E;
      c.d7(t, f.cL.CAMERA_PREVIEW)
    }, [E]),
    S = i.useCallback((e, t) => {
      y(t)
    }, [y]);
  return (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(u._, {
      position: v,
      id: 0,
      width: N,
      ref: x,
      onMove: S,
      onResize: P,
      maxX: t,
      maxY: l,
      edgeOffsetTop: j,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      resizeConfig: I,
      children: (0, r.jsx)("div", {
        className: m.tileContainer,
        children: C.map(e => (0, r.jsx)(p.ZP, {
          participant: e,
          channel: _,
          onContextMenu: n,
          className: o()(m.tile, g.elevationHigh),
          fit: p.BP.COVER,
          inCall: !0,
          inPopout: !1,
          width: 160
        }, e.id))
      })
    })
  })
}