/** Chunk was on 50751 **/
n.d(t, {
  Z: () => j,
  z: () => y
}), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(642128),
  s = n(481060),
  u = n(110924),
  c = n(569545),
  d = n(237997),
  p = n(444295),
  h = n(752802),
  f = n(340101),
  m = n(981631),
  g = n(995674);

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
      widgetId: l,
      pinned: o
    } = e;
    return (0, i.jsx)("div", {
      className: g.tileContainer,
      children: (0, i.jsx)(h.Z, {
        participant: t,
        width: n,
        locked: r,
        widgetId: l,
        pinned: o
      }, t.user.id)
    })
  },
  b = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  j = r.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      layout: l,
      locked: h,
      activeStreams: j,
      streamParticipants: x,
      participantsVersion: I,
      pinned: S
    } = e, C = 9 / 16 * n, N = x.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      locked: h,
      widgetId: t,
      height: C,
      pinned: S
    })), Z = (0, u.Z)(n), w = l === f.C5.VERTICAL, P = 0, _ = 0, T = (0, s.Yzy)(w ? N.map((e, t) => v(O({}, e), {
      y: (P += e.height + (t > 0 ? y : 0)) - e.height,
      x: 0
    })) : N.map((e, t) => v(O({}, e), {
      x: (_ += e.width + (t > 0 ? y : 0)) - e.width,
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
    }, n !== Z ? "animate-never" : "respect-motion-settings"), D = (0, p.ee)(() => new Set(x.map(e => e.user.id)), [x, I]), k = (0, p.ee)(() => new Set(x.filter(e => j.has((0, c.V9)(e.stream))).map(e => e.user.id)), [x, j, I]);
    return r.useEffect(() => {
      0 !== D.size && (0, p.zi)(m.Odu.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(D),
        liveUserIds: Array.from(k),
        contentInventoryIds: []
      })
    }, [D, k]), (0, i.jsx)("div", {
      className: o()({
        [g.gridContainer]: !0,
        [g.vertical]: w,
        [g.horizontal]: !w
      }),
      style: w ? {
        height: P
      } : {
        width: _
      },
      children: T((e, t, r, l) => (0, i.jsx)(a.animated.div, {
        className: g.gridItem,
        style: Object.assign({}, e, {
          width: n,
          height: C,
          zIndex: N.length - l
        }),
        children: E(t)
      }))
    })
  })