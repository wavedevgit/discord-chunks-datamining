/** Chunk was on 50751 **/
/** chunk id: 350663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk203463 = require("./203463.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk569545 = require("./569545.js"),
  Chunk237997 = require("./237997.js"),
  Chunk444295 = require("./444295.js"),
  Chunk752802 = require("./752802.jsx"),
  Chunk68286 = require("./68286.js"),
  Chunk461393 = require("./461393.js"),
  Chunk340101 = require("./340101.js"),
  Chunk981631 = require("./981631.js"),
  Chunk339882 = require("./339882.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function E(e, t) {
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
let b = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  _ = Chunk647438.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      tileHeight: l,
      layout: _,
      locked: S,
      activeStreams: x,
      streamParticipants: I,
      participantsVersion: C,
      pinned: j,
      padding: N
    } = e, Z = I.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      height: l,
      locked: S,
      widgetId: t,
      pinned: j
    })), w = (0, c.Z)(n), T = (0, c.Z)(S), P = _ === g.C5.VERTICAL, A = S || T !== S || w !== n, D = r.useMemo(() => {
      let e = 0,
        t = 0;
      return P ? Z.map((t, n) => E(v({}, t), {
        y: (e += t.height + (n > 0 ? N : 0)) - t.height,
        x: 0
      })) : Z.map((e, n) => E(v({}, e), {
        x: (t += e.width + (n > 0 ? N : 0)) - e.width,
        y: 0
      }))
    }, [Z, N, P]), k = r.useMemo(() => 0 === D.length ? (0, m.MH)(f.bt) : D.reduce((e, t) => e + t.height, 0) + (P ? N * (D.length - 1) : 0), [D, P, N]), R = r.useMemo(() => 0 === D.length ? f.bt : D.reduce((e, t) => e + t.width, 0) + (P ? 0 : N * (D.length - 1)), [D, P, N]), L = (0, s.Yzy)(D, {
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
      trail: 100 * !A
    }, A ? "animate-never" : "respect-motion-settings"), M = (0, h.ee)(() => new Set(I.map(e => e.user.id)), [I, C]), z = (0, h.ee)(() => new Set(I.filter(e => x.has((0, u.V9)(e.stream))).map(e => e.user.id)), [I, x, C]);
    return r.useEffect(() => {
      0 !== M.size && (0, h.zi)(y.Odu.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(M),
        liveUserIds: Array.from(z),
        contentInventoryIds: []
      })
    }, [M, z]), (0, i.jsx)("div", {
      className: o()({
        [O.gridContainer]: true,
        [O.vertical]: P,
        [O.horizontal]: !P
      }),
      style: P ? {
        height: k
      } : {
        width: R
      },
      children: L((e, t, r, o) => (0, i.jsx)(a.animated.div, {
        className: O.gridItem,
        style: Object.assign({}, e, {
          width: n,
          height: l,
          zIndex: Z.length - o
        }),
        children: (e => {
          let {
            participant: t,
            width: n,
            locked: r,
            widgetId: l,
            pinned: o
          } = e;
          return (0, i.jsx)("div", {
            className: O.tileContainer,
            children: (0, i.jsx)(p.Z, {
              participant: t,
              width: n,
              locked: r,
              widgetId: l,
              pinned: o
            }, t.user.id)
          })
        })(t)
      }))
    })
  })