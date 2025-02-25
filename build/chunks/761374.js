/** Chunk was on 50751 **/
n.d(t, {
  Z: () => C
}), n(47120), n(230036);
var i = n(200651),
  r = n(192379),
  o = n(442837),
  l = n(481060),
  s = n(765250),
  a = n(13245),
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
  x = n(388032),
  j = n(507731);
let S = [];

function I(e, t, n, i) {
  let r = (i - 1) * y.z;
  return e === b.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max(16 * n / 9, 256)) : Math.min(Math.max(t, 256), Math.max((n - r) / i * 16 / 9, 256))
}

function C(e) {
  let {
    id: t,
    size: n,
    locked: C,
    padding: Z,
    borderWidth: N,
    opacity: w,
    horizontal: _,
    pinned: P,
    anchorTop: T,
    anchorLeft: A,
    showEmpty: D = !0
  } = e, k = 2 * Z + 2 * N, {
    width: L,
    height: R
  } = {
    width: "number" == typeof n.width ? n.width : 256,
    height: "number" == typeof n.height ? n.height : 144
  }, M = (0, o.e7)([O.Z], () => O.Z.getVoiceChannelId()), {
    width: W,
    height: V,
    ref: z
  } = (0, u.Z)(), U = (0, o.e7)([g.Z], () => {
    var e;
    let n = g.Z.getWidget(t);
    return !!(0, b.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e)
  }, [t]), F = !_, G = (0, o.e7)([m.Z], () => m.Z.getChannel(M)), Y = (0, o.e7)([f.default], () => f.default.getId()), B = T && F || A && _, H = !T && F || !A && _, {
    participantsVersion: Q,
    activeStreams: K,
    streamParticipants: X
  } = (0, o.cj)([h.Z, d.Z], () => {
    if (null == M) return {
      streamParticipants: S,
      participantsVersion: -1,
      activeStreams: new Set
    };
    let e = new Set(h.Z.getAllActiveStreamsForChannel(M).map(e => (0, p.V9)(e))),
      t = t => e.has((0, p.V9)(t.stream)),
      n = d.Z.getStreamParticipants(M).filter(e => e.user.id !== Y && (!!U || t(e)));
    return n.sort((e, n) => {
      if (B) {
        if (t(e) && !t(n)) return -1;
        if (!t(e) && t(n)) return 1
      } else if (H) {
        if (t(e) && !t(n)) return 1;
        if (!t(e) && t(n)) return -1
      }
      return e.user.username.localeCompare(n.user.username)
    }), {
      streamParticipants: n,
      activeStreams: e,
      participantsVersion: d.Z.getParticipantsVersion(M)
    }
  }, [M, Y, U, B, H]), J = X.length, q = null == G || 0 === K.size && C || 0 === J && !C, $ = _ ? b.C5.HORIZONTAL : b.C5.VERTICAL, {
    tileWidth: ee,
    layout: et
  } = function(e, t, n, i, o) {
    let l = function(e, t, n, i) {
        let r = I(b.C5.HORIZONTAL, e, t, n),
          o = I(b.C5.VERTICAL, e, t, n);
        switch (i) {
          case b.C5.VERTICAL:
            return o;
          case b.C5.HORIZONTAL:
            return r
        }
        let l = (9 * o / 16 + y.z) * n - y.z;
        return e > 16 * t / 9 ? r : l <= t ? o : 9 * r / 16 <= t ? r : o
      }(n, i, t, o),
      s = I(b.C5.VERTICAL, n, i, t),
      a = null != o ? o : l === s ? b.C5.VERTICAL : b.C5.HORIZONTAL,
      [u, c] = r.useState(l);
    return r.useEffect(() => {
      e || c(l)
    }, [e, l]), {
      layout: a,
      tileWidth: u
    }
  }(!1, X.length, null != W ? W : L - k, null != V ? V : R - k, $), en = {
    id: t,
    width: L,
    height: R,
    sizeOffset: k,
    layout: et,
    padding: Z,
    participants: X.length
  };
  return (! function(e) {
    let {
      id: t,
      streamParticipants: n,
      layout: i,
      widgetLayoutSpecs: o
    } = e, l = r.useRef(o);
    r.useEffect(() => {
      l.current = o
    });
    let a = n.length;
    r.useEffect(() => {
      let {
        id: e,
        width: t,
        height: n,
        sizeOffset: i,
        layout: r,
        padding: o
      } = l.current;
      if (0 === a) {
        (256 !== t || 144 !== n) && (0, s.nv)({
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
        (0, s.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            height: n,
            width: t * a + o * (a - 1) + i
          }
        })
      } else {
        let n = 9 / 16 * (t - i);
        (0, s.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            width: t,
            height: n * a + o * (a - 1) + i
          }
        })
      }
    }, [a]), r.useEffect(() => {
      if (l.current.participants <= 1) return;
      let {
        id: e,
        width: t,
        height: n,
        sizeOffset: r,
        padding: o,
        participants: a
      } = l.current;
      if (i === b.C5.HORIZONTAL) {
        let n = t - r;
        (0, s.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            width: n * a + o * (a - 1) + r,
            height: 9 / 16 * n + r
          }
        })
      } else {
        let t = n - r;
        (0, s.nv)({
          widgetId: e,
          size: {
            fixed: !0,
            width: 16 / 9 * t + r,
            height: t * a + o * (a - 1) + r
          }
        })
      }
    }, [i]), r.useEffect(() => () => {
      (0, s.nv)({
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
    a.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !q)
  }, [q]), (0, c.ZP)(() => () => {
    a.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1)
  }), q && C) ? null : q && !C ? D ? C ? null : (0, i.jsx)(v.E, {
    emptyText: x.NW.string(x.t["T6+rX1"]),
    icon: l.hGI,
    absolute: !0
  }) : null : (0, i.jsx)("div", {
    className: j.goLiveGridContainer,
    style: {
      opacity: w
    },
    ref: z,
    children: (0, i.jsx)(y.Z, {
      widgetId: t,
      tileWidth: ee,
      locked: C,
      layout: et,
      activeStreams: K,
      streamParticipants: X,
      participantsVersion: Q,
      pinned: P
    })
  })
}