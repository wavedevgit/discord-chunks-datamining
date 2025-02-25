/** Chunk was on 61195 **/
n.d(t, {
  Z: () => O
}), n(47120), n(230036), n(653041);
var i = n(200651),
  o = n(192379),
  r = n(990547),
  a = n(442837),
  l = n(100527),
  c = n(906732),
  s = n(213609),
  u = n(675478),
  d = n(19780),
  _ = n(709054),
  h = n(208049),
  f = n(763296),
  p = n(242291),
  g = n(174470),
  v = n(549771),
  b = n(964398),
  y = n(409673),
  m = n(710111),
  I = n(8305);

function O(e) {
  let {
    guildId: t,
    channel: n,
    width: O,
    height: N,
    keepOpen: C,
    interactive: S = !0,
    analyticsSource: x,
    onClose: w
  } = e, T = function(e) {
    let [t, n] = (0, a.Wu)([f.Z], () => [f.Z.getSounds(), f.Z.getFavorites()]);
    return o.useMemo(() => {
      let i = [],
        o = [...e, m.X8],
        r = (e, o) => {
          var r, a;
          for (let l of null !== (a = null === (r = t.get(e)) || void 0 === r ? void 0 : r.sort((e, t) => _.default.compare(e.soundId, t.soundId))) && void 0 !== a ? a : []) {
            let e = n.has(l.soundId);
            (e && o || !e && !o) && l.available && i.push(l)
          }
        };
      return o.forEach(e => r(e, !0)), o.forEach(e => r(e, !1)), i
    }, [t, n, e])
  }((0, v.h)(n, !0)), P = (0, g.j)(), E = o.useRef(null), [j, Z] = o.useState(void 0), A = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: W
  } = (0, c.ZP)(l.Z.SOUNDBOARD_WHEEL), k = o.useCallback(e => {
    (0, p.GN)(e, n.id, W), w()
  }, [W, n.id, w]);
  o.useEffect(() => {
    h.w(), u.DZ.loadIfNecessary()
  }, []), o.useEffect(() => {
    0 === T.length && 0 === P.length && w()
  }, [T.length, P, w]), o.useEffect(() => () => {
    let e = E.current;
    C || null == e || k(e)
  }, [C, k]), (0, s.Z)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: x,
      guild_id: t,
      media_session_id: A
    }
  }, {
    disableTrack: !S
  });
  let R = o.useCallback(e => {
      E.current = e, Z(null == e ? void 0 : e.soundId)
    }, []),
    D = o.useCallback(e => {
      if (null == e) {
        R(null);
        return
      }
      let t = T[e];
      null != t && R(t)
    }, [R, T]),
    B = o.useCallback(e => {
      if (null == e) return;
      let t = T[e];
      null != t && k(t)
    }, [T, k]),
    F = o.useMemo(() => T.map(e => (0, i.jsx)(y.ZP, {
      interactive: S,
      className: I.soundButton,
      sound: e,
      focused: j === e.soundId,
      channel: n
    }, e.soundId)), [j, n, S, T]);
  return 0 === T.length ? null : (0, i.jsx)(c.Gt, {
    value: W,
    children: (0, i.jsx)(b.Z, {
      wheelWidth: O,
      wheelHeight: N,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !C,
      activeItem: j,
      onItemSelect: D,
      onItemAction: B,
      interactive: S,
      children: F
    })
  })
}