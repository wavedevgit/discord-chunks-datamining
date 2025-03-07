/** Chunk was on 50751 **/
n.d(t, {
  Z: () => C
}), n(47120), n(230036);
var i = n(200651),
  r = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(765250),
  s = n(13245),
  u = n(393238),
  c = n(493773),
  d = n(358221),
  p = n(569545),
  h = n(199902),
  f = n(314897),
  m = n(592125),
  g = n(355863),
  O = n(944486),
  v = n(804570),
  y = n(350663),
  E = n(610394),
  b = n(340101),
  j = n(388032),
  x = n(336412);
let I = [];

function S(e, t, n, i) {
  let r = (i - 1) * y.z;
  return e === b.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max(16 * n / 9, 256)) : Math.min(Math.max(t, 256), Math.max((n - r) / i * 16 / 9, 256))
}

function C(e) {
  let {
    id: t,
    size: n,
    locked: C,
    padding: N,
    borderWidth: Z,
    opacity: w,
    horizontal: P,
    pinned: _,
    anchorTop: T,
    anchorLeft: D,
    showEmpty: k = !0
  } = e, A = 2 * N + 2 * Z, {
    width: L,
    height: R
  } = {
    width: "number" == typeof n.width ? n.width : 256,
    height: "number" == typeof n.height ? n.height : 144
  }, M = (0, l.e7)([O.Z], () => O.Z.getVoiceChannelId()), {
    width: W,
    height: V,
    ref: z
  } = (0, u.Z)(), U = (0, l.e7)([g.Z], () => {
    var e;
    let n = g.Z.getWidget(t);
    return !!(0, b.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e)
  }, [t]), G = !P, F = (0, l.e7)([m.Z], () => m.Z.getChannel(M)), Y = (0, l.e7)([f.default], () => f.default.getId()), H = T && G || D && P, B = !T && G || !D && P, {
    participantsVersion: K,
    activeStreams: Q,
    streamParticipants: X
  } = (0, l.cj)([h.Z, d.Z], () => {
    if (null == M) return {
      streamParticipants: I,
      participantsVersion: -1,
      activeStreams: new Set
    };
    let e = new Set(h.Z.getAllActiveStreamsForChannel(M).map(e => (0, p.V9)(e))),
      t = t => e.has((0, p.V9)(t.stream)),
      n = d.Z.getStreamParticipants(M).filter(e => e.user.id !== Y && (!!U || t(e)));
    return n.sort((e, n) => {
      if (H) {
        if (t(e) && !t(n)) return -1;
        if (!t(e) && t(n)) return 1
      } else if (B) {
        if (t(e) && !t(n)) return 1;
        if (!t(e) && t(n)) return -1
      }
      return e.user.username.localeCompare(n.user.username)
    }), {
      streamParticipants: n,
      activeStreams: e,
      participantsVersion: d.Z.getParticipantsVersion(M)
    }
  }, [M, Y, U, H, B]), J = X.length, q = null == F || 0 === Q.size && C || 0 === J && !C, $ = P ? b.C5.HORIZONTAL : b.C5.VERTICAL, {
    tileWidth: ee,
    layout: et
  } = function(e, t, n, i, l) {
    let o = function(e, t, n, i) {
        let r = S(b.C5.HORIZONTAL, e, t, n),
          l = S(b.C5.VERTICAL, e, t, n);
        switch (i) {
          case b.C5.VERTICAL:
            return l;
          case b.C5.HORIZONTAL:
            return r
        }
        let o = (9 * l / 16 + y.z) * n - y.z;
        return e > 16 * t / 9 ? r : o <= t ? l : 9 * r / 16 <= t ? r : l
      }(n, i, t, l),
      a = S(b.C5.VERTICAL, n, i, t),
      s = null != l ? l : o === a ? b.C5.VERTICAL : b.C5.HORIZONTAL,
      [u, c] = r.useState(o);
    return r.useEffect(() => {
      e || c(o)
    }, [e, o]), {
      layout: s,
      tileWidth: u
    }
  }(!1, X.length, null != W ? W : L - A, null != V ? V : R - A, $), en = {
    id: t,
    width: L,
    height: R,
    sizeOffset: A,
    layout: et,
    padding: N,
    participants: X.length
  };
  return (! function(e) {
    let {
      id: t,
      streamParticipants: n,
      layout: i,
      widgetLayoutSpecs: l
    } = e, o = r.useRef(l);
    r.useEffect(() => {
      o.current = l
    });
    let s = n.length;
    r.useEffect(() => {
      let {
        id: e,
        width: t,
        height: n,
        sizeOffset: i,
        layout: r,
        padding: l
      } = o.current;
      if (0 === s) {
        (256 !== t || 144 !== n) && (0, a.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            width: 256,
            height: 144
          }
        });
        return
      }
      if (r === b.C5.HORIZONTAL) {
        let t = 16 / 9 * (n - i);
        (0, a.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            height: n,
            width: t * s + l * (s - 1) + i
          }
        })
      } else {
        let n = 9 / 16 * (t - i);
        (0, a.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            width: t,
            height: n * s + l * (s - 1) + i
          }
        })
      }
    }, [s]), r.useEffect(() => {
      if (o.current.participants <= 1) return;
      let {
        id: e,
        width: t,
        height: n,
        sizeOffset: r,
        padding: l,
        participants: s
      } = o.current;
      if (i === b.C5.HORIZONTAL) {
        let n = t - r;
        (0, a.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            width: n * s + l * (s - 1) + r,
            height: 9 / 16 * n + r
          }
        })
      } else {
        let t = n - r;
        (0, a.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            width: 16 / 9 * t + r,
            height: t * s + l * (s - 1) + r
          }
        })
      }
    }, [i]), r.useEffect(() => () => {
      (0, a.nv)({
        widgetId: t,
        size: {
          fixed: !0,
          width: 256,
          height: 144
        }
      })
    }, [t])
  }({
    id: t,
    streamParticipants: X,
    layout: et,
    widgetLayoutSpecs: en
  }), r.useEffect(() => {
    s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !q)
  }, [q]), (0, c.ZP)(() => () => {
    s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1)
  }), q && C) ? null : q && !C ? k ? C ? null : (0, i.jsx)(v.E, {
    emptyText: j.NW.string(j.t["T6+rX1"]),
    icon: o.hGI,
    absolute: !0
  }) : null : (0, i.jsx)("div", {
    className: x.goLiveGridContainer,
    style: {
      opacity: w
    },
    ref: z,
    children: (0, i.jsx)(y.Z, {
      widgetId: t,
      tileWidth: ee,
      locked: C,
      layout: et,
      activeStreams: Q,
      streamParticipants: X,
      participantsVersion: K,
      pinned: _
    })
  })
}