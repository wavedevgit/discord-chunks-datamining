/** Chunk was on 58173 **/
n.d(t, {
  Z: () => x
}), n(47120), n(230036), n(653041);
var r = n(200651),
  l = n(192379),
  o = n(990547),
  i = n(442837),
  s = n(100527),
  a = n(906732),
  c = n(213609),
  u = n(675478),
  d = n(19780),
  h = n(709054),
  f = n(208049),
  p = n(763296),
  g = n(242291),
  y = n(174470),
  v = n(549771),
  O = n(964398),
  N = n(409673),
  b = n(710111),
  m = n(619129);

function x(e) {
  let {
    guildId: t,
    channel: n,
    width: x,
    height: C,
    keepOpen: j,
    interactive: E = !0,
    analyticsSource: I,
    onClose: P
  } = e, S = function(e) {
    let [t, n] = (0, i.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
    return l.useMemo(() => {
      let r = [],
        l = [...e, b.X8],
        o = (e, l) => {
          var o, i;
          for (let s of null !== (i = null === (o = t.get(e)) || void 0 === o ? void 0 : o.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : []) {
            let e = n.has(s.soundId);
            (e && l || !e && !l) && s.available && r.push(s)
          }
        };
      return l.forEach(e => o(e, !0)), l.forEach(e => o(e, !1)), r
    }, [t, n, e])
  }((0, v.h)(n, !0)), w = (0, y.j)(), T = l.useRef(null), [Z, _] = l.useState(void 0), R = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: A
  } = (0, a.ZP)(s.Z.SOUNDBOARD_WHEEL), D = l.useCallback(e => {
    (0, g.GN)(e, n.id, A), P()
  }, [A, n.id, P]);
  l.useEffect(() => {
    f.w(), u.DZ.loadIfNecessary()
  }, []), l.useEffect(() => {
    0 === S.length && 0 === w.length && P()
  }, [S.length, w, P]), l.useEffect(() => () => {
    let e = T.current;
    j || null == e || D(e)
  }, [j, D]), (0, c.Z)({
    type: o.ImpressionTypes.POPOUT,
    name: o.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: I,
      guild_id: t,
      media_session_id: R
    }
  }, {
    disableTrack: !E
  });
  let W = l.useCallback(e => {
      T.current = e, _(null == e ? void 0 : e.soundId)
    }, []),
    k = l.useCallback(e => {
      if (null == e) {
        W(null);
        return
      }
      let t = S[e];
      null != t && W(t)
    }, [W, S]),
    M = l.useCallback(e => {
      if (null == e) return;
      let t = S[e];
      null != t && D(t)
    }, [S, D]),
    B = l.useMemo(() => S.map(e => (0, r.jsx)(N.ZP, {
      interactive: E,
      className: m.soundButton,
      sound: e,
      focused: Z === e.soundId,
      channel: n
    }, e.soundId)), [Z, n, E, S]);
  return 0 === S.length ? null : (0, r.jsx)(a.Gt, {
    value: A,
    children: (0, r.jsx)(O.Z, {
      wheelWidth: x,
      wheelHeight: C,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !j,
      activeItem: Z,
      onItemSelect: k,
      onItemAction: M,
      interactive: E,
      children: B
    })
  })
}