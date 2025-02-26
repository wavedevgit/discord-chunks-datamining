/** Chunk was on 50751 **/
n.d(t, {
  Z: () => x,
  z: () => y
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(120356),
  l = n.n(o),
  s = n(642128),
  a = n(481060),
  u = n(110924),
  c = n(569545),
  d = n(237997),
  p = n(444295),
  h = n(752802),
  f = n(340101),
  m = n(981631),
  g = n(978399);

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 8,
  E = e => {
    let {
      participant: t,
      width: n,
      locked: r,
      widgetId: o,
      pinned: l
    } = e;
    return (0, i.jsx)("div", {
      className: g.tileContainer,
      children: (0, i.jsx)(h.Z, {
        participant: t,
        width: n,
        locked: r,
        widgetId: o,
        pinned: l
      }, t.user.id)
    })
  },
  b = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  x = r.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      layout: o,
      locked: h,
      activeStreams: x,
      streamParticipants: j,
      participantsVersion: S,
      pinned: I
    } = e, C = 9 / 16 * n, N = j.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      locked: h,
      widgetId: t,
      height: C,
      pinned: I
    })), Z = (0, u.Z)(n), w = o === f.C5.VERTICAL, _ = 0, P = 0, T = (0, a.Yzy)(w ? N.map((e, t) => v(O({}, e), {
      y: (_ += e.height + (t > 0 ? y : 0)) - e.height,
      x: 0
    })) : N.map((e, t) => v(O({}, e), {
      x: (P += e.width + (t > 0 ? y : 0)) - e.width,
      y: 0
    })), {
      key: e => e.key,
      from: {
        height: 0,
        opacity: 0
      },
      leave: {
        height: 0,
        opacity: 0
      },
      enter: e => {
        let {
          x: t,
          y: n,
          width: i,
          height: r
        } = e;
        return {
          x: t,
          y: n,
          width: i,
          height: r,
          opacity: 1
        }
      },
      update: e => {
        let {
          x: t,
          y: n,
          width: i,
          height: r
        } = e;
        return {
          x: t,
          y: n,
          width: i,
          height: r
        }
      },
      config: b,
      trail: 100 * (n === Z)
    }, n !== Z ? "animate-never" : "respect-motion-settings"), D = (0, p.ee)(() => new Set(j.map(e => e.user.id)), [j, S]), A = (0, p.ee)(() => new Set(j.filter(e => x.has((0, c.V9)(e.stream))).map(e => e.user.id)), [j, x, S]);
    return r.useEffect(() => {
      0 !== D.size && (0, p.zi)(m.Odu.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(D),
        liveUserIds: Array.from(A),
        contentInventoryIds: []
      })
    }, [D, A]), (0, i.jsx)("div", {
      className: l()({
        [g.gridContainer]: !0,
        [g.vertical]: w,
        [g.horizontal]: !w
      }),
      style: w ? {
        height: _
      } : {
        width: P
      },
      children: T((e, t, r, o) => (0, i.jsx)(s.animated.div, {
        className: g.gridItem,
        style: Object.assign({}, e, {
          width: n,
          height: C,
          zIndex: N.length - o
        }),
        children: E(t)
      }))
    })
  })