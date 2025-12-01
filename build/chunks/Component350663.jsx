/** Chunk was on 50751 **/
/** chunk id: 350663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
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

function E(e) {
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
let S = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  b = Chunk473749.memo(function(e) {
    let {
      widgetId: t,
      tileWidth: n,
      tileHeight: l,
      layout: b,
      locked: x,
      activeStreams: j,
      streamParticipants: I,
      participantsVersion: C,
      pinned: Z,
      padding: N
    } = e, w = I.map(e => ({
      participant: e,
      key: e.user.id,
      width: n,
      height: l,
      locked: x,
      widgetId: t,
      pinned: Z
    })), T = (0, u.Z)(n), _ = (0, u.Z)(x), P = b === g.C5.VERTICAL, A = x || _ !== x || T !== n, D = r.useMemo(() => {
      let e = 0,
        t = 0;
      return P ? w.map((t, n) => v(E({}, t), {
        y: (e += t.height + (n > 0 ? N : 0)) - t.height,
        x: 0
      })) : w.map((e, n) => v(E({}, e), {
        x: (t += e.width + (n > 0 ? N : 0)) - e.width,
        y: 0
      }))
    }, [w, N, P]), R = r.useMemo(() => 0 === D.length ? (0, m.MH)(f.bt) : D.reduce((e, t) => e + t.height, 0) + (P ? N * (D.length - 1) : 0), [D, P, N]), k = r.useMemo(() => 0 === D.length ? f.bt : D.reduce((e, t) => e + t.width, 0) + (P ? 0 : N * (D.length - 1)), [D, P, N]), L = (0, s.Yzy)(D, {
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
      config: S,
      trail: 100 * !A
    }, A ? "animate-never" : "respect-motion-settings"), M = (0, h.ee)(() => new Set(I.map(e => e.user.id)), [I, C]), V = (0, h.ee)(() => new Set(I.filter(e => j.has((0, c.V9)(e.stream))).map(e => e.user.id)), [I, j, C]);
    return r.useEffect(() => {
      0 !== M.size && (0, h.zi)(y.Odu.GO_LIVE, {
        locked: d.default.isInstanceLocked(),
        shownUserIds: Array.from(M),
        liveUserIds: Array.from(V),
        contentInventoryIds: []
      })
    }, [M, V]), (0, i.jsx)("div", {
      className: a()({
        [O.gridContainer]: true,
        [O.vertical]: P,
        [O.horizontal]: !P
      }),
      style: P ? {
        height: R
      } : {
        width: k
      },
      children: L((e, t, r, a) => (0, i.jsx)(o.animated.div, {
        className: O.gridItem,
        style: Object.assign({}, e, {
          width: n,
          height: l,
          zIndex: w.length - a
        }),
        children: (e => {
          let {
            participant: t,
            width: n,
            locked: r,
            widgetId: l,
            pinned: a
          } = e;
          return (0, i.jsx)("div", {
            className: O.tileContainer,
            children: (0, i.jsx)(p.Z, {
              participant: t,
              width: n,
              locked: r,
              widgetId: l,
              pinned: a
            }, t.user.id)
          })
        })(t)
      }))
    })
  })