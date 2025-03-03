/** Chunk was on 7755 **/
n.d(t, {
  Z: () => x
}), n(47120), n(230036), n(653041);
var r = n(200651),
  l = n(192379),
  i = n(990547),
  o = n(442837),
  a = n(100527),
  s = n(906732),
  c = n(213609),
  u = n(675478),
  d = n(19780),
  h = n(709054),
  f = n(208049),
  p = n(763296),
  g = n(242291),
  v = n(174470),
  N = n(549771),
  O = n(964398),
  y = n(409673),
  b = n(710111),
  m = n(749416);

function x(e) {
  let {
    guildId: t,
    channel: n,
    width: x,
    height: I,
    keepOpen: C,
    interactive: E = !0,
    analyticsSource: j,
    onClose: w
  } = e, T = function(e) {
    let [t, n] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
    return l.useMemo(() => {
      let r = [],
        l = [...e, b.X8],
        i = (e, l) => {
          var i, o;
          for (let a of null !== (o = null === (i = t.get(e)) || void 0 === i ? void 0 : i.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== o ? o : []) {
            let e = n.has(a.soundId);
            (e && l || !e && !l) && a.available && r.push(a)
          }
        };
      return l.forEach(e => i(e, !0)), l.forEach(e => i(e, !1)), r
    }, [t, n, e])
  }((0, N.h)(n, !0)), P = (0, v.j)(), S = l.useRef(null), [Z, _] = l.useState(void 0), A = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: R
  } = (0, s.ZP)(a.Z.SOUNDBOARD_WHEEL), k = l.useCallback(e => {
    (0, g.GN)(e, n.id, R), w()
  }, [R, n.id, w]);
  l.useEffect(() => {
    f.w(), u.DZ.loadIfNecessary()
  }, []), l.useEffect(() => {
    0 === T.length && 0 === P.length && w()
  }, [T.length, P, w]), l.useEffect(() => () => {
    let e = S.current;
    C || null == e || k(e)
  }, [C, k]), (0, c.Z)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: j,
      guild_id: t,
      media_session_id: A
    }
  }, {
    disableTrack: !E
  });
  let D = l.useCallback(e => {
      S.current = e, _(null == e ? void 0 : e.soundId)
    }, []),
    W = l.useCallback(e => {
      if (null == e) {
        D(null);
        return
      }
      let t = T[e];
      null != t && D(t)
    }, [D, T]),
    M = l.useCallback(e => {
      if (null == e) return;
      let t = T[e];
      null != t && k(t)
    }, [T, k]),
    F = l.useMemo(() => T.map(e => (0, r.jsx)(y.ZP, {
      interactive: E,
      className: m.soundButton,
      sound: e,
      focused: Z === e.soundId,
      channel: n
    }, e.soundId)), [Z, n, E, T]);
  return 0 === T.length ? null : (0, r.jsx)(s.Gt, {
    value: R,
    children: (0, r.jsx)(O.Z, {
      wheelWidth: x,
      wheelHeight: I,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !C,
      activeItem: Z,
      onItemSelect: W,
      onItemAction: M,
      interactive: E,
      children: F
    })
  })
}